/* tslint:disable */
import { getConnection } from 'typeorm';

const aesjs = require('aes-js');
const key = [20, 34, 54, 98, 13, 45, 47, 65, 15, 53, 87, 74, 46, 63, 29, 38];

export function generateRandomString(length) {
  let result = '';
  let characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_+-!$=()?¿=';
  let charactersLength = characters.length;
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}

export function generateOnlyRandomString(length) {
  let result = '';
  let characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_';
  let charactersLength = characters.length;
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}

export function generateRandomInteger(length) {
  let result = '';
  let characters = '0123456789';
  let charactersLength = characters.length;
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}

export function encrypt(text) {
  return new Promise(resolve => {
    const textBytes = aesjs.utils.utf8.toBytes(text);
    const aesCtr = new aesjs.ModeOfOperation.ctr(key);
    const encryptedBytes = aesCtr.encrypt(textBytes);
    const encryptedHex = aesjs.utils.hex.fromBytes(encryptedBytes);
    resolve(encryptedHex);
  });
}

export function decrypt(text) {
  const encryptedBytes = aesjs.utils.hex.toBytes(text);
  const aesCtr = new aesjs.ModeOfOperation.ctr(key);
  const decryptedBytes = aesCtr.decrypt(encryptedBytes);
  return aesjs.utils.utf8.fromBytes(decryptedBytes);
}

export async function processPricesStages(vehicles) {
  return new Promise(async resolve => {
    for (const item of vehicles) {
      const item1 = await getConnection().query(`select * from general_pricing where description = '${item.stageOnePrice}'`);
      const item2 = await getConnection().query(`select * from general_pricing where description = '${item.stageTwoPrice}'`);
      const item3 = await getConnection().query(`select * from general_pricing where description = '${item.stageTwoPlusPrice}'`);
      const item4 = await getConnection().query(`select * from general_pricing where description = '${item.stageThreePrice}'`);
      const item5 = await getConnection().query(`select * from general_pricing where description = '${item.stageFourPrice}'`);
      if (item1.length > 0) {
        item.stageOnePrice = item1[0].price;
      }
      if (item2.length > 0) {
        item.stageTwoPrice = item2[0].price;
      }
      if (item3.length > 0) {
        item.stageTwoPlusPrice = item3[0].price;
      }
      if (item4.length > 0) {
        item.stageThreePrice = item4[0].price;
      }
      if (item5.length > 0) {
        item.stageFourPrice = item5[0].price;
      }
    }
    resolve(vehicles);
  });
}
