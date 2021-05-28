import {
  customSoftware,
  invoiceOrderCredit,
  Login,
  orderSoftware,
  orderSoftwareToClient,
  paymentInstructions,
  RecoveryPassword,
  sendOffer,
  test,
  VerifyEmail,
  Welcome,
} from './email/templates';

export function findHtml(data): any {
  return new Promise(resolve => {
    if (data.html.toString() === 'welcome') {
      resolve(Welcome(data.data));
    }
    if (data.html.toString() === 'login') {
      resolve(Login(data.data));
    }
    if (data.html.toString() === 'recovery-password') {
      resolve(RecoveryPassword(data.data));
    }
    if (data.html.toString() === 'verify') {
      resolve(VerifyEmail(data.data));
    }
    if (data.html.toString() === 'custom-software') {
      resolve(customSoftware(data.data));
    }
    if (data.html.toString() === 'order-software') {
      resolve(orderSoftware(data.data));
    }
    if (data.html.toString() === 'order-to-client') {
      resolve(orderSoftwareToClient(data.data));
    }
    if (data.html.toString() === 'sendOffer') {
      resolve(sendOffer(data.data));
    }
    if (data.html.toString() === 'paymentInstructions') {
      resolve(paymentInstructions(data.data));
    }
    if (data.html.toString() === 'invoiceOrderCredit') {
      console.log('---------------> ', data.data);
      resolve(invoiceOrderCredit(data.data));
    }

    if (data.html.toString() === 'test') {
      resolve(test(data.data));
    }
  });
}
