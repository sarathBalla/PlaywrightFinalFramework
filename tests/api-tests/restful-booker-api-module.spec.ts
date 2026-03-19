import { expect, test } from '../../fixtures/hooks-fixture'
import apiPathdata from '../../data/api-data/api-path-data.json'
import restfulAPIdata from '../../data/api-data/restful-booker-api-data.json'

test("[Restful-Booker > Booking] verify user able to fetch all the values by using the GET call", {
    tag: ['@API', '@UAT'],
    annotation: {
        type: "Test Case Link",
        description: "Test case link from the Devops"

    }
}, async ({ request }) => {

    const bookingIdsresp = await request.get(apiPathdata.booking_path);
    const bookingIdsrespJson = await bookingIdsresp.json();
    console.log(bookingIdsrespJson);
    expect(bookingIdsresp.status()).toBe(200);
    expect(bookingIdsresp.statusText()).toBe("OK");
    expect(bookingIdsresp.headers()['content-type']).toBe(restfulAPIdata['content-type'])
    expect(bookingIdsrespJson).not.toBeNull();
});

test("ID -9 -[Restful-Booker > Booking] verify user able to fetch all the values by using the GET call", {
    tag: ['@API', '@UAT'],
    annotation: {
        type: "Test Case Link",
        description: "Test case link from the Devops"

    }
}, async ({ request }) => {
    const bookingIdsresp = await request.get(`${apiPathdata.booking_path}/${restfulAPIdata.booking_id}`);
    const bookingIdsrespJson = await bookingIdsresp.json();
    console.log(bookingIdsrespJson);
    expect(bookingIdsresp.status()).toBe(200);
    expect(bookingIdsresp.statusText()).toBe("OK");
    expect(bookingIdsrespJson).not.toBeNull();
    expect(bookingIdsrespJson.firstname).not.toBeNull();
    //expect(bookingIdsrespJson.firstname).toEqual(`${restfulAPIdata.firstname}`);

});

test("[Restful-Booker > Booking] verify user able to create a new booking by using the POST call", {

    tag: ['@API', '@UAT'],
    annotation: {
        type: "Test Case Link",
        description: "Test case link from the Devops"
    }
}, async ({ request }) => {

    const bookingCreatesresp = await request.post(apiPathdata.booking_path, {
        headers: {
            Authorization: "Basic YWRtaW46cGFzc3dvcmQxMjM="
        },

        data: restfulAPIdata.create_booking
    })

    const bookingCreatesrespJson = await bookingCreatesresp.json();
    expect(bookingCreatesresp.status()).toBe(200);
    expect(bookingCreatesresp.statusText()).toBe("OK");
    expect(bookingCreatesrespJson).not.toBeNull()
    expect(bookingCreatesrespJson.booking).toMatchObject(restfulAPIdata.create_booking);

})

test("Id -- 11-[Restful-Booker > Booking] verify user able to Update existed booking by using the PUT call", {
    tag: ['@API', '@UAT'],
    annotation: {
        type: "Test Case Link",
        description: "Test case link from the Devops"
    }
}, async ({ request, commonUtilapi }) => {
    const token = await commonUtilapi.createToken();
    const bookingUpdateresp = await request.put(`${apiPathdata.booking_path}/${restfulAPIdata.booking_id2}`, {
        headers: {
            Cookie: `token=${token}`
        },
        data: restfulAPIdata.update_booking
    });
    const bookingUpdaterespjson = await bookingUpdateresp.json();
    expect(bookingUpdateresp.status()).toBe(200);
    expect(bookingUpdateresp.statusText()).toBe("OK");
    expect(bookingUpdaterespjson).not.toBeNull();
    expect(bookingUpdaterespjson).toMatchObject(restfulAPIdata.update_booking);
});

test("[Restful-Booker > Booking] verify user able to Update existed booking by using the PATCH call", {
    tag: ['@API', '@UAT'],
    annotation: {
        type: "Test Case Link",
        description: "Test case link from the Devops"
    }
}, async ({ request, commonUtilapi }) => {

    const token = await commonUtilapi.createToken();
    const bookingpatch = await request.patch(`${apiPathdata.booking_path}/${restfulAPIdata.booking_id2}`,
        {
            headers:
            {
                Cookie: `token=${token}`
            },
            data: restfulAPIdata.patch_booking
        });
    console.log(bookingpatch);
    const bookingpatchres = await bookingpatch.json();
    expect(bookingpatch.statusText()).toBe("OK");
    expect(bookingpatchres.firstname).toMatch(restfulAPIdata.patch_booking.firstname)
    expect(bookingpatchres.lastname).toMatch(restfulAPIdata.patch_booking.lastname)

})



test("[Restful-Booker > Booking] verify user able to Delete existed booking by using the Delete call", {
    tag: ['@API', '@UAT'],
    annotation: {
        type: "Test Case Link",
        description: "Test case link from the Devops"
    }
}, async ({ request, commonUtilapi }) => {

    const token = await commonUtilapi.createToken();
    const deletebooking = await request.delete(`${apiPathdata.booking_path}/${restfulAPIdata.booking_id3}`,
        {
            headers: {
                Cookie: `token=${token}`
            }
        });

    expect(deletebooking.status()).toBe(201);
    expect(deletebooking.statusText()).toBe("Created");
    const getafterdelete = await request.get(`${apiPathdata.booking_path}/${restfulAPIdata.booking_id3}`)
    expect(getafterdelete.status()).toBe(404);
    expect(getafterdelete.statusText()).toBe("Not Found");
});