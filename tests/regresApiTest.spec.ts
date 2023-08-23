import { test, expect} from '@playwright/test';

test.describe('API testing', () => {

    let response;

    test.afterEach(async ({ request }) => {
        await request.dispose();
    });

    test('Should get users and print users with odd IDs', async ({ request}) => {

        response = await request.get('?per_page=12');

        expect(response.status()).toBe(200);
    
        const users = (await response.json()).data;

        console.log(users.filter(user => user.id % 2 !== 0));
    });

    test('Should create a new user', async ({ request}) => {

        let today = new Date();
        let dayDate = today.toISOString().slice(0,10); 
        
        response = await request.post('', {
            data: {
                "name": "lukk",
                "job": "tester"
            }
        });

        expect(response.status()).toBe(201);
    
        const respBody = (await response.json());

        expect(respBody).toHaveProperty('createdAt');
        expect(respBody.createdAt).toContain(dayDate);
    });

    // bonus
    test('Should not create a new user with invalid body', async ({ request}) => {

        response = await request.post('', {
            data: {
                "something": "invalid",
                "else": 123
            }
        });

        expect(response.status()).toBe(400); // bug cause it returns 201 no matter of req body
    });

    test('Should update user', async ({ request}) => {
            
        let userId = 2;
        let data = {
            "name": "lukk",
            "job": "tester"
        };

        response = await request.put(`${userId}`, {
            data
        });
    
        expect(response.status()).toBe(200);
        
        const respBody = (await response.json());
    
        expect(respBody).toHaveProperty('updatedAt');
        Object.keys(data).forEach(key => {
            expect(respBody).toHaveProperty(key);
            expect(respBody[key]).toEqual(data[key]);
        });
    });

    test('Get users with delay', async ({ request}) => {

        let delay = Array<number>(0, 3);

        for (let i = 0; i < delay.length; i++) {

            const startTime = new Date();

            response = await request.get(`?delay=${delay[i]}`);

            const endTime = new Date();
            const responseTime = endTime.getTime() - startTime.getTime();

            expect(responseTime).toBeLessThan(1000);
        }

    });

    test('Get users asynchronously', async ({ request}) => {
            
        for (let i = 1; i < 11; i++) {
            response = await request.get(`${i}`);
            expect(await response.status()).toBe(200);
        }
    });
});