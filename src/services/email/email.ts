import fetch from 'node-fetch';
import { findHtml } from '../export';

export async function sendEmail(body) {
  try {
    return new Promise(async resolve => {
      const html = await findHtml(body);
      console.log('-------------> body ', body);
      fetch('http://45.9.190.121:3040/api/sengrid/', {
        method: 'post',
        body: JSON.stringify({ to: body.to, subject: body.subject, html }),
        headers: { 'Content-Type': 'application/json' },
      });
      resolve(true);
    });
  } catch (e) {
    console.log(e);
    //throw e;
  }
}
