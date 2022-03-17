const express = require("express");
const app = express();
const {faker} = require("@faker-js/faker");

class User {
    constructor() {
        this.firstName = faker.name.firstName();
        this.lastName = faker.name.lastName();
        this.job = faker.name.jobType();
        this.vehicle = faker.vehicle.vehicle();
    }
}

class Company {
    constructor() {
        this.name = faker.company.companyName();
        this.suffix = faker.company.companySuffix();
        this.bs = faker.company.bs();
        this.product = faker.company.catchPhraseNoun();
    }
}

// req is short for request
// res is short for response
app.get("/api", (req, res) => {
    res.send("Our express api server is now sending this over to the browser");
});

app.get("/api/users/new", (req, res) => {
    res.json(new User());
});

app.get("/api/companies/new", (req, res) => {
    res.json(new Company());
});

app.get("/api/user/company", (req, res) => {
    res.json({
        user: new User(),
        company: new Company(),
        status: 200
    });
});

const server = app.listen(8000, () =>
    console.log(`Server is locked and loaded on port ${server.address().port}!`)
);
