import fetch from 'node-fetch';

const serviceUrl = 'http://localhost:3050';

export async function findByVIN(code) {
  try {
    return new Promise(async resolve => {
      fetch(`${serviceUrl}/search?vin=${code}`, {
        method: 'get',
        headers: { 'Content-Type': 'application/json' },
      }).then(response => response.json())
        .then(data => resolve(data));
    });
  } catch (e) {
    throw e;
  }
}

export async function getVinInfo(vin) {
  return new Promise(async resolve => {
    fetch(`${serviceUrl}/get?vin=${vin}`, {
      method: 'get',
      headers: { 'Content-Type': 'application/json' },
    }).then(response => resolve(response.json()))
      .catch(() => resolve(false));
  });
}