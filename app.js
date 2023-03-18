require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const CryptoJS = require("crypto-js");
const axios = require("axios");
const app = express();
const port = 9000;

const privateKey = process.env.PRIVATE_KEY;
const openaiAPIKEY = process.env.OPENAI_API_KEY;

app.use(bodyParser.json());
app.use(
  "/",
  (req, res, next) => {
    console.log(req.body);
    const { encryptedData } = req.body || {};
    if (!encryptedData || typeof encryptedData !== "string") {
      return res.sendStatus(400);
    }
    const decryptedData = CryptoJS.AES.decrypt(
      encryptedData,
      privateKey
    ).toString(CryptoJS.enc.Utf8);
    try {
      req.body = JSON.parse(decryptedData);
    } catch (err) {
      return res.sendStatus(400);
    }
    next();
  },
  (req, res) => {
    axios({
      method: "post",
      url: req.path,
      baseURL: "https://api.openai.com",
      headers: { authorization: `Bearer ${openaiAPIKEY}` },
      data: req.body,
    })
      .then(function (response) {
        return res.json(response.data);
      })
      .catch(function (error) {
        return res.status(400);
      });
  }
);

app.listen(port, () => {
  console.log(`app listening at http://localhost:${port}`);
});
