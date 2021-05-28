import fetch from 'node-fetch';

export async function sendWhatsappMessage(to, message) {
  try {
    return new Promise(async resolve => {
      fetch('http://45.9.190.121:3000/api/whatsapp/', {
      // fetch('http://localhost:3000/api/whatsapp/', {
        method: 'post',
        body: JSON.stringify({ to, body: message }),
        headers: { 'Content-Type': 'application/json' },
      });
      resolve(true);
    });
  } catch (e) {
    throw e;
  }
}
