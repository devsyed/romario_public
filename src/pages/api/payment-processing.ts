import { NextApiRequest, NextApiResponse } from "next";
import CryptoJS from 'crypto-js';
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if(req.method == 'POST'){
    const secretKey = "romario_devsyed";
  const payload = {
    data: "hello-world",
  };
  const signature = CryptoJS.HmacSHA256(JSON.stringify(payload), secretKey).toString(CryptoJS.enc.Base64);
  const token = `${CryptoJS.enc.Base64.stringify(CryptoJS.enc.Utf8.parse(JSON.stringify(payload)))}.${signature}`;
  res.redirect('/payment-declined?orderToken=' + token);
  }
  res.status(200).json({message:"Method not supported"});
}
