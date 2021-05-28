export function sendOffer(data) {
  return `
   <!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<html data-editor-version='2' class='sg-campaigns' xmlns='http://www.w3.org/1999/xhtml'>
<head>
    <meta http-equiv='Content-Type' content='text/html; charset=utf-8'>
    <meta name='viewport' content='width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1'>
    <meta http-equiv='X-UA-Compatible' content='IE=Edge'>
     <link rel='preconnect' href='https://fonts.gstatic.com'>
  <link href='https://fonts.googleapis.com/css2?family=Roboto:wght@100&display=swap' rel='stylesheet'>
  <link href='https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;1,700&display=swap' rel='stylesheet'>
  <link
    href='https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;1,700&family=Roboto:ital,wght@0,900;1,700&display=swap'
    rel='stylesheet'>
    <style type='text/css'>
        body, p, div {
           font-family: "Roboto", sans-serif !important;
            font-size: 14px;
        }
        table.wrapper {
            width: 100% !important;
            table-layout: fixed;
            -webkit-font-smoothing: antialiased;
            -webkit-text-size-adjust: 100%;
            -moz-text-size-adjust: 100%;
            -ms-text-size-adjust: 100%;
        }
        img.max-width {
            max-width: 100% !important;
        }
    </style>
</head>
<body>
<center class='wrapper' data-link-color='#1188E6'
        data-body-style='font-size:14px; font-family:Roboto,sans-serif; color:#000000; background-color:#FFFFFF;'>
    <div class='webkit' style="height: auto; width: 800px; height: auto; background-size: cover;
    background-image: url('http://cdn.mcauto-images-production.sendgrid.net/948e7434abe3dc4e/2b795108-34d7-4651-909c-ccc6b6cc2386/1920x1080.jpg');">
                    <table style='width: 100%; padding: 1vw'>
                        <tbody>
                            <tr>
                            <td style='width: 50%'>
                                <img style='width: 100%;margin-top: 1vw;'
                                src='http://cdn.mcauto-images-production.sendgrid.net/948e7434abe3dc4e/f0578c64-23d3-4203-b528-114a89653529/857x102.png'>
                                <h3 style='color: white; font-family: Roboto'>TVS GROUP INTERNATIONAL</h6>
                            </td>
                            <td style='display: flex; justify-content: flex-end; color: white; text-align: end'>
                                <ul style='list-style: none; width: 100%; color: #505050;
                                    font-weight: 700;
                                    font-style: italic;
                                    font-family: Roboto, sans-serif;
                                    text-transform: uppercase;
                                    font-variant-ligatures: normal;
                                    font-variant-caps: normal;
                                    letter-spacing: normal;
                                    orphans: 2;
                                    text-align: end;
                                    text-indent: 0px;
                                    white-space: normal;
                                    widows: 2;
                                    word-spacing: 0px;
                                    -webkit-text-stroke-width: 0px;
                                    text-decoration-thickness: initial;
                                    text-decoration-style: initial;
                                    text-decoration-color: initial;'>
                                    <li>Date: ${data.date}</li>
                                    <li>${data.client.name}</li>
                                    <li style='text-decoration: none !important; color: #505050 !important;'>${data.client.email}</li>
                                    <li>${data.client.phone}</li>
                                    <li>${data.client.country}</li>
                                    <li>N° Order: ${data.orderNumber}</li>
                                </ul>
                            </td>
                        </tr>
                        </tbody>
                    </table>
                    <table style='width: 100%;padding: 1vw;display: flex;justify-content: center;'>
                        <tbody style='margin: 0 auto'>
                            <tr>
                                <td style='color: white; text-align: center;'>
                                    <h3 style='font-size: 29px;
    color: #505050;
    font-weight: 700;
    color: #505050;
    font-style: italic;
    font-family: Montserrat, sans-serif;
    text-transform: uppercase;
    font-variant-ligatures: normal;
    font-variant-caps: normal;
    letter-spacing: normal;
    orphans: 2;
    text-align: center;
    text-indent: 0px;
    white-space: normal;
    widows: 2;
    word-spacing: 0px;
    -webkit-text-stroke-width: 0px;
    text-decoration-thickness: initial;
    text-decoration-style: initial;
    text-decoration-color: initial;'>NOTIFICATION MESSAGE</h6>
                                </td>
                           </tr>
                           <tr>
                               <td style='color: white; '>
                                  <h4 style='margin: 0 0; font-size: 15px;
    color: #505050;
    font-weight: 700;
    line-height: 29px;
    font-style: italic;
    font-family: Montserrat, sans-serif;
    text-transform: uppercase;
    font-variant-ligatures: normal;
    font-variant-caps: normal;
    letter-spacing: normal;
    orphans: 2;
    text-align: center;
    text-indent: 0px;
    white-space: normal;
    widows: 2;
    word-spacing: 0px;
    -webkit-text-stroke-width: 0px;
    text-decoration-thickness: initial;
    text-decoration-style: initial;
    text-decoration-color: initial; '>You have new notifications on our platform.</h6>
                               </td>
                           </tr>
                           <tr>
                               <td style='color: white; '>
                                  <h4 style='margin: 0 0; font-size: 15px;
    color: #505050;
    font-weight: 700;
    line-height: 29px;
    font-style: italic;
    font-family: Montserrat, sans-serif;
    text-transform: uppercase;
    font-variant-ligatures: normal;
    font-variant-caps: normal;
    letter-spacing: normal;
    orphans: 2;
    text-align: center;
    text-indent: 0px;
    white-space: normal;
    widows: 2;
    word-spacing: 0px;
    -webkit-text-stroke-width: 0px;
    text-decoration-thickness: initial;
    text-decoration-style: initial;
    text-decoration-color: initial; '>New Credit Offer</h4>
                               </td>
                           </tr>
                        </tbody>
                    </table>
                        <table style="width: 100%; padding-bottom: 2vw;">
                          <tr style=''>
                            <td align='center' bgcolor='#000000' class='inner-td' style='border-radius:6px; font-size:16px; text-align:center; background-color:inherit;'>
                              <a href="${data.url}" style="border: 1px solid white; padding: 1vw; color: white; text-decoration: none; font-family: Roboto;     font-weight: bold;"> VIEW NOTIFICATION</a>
                            </td>
                          </tr>
                    </table>
    </div>
</center>
</body>
</html>
  `;
}
