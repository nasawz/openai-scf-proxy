require("dotenv").config();
const CryptoJS = require("crypto-js");

var data = {
  model: "gpt-3.5-turbo",
  top_p: 0.8,
  temperature: 0.5,
  presence_penalty: 1,
  frequency_penalty: 0,
  max_tokens: 500,
  stream: false,
  messages: [
    {
      role: "system",
      content: "You are ChatGPT, a large language model trained by OpenAI.\n",
    },
    { role: "user", content: "你好" },
    { role: "assistant", content: "你好！有什么我可以帮助你的吗？" },
  ],
};

const privateKey = process.env.PRIVATE_KEY;

var encryptedData = CryptoJS.AES.encrypt(
  JSON.stringify(data),
  privateKey
).toString();

console.log(encryptedData);
