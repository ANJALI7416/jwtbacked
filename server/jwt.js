import jwt from "jsonwebtoken";

const secretKey = "12345"; // ⚠️ In production, store in .env

// Function to encrypt data into JWT
function encryptData() {

  const data = { name: "Suhail",  age: 22 };

  const token = jwt.sign(data, secretKey, { expiresIn: "10m" });

  console.log("Encrypted Token:", token);

}

encryptData() 

// Function to decrypt JWT back to original data
function decryptData()
{
let token = ""
const decoded = jwt.verify(token, secretKey);
  console.log("Decrypted Data:", decoded);

}

decryptData();