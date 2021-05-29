export function orderSoftware(data) {
  return `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
  <head>
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="x-apple-disable-message-reformatting" />
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
    <meta name="color-scheme" content="light dark" />
    <meta name="supported-color-schemes" content="light dark" />
    <title></title>
    <style type="text/css" rel="stylesheet" media="all">
       .invoice-box {
  max-width: 800px;
  margin: auto;
  padding: 30px;
  border: 1px solid #eee;
  box-shadow: 0 0 10px rgba(0, 0, 0, .15);
  font-size: 16px;
  line-height: 24px;
  font-family: 'Helvetica Neue', 'Helvetica', Helvetica, Arial, sans-serif;
  color: #555;
}

.invoice-box table {
  width: 100%;
  line-height: inherit;
  text-align: left;
}

.invoice-box table td {
  padding: 5px;
  vertical-align: top;
}

.invoice-box table tr td:nth-child(2) {
  text-align: right;
}

.invoice-box table tr.top table td {
  padding-bottom: 20px;
}

.invoice-box table tr.top table td.title {
  font-size: 45px;
  line-height: 45px;
  color: #333;
}

.invoice-box table tr.information table td {
  padding-bottom: 40px;
}

.invoice-box table tr.heading td {
  background: #eee;
  border-bottom: 1px solid #ddd;
  font-weight: bold;
}

.invoice-box table tr.details td {
  padding-bottom: 20px;
}

.invoice-box table tr.item td{
  border-bottom: 1px solid #eee;
}

.invoice-box table tr.item.last td {
  border-bottom: none;
}

.invoice-box table tr.total td:nth-child(2) {
  border-top: 2px solid #eee;
  font-weight: bold;
}

@media only screen and (max-width: 600px) {
  .invoice-box table tr.top table td {
    width: 100%;
    display: block;
    text-align: center;
  }

  .invoice-box table tr.information table td {
    width: 100%;
    display: block;
    text-align: center;
  }
}

/** RTL **/
.rtl {
  direction: rtl;
  font-family: Tahoma, 'Helvetica Neue', 'Helvetica', Helvetica, Arial, sans-serif;
}

.rtl table {
  text-align: right;
}

.rtl table tr td:nth-child(2) {
  text-align: left;
}
    </style>

  </head>
  <body>
    <span class="preheader">This is an invoice for your request ${data.numberOrder}</span>

   <div id="invoice" class="invoice-box">
          <table cellpadding="0" cellspacing="0">
            <tr class="top">
              <td colspan="2">
                <table>
                  <tr>
                    <td class="title">
                     <img style="color: #C70909; font-size: 20px; width: 15vw;" src="https://tvs-admin.s3-us-west-2.amazonaws.com/assets/logopng.png" alt="testurl">
                    </td>

                    <td style="width: 50%;">
                      Date: ${data.dateNow}<br>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>

            <tr class="information">
              <td colspan="2">
                <table>
                  <tr>
                    <td>
                     TVS GROUP INTERNATIONAL
                    </td>
                    <td>
                      ${data.name}<br>
                      ${data.email}<br>
                      ${data.phone}<br>
                      ${data.country}
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
            <tr class="heading">
              <td>
                Client information
              </td>
              <td>
              </td>
            </tr>
            <tr class="item">
              <td>
                Name
              </td>
              <td>
               ${data.description.description.client.name}
              </td>
            </tr>
            <tr class="item">
              <td>
                Email
              </td>
              <td>
               ${data.description.description.client.mail}
              </td>
            </tr>
            <tr class="item">
              <td>
                Notes:
              </td>
              <td>
               ${data.description.description.client.extradata}
              </td>
            </tr>
            <tr class="heading">
              <td>
                Vehicle information
              </td>
              <td>
              </td>
            </tr>
            <tr class="item">
              <td>
               ${data.description.description.vehicleId.name} ${data.description.description.vehicleId.model}
               ${data.description.description.vehicleId.generation} ${data.description.description.vehicleId.engine}
              </td>
              <td>
                <strong>VIN:</strong>  ${data.description.description.vin}
              </td>
            </tr>
            <tr class="heading">
              <td>
                Type of tuning
              </td>
              <td>
                Stage
              </td>
            </tr>
            <tr class="item">
              <td>
              ${data.type}
              </td>
              <td>
              ${data.description.description.stage}
              </td>
            </tr>
            <tr class="heading">
              <td>
                Options selected for stage ${data.description.description.stage} ${data.type} tuning
              </td>
              <td>
                Extra options
              </td>
            </tr>
            ${data.items}
            <tr class="total">
              <td></td>
              <td>
                Total: &euro; ${data.description.description.price}
              </td>
            </tr>
          </table>
        </div>

  </body>
</html>
`;
}
