const functions = require("firebase-functions");

const express = require("express");
const cors= require("cors");

const stripe=require("stripe")(
    'sk_test_51InPzjSG9O4j8AJx8aZrJV3dIMHu18abhIbsDc4dtGs58nBpEIQaeeH7YVItgDcdC78k8nxKb73uCG5EfSQNKUTq00voI5puSJ');


//api


//app config
const app= express();

//middleware
app.use(cors({origin:true}));
app.use(express.json());

//api routes
app.get("/", (request,response) => response.status(200).send
('hello world'));

app.post("/payments/create",async (request,response) =>{
    const total = request.query.total;
    console.log("payment request",total);
    const paymentIntent = await stripe.paymentIntents.create({
   amount:total,
   currency:"usd",
    });

response.status(201).send({
    clientSecret: paymentIntent.client_secret,
});
});


//listen command
exports.api=functions.https.onRequest(app);

//http://localhost:5001/shopify-b1b11/us-central1/api