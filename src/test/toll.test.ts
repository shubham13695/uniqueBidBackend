import request from "supertest";
import app from "../app";

describe("Create Ticket", () => {
  it("Create Ticket for one way", async () => {
    let _ = await request(app).post("/api/toll/create")
      .send({ vehicleNo: Math.random().toString(36).slice(2).toUpperCase(), way: 'ONEWAY' })
      .expect(200)
  });
let toll;
  it("Create Ticket for two way", async () => {
    let _ = await request(app).post("/api/toll/create")
      .send({ vehicleNo: Math.random().toString(36).slice(2).toUpperCase(), way: 'TWOWAY' })
      .expect(200);
      toll = _.body.data;
  });

  it(`validating ticket`, async () => {
    await request(app).get(`/api/toll/validate?vehicleNo=${toll.vehicleNo}&ticket=${toll.ticket}`)
    .expect(200)
  });


  it("missing vehicle no in post request", async () => {
     await request(app).post("/api/toll/create")
      .send({ way: 'TWOWAY' })
      .expect(422);
  });

  it("validating older ticket", async () => {
    await request(app).get("/api/toll/validate?vehicleNo=123456&ticket=VYU6GAR5WLQ")
    .expect(422)
  });
});