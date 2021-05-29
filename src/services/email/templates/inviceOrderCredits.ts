export function invoiceOrderCredit(data) {
  return `
  <html xmlns='http://www.w3.org/1999/xhtml' style='padding-left: 15vw; padding-top: 5vw'>
<head>
<!--[if gte mso 9]><xml><o:OfficeDocumentSettings><o:AllowPNG/><o:PixelsPerInch>96</o:PixelsPerInch></o:OfficeDocumentSettings></xml><![endif]-->
<meta content='text/html; charset=utf-8' http-equiv='Content-Type'/>
<meta content='width=device-width' name='viewport'/>
<!--[if !mso]><!-->
<meta content='IE=edge' http-equiv='X-UA-Compatible'/>
<!--<![endif]-->
<title></title>
<!--[if !mso]><!-->
<link href='https://fonts.googleapis.com/css?family=Source+Sans+Pro' rel='stylesheet' type='text/css'/>
<link href='https://fonts.googleapis.com/css?family=Bitter' rel='stylesheet' type='text/css'/>
<link href='https://fonts.googleapis.com/css?family=Droid+Serif' rel='stylesheet' type='text/css'/>
<link href='https://fonts.googleapis.com/css?family=Lato' rel='stylesheet' type='text/css'/>
<link href='https://fonts.googleapis.com/css?family=Merriweather' rel='stylesheet' type='text/css'/>
<link href='https://fonts.googleapis.com/css?family=Oxygen' rel='stylesheet' type='text/css'/>
<link href='https://fonts.googleapis.com/css?family=Permanent+Marker' rel='stylesheet' type='text/css'/>
<link href='https://fonts.googleapis.com/css?family=Nunito' rel='stylesheet' type='text/css'/>
<link href='https://fonts.googleapis.com/css?family=Oswald' rel='stylesheet' type='text/css'/>
<link href='https://fonts.googleapis.com/css?family=Cabin' rel='stylesheet' type='text/css'/>
<link href='https://fonts.googleapis.com/css?family=Open+Sans' rel='stylesheet' type='text/css'/>
<link href='https://fonts.googleapis.com/css?family=Abril+Fatface' rel='stylesheet' type='text/css'/>
<link href='https://fonts.googleapis.com/css?family=Montserrat' rel='stylesheet' type='text/css'/>
<link href='https://fonts.googleapis.com/css?family=Roboto' rel='stylesheet' type='text/css'/>
<!--<![endif]-->
<style type='text/css'>
  body {
    margin: 0;
    padding: 0;
    }

   table,td,
    tr {
    vertical-align: top;
    border-collapse: collapse;
   }

    * {
    line-height: inherit;
    }

   a[x-apple-data-detectors=true] {
    color: inherit !important;
    text-decoration: none !important;
    }
    </style>
    <style id='media-query' type='text/css'>
    @media (max-width: 920px) {

    .block-grid,
    .col {
    min-width: 320px !important;
    max-width: 100% !important;
    display: block !important;
    }

    .block-grid {
    width: 100% !important;
    }

    .col {
    width: 100% !important;
    }

    .col_cont {
    margin: 0 auto;
    }

    img.fullwidth,
    img.fullwidthOnMobile {
    max-width: 100% !important;
    }

    .no-stack .col {
    min-width: 0 !important;
    display: table-cell !important;
    }

    .no-stack.two-up .col {
    width: 50% !important;
    }

    .no-stack .col.num2 {
    width: 16.6% !important;
    }

    .no-stack .col.num3 {
    width: 25% !important;
    }

    .no-stack .col.num4 {
    width: 33% !important;
    }

    .no-stack .col.num5 {
    width: 41.6% !important;
    }

    .no-stack .col.num6 {
    width: 50% !important;
    }

    .no-stack .col.num7 {
    width: 58.3% !important;
    }

    .no-stack .col.num8 {
    width: 66.6% !important;
    }

    .no-stack .col.num9 {
    width: 75% !important;
    }

    .no-stack .col.num10 {
    width: 83.3% !important;
    }

    .video-block {
    max-width: none !important;
    }

    .mobile_hide {
    min-height: 0px;
    max-height: 0px;
    max-width: 0px;
    display: none;
    overflow: hidden;
    font-size: 0px;
    }

    .desktop_hide {
    display: block !important;
    max-height: none !important;
    }
    }
    </style>
    </head>
    <body class='clean-body' style='margin: 0; padding: 0; -webkit-text-size-adjust: 100%; background-color: #ffffff;'>
    <!--[if IE]>
    <div class="ie-browser"><![endif]-->
    <table bgcolor='#ffffff' cellpadding='0' cellspacing='0' class='nl-container' role='presentation'
           style='table-layout: fixed; vertical-align: top; min-width: 320px; border-spacing: 0; border-collapse: collapse; mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #ffffff; width: 100%;'
           valign='top' width='100%'>
      <tbody>
      <tr style='vertical-align: top;' valign='top'>
        <td style='word-break: break-word; vertical-align: top;' valign='top'>
          <!--[if (mso)|(IE)]>
          <table width="100%" cellpadding="0" cellspacing="0" border="0">
          <tr>
            <td align="center" style="background-color:#ffffff"><![endif]-->
          <div style='background-color:transparent;'>
            <div class='block-grid two-up no-stack'
                 style='min-width: 320px; max-width: 900px; overflow-wrap: break-word; word-wrap: break-word; word-break: break-word; Margin: 0 auto; background-color: #ffffff;'>
              <div style='border-collapse: collapse;display: table;width: 100%;background-color:#ffffff;'>
                <!--[if (mso)|(IE)]>
                <table width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color:transparent;">
                <tr>
                  <td align="center">
                    <table cellpadding="0" cellspacing="0" border="0" style="width:900px">
                      <tr class="layout-full-width" style="background-color:#ffffff"><![endif]-->
                <!--[if (mso)|(IE)]>
                <td align="center" width="450"
                    style="background-color:#ffffff;width:450px; border-top: 0px solid transparent; border-left: 0px solid transparent; border-bottom: 0px solid transparent; border-right: 0px solid transparent;"
                    valign="top">
                <table width="100%" cellpadding="0" cellspacing="0" border="0">
                  <tr>
                    <td
                      style="padding-right: 0px; padding-left: 0px; padding-top:0px; padding-bottom:0px;background-color:#1a1a1a;">
                <![endif]-->
                <div class='col num6'
                     style='display: table-cell; vertical-align: top; max-width: 320px; min-width: 450px; background-color: #1a1a1a; width: 450px;'>
                  <div class='col_cont' style='width:100% !important;'>
                    <!--[if (!mso)&(!IE)]><!-->
                    <div
                      style='border-top:0px solid transparent; border-left:0px solid transparent; border-bottom:0px solid transparent; border-right:0px solid transparent; padding-top:0px; padding-bottom:0px; padding-right: 0px; padding-left: 0px;'>
                      <!--<![endif]-->
                      <table border='0' cellpadding='0' cellspacing='0' class='divider' role='presentation'
                             style='table-layout: fixed; vertical-align: top; border-spacing: 0; border-collapse: collapse; mso-table-lspace: 0pt; mso-table-rspace: 0pt; min-width: 100%; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%;'
                             valign='top' width='100%'>
                        <tbody>
                        <tr style='vertical-align: top;' valign='top'>
                          <td class='divider_inner'
                              style='word-break: break-word; vertical-align: top; min-width: 100%; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; padding-top: 10px; padding-right: 10px; padding-bottom: 10px; padding-left: 10px;'
                              valign='top'>
                            <table align='center' border='0' cellpadding='0' cellspacing='0' class='divider_content'
                                   role='presentation'
                                   style='table-layout: fixed; vertical-align: top; border-spacing: 0; border-collapse: collapse; mso-table-lspace: 0pt; mso-table-rspace: 0pt; border-top: 1px solid transparent; width: 100%;'
                                   valign='top' width='100%'>
                              <tbody>
                              <tr style='vertical-align: top;' valign='top'>
                                <td
                                  style='word-break: break-word; vertical-align: top; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%;'
                                  valign='top'><span></span></td>
                              </tr>
                              </tbody>
                            </table>
                          </td>
                        </tr>
                        </tbody>
                      </table>
                      <!--[if (!mso)&(!IE)]><!-->
                    </div>
                    <!--<![endif]-->
                  </div>
                </div>
                <!--[if (mso)|(IE)]></td></tr></table><![endif]-->
                <!--[if (mso)|(IE)]></td>
              <td align="center" width="450"
                  style="background-color:#ffffff;width:450px; border-top: 0px solid transparent; border-left: 0px solid transparent; border-bottom: 0px solid transparent; border-right: 0px solid transparent;"
                  valign="top">
              <table width="100%" cellpadding="0" cellspacing="0" border="0">
                <tr>
                  <td
                    style="padding-right: 10px; padding-left: 10px; padding-top:0px; padding-bottom:0px;background-color:#ffffff;">
                <![endif]-->
                <div class='col num6'
                     style='display: table-cell; vertical-align: top; max-width: 320px; min-width: 450px; background-color: #ffffff; width: 450px;'>
                  <div class='col_cont' style='width:100% !important;'>
                    <!--[if (!mso)&(!IE)]><!-->
                    <div
                      style='border-top:0px solid transparent; border-left:0px solid transparent; border-bottom:0px solid transparent; border-right:0px solid transparent; padding-top:0px; padding-bottom:0px; padding-right: 10px; padding-left: 10px;'>
                      <!--<![endif]-->
                      <!--[if mso]>
                      <table width="100%" cellpadding="0" cellspacing="0" border="0">
                      <tr>
                        <td
                          style="padding-right: 10px; padding-left: 10px; padding-top: 10px; padding-bottom: 10px; font-family: 'Trebuchet MS', Tahoma, sans-serif">
                      <![endif]-->
                      <div
                        style="color:#000000;font-family:'Montserrat', 'Trebuchet MS', 'Lucida Grande', 'Lucida Sans Unicode', 'Lucida Sans', Tahoma, sans-serif;line-height:1.5;padding-top:10px;padding-right:10px;padding-bottom:10px;padding-left:10px;">
                        <div class='txtTinyMce-wrapper'
                             style="line-height: 1.5; font-family: 'Montserrat', 'Trebuchet MS', 'Lucida Grande', 'Lucida Sans Unicode', 'Lucida Sans', Tahoma, sans-serif; font-size: 12px; color: #000000; mso-line-height-alt: 18px;">
                          <p
                            style="font-size: 14px; line-height: 1.5; word-break: break-word; font-family: Montserrat, 'Trebuchet MS', 'Lucida Grande', 'Lucida Sans Unicode', 'Lucida Sans', Tahoma, sans-serif; mso-line-height-alt: 21px; margin: 0;">
                            <strong>TVS LATAM S.A.S</strong></p>
                        </div>
                      </div>
                      <!--[if mso]></td></tr></table><![endif]-->
                      <!--[if (!mso)&(!IE)]><!-->
                    </div>
                    <!--<![endif]-->
                  </div>
                </div>
                <!--[if (mso)|(IE)]></td></tr></table><![endif]-->
                <!--[if (mso)|(IE)]></td></tr></table></td></tr></table><![endif]-->
              </div>
            </div>
          </div>
          <div style='background-color:transparent;'>
            <div class='block-grid three-up no-stack'
                 style='min-width: 320px; max-width: 900px; overflow-wrap: break-word; word-wrap: break-word; word-break: break-word; Margin: 0 auto; background-color: #ffffff;'>
              <div style='border-collapse: collapse;display: table;width: 100%;background-color:#ffffff;'>
                <!--[if (mso)|(IE)]>
                <table width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color:transparent;">
                <tr>
                  <td align="center">
                    <table cellpadding="0" cellspacing="0" border="0" style="width:900px">
                      <tr class="layout-full-width" style="background-color:#ffffff"><![endif]-->
                <!--[if (mso)|(IE)]>
                <td align="center" width="450"
                    style="background-color:#ffffff;width:450px; border-top: 0px solid transparent; border-left: 0px solid transparent; border-bottom: 0px solid transparent; border-right: 0px solid transparent;"
                    valign="top">
                <table width="100%" cellpadding="0" cellspacing="0" border="0">
                  <tr>
                    <td
                      style="padding-right: 0px; padding-left: 0px; padding-top:0px; padding-bottom:0px;background-color:#1a1a1a;">
                <![endif]-->
                <div class='col num6'
                     style='display: table-cell; vertical-align: top; max-width: 320px; min-width: 450px; background-color: #1a1a1a; width: 450px;'>
                  <div class='col_cont' style='width:100% !important;'>
                    <!--[if (!mso)&(!IE)]><!-->
                    <div
                      style='border-top:0px solid transparent; border-left:0px solid transparent; border-bottom:0px solid transparent; border-right:0px solid transparent; padding-top:0px; padding-bottom:0px; padding-right: 0px; padding-left: 0px;'>
                      <!--<![endif]-->
                      <div align='center' class='img-container center fixedwidth'
                           style='padding-right: 0px;padding-left: 0px;'>
                        <!--[if mso]>
                        <table width="100%" cellpadding="0" cellspacing="0" border="0">
                        <tr style="line-height:0px">
                          <td style="padding-right: 0px;padding-left: 0px;" align="center"><![endif]--><img
                        align='center' alt='Veteran Photo Placeholder' border='0' class='center fixedwidth'
                        src='https://tvs-admin.s3-us-west-2.amazonaws.com/assets/565953f1-8de2-4195-82b3-c8cf203e76c9.png'
                        style='text-decoration: none; -ms-interpolation-mode: bicubic; height: auto; border: 0; width: 100%; max-width: 337px; display: block;'
                        title='Veteran Photo Placeholder' width='337'/>
                        <!--[if mso]></td></tr></table><![endif]-->
                      </div>
                      <!--[if mso]>
                      <table width="100%" cellpadding="0" cellspacing="0" border="0">
                      <tr>
                        <td
                          style="padding-right: 15px; padding-left: 15px; padding-top: 15px; padding-bottom: 15px; font-family: 'Trebuchet MS', Tahoma, sans-serif">
                      <![endif]-->
                      <div
                        style="color:#ffffff;font-family:'Montserrat', 'Trebuchet MS', 'Lucida Grande', 'Lucida Sans Unicode', 'Lucida Sans', Tahoma, sans-serif;letter-spacing:5px;line-height:1.2;padding-top:15px;padding-right:15px;padding-bottom:15px;padding-left:15px;">
                        <div class='txtTinyMce-wrapper'
                             style="line-height: 1.2; font-size: 12px; font-family: 'Montserrat', 'Trebuchet MS', 'Lucida Grande', 'Lucida Sans Unicode', 'Lucida Sans', Tahoma, sans-serif; color: #ffffff; letter-spacing: 5px; mso-line-height-alt: 14px;">
                          <p
                            style="font-size: 14px; line-height: 1.2; text-align: center; word-break: break-word; font-family: Montserrat, 'Trebuchet MS', 'Lucida Grande', 'Lucida Sans Unicode', 'Lucida Sans', Tahoma, sans-serif; mso-line-height-alt: 17px; letter-spacing: 5px; margin: 0;">
                            <strong>GROUP INTERNATIONAL</strong></p>
                        </div>
                      </div>
                      <!--[if mso]></td></tr></table><![endif]-->
                      <!--[if (!mso)&(!IE)]><!-->
                    </div>
                    <!--<![endif]-->
                  </div>
                </div>
                <!--[if (mso)|(IE)]></td></tr></table><![endif]-->
                <!--[if (mso)|(IE)]></td>
              <td align="center" width="225"
                  style="background-color:#ffffff;width:225px; border-top: 0px solid transparent; border-left: 0px solid transparent; border-bottom: none; border-right: 0px solid transparent;"
                  valign="top">
              <table width="100%" cellpadding="0" cellspacing="0" border="0">
                <tr>
                  <td
                    style="padding-right: 0px; padding-left: 20px; padding-top:15px; padding-bottom:0px;background-color:#ffffff;">
                <![endif]-->
                <div class='col num3'
                     style='display: table-cell; vertical-align: top; max-width: 320px; min-width: 225px; background-color: #ffffff; width: 225px;'>
                  <div class='col_cont' style='width:100% !important;'>
                    <!--[if (!mso)&(!IE)]><!-->
                    <div
                      style='border-top:0px solid transparent; border-left:0px solid transparent; border-bottom:13px solid transparent; border-right:0px solid transparent; padding-top:15px; padding-bottom:0px; padding-right: 0px; padding-left: 20px;'>
                      <!--<![endif]-->
                      <!--[if mso]>
                      <table width="100%" cellpadding="0" cellspacing="0" border="0">
                      <tr>
                        <td
                          style="padding-right: 0px; padding-left: 0px; padding-top: 0px; padding-bottom: 0px; font-family: 'Trebuchet MS', Tahoma, sans-serif">
                      <![endif]-->
                      <div
                        style="color:#000000;font-family:'Montserrat', 'Trebuchet MS', 'Lucida Grande', 'Lucida Sans Unicode', 'Lucida Sans', Tahoma, sans-serif;letter-spacing:0px;line-height:1.5;padding-top:0px;padding-right:0px;padding-bottom:0px;padding-left:0px;">
                        <div class='txtTinyMce-wrapper'
                             style="font-size: 12px; line-height: 1.5; font-family: 'Montserrat', 'Trebuchet MS', 'Lucida Grande', 'Lucida Sans Unicode', 'Lucida Sans', Tahoma, sans-serif; color: #000000; letter-spacing: 0px; mso-line-height-alt: 18px;">
                          <p
                            style="font-size: 12px; line-height: 1.5; word-break: break-word; text-align: left; font-family: Montserrat, 'Trebuchet MS', 'Lucida Grande', 'Lucida Sans Unicode', 'Lucida Sans', Tahoma, sans-serif; mso-line-height-alt: 18px; letter-spacing: normal; margin: 0;">
                            <strong>Address</strong></p>
                        </div>
                      </div>
                      <!--[if mso]></td></tr></table><![endif]-->
                      <!--[if mso]>
                      <table width="100%" cellpadding="0" cellspacing="0" border="0">
                      <tr>
                        <td
                          style="padding-right: 0px; padding-left: 0px; padding-top: 0px; padding-bottom: 0px; font-family: 'Trebuchet MS', Tahoma, sans-serif">
                      <![endif]-->
                      <div
                        style="color:#000000;font-family:'Montserrat', 'Trebuchet MS', 'Lucida Grande', 'Lucida Sans Unicode', 'Lucida Sans', Tahoma, sans-serif;letter-spacing:0px;line-height:1.5;padding-top:0px;padding-right:0px;padding-bottom:0px;padding-left:0px;">
                        <div class='txtTinyMce-wrapper'
                             style="font-size: 12px; line-height: 1.5; font-family: 'Montserrat', 'Trebuchet MS', 'Lucida Grande', 'Lucida Sans Unicode', 'Lucida Sans', Tahoma, sans-serif; color: #000000; letter-spacing: 0px; mso-line-height-alt: 18px;">
                          <p
                            style="font-size: 12px; line-height: 1.5; word-break: break-word; text-align: left; font-family: Montserrat, 'Trebuchet MS', 'Lucida Grande', 'Lucida Sans Unicode', 'Lucida Sans', Tahoma, sans-serif; mso-line-height-alt: 18px; letter-spacing: normal; margin: 0;">
                            Street:</p>
                        </div>
                      </div>
                      <!--[if mso]></td></tr></table><![endif]-->
                      <!--[if mso]>
                      <table width="100%" cellpadding="0" cellspacing="0" border="0">
                      <tr>
                        <td
                          style="padding-right: 0px; padding-left: 0px; padding-top: 0px; padding-bottom: 0px; font-family: 'Trebuchet MS', Tahoma, sans-serif">
                      <![endif]-->
                      <div
                        style="color:#000000;font-family:'Montserrat', 'Trebuchet MS', 'Lucida Grande', 'Lucida Sans Unicode', 'Lucida Sans', Tahoma, sans-serif;letter-spacing:0px;line-height:1.5;padding-top:0px;padding-right:0px;padding-bottom:0px;padding-left:0px;">
                        <div class='txtTinyMce-wrapper'
                             style="font-size: 12px; line-height: 1.5; font-family: 'Montserrat', 'Trebuchet MS', 'Lucida Grande', 'Lucida Sans Unicode', 'Lucida Sans', Tahoma, sans-serif; color: #000000; letter-spacing: 0px; mso-line-height-alt: 18px;">
                          <p
                            style="font-size: 12px; line-height: 1.5; word-break: break-word; font-family: Montserrat, 'Trebuchet MS', 'Lucida Grande', 'Lucida Sans Unicode', 'Lucida Sans', Tahoma, sans-serif; mso-line-height-alt: 18px; letter-spacing: normal; margin: 0;">
                            Zipcode:</p>
                        </div>
                      </div>
                      <!--[if mso]></td></tr></table><![endif]-->
                      <!--[if mso]>
                      <table width="100%" cellpadding="0" cellspacing="0" border="0">
                      <tr>
                        <td
                          style="padding-right: 0px; padding-left: 0px; padding-top: 0px; padding-bottom: 0px; font-family: 'Trebuchet MS', Tahoma, sans-serif">
                      <![endif]-->
                      <div
                        style="color:#000000;font-family:'Montserrat', 'Trebuchet MS', 'Lucida Grande', 'Lucida Sans Unicode', 'Lucida Sans', Tahoma, sans-serif;letter-spacing:0px;line-height:1.5;padding-top:0px;padding-right:0px;padding-bottom:0px;padding-left:0px;">
                        <div class='txtTinyMce-wrapper'
                             style="font-size: 12px; line-height: 1.5; font-family: 'Montserrat', 'Trebuchet MS', 'Lucida Grande', 'Lucida Sans Unicode', 'Lucida Sans', Tahoma, sans-serif; color: #000000; letter-spacing: 0px; mso-line-height-alt: 18px;">
                          <p
                            style="font-size: 12px; line-height: 1.5; word-break: break-word; font-family: Montserrat, 'Trebuchet MS', 'Lucida Grande', 'Lucida Sans Unicode', 'Lucida Sans', Tahoma, sans-serif; mso-line-height-alt: 18px; letter-spacing: normal; margin: 0;">
                            City:</p>
                        </div>
                      </div>
                      <!--[if mso]></td></tr></table><![endif]-->
                      <!--[if mso]>
                      <table width="100%" cellpadding="0" cellspacing="0" border="0">
                      <tr>
                        <td
                          style="padding-right: 0px; padding-left: 0px; padding-top: 0px; padding-bottom: 0px; font-family: 'Trebuchet MS', Tahoma, sans-serif">
                      <![endif]-->
                      <div
                        style="color:#000000;font-family:'Montserrat', 'Trebuchet MS', 'Lucida Grande', 'Lucida Sans Unicode', 'Lucida Sans', Tahoma, sans-serif;letter-spacing:0px;line-height:1.5;padding-top:0px;padding-right:0px;padding-bottom:0px;padding-left:0px;">
                        <div class='txtTinyMce-wrapper'
                             style="font-size: 12px; line-height: 1.5; font-family: 'Montserrat', 'Trebuchet MS', 'Lucida Grande', 'Lucida Sans Unicode', 'Lucida Sans', Tahoma, sans-serif; color: #000000; letter-spacing: 0px; mso-line-height-alt: 18px;">
                          <p
                            style="font-size: 12px; line-height: 1.5; word-break: break-word; font-family: Montserrat, 'Trebuchet MS', 'Lucida Grande', 'Lucida Sans Unicode', 'Lucida Sans', Tahoma, sans-serif; mso-line-height-alt: 18px; letter-spacing: normal; margin: 0;">
                            Tax nr:</p>
                        </div>
                      </div>
                      <!--[if mso]></td></tr></table><![endif]-->
                      <!--[if mso]>
                      <table width="100%" cellpadding="0" cellspacing="0" border="0">
                      <tr>
                        <td
                          style="padding-right: 0px; padding-left: 0px; padding-top: 0px; padding-bottom: 0px; font-family: 'Trebuchet MS', Tahoma, sans-serif">
                      <![endif]-->
                      <div
                        style="color:#000000;font-family:'Montserrat', 'Trebuchet MS', 'Lucida Grande', 'Lucida Sans Unicode', 'Lucida Sans', Tahoma, sans-serif;letter-spacing:0px;line-height:1.5;padding-top:0px;padding-right:0px;padding-bottom:0px;padding-left:0px;">
                        <div class='txtTinyMce-wrapper'
                             style="font-size: 12px; line-height: 1.5; color: #000000; font-family: 'Montserrat', 'Trebuchet MS', 'Lucida Grande', 'Lucida Sans Unicode', 'Lucida Sans', Tahoma, sans-serif; letter-spacing: 0px; mso-line-height-alt: 18px;">
                          <p
                            style='font-size: 12px; line-height: 1.5; word-break: break-word; mso-line-height-alt: 18px; letter-spacing: normal; margin: 0;'>
                            <strong>Resolution nr:</strong></p>
                        </div>
                      </div>
                      <!--[if mso]></td></tr></table><![endif]-->
                      <!--[if mso]>
                      <table width="100%" cellpadding="0" cellspacing="0" border="0">
                      <tr>
                        <td
                          style="padding-right: 0px; padding-left: 0px; padding-top: 0px; padding-bottom: 0px; font-family: 'Trebuchet MS', Tahoma, sans-serif">
                      <![endif]-->
                      <div
                        style="color:#000000;font-family:'Montserrat', 'Trebuchet MS', 'Lucida Grande', 'Lucida Sans Unicode', 'Lucida Sans', Tahoma, sans-serif;letter-spacing:0px;line-height:1.5;padding-top:0px;padding-right:0px;padding-bottom:0px;padding-left:0px;">
                        <div class='txtTinyMce-wrapper'
                             style="font-size: 12px; line-height: 1.5; font-family: 'Montserrat', 'Trebuchet MS', 'Lucida Grande', 'Lucida Sans Unicode', 'Lucida Sans', Tahoma, sans-serif; color: #000000; letter-spacing: 0px; mso-line-height-alt: 18px;">
                          <p
                            style="font-size: 12px; line-height: 1.5; word-break: break-word; font-family: Montserrat, 'Trebuchet MS', 'Lucida Grande', 'Lucida Sans Unicode', 'Lucida Sans', Tahoma, sans-serif; mso-line-height-alt: 18px; letter-spacing: normal; margin: 0;">
                            Email:</p>
                        </div>
                      </div>
                      <!--[if mso]></td></tr></table><![endif]-->
                      <!--[if mso]>
                      <table width="100%" cellpadding="0" cellspacing="0" border="0">
                      <tr>
                        <td
                          style="padding-right: 0px; padding-left: 0px; padding-top: 0px; padding-bottom: 0px; font-family: 'Trebuchet MS', Tahoma, sans-serif">
                      <![endif]-->
                      <div
                        style="color:#000000;font-family:'Montserrat', 'Trebuchet MS', 'Lucida Grande', 'Lucida Sans Unicode', 'Lucida Sans', Tahoma, sans-serif;letter-spacing:0px;line-height:1.5;padding-top:0px;padding-right:0px;padding-bottom:0px;padding-left:0px;">
                        <div class='txtTinyMce-wrapper'
                             style="font-size: 12px; line-height: 1.5; color: #000000; font-family: 'Montserrat', 'Trebuchet MS', 'Lucida Grande', 'Lucida Sans Unicode', 'Lucida Sans', Tahoma, sans-serif; letter-spacing: 0px; mso-line-height-alt: 18px;">
                          <p
                            style='font-size: 12px; line-height: 1.5; word-break: break-word; text-align: left; mso-line-height-alt: 18px; letter-spacing: normal; margin: 0;'>
                            <strong>Quotation nr:</strong></p>
                        </div>
                      </div>
                      <!--[if mso]></td></tr></table><![endif]-->
                      <!--[if (!mso)&(!IE)]><!-->
                    </div>
                    <!--<![endif]-->
                  </div>
                </div>
                <!--[if (mso)|(IE)]></td></tr><tr bgcolor='transparent'><td colspan='1' style='font-size:7px;line-height:13px'>&nbsp;</td></tr></table><![endif]-->
                <!--[if (mso)|(IE)]></td>
              <td align="center" width="225"
                  style="background-color:#ffffff;width:225px; border-top: 0px solid transparent; border-left: 0px solid transparent; border-bottom: none; border-right: 0px solid transparent;"
                  valign="top">
              <table width="100%" cellpadding="0" cellspacing="0" border="0">
                <tr>
                  <td
                    style="padding-right: 0px; padding-left: 20px; padding-top:15px; padding-bottom:0px;background-color:#ffffff;">
                <![endif]-->
                <div class='col num3'
                     style='display: table-cell; vertical-align: top; max-width: 320px; min-width: 225px; background-color: #ffffff; width: 225px;'>
                  <div class='col_cont' style='width:100% !important;'>
                    <!--[if (!mso)&(!IE)]><!-->
                    <div
                      style='border-top:0px solid transparent; border-left:0px solid transparent; border-bottom:13px solid transparent; border-right:0px solid transparent; padding-top:15px; padding-bottom:0px; padding-right: 0px; padding-left: 20px;'>
                      <!--<![endif]-->
                      <!--[if mso]>
                      <table width="100%" cellpadding="0" cellspacing="0" border="0">
                      <tr>
                        <td
                          style="padding-right: 0px; padding-left: 0px; padding-top: 0px; padding-bottom: 0px; font-family: Tahoma, Verdana, sans-serif">
                      <![endif]-->
                      <div
                        style='color:#000000;font-family:Roboto, Tahoma, Verdana, Segoe, sans-serif;letter-spacing:0px;line-height:1.5;padding-top:0px;padding-right:0px;padding-bottom:0px;padding-left:0px;'>
                        <div class='txtTinyMce-wrapper'
                             style='font-size: 12px; line-height: 1.5; color: #000000; font-family: Roboto, Tahoma, Verdana, Segoe, sans-serif; letter-spacing: 0px; mso-line-height-alt: 18px;'>
                          <p
                            style='font-size: 12px; line-height: 1.5; word-break: break-word; mso-line-height-alt: 18px; letter-spacing: normal; margin: 0;'>
                             </p>
                        </div>
                      </div>
                      <!--[if mso]></td></tr></table><![endif]-->
                      <!--[if mso]>
                      <table width="100%" cellpadding="0" cellspacing="0" border="0">
                      <tr>
                        <td
                          style="padding-right: 0px; padding-left: 0px; padding-top: 0px; padding-bottom: 0px; font-family: Tahoma, Verdana, sans-serif">
                      <![endif]-->
                      <div
                        style='color:#000000;font-family:Roboto, Tahoma, Verdana, Segoe, sans-serif;letter-spacing:0px;line-height:1.5;padding-top:0px;padding-right:0px;padding-bottom:0px;padding-left:0px;'>
                        <div class='txtTinyMce-wrapper'
                             style='font-size: 12px; line-height: 1.5; color: #000000; font-family: Roboto, Tahoma, Verdana, Segoe, sans-serif; letter-spacing: 0px; mso-line-height-alt: 18px;'>
                          <p
                            style='font-size: 12px; line-height: 1.5; word-break: break-word; mso-line-height-alt: 18px; letter-spacing: normal; margin: 0;'>
                            Carrera 20 # 22 sur 30</p>
                        </div>
                      </div>
                      <!--[if mso]></td></tr></table><![endif]-->
                      <!--[if mso]>
                      <table width="100%" cellpadding="0" cellspacing="0" border="0">
                      <tr>
                        <td
                          style="padding-right: 0px; padding-left: 0px; padding-top: 0px; padding-bottom: 0px; font-family: Tahoma, Verdana, sans-serif">
                      <![endif]-->
                      <div
                        style='color:#000000;font-family:Roboto, Tahoma, Verdana, Segoe, sans-serif;letter-spacing:0px;line-height:1.5;padding-top:0px;padding-right:0px;padding-bottom:0px;padding-left:0px;'>
                        <div class='txtTinyMce-wrapper'
                             style='font-size: 12px; line-height: 1.5; color: #000000; font-family: Roboto, Tahoma, Verdana, Segoe, sans-serif; letter-spacing: 0px; mso-line-height-alt: 18px;'>
                          <p
                            style='font-size: 12px; line-height: 1.5; word-break: break-word; mso-line-height-alt: 18px; letter-spacing: normal; margin: 0;'>
                            050022</p>
                        </div>
                      </div>
                      <!--[if mso]></td></tr></table><![endif]-->
                      <!--[if mso]>
                      <table width="100%" cellpadding="0" cellspacing="0" border="0">
                      <tr>
                        <td
                          style="padding-right: 0px; padding-left: 0px; padding-top: 0px; padding-bottom: 0px; font-family: Tahoma, Verdana, sans-serif">
                      <![endif]-->
                      <div
                        style='color:#000000;font-family:Roboto, Tahoma, Verdana, Segoe, sans-serif;letter-spacing:0px;line-height:1.5;padding-top:0px;padding-right:0px;padding-bottom:0px;padding-left:0px;'>
                        <div class='txtTinyMce-wrapper'
                             style='font-size: 12px; line-height: 1.5; color: #000000; font-family: Roboto, Tahoma, Verdana, Segoe, sans-serif; letter-spacing: 0px; mso-line-height-alt: 18px;'>
                          <p
                            style='font-size: 12px; line-height: 1.5; word-break: break-word; mso-line-height-alt: 18px; letter-spacing: normal; margin: 0;'>
                            Envigado</p>
                        </div>
                      </div>
                      <!--[if mso]></td></tr></table><![endif]-->
                      <!--[if mso]>
                      <table width="100%" cellpadding="0" cellspacing="0" border="0">
                      <tr>
                        <td
                          style="padding-right: 0px; padding-left: 0px; padding-top: 0px; padding-bottom: 0px; font-family: Tahoma, Verdana, sans-serif">
                      <![endif]-->
                      <div
                        style='color:#000000;font-family:Roboto, Tahoma, Verdana, Segoe, sans-serif;letter-spacing:0px;line-height:1.5;padding-top:0px;padding-right:0px;padding-bottom:0px;padding-left:0px;'>
                        <div class='txtTinyMce-wrapper'
                             style='font-size: 12px; line-height: 1.5; color: #000000; font-family: Roboto, Tahoma, Verdana, Segoe, sans-serif; letter-spacing: 0px; mso-line-height-alt: 18px;'>
                          <p
                            style='font-size: 12px; line-height: 1.5; word-break: break-word; text-align: left; mso-line-height-alt: 18px; letter-spacing: normal; margin: 0;'>
                            901.415.030</p>
                        </div>
                      </div>
                      <!--[if mso]></td></tr></table><![endif]-->
                      <!--[if mso]>
                      <table width="100%" cellpadding="0" cellspacing="0" border="0">
                      <tr>
                        <td
                          style="padding-right: 0px; padding-left: 0px; padding-top: 0px; padding-bottom: 0px; font-family: Tahoma, Verdana, sans-serif">
                      <![endif]-->
                      <div
                        style='color:#000000;font-family:Roboto, Tahoma, Verdana, Segoe, sans-serif;letter-spacing:0px;line-height:1.5;padding-top:0px;padding-right:0px;padding-bottom:0px;padding-left:0px;'>
                        <div class='txtTinyMce-wrapper'
                             style='font-size: 12px; line-height: 1.5; color: #000000; font-family: Roboto, Tahoma, Verdana, Segoe, sans-serif; letter-spacing: 0px; mso-line-height-alt: 18px;'>
                          <p
                            style='font-size: 12px; line-height: 1.5; word-break: break-word; text-align: left; mso-line-height-alt: 18px; letter-spacing: normal; margin: 0;'>
                            <strong>18760412178801</strong></p>
                        </div>
                      </div>
                      <!--[if mso]></td></tr></table><![endif]-->
                      <!--[if mso]>
                      <table width="100%" cellpadding="0" cellspacing="0" border="0">
                      <tr>
                        <td
                          style="padding-right: 0px; padding-left: 0px; padding-top: 0px; padding-bottom: 0px; font-family: Tahoma, Verdana, sans-serif">
                      <![endif]-->
                      <div
                        style='color:#000000;font-family:Roboto, Tahoma, Verdana, Segoe, sans-serif;letter-spacing:0px;line-height:1.5;padding-top:0px;padding-right:0px;padding-bottom:0px;padding-left:0px;'>
                        <div class='txtTinyMce-wrapper'
                             style='font-size: 12px; line-height: 1.5; color: #000000; font-family: Roboto, Tahoma, Verdana, Segoe, sans-serif; letter-spacing: 0px; mso-line-height-alt: 18px;'>
                          <p
                            style='font-size: 12px; line-height: 1.5; word-break: break-word; text-align: left; mso-line-height-alt: 18px; letter-spacing: normal; margin: 0;'>
                            support@testurl.com</p>
                        </div>
                      </div>
                      <!--[if mso]></td></tr></table><![endif]-->
                      <!--[if mso]>
                      <table width="100%" cellpadding="0" cellspacing="0" border="0">
                      <tr>
                        <td
                          style="padding-right: 0px; padding-left: 0px; padding-top: 0px; padding-bottom: 0px; font-family: Tahoma, Verdana, sans-serif">
                      <![endif]-->
                      <div
                        style='color:#000000;font-family:Roboto, Tahoma, Verdana, Segoe, sans-serif;letter-spacing:0px;line-height:1.5;padding-top:0px;padding-right:0px;padding-bottom:0px;padding-left:0px;'>
                        <div class='txtTinyMce-wrapper'
                             style='font-size: 12px; line-height: 1.5; color: #000000; font-family: Roboto, Tahoma, Verdana, Segoe, sans-serif; letter-spacing: 0px; mso-line-height-alt: 18px;'>
                          <p
                            style='font-size: 12px; line-height: 1.5; word-break: break-word; mso-line-height-alt: 18px; letter-spacing: normal; margin: 0;'>
                            <strong> ${data.numberInvoice}</strong></p>
                        </div>
                      </div>
                      <!--[if mso]></td></tr></table><![endif]-->
                      <!--[if (!mso)&(!IE)]><!-->
                    </div>
                    <!--<![endif]-->
                  </div>
                </div>
                <!--[if (mso)|(IE)]></td></tr><tr bgcolor='transparent'><td colspan='1' style='font-size:7px;line-height:13px'>&nbsp;</td></tr></table><![endif]-->
                <!--[if (mso)|(IE)]></td></tr></table></td></tr></table><![endif]-->
              </div>
            </div>
          </div>
          <div style='background-color:transparent;'>
            <div class='block-grid three-up no-stack'
                 style='min-width: 320px; max-width: 900px; overflow-wrap: break-word; word-wrap: break-word; word-break: break-word; Margin: 0 auto; background-color: #fa385a;'>
              <div style='border-collapse: collapse;display: table;width: 100%;background-color:#fa385a;'>
                <!--[if (mso)|(IE)]>
                <table width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color:transparent;">
                <tr>
                  <td align="center">
                    <table cellpadding="0" cellspacing="0" border="0" style="width:900px">
                      <tr class="layout-full-width" style="background-color:#fa385a"><![endif]-->
                <!--[if (mso)|(IE)]>
                <td align="center" width="450"
                    style="background-color:#fa385a;width:450px; border-top: 0px solid transparent; border-left: 0px solid transparent; border-bottom: 0px solid transparent; border-right: 0px solid transparent;"
                    valign="top">
                <table width="100%" cellpadding="0" cellspacing="0" border="0">
                  <tr>
                    <td style="padding-right: 0px; padding-left: 0px; padding-top:5px; padding-bottom:5px;"><![endif]-->
                <div class='col num6'
                     style='display: table-cell; vertical-align: top; max-width: 320px; min-width: 450px; width: 450px;'>
                  <div class='col_cont' style='width:100% !important;'>
                    <!--[if (!mso)&(!IE)]><!-->
                    <div
                      style='border-top:0px solid transparent; border-left:0px solid transparent; border-bottom:0px solid transparent; border-right:0px solid transparent; padding-top:5px; padding-bottom:5px; padding-right: 0px; padding-left: 0px;'>
                      <!--<![endif]-->
                      <table border='0' cellpadding='0' cellspacing='0' class='divider' role='presentation'
                             style='table-layout: fixed; vertical-align: top; border-spacing: 0; border-collapse: collapse; mso-table-lspace: 0pt; mso-table-rspace: 0pt; min-width: 100%; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%;'
                             valign='top' width='100%'>
                        <tbody>
                        <tr style='vertical-align: top;' valign='top'>
                          <td class='divider_inner'
                              style='word-break: break-word; vertical-align: top; min-width: 100%; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; padding-top: 0px; padding-right: 0px; padding-bottom: 0px; padding-left: 0px;'
                              valign='top'>
                            <table align='center' border='0' cellpadding='0' cellspacing='0' class='divider_content'
                                   role='presentation'
                                   style='table-layout: fixed; vertical-align: top; border-spacing: 0; border-collapse: collapse; mso-table-lspace: 0pt; mso-table-rspace: 0pt; border-top: 1px solid transparent; width: 100%;'
                                   valign='top' width='100%'>
                              <tbody>
                              <tr style='vertical-align: top;' valign='top'>
                                <td
                                  style='word-break: break-word; vertical-align: top; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%;'
                                  valign='top'><span></span></td>
                              </tr>
                              </tbody>
                            </table>
                          </td>
                        </tr>
                        </tbody>
                      </table>
                      <!--[if mso]>
                      <table width="100%" cellpadding="0" cellspacing="0" border="0">
                      <tr>
                        <td
                          style="padding-right: 10px; padding-left: 10px; padding-top: 10px; padding-bottom: 10px; font-family: 'Trebuchet MS', Tahoma, sans-serif">
                      <![endif]-->
                      <div
                        style="color:#ffffff;font-family:'Montserrat', 'Trebuchet MS', 'Lucida Grande', 'Lucida Sans Unicode', 'Lucida Sans', Tahoma, sans-serif;letter-spacing:0px;line-height:1.2;padding-top:10px;padding-right:10px;padding-bottom:10px;padding-left:10px;">
                        <div class='txtTinyMce-wrapper'
                             style="font-size: 12px; line-height: 1.2; color: #ffffff; font-family: 'Montserrat', 'Trebuchet MS', 'Lucida Grande', 'Lucida Sans Unicode', 'Lucida Sans', Tahoma, sans-serif; letter-spacing: 0px; mso-line-height-alt: 14px;">
                          <p
                            style='font-size: 14px; line-height: 1.2; word-break: break-word; text-align: center; mso-line-height-alt: 17px; letter-spacing: normal; margin: 0;'>
                            <span style='font-size: 14px;'><strong><span style=''>Invoice#  ${data.numberInvoice}</span></strong></span>
                          </p>
                        </div>
                      </div>
                      <!--[if mso]></td></tr></table><![endif]-->
                      <!--[if (!mso)&(!IE)]><!-->
                    </div>
                    <!--<![endif]-->
                  </div>
                </div>
                <!--[if (mso)|(IE)]></td></tr></table><![endif]-->
                <!--[if (mso)|(IE)]></td>
              <td align="center" width="225"
                  style="background-color:#fa385a;width:225px; border-top: 0px solid transparent; border-left: 0px solid transparent; border-bottom: 0px solid transparent; border-right: 0px solid transparent;"
                  valign="top">
              <table width="100%" cellpadding="0" cellspacing="0" border="0">
                <tr>
                  <td style="padding-right: 0px; padding-left: 0px; padding-top:5px; padding-bottom:5px;"><![endif]-->
                <div class='col num3'
                     style='display: table-cell; vertical-align: top; max-width: 320px; min-width: 225px; width: 225px;'>
                  <div class='col_cont' style='width:100% !important;'>
                    <!--[if (!mso)&(!IE)]><!-->
                    <div
                      style='border-top:0px solid transparent; border-left:0px solid transparent; border-bottom:0px solid transparent; border-right:0px solid transparent; padding-top:5px; padding-bottom:5px; padding-right: 0px; padding-left: 0px;'>
                      <!--<![endif]-->
                      <!--[if mso]>
                      <table width="100%" cellpadding="0" cellspacing="0" border="0">
                      <tr>
                        <td
                          style="padding-right: 10px; padding-left: 10px; padding-top: 10px; padding-bottom: 10px; font-family: 'Trebuchet MS', Tahoma, sans-serif">
                      <![endif]-->
                      <div
                        style="color:#ffffff;font-family:'Montserrat', 'Trebuchet MS', 'Lucida Grande', 'Lucida Sans Unicode', 'Lucida Sans', Tahoma, sans-serif;line-height:1.2;padding-top:10px;padding-right:10px;padding-bottom:10px;padding-left:10px;">
                        <div class='txtTinyMce-wrapper'
                             style="font-size: 12px; line-height: 1.2; font-family: 'Montserrat', 'Trebuchet MS', 'Lucida Grande', 'Lucida Sans Unicode', 'Lucida Sans', Tahoma, sans-serif; color: #ffffff; mso-line-height-alt: 14px;">
                          <p
                            style="font-size: 12px; line-height: 1.2; word-break: break-word; font-family: Montserrat, 'Trebuchet MS', 'Lucida Grande', 'Lucida Sans Unicode', 'Lucida Sans', Tahoma, sans-serif; mso-line-height-alt: 14px; margin: 0;">
                            <span style='font-size: 12px;'><strong>Date:</strong></span></p>
                        </div>
                      </div>
                      <!--[if mso]></td></tr></table><![endif]-->
                      <!--[if (!mso)&(!IE)]><!-->
                    </div>
                    <!--<![endif]-->
                  </div>
                </div>
                <!--[if (mso)|(IE)]></td></tr></table><![endif]-->
                <!--[if (mso)|(IE)]></td>
              <td align="center" width="225"
                  style="background-color:#fa385a;width:225px; border-top: 0px solid transparent; border-left: 0px solid transparent; border-bottom: 0px solid transparent; border-right: 0px solid transparent;"
                  valign="top">
              <table width="100%" cellpadding="0" cellspacing="0" border="0">
                <tr>
                  <td style="padding-right: 0px; padding-left: 0px; padding-top:5px; padding-bottom:5px;"><![endif]-->
                <div class='col num3'
                     style='display: table-cell; vertical-align: top; max-width: 320px; min-width: 225px; width: 225px;'>
                  <div class='col_cont' style='width:100% !important;'>
                    <!--[if (!mso)&(!IE)]><!-->
                    <div
                      style='border-top:0px solid transparent; border-left:0px solid transparent; border-bottom:0px solid transparent; border-right:0px solid transparent; padding-top:5px; padding-bottom:5px; padding-right: 0px; padding-left: 0px;'>
                      <!--<![endif]-->
                      <!--[if mso]>
                      <table width="100%" cellpadding="0" cellspacing="0" border="0">
                      <tr>
                        <td
                          style="padding-right: 10px; padding-left: 10px; padding-top: 10px; padding-bottom: 10px; font-family: Tahoma, Verdana, sans-serif">
                      <![endif]-->
                      <div
                        style="color:#ffffff;font-family:'Roboto', Tahoma, Verdana, Segoe, sans-serif;line-height:1.2;padding-top:10px;padding-right:10px;padding-bottom:10px;padding-left:10px;">
                        <div class='txtTinyMce-wrapper'
                             style="font-size: 12px; line-height: 1.2; font-family: 'Roboto', Tahoma, Verdana, Segoe, sans-serif; color: #ffffff; mso-line-height-alt: 14px;">
                          <p
                            style='font-size: 12px; line-height: 1.2; word-break: break-word; font-family: Roboto, Tahoma, Verdana, Segoe, sans-serif; mso-line-height-alt: 14px; margin: 0;'>
                            ${data.order.createdAt}</p>
                        </div>
                      </div>
                      <!--[if mso]></td></tr></table><![endif]-->
                      <!--[if (!mso)&(!IE)]><!-->
                    </div>
                    <!--<![endif]-->
                  </div>
                </div>
                <!--[if (mso)|(IE)]></td></tr></table><![endif]-->
                <!--[if (mso)|(IE)]></td></tr></table></td></tr></table><![endif]-->
              </div>
            </div>
          </div>
          <div style='background-color:transparent;'>
            <div class='block-grid two-up no-stack'
                 style='min-width: 320px; max-width: 900px; overflow-wrap: break-word; word-wrap: break-word; word-break: break-word; Margin: 0 auto; background-color: #ffffff;'>
              <div style='border-collapse: collapse;display: table;width: 100%;background-color:#ffffff;'>
                <!--[if (mso)|(IE)]>
                <table width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color:transparent;">
                <tr>
                  <td align="center">
                    <table cellpadding="0" cellspacing="0" border="0" style="width:900px">
                      <tr class="layout-full-width" style="background-color:#ffffff"><![endif]-->
                <!--[if (mso)|(IE)]>
                <td align="center" width="450"
                    style="background-color:#ffffff;width:450px; border-top: 0px solid transparent; border-left: 0px solid transparent; border-bottom: 0px solid transparent; border-right: 0px solid transparent;"
                    valign="top">
                <table width="100%" cellpadding="0" cellspacing="0" border="0">
                  <tr>
                    <td
                      style="padding-right: 0px; padding-left: 0px; padding-top:0px; padding-bottom:0px;background-color:#1a1a1a;">
                <![endif]-->
                <div class='col num6'
                     style='display: table-cell; vertical-align: top; max-width: 320px; min-width: 450px; background-color: #1a1a1a; width: 450px;'>
                  <div class='col_cont' style='width:100% !important;'>
                    <!--[if (!mso)&(!IE)]><!-->
                    <div
                      style='border-top:0px solid transparent; border-left:0px solid transparent; border-bottom:0px solid transparent; border-right:0px solid transparent; padding-top:0px; padding-bottom:0px; padding-right: 0px; padding-left: 0px;'>
                      <!--<![endif]-->
                      <table border='0' cellpadding='0' cellspacing='0' class='divider' role='presentation'
                             style='table-layout: fixed; vertical-align: top; border-spacing: 0; border-collapse: collapse; mso-table-lspace: 0pt; mso-table-rspace: 0pt; min-width: 100%; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%;'
                             valign='top' width='100%'>
                        <tbody>
                        <tr style='vertical-align: top;' valign='top'>
                          <td class='divider_inner'
                              style='word-break: break-word; vertical-align: top; min-width: 100%; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; padding-top: 10px; padding-right: 10px; padding-bottom: 10px; padding-left: 10px;'
                              valign='top'>
                            <table align='center' border='0' cellpadding='0' cellspacing='0' class='divider_content'
                                   height='0' role='presentation'
                                   style='table-layout: fixed; vertical-align: top; border-spacing: 0; border-collapse: collapse; mso-table-lspace: 0pt; mso-table-rspace: 0pt; border-top: 0px solid transparent; height: 0px; width: 100%;'
                                   valign='top' width='100%'>
                              <tbody>
                              <tr style='vertical-align: top;' valign='top'>
                                <td height='0'
                                    style='word-break: break-word; vertical-align: top; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%;'
                                    valign='top'><span></span></td>
                              </tr>
                              </tbody>
                            </table>
                          </td>
                        </tr>
                        </tbody>
                      </table>
                      <!--[if (!mso)&(!IE)]><!-->
                    </div>
                    <!--<![endif]-->
                  </div>
                </div>
                <!--[if (mso)|(IE)]></td></tr></table><![endif]-->
                <!--[if (mso)|(IE)]></td>
              <td align="center" width="450"
                  style="background-color:#ffffff;width:450px; border-top: 0px solid transparent; border-left: 0px solid transparent; border-bottom: 0px solid transparent; border-right: 0px solid transparent;"
                  valign="top">
              <table width="100%" cellpadding="0" cellspacing="0" border="0">
                <tr>
                  <td
                    style="padding-right: 10px; padding-left: 10px; padding-top:0px; padding-bottom:0px;background-color:#ffffff;">
                <![endif]-->
                <div class='col num6'
                     style='display: table-cell; vertical-align: top; max-width: 320px; min-width: 450px; background-color: #ffffff; width: 450px;'>
                  <div class='col_cont' style='width:100% !important;'>
                    <!--[if (!mso)&(!IE)]><!-->
                    <div
                      style='border-top:0px solid transparent; border-left:0px solid transparent; border-bottom:0px solid transparent; border-right:0px solid transparent; padding-top:0px; padding-bottom:0px; padding-right: 10px; padding-left: 10px;'>
                      <!--<![endif]-->
                      <table border='0' cellpadding='0' cellspacing='0' class='divider' role='presentation'
                             style='table-layout: fixed; vertical-align: top; border-spacing: 0; border-collapse: collapse; mso-table-lspace: 0pt; mso-table-rspace: 0pt; min-width: 100%; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%;'
                             valign='top' width='100%'>
                        <tbody>
                        <tr style='vertical-align: top;' valign='top'>
                          <td class='divider_inner'
                              style='word-break: break-word; vertical-align: top; min-width: 100%; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; padding-top: 10px; padding-right: 10px; padding-bottom: 10px; padding-left: 10px;'
                              valign='top'>
                            <table align='center' border='0' cellpadding='0' cellspacing='0' class='divider_content'
                                   height='0' role='presentation'
                                   style='table-layout: fixed; vertical-align: top; border-spacing: 0; border-collapse: collapse; mso-table-lspace: 0pt; mso-table-rspace: 0pt; border-top: 0px solid transparent; height: 0px; width: 100%;'
                                   valign='top' width='100%'>
                              <tbody>
                              <tr style='vertical-align: top;' valign='top'>
                                <td height='0'
                                    style='word-break: break-word; vertical-align: top; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%;'
                                    valign='top'><span></span></td>
                              </tr>
                              </tbody>
                            </table>
                          </td>
                        </tr>
                        </tbody>
                      </table>
                      <!--[if (!mso)&(!IE)]><!-->
                    </div>
                    <!--<![endif]-->
                  </div>
                </div>
                <!--[if (mso)|(IE)]></td></tr></table><![endif]-->
                <!--[if (mso)|(IE)]></td></tr></table></td></tr></table><![endif]-->
              </div>
            </div>
          </div>
          <div style='background-color:transparent;'>
            <div class='block-grid five-up no-stack'
                 style='min-width: 320px; max-width: 900px; overflow-wrap: break-word; word-wrap: break-word; word-break: break-word; Margin: 0 auto; background-color: #ffffff;'>
              <div style='border-collapse: collapse;display: table;width: 100%;background-color:#ffffff;'>
                <!--[if (mso)|(IE)]>
                <table width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color:transparent;">
                <tr>
                  <td align="center">
                    <table cellpadding="0" cellspacing="0" border="0" style="width:900px">
                      <tr class="layout-full-width" style="background-color:#ffffff"><![endif]-->
                <!--[if (mso)|(IE)]>
                <td align="center" width="150"
                    style="background-color:#ffffff;width:150px; border-top: 0px solid transparent; border-left: 0px solid transparent; border-bottom: 0px solid transparent; border-right: 0px solid transparent;"
                    valign="top">
                <table width="100%" cellpadding="0" cellspacing="0" border="0">
                  <tr>
                    <td
                      style="padding-right: 0px; padding-left: 0px; padding-top:0px; padding-bottom:0px;background-color:#1a1a1a;">
                <![endif]-->
                <div class='col num2'
                     style='display: table-cell; vertical-align: top; max-width: 320px; min-width: 150px; background-color: #1a1a1a; width: 150px;'>
                  <div class='col_cont' style='width:100% !important;'>
                    <!--[if (!mso)&(!IE)]><!-->
                    <div
                      style='border-top:0px solid transparent; border-left:0px solid transparent; border-bottom:0px solid transparent; border-right:0px solid transparent; padding-top:0px; padding-bottom:0px; padding-right: 0px; padding-left: 0px;'>
                      <!--<![endif]-->
                      <table border='0' cellpadding='0' cellspacing='0' class='divider' role='presentation'
                             style='table-layout: fixed; vertical-align: top; border-spacing: 0; border-collapse: collapse; mso-table-lspace: 0pt; mso-table-rspace: 0pt; min-width: 100%; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%;'
                             valign='top' width='100%'>
                        <tbody>
                        <tr style='vertical-align: top;' valign='top'>
                          <td class='divider_inner'
                              style='word-break: break-word; vertical-align: top; min-width: 100%; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; padding-top: 10px; padding-right: 10px; padding-bottom: 10px; padding-left: 10px;'
                              valign='top'>
                            <table align='center' border='0' cellpadding='0' cellspacing='0' class='divider_content'
                                   role='presentation'
                                   style='table-layout: fixed; vertical-align: top; border-spacing: 0; border-collapse: collapse; mso-table-lspace: 0pt; mso-table-rspace: 0pt; border-top: 1px solid transparent; width: 100%;'
                                   valign='top' width='100%'>
                              <tbody>
                              <tr style='vertical-align: top;' valign='top'>
                                <td
                                  style='word-break: break-word; vertical-align: top; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%;'
                                  valign='top'><span></span></td>
                              </tr>
                              </tbody>
                            </table>
                          </td>
                        </tr>
                        </tbody>
                      </table>
                      <!--[if (!mso)&(!IE)]><!-->
                    </div>
                    <!--<![endif]-->
                  </div>
                </div>
                <!--[if (mso)|(IE)]></td></tr></table><![endif]-->
                <!--[if (mso)|(IE)]></td>
              <td align="center" width="300"
                  style="background-color:#ffffff;width:300px; border-top: 0px solid transparent; border-left: 0px solid transparent; border-bottom: 0px solid transparent; border-right: 0px solid transparent;"
                  valign="top">
              <table width="100%" cellpadding="0" cellspacing="0" border="0">
                <tr>
                  <td
                    style="padding-right: 0px; padding-left: 0px; padding-top:5px; padding-bottom:5px;background-color:#f3f5f2;">
                <![endif]-->
                <div class='col num4'
                     style='display: table-cell; vertical-align: top; max-width: 320px; min-width: 300px; background-color: #f3f5f2; width: 300px;'>
                  <div class='col_cont' style='width:100% !important;'>
                    <!--[if (!mso)&(!IE)]><!-->
                    <div
                      style='border-top:0px solid transparent; border-left:0px solid transparent; border-bottom:0px solid transparent; border-right:0px solid transparent; padding-top:5px; padding-bottom:5px; padding-right: 0px; padding-left: 0px;'>
                      <!--<![endif]-->
                      <!--[if mso]>
                      <table width="100%" cellpadding="0" cellspacing="0" border="0">
                      <tr>
                        <td
                          style="padding-right: 20px; padding-left: 20px; padding-top: 20px; padding-bottom: 20px; font-family: 'Trebuchet MS', Tahoma, sans-serif">
                      <![endif]-->
                      <div
                        style="color:#000000;font-family:'Montserrat', 'Trebuchet MS', 'Lucida Grande', 'Lucida Sans Unicode', 'Lucida Sans', Tahoma, sans-serif;line-height:1.2;padding-top:20px;padding-right:20px;padding-bottom:20px;padding-left:20px;">
                        <div class='txtTinyMce-wrapper'
                             style="line-height: 1.2; font-size: 12px; font-family: 'Montserrat', 'Trebuchet MS', 'Lucida Grande', 'Lucida Sans Unicode', 'Lucida Sans', Tahoma, sans-serif; color: #000000; mso-line-height-alt: 14px;">
                          <p
                            style="font-size: 14px; line-height: 1.2; text-align: center; word-break: break-word; font-family: Montserrat, 'Trebuchet MS', 'Lucida Grande', 'Lucida Sans Unicode', 'Lucida Sans', Tahoma, sans-serif; mso-line-height-alt: 17px; margin: 0;">
                            <strong>Item </strong>Description</p>
                        </div>
                      </div>
                      <!--[if mso]></td></tr></table><![endif]-->
                      <!--[if (!mso)&(!IE)]><!-->
                    </div>
                    <!--<![endif]-->
                  </div>
                </div>
                <!--[if (mso)|(IE)]></td></tr></table><![endif]-->
                <!--[if (mso)|(IE)]></td>
              <td align="center" width="150"
                  style="background-color:#ffffff;width:150px; border-top: 0px solid transparent; border-left: 0px solid transparent; border-bottom: 0px solid transparent; border-right: 0px solid transparent;"
                  valign="top">
              <table width="100%" cellpadding="0" cellspacing="0" border="0">
                <tr>
                  <td
                    style="padding-right: 0px; padding-left: 0px; padding-top:5px; padding-bottom:5px;background-color:#ffffff;">
                <![endif]-->
                <div class='col num2'
                     style='display: table-cell; vertical-align: top; max-width: 320px; min-width: 150px; background-color: #ffffff; width: 150px;'>
                  <div class='col_cont' style='width:100% !important;'>
                    <!--[if (!mso)&(!IE)]><!-->
                    <div
                      style='border-top:0px solid transparent; border-left:0px solid transparent; border-bottom:0px solid transparent; border-right:0px solid transparent; padding-top:5px; padding-bottom:5px; padding-right: 0px; padding-left: 0px;'>
                      <!--<![endif]-->
                      <!--[if mso]>
                      <table width="100%" cellpadding="0" cellspacing="0" border="0">
                      <tr>
                        <td
                          style="padding-right: 20px; padding-left: 20px; padding-top: 20px; padding-bottom: 20px; font-family: 'Trebuchet MS', Tahoma, sans-serif">
                      <![endif]-->
                      <div
                        style="color:#1a1a1a;font-family:'Montserrat', 'Trebuchet MS', 'Lucida Grande', 'Lucida Sans Unicode', 'Lucida Sans', Tahoma, sans-serif;line-height:1.2;padding-top:20px;padding-right:20px;padding-bottom:20px;padding-left:20px;">
                        <div class='txtTinyMce-wrapper'
                             style="line-height: 1.2; font-size: 12px; font-family: 'Montserrat', 'Trebuchet MS', 'Lucida Grande', 'Lucida Sans Unicode', 'Lucida Sans', Tahoma, sans-serif; color: #1a1a1a; mso-line-height-alt: 14px;">
                          <p
                            style="font-size: 14px; line-height: 1.2; text-align: center; word-break: break-word; font-family: Montserrat, 'Trebuchet MS', 'Lucida Grande', 'Lucida Sans Unicode', 'Lucida Sans', Tahoma, sans-serif; mso-line-height-alt: 17px; margin: 0;">
                            <strong>Price</strong></p>
                        </div>
                      </div>
                      <!--[if mso]></td></tr></table><![endif]-->
                      <!--[if (!mso)&(!IE)]><!-->
                    </div>
                    <!--<![endif]-->
                  </div>
                </div>
                <!--[if (mso)|(IE)]></td></tr></table><![endif]-->
                <!--[if (mso)|(IE)]></td>
              <td align="center" width="150"
                  style="background-color:#ffffff;width:150px; border-top: 0px solid transparent; border-left: 0px solid transparent; border-bottom: 0px solid transparent; border-right: 0px solid transparent;"
                  valign="top">
              <table width="100%" cellpadding="0" cellspacing="0" border="0">
                <tr>
                  <td style="padding-right: 0px; padding-left: 0px; padding-top:5px; padding-bottom:5px;"><![endif]-->
                <div class='col num2'
                     style='display: table-cell; vertical-align: top; max-width: 320px; min-width: 150px; width: 150px;'>
                  <div class='col_cont' style='width:100% !important;'>
                    <!--[if (!mso)&(!IE)]><!-->
                    <div
                      style='border-top:0px solid transparent; border-left:0px solid transparent; border-bottom:0px solid transparent; border-right:0px solid transparent; padding-top:5px; padding-bottom:5px; padding-right: 0px; padding-left: 0px;'>
                      <!--<![endif]-->
                      <!--[if mso]>
                      <table width="100%" cellpadding="0" cellspacing="0" border="0">
                      <tr>
                        <td
                          style="padding-right: 20px; padding-left: 20px; padding-top: 20px; padding-bottom: 20px; font-family: 'Trebuchet MS', Tahoma, sans-serif">
                      <![endif]-->
                      <div
                        style="color:#1a1a1a;font-family:'Montserrat', 'Trebuchet MS', 'Lucida Grande', 'Lucida Sans Unicode', 'Lucida Sans', Tahoma, sans-serif;line-height:1.2;padding-top:20px;padding-right:20px;padding-bottom:20px;padding-left:20px;">
                        <div class='txtTinyMce-wrapper'
                             style="font-size: 12px; line-height: 1.2; color: #1a1a1a; font-family: 'Montserrat', 'Trebuchet MS', 'Lucida Grande', 'Lucida Sans Unicode', 'Lucida Sans', Tahoma, sans-serif; mso-line-height-alt: 14px;">
                          <p
                            style='font-size: 12px; text-align: center; line-height: 1.2; word-break: break-word; mso-line-height-alt: 14px; margin: 0;'>
                            <strong>Qty</strong></p>
                        </div>
                      </div>
                      <!--[if mso]></td></tr></table><![endif]-->
                      <!--[if (!mso)&(!IE)]><!-->
                    </div>
                    <!--<![endif]-->
                  </div>
                </div>
                <!--[if (mso)|(IE)]></td></tr></table><![endif]-->
                <!--[if (mso)|(IE)]></td>
              <td align="center" width="150"
                  style="background-color:#ffffff;width:150px; border-top: 0px solid transparent; border-left: 0px solid transparent; border-bottom: 0px solid transparent; border-right: 0px solid transparent;"
                  valign="top">
              <table width="100%" cellpadding="0" cellspacing="0" border="0">
                <tr>
                  <td style="padding-right: 0px; padding-left: 0px; padding-top:5px; padding-bottom:5px;"><![endif]-->
                <div class='col num2'
                     style='display: table-cell; vertical-align: top; max-width: 320px; min-width: 150px; width: 150px;'>
                  <div class='col_cont' style='width:100% !important;'>
                    <!--[if (!mso)&(!IE)]><!-->
                    <div
                      style='border-top:0px solid transparent; border-left:0px solid transparent; border-bottom:0px solid transparent; border-right:0px solid transparent; padding-top:5px; padding-bottom:5px; padding-right: 0px; padding-left: 0px;'>
                      <!--<![endif]-->
                      <!--[if mso]>
                      <table width="100%" cellpadding="0" cellspacing="0" border="0">
                      <tr>
                        <td
                          style="padding-right: 20px; padding-left: 20px; padding-top: 20px; padding-bottom: 20px; font-family: 'Trebuchet MS', Tahoma, sans-serif">
                      <![endif]-->
                      <div
                        style="color:#1a1a1a;font-family:'Montserrat', 'Trebuchet MS', 'Lucida Grande', 'Lucida Sans Unicode', 'Lucida Sans', Tahoma, sans-serif;line-height:1.2;padding-top:20px;padding-right:20px;padding-bottom:20px;padding-left:20px;">
                        <div class='txtTinyMce-wrapper'
                             style="line-height: 1.2; font-size: 12px; font-family: 'Montserrat', 'Trebuchet MS', 'Lucida Grande', 'Lucida Sans Unicode', 'Lucida Sans', Tahoma, sans-serif; color: #1a1a1a; mso-line-height-alt: 14px;">
                          <p
                            style="font-size: 14px; line-height: 1.2; text-align: center; word-break: break-word; font-family: Montserrat, 'Trebuchet MS', 'Lucida Grande', 'Lucida Sans Unicode', 'Lucida Sans', Tahoma, sans-serif; mso-line-height-alt: 17px; margin: 0;">
                            <strong>Total</strong></p>
                        </div>
                      </div>
                      <!--[if mso]></td></tr></table><![endif]-->
                      <!--[if (!mso)&(!IE)]><!-->
                    </div>
                    <!--<![endif]-->
                  </div>
                </div>
                <!--[if (mso)|(IE)]></td></tr></table><![endif]-->
                <!--[if (mso)|(IE)]></td></tr></table></td></tr></table><![endif]-->
              </div>
            </div>
          </div>
          <div style='background-color:transparent;'>
            <div class='block-grid five-up no-stack'
                 style='min-width: 320px; max-width: 900px; overflow-wrap: break-word; word-wrap: break-word; word-break: break-word; Margin: 0 auto; background-color: #ffffff;'>
              <div style='border-collapse: collapse;display: table;width: 100%;background-color:#ffffff;'>
                <!--[if (mso)|(IE)]>
                <table width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color:transparent;">
                <tr>
                  <td align="center">
                    <table cellpadding="0" cellspacing="0" border="0" style="width:900px">
                      <tr class="layout-full-width" style="background-color:#ffffff"><![endif]-->
                <!--[if (mso)|(IE)]>
                <td align="center" width="150"
                    style="background-color:#ffffff;width:150px; border-top: 0px solid transparent; border-left: 0px solid transparent; border-bottom: 0px solid transparent; border-right: 0px solid transparent;"
                    valign="top">
                <table width="100%" cellpadding="0" cellspacing="0" border="0">
                  <tr>
                    <td
                      style="padding-right: 0px; padding-left: 0px; padding-top:0px; padding-bottom:0px;background-color:#1a1a1a;">
                <![endif]-->
                <div class='col num2'
                     style='display: table-cell; vertical-align: top; max-width: 320px; min-width: 150px; background-color: #1a1a1a; width: 150px;'>
                  <div class='col_cont' style='width:100% !important;'>
                    <!--[if (!mso)&(!IE)]><!-->
                    <div
                      style='border-top:0px solid transparent; border-left:0px solid transparent; border-bottom:0px solid transparent; border-right:0px solid transparent; padding-top:0px; padding-bottom:0px; padding-right: 0px; padding-left: 0px;'>
                      <!--<![endif]-->
                      <table border='0' cellpadding='0' cellspacing='0' class='divider' role='presentation'
                             style='table-layout: fixed; vertical-align: top; border-spacing: 0; border-collapse: collapse; mso-table-lspace: 0pt; mso-table-rspace: 0pt; min-width: 100%; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%;'
                             valign='top' width='100%'>
                        <tbody>
                        <tr style='vertical-align: top;' valign='top'>
                          <td class='divider_inner'
                              style='word-break: break-word; vertical-align: top; min-width: 100%; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; padding-top: 10px; padding-right: 10px; padding-bottom: 10px; padding-left: 10px;'
                              valign='top'>
                            <table align='center' border='0' cellpadding='0' cellspacing='0' class='divider_content'
                                   role='presentation'
                                   style='table-layout: fixed; vertical-align: top; border-spacing: 0; border-collapse: collapse; mso-table-lspace: 0pt; mso-table-rspace: 0pt; border-top: 1px solid transparent; width: 100%;'
                                   valign='top' width='100%'>
                              <tbody>
                              <tr style='vertical-align: top;' valign='top'>
                                <td
                                  style='word-break: break-word; vertical-align: top; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%;'
                                  valign='top'><span></span></td>
                              </tr>
                              </tbody>
                            </table>
                          </td>
                        </tr>
                        </tbody>
                      </table>
                      <!--[if (!mso)&(!IE)]><!-->
                    </div>
                    <!--<![endif]-->
                  </div>
                </div>
                <!--[if (mso)|(IE)]></td></tr></table><![endif]-->
                <!--[if (mso)|(IE)]></td>
              <td align="center" width="300"
                  style="background-color:#ffffff;width:300px; border-top: 0px solid transparent; border-left: 0px solid transparent; border-bottom: 0px solid transparent; border-right: 0px solid transparent;"
                  valign="top">
              <table width="100%" cellpadding="0" cellspacing="0" border="0">
                <tr>
                  <td
                    style="padding-right: 0px; padding-left: 0px; padding-top:5px; padding-bottom:5px;background-color:#f3f5f2;">
                <![endif]-->
                <div class='col num4'
                     style='display: table-cell; vertical-align: top; max-width: 320px; min-width: 300px; background-color: #f3f5f2; width: 300px;'>
                  <div class='col_cont' style='width:100% !important;'>
                    <!--[if (!mso)&(!IE)]><!-->
                    <div
                      style='border-top:0px solid transparent; border-left:0px solid transparent; border-bottom:0px solid transparent; border-right:0px solid transparent; padding-top:5px; padding-bottom:5px; padding-right: 0px; padding-left: 0px;'>
                      <!--<![endif]-->
                      <!--[if mso]>
                      <table width="100%" cellpadding="0" cellspacing="0" border="0">
                      <tr>
                        <td
                          style="padding-right: 10px; padding-left: 10px; padding-top: 10px; padding-bottom: 10px; font-family: Tahoma, Verdana, sans-serif">
                      <![endif]-->
                      <div
                        style="color:#1a1a1a;font-family:'Roboto', Tahoma, Verdana, Segoe, sans-serif;line-height:1.2;padding-top:10px;padding-right:10px;padding-bottom:10px;padding-left:10px;">
                        <div class='txtTinyMce-wrapper'
                             style="line-height: 1.2; font-size: 12px; font-family: 'Roboto', Tahoma, Verdana, Segoe, sans-serif; color: #1a1a1a; mso-line-height-alt: 14px;">
                          <p
                            style='font-size: 12px; line-height: 1.2; text-align: center; word-break: break-word; font-family: Roboto, Tahoma, Verdana, Segoe, sans-serif; mso-line-height-alt: 14px; margin: 0;'>
                            <span style='font-size: 12px;'>${data.order.credit} software credits. </span><span
                            style='font-size: 12px;'>incl. ${data.order.discount}% discount</span></p>
                        </div>
                      </div>
                      <!--[if mso]></td></tr></table><![endif]-->
                      <!--[if (!mso)&(!IE)]><!-->
                    </div>
                    <!--<![endif]-->
                  </div>
                </div>
                <!--[if (mso)|(IE)]></td></tr></table><![endif]-->
                <!--[if (mso)|(IE)]></td>
              <td align="center" width="150"
                  style="background-color:#ffffff;width:150px; border-top: 0px solid transparent; border-left: 0px solid transparent; border-bottom: 0px solid transparent; border-right: 0px solid transparent;"
                  valign="top">
              <table width="100%" cellpadding="0" cellspacing="0" border="0">
                <tr>
                  <td style="padding-right: 0px; padding-left: 0px; padding-top:5px; padding-bottom:5px;"><![endif]-->
                <div class='col num2'
                     style='display: table-cell; vertical-align: top; max-width: 320px; min-width: 150px; width: 150px;'>
                  <div class='col_cont' style='width:100% !important;'>
                    <!--[if (!mso)&(!IE)]><!-->
                    <div
                      style='border-top:0px solid transparent; border-left:0px solid transparent; border-bottom:0px solid transparent; border-right:0px solid transparent; padding-top:5px; padding-bottom:5px; padding-right: 0px; padding-left: 0px;'>
                      <!--<![endif]-->
                      <!--[if mso]>
                      <table width="100%" cellpadding="0" cellspacing="0" border="0">
                      <tr>
                        <td
                          style="padding-right: 10px; padding-left: 10px; padding-top: 10px; padding-bottom: 10px; font-family: Tahoma, Verdana, sans-serif">
                      <![endif]-->
                      <div
                        style="color:#1a1a1a;font-family:'Roboto', Tahoma, Verdana, Segoe, sans-serif;line-height:1.2;padding-top:10px;padding-right:10px;padding-bottom:10px;padding-left:10px;">
                        <div class='txtTinyMce-wrapper'
                             style="font-size: 12px; line-height: 1.2; color: #1a1a1a; font-family: 'Roboto', Tahoma, Verdana, Segoe, sans-serif; mso-line-height-alt: 14px;">
                          <p
                            style='font-size: 12px; text-align: center; line-height: 1.2; word-break: break-word; mso-line-height-alt: 14px; margin: 0;'>
                            € ${data.order.price}</p>
                        </div>
                      </div>
                      <!--[if mso]></td></tr></table><![endif]-->
                      <!--[if (!mso)&(!IE)]><!-->
                    </div>
                    <!--<![endif]-->
                  </div>
                </div>
                <!--[if (mso)|(IE)]></td></tr></table><![endif]-->
                <!--[if (mso)|(IE)]></td>
              <td align="center" width="150"
                  style="background-color:#ffffff;width:150px; border-top: 0px solid transparent; border-left: 0px solid transparent; border-bottom: 0px solid transparent; border-right: 0px solid transparent;"
                  valign="top">
              <table width="100%" cellpadding="0" cellspacing="0" border="0">
                <tr>
                  <td style="padding-right: 0px; padding-left: 0px; padding-top:5px; padding-bottom:5px;"><![endif]-->
                <div class='col num2'
                     style='display: table-cell; vertical-align: top; max-width: 320px; min-width: 150px; width: 150px;'>
                  <div class='col_cont' style='width:100% !important;'>
                    <!--[if (!mso)&(!IE)]><!-->
                    <div
                      style='border-top:0px solid transparent; border-left:0px solid transparent; border-bottom:0px solid transparent; border-right:0px solid transparent; padding-top:5px; padding-bottom:5px; padding-right: 0px; padding-left: 0px;'>
                      <!--<![endif]-->
                      <!--[if mso]>
                      <table width="100%" cellpadding="0" cellspacing="0" border="0">
                      <tr>
                        <td
                          style="padding-right: 10px; padding-left: 10px; padding-top: 10px; padding-bottom: 10px; font-family: Tahoma, Verdana, sans-serif">
                      <![endif]-->
                      <div
                        style="color:#1a1a1a;font-family:'Roboto', Tahoma, Verdana, Segoe, sans-serif;line-height:1.2;padding-top:10px;padding-right:10px;padding-bottom:10px;padding-left:10px;">
                        <div class='txtTinyMce-wrapper'
                             style="font-size: 12px; line-height: 1.2; color: #1a1a1a; font-family: 'Roboto', Tahoma, Verdana, Segoe, sans-serif; mso-line-height-alt: 14px;">
                          <p
                            style='font-size: 12px; text-align: center; line-height: 1.2; word-break: break-word; mso-line-height-alt: 14px; margin: 0;'>
                            1</p>
                        </div>
                      </div>
                      <!--[if mso]></td></tr></table><![endif]-->
                      <!--[if (!mso)&(!IE)]><!-->
                    </div>
                    <!--<![endif]-->
                  </div>
                </div>
                <!--[if (mso)|(IE)]></td></tr></table><![endif]-->
                <!--[if (mso)|(IE)]></td>
              <td align="center" width="150"
                  style="background-color:#ffffff;width:150px; border-top: 0px solid transparent; border-left: 0px solid transparent; border-bottom: 0px solid transparent; border-right: 0px solid transparent;"
                  valign="top">
              <table width="100%" cellpadding="0" cellspacing="0" border="0">
                <tr>
                  <td style="padding-right: 0px; padding-left: 0px; padding-top:5px; padding-bottom:5px;"><![endif]-->
                <div class='col num2'
                     style='display: table-cell; vertical-align: top; max-width: 320px; min-width: 150px; width: 150px;'>
                  <div class='col_cont' style='width:100% !important;'>
                    <!--[if (!mso)&(!IE)]><!-->
                    <div
                      style='border-top:0px solid transparent; border-left:0px solid transparent; border-bottom:0px solid transparent; border-right:0px solid transparent; padding-top:5px; padding-bottom:5px; padding-right: 0px; padding-left: 0px;'>
                      <!--<![endif]-->
                      <!--[if mso]>
                      <table width="100%" cellpadding="0" cellspacing="0" border="0">
                      <tr>
                        <td
                          style="padding-right: 10px; padding-left: 10px; padding-top: 10px; padding-bottom: 10px; font-family: Tahoma, Verdana, sans-serif">
                      <![endif]-->
                      <div
                        style="color:#1a1a1a;font-family:'Roboto', Tahoma, Verdana, Segoe, sans-serif;line-height:1.2;padding-top:10px;padding-right:10px;padding-bottom:10px;padding-left:10px;">
                        <div class='txtTinyMce-wrapper'
                             style="font-size: 12px; line-height: 1.2; color: #1a1a1a; font-family: 'Roboto', Tahoma, Verdana, Segoe, sans-serif; mso-line-height-alt: 14px;">
                          <p
                            style='font-size: 12px; text-align: center; line-height: 1.2; word-break: break-word; mso-line-height-alt: 14px; margin: 0;'>
                            € ${data.order.price}</p>
                        </div>
                      </div>
                      <!--[if mso]></td></tr></table><![endif]-->
                      <!--[if (!mso)&(!IE)]><!-->
                    </div>
                    <!--<![endif]-->
                  </div>
                </div>
                <!--[if (mso)|(IE)]></td></tr></table><![endif]-->
                <!--[if (mso)|(IE)]></td></tr></table></td></tr></table><![endif]-->
              </div>
            </div>
          </div>
<!--          <div style="background-color:transparent;">-->
<!--            <div class="block-grid three-up no-stack"-->
<!--                 style="min-width: 320px; max-width: 900px; overflow-wrap: break-word; word-wrap: break-word; word-break: break-word; Margin: 0 auto; background-color: #ffffff;">-->
<!--              <div style="border-collapse: collapse;display: table;width: 100%;background-color:#ffffff;">-->
<!--                &lt;!&ndash;[if (mso)|(IE)]>-->
<!--                <table width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color:transparent;">-->
<!--                <tr>-->
<!--                  <td align="center">-->
<!--                    <table cellpadding="0" cellspacing="0" border="0" style="width:900px">-->
<!--                      <tr class="layout-full-width" style="background-color:#ffffff"><![endif]&ndash;&gt;-->
<!--                &lt;!&ndash;[if (mso)|(IE)]>-->
<!--                <td align="center" width="150"-->
<!--                    style="background-color:#ffffff;width:150px; border-top: 0px solid transparent; border-left: 0px solid transparent; border-bottom: 0px solid transparent; border-right: 0px solid transparent;"-->
<!--                    valign="top">-->
<!--                <table width="100%" cellpadding="0" cellspacing="0" border="0">-->
<!--                  <tr>-->
<!--                    <td-->
<!--                      style="padding-right: 0px; padding-left: 0px; padding-top:0px; padding-bottom:0px;background-color:#1a1a1a;">-->
<!--                <![endif]&ndash;&gt;-->
<!--                <div class="col num2"-->
<!--                     style="display: table-cell; vertical-align: top; max-width: 320px; min-width: 150px; background-color: #1a1a1a; width: 150px;">-->
<!--                  <div class="col_cont" style="width:100% !important;">-->
<!--                    &lt;!&ndash;[if (!mso)&(!IE)]>&lt;!&ndash;>-->
<!--                    <div-->
<!--                      style="border-top:0px solid transparent; border-left:0px solid transparent; border-bottom:0px solid transparent; border-right:0px solid transparent; padding-top:0px; padding-bottom:0px; padding-right: 0px; padding-left: 0px;">-->
<!--                      &lt;!&ndash;<![endif]&ndash;&gt;-->
<!--                      <table border="0" cellpadding="0" cellspacing="0" class="divider" role="presentation"-->
<!--                             style="table-layout: fixed; vertical-align: top; border-spacing: 0; border-collapse: collapse; mso-table-lspace: 0pt; mso-table-rspace: 0pt; min-width: 100%; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%;"-->
<!--                             valign="top" width="100%">-->
<!--                        <tbody>-->
<!--                        <tr style="vertical-align: top;" valign="top">-->
<!--                          <td class="divider_inner"-->
<!--                              style="word-break: break-word; vertical-align: top; min-width: 100%; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; padding-top: 0px; padding-right: 0px; padding-bottom: 0px; padding-left: 0px;"-->
<!--                              valign="top">-->
<!--                            <table align="center" border="0" cellpadding="0" cellspacing="0" class="divider_content"-->
<!--                                   role="presentation"-->
<!--                                   style="table-layout: fixed; vertical-align: top; border-spacing: 0; border-collapse: collapse; mso-table-lspace: 0pt; mso-table-rspace: 0pt; border-top: 1px solid transparent; width: 100%;"-->
<!--                                   valign="top" width="100%">-->
<!--                              <tbody>-->
<!--                              <tr style="vertical-align: top;" valign="top">-->
<!--                                <td-->
<!--                                  style="word-break: break-word; vertical-align: top; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%;"-->
<!--                                  valign="top"><span></span></td>-->
<!--                              </tr>-->
<!--                              </tbody>-->
<!--                            </table>-->
<!--                          </td>-->
<!--                        </tr>-->
<!--                        </tbody>-->
<!--                      </table>-->
<!--                      &lt;!&ndash;[if (!mso)&(!IE)]>&lt;!&ndash;>-->
<!--                    </div>-->
<!--                    &lt;!&ndash;<![endif]&ndash;&gt;-->
<!--                  </div>-->
<!--                </div>-->
<!--                &lt;!&ndash;[if (mso)|(IE)]></td></tr></table><![endif]&ndash;&gt;-->
<!--                &lt;!&ndash;[if (mso)|(IE)]></td>-->
<!--              <td align="center" width="300"-->
<!--                  style="background-color:#ffffff;width:300px; border-top: 0px solid transparent; border-left: 0px solid transparent; border-bottom: 0px solid transparent; border-right: 0px solid transparent;"-->
<!--                  valign="top">-->
<!--              <table width="100%" cellpadding="0" cellspacing="0" border="0">-->
<!--                <tr>-->
<!--                  <td-->
<!--                    style="padding-right: 0px; padding-left: 0px; padding-top:5px; padding-bottom:5px;background-color:#f3f5f2;">-->
<!--                <![endif]&ndash;&gt;-->
<!--                <div class="col num4"-->
<!--                     style="display: table-cell; vertical-align: top; max-width: 320px; min-width: 300px; background-color: #f3f5f2; width: 300px;">-->
<!--                  <div class="col_cont" style="width:100% !important;">-->
<!--                    &lt;!&ndash;[if (!mso)&(!IE)]>&lt;!&ndash;>-->
<!--                    <div-->
<!--                      style="border-top:0px solid transparent; border-left:0px solid transparent; border-bottom:0px solid transparent; border-right:0px solid transparent; padding-top:5px; padding-bottom:5px; padding-right: 0px; padding-left: 0px;">-->
<!--                      &lt;!&ndash;<![endif]&ndash;&gt;-->
<!--                      <table border="0" cellpadding="0" cellspacing="0" class="divider" role="presentation"-->
<!--                             style="table-layout: fixed; vertical-align: top; border-spacing: 0; border-collapse: collapse; mso-table-lspace: 0pt; mso-table-rspace: 0pt; min-width: 100%; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%;"-->
<!--                             valign="top" width="100%">-->
<!--                        <tbody>-->
<!--                        <tr style="vertical-align: top;" valign="top">-->
<!--                          <td class="divider_inner"-->
<!--                              style="word-break: break-word; vertical-align: top; min-width: 100%; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; padding-top: 0px; padding-right: 0px; padding-bottom: 0px; padding-left: 0px;"-->
<!--                              valign="top">-->
<!--                            <table align="center" border="0" cellpadding="0" cellspacing="0" class="divider_content"-->
<!--                                   height="1" role="presentation"-->
<!--                                   style="table-layout: fixed; vertical-align: top; border-spacing: 0; border-collapse: collapse; mso-table-lspace: 0pt; mso-table-rspace: 0pt; border-top: 1px solid #1A1A1A; height: 1px; width: 100%;"-->
<!--                                   valign="top" width="100%">-->
<!--                              <tbody>-->
<!--                              <tr style="vertical-align: top;" valign="top">-->
<!--                                <td height="1"-->
<!--                                    style="word-break: break-word; vertical-align: top; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%;"-->
<!--                                    valign="top"><span></span></td>-->
<!--                              </tr>-->
<!--                              </tbody>-->
<!--                            </table>-->
<!--                          </td>-->
<!--                        </tr>-->
<!--                        </tbody>-->
<!--                      </table>-->
<!--                      &lt;!&ndash;[if (!mso)&(!IE)]>&lt;!&ndash;>-->
<!--                    </div>-->
<!--                    &lt;!&ndash;<![endif]&ndash;&gt;-->
<!--                  </div>-->
<!--                </div>-->
<!--                &lt;!&ndash;[if (mso)|(IE)]></td></tr></table><![endif]&ndash;&gt;-->
<!--                &lt;!&ndash;[if (mso)|(IE)]></td>-->
<!--              <td align="center" width="450"-->
<!--                  style="background-color:#ffffff;width:450px; border-top: 0px solid transparent; border-left: 0px solid transparent; border-bottom: 0px solid transparent; border-right: 0px solid transparent;"-->
<!--                  valign="top">-->
<!--              <table width="100%" cellpadding="0" cellspacing="0" border="0">-->
<!--                <tr>-->
<!--                  <td-->
<!--                    style="padding-right: 0px; padding-left: 0px; padding-top:5px; padding-bottom:5px;background-color:#ffffff;">-->
<!--                <![endif]&ndash;&gt;-->
<!--                <div class="col num6"-->
<!--                     style="display: table-cell; vertical-align: top; max-width: 320px; min-width: 450px; background-color: #ffffff; width: 450px;">-->
<!--                  <div class="col_cont" style="width:100% !important;">-->
<!--                    &lt;!&ndash;[if (!mso)&(!IE)]>&lt;!&ndash;>-->
<!--                    <div-->
<!--                      style="border-top:0px solid transparent; border-left:0px solid transparent; border-bottom:0px solid transparent; border-right:0px solid transparent; padding-top:5px; padding-bottom:5px; padding-right: 0px; padding-left: 0px;">-->
<!--                      &lt;!&ndash;<![endif]&ndash;&gt;-->
<!--                      <table border="0" cellpadding="0" cellspacing="0" class="divider" role="presentation"-->
<!--                             style="table-layout: fixed; vertical-align: top; border-spacing: 0; border-collapse: collapse; mso-table-lspace: 0pt; mso-table-rspace: 0pt; min-width: 100%; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%;"-->
<!--                             valign="top" width="100%">-->
<!--                        <tbody>-->
<!--                        <tr style="vertical-align: top;" valign="top">-->
<!--                          <td class="divider_inner"-->
<!--                              style="word-break: break-word; vertical-align: top; min-width: 100%; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; padding-top: 0px; padding-right: 0px; padding-bottom: 0px; padding-left: 0px;"-->
<!--                              valign="top">-->
<!--                            <table align="center" border="0" cellpadding="0" cellspacing="0" class="divider_content"-->
<!--                                   height="1" role="presentation"-->
<!--                                   style="table-layout: fixed; vertical-align: top; border-spacing: 0; border-collapse: collapse; mso-table-lspace: 0pt; mso-table-rspace: 0pt; border-top: 1px solid #1A1A1A; height: 1px; width: 100%;"-->
<!--                                   valign="top" width="100%">-->
<!--                              <tbody>-->
<!--                              <tr style="vertical-align: top;" valign="top">-->
<!--                                <td height="1"-->
<!--                                    style="word-break: break-word; vertical-align: top; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%;"-->
<!--                                    valign="top"><span></span></td>-->
<!--                              </tr>-->
<!--                              </tbody>-->
<!--                            </table>-->
<!--                          </td>-->
<!--                        </tr>-->
<!--                        </tbody>-->
<!--                      </table>-->
<!--                      &lt;!&ndash;[if (!mso)&(!IE)]>&lt;!&ndash;>-->
<!--                    </div>-->
<!--                    &lt;!&ndash;<![endif]&ndash;&gt;-->
<!--                  </div>-->
<!--                </div>-->
<!--                &lt;!&ndash;[if (mso)|(IE)]></td></tr></table><![endif]&ndash;&gt;-->
<!--                &lt;!&ndash;[if (mso)|(IE)]></td></tr></table></td></tr></table><![endif]&ndash;&gt;-->
<!--              </div>-->
<!--            </div>-->
<!--          </div>-->
<!--          <div style="background-color:transparent;">-->
<!--            <div class="block-grid five-up no-stack"-->
<!--                 style="min-width: 320px; max-width: 900px; overflow-wrap: break-word; word-wrap: break-word; word-break: break-word; Margin: 0 auto; background-color: #ffffff;">-->
<!--              <div style="border-collapse: collapse;display: table;width: 100%;background-color:#ffffff;">-->
<!--                &lt;!&ndash;[if (mso)|(IE)]>-->
<!--                <table width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color:transparent;">-->
<!--                <tr>-->
<!--                  <td align="center">-->
<!--                    <table cellpadding="0" cellspacing="0" border="0" style="width:900px">-->
<!--                      <tr class="layout-full-width" style="background-color:#ffffff"><![endif]&ndash;&gt;-->
<!--                &lt;!&ndash;[if (mso)|(IE)]>-->
<!--                <td align="center" width="150"-->
<!--                    style="background-color:#ffffff;width:150px; border-top: 0px solid transparent; border-left: 0px solid transparent; border-bottom: 0px solid transparent; border-right: 0px solid transparent;"-->
<!--                    valign="top">-->
<!--                <table width="100%" cellpadding="0" cellspacing="0" border="0">-->
<!--                  <tr>-->
<!--                    <td-->
<!--                      style="padding-right: 0px; padding-left: 0px; padding-top:0px; padding-bottom:0px;background-color:#1a1a1a;">-->
<!--                <![endif]&ndash;&gt;-->
<!--                <div class="col num2"-->
<!--                     style="display: table-cell; vertical-align: top; max-width: 320px; min-width: 150px; background-color: #1a1a1a; width: 150px;">-->
<!--                  <div class="col_cont" style="width:100% !important;">-->
<!--                    &lt;!&ndash;[if (!mso)&(!IE)]>&lt;!&ndash;>-->
<!--                    <div-->
<!--                      style="border-top:0px solid transparent; border-left:0px solid transparent; border-bottom:0px solid transparent; border-right:0px solid transparent; padding-top:0px; padding-bottom:0px; padding-right: 0px; padding-left: 0px;">-->
<!--                      &lt;!&ndash;<![endif]&ndash;&gt;-->
<!--                      <table border="0" cellpadding="0" cellspacing="0" class="divider" role="presentation"-->
<!--                             style="table-layout: fixed; vertical-align: top; border-spacing: 0; border-collapse: collapse; mso-table-lspace: 0pt; mso-table-rspace: 0pt; min-width: 100%; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%;"-->
<!--                             valign="top" width="100%">-->
<!--                        <tbody>-->
<!--                        <tr style="vertical-align: top;" valign="top">-->
<!--                          <td class="divider_inner"-->
<!--                              style="word-break: break-word; vertical-align: top; min-width: 100%; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; padding-top: 10px; padding-right: 10px; padding-bottom: 10px; padding-left: 10px;"-->
<!--                              valign="top">-->
<!--                            <table align="center" border="0" cellpadding="0" cellspacing="0" class="divider_content"-->
<!--                                   role="presentation"-->
<!--                                   style="table-layout: fixed; vertical-align: top; border-spacing: 0; border-collapse: collapse; mso-table-lspace: 0pt; mso-table-rspace: 0pt; border-top: 1px solid transparent; width: 100%;"-->
<!--                                   valign="top" width="100%">-->
<!--                              <tbody>-->
<!--                              <tr style="vertical-align: top;" valign="top">-->
<!--                                <td-->
<!--                                  style="word-break: break-word; vertical-align: top; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%;"-->
<!--                                  valign="top"><span></span></td>-->
<!--                              </tr>-->
<!--                              </tbody>-->
<!--                            </table>-->
<!--                          </td>-->
<!--                        </tr>-->
<!--                        </tbody>-->
<!--                      </table>-->
<!--                      &lt;!&ndash;[if (!mso)&(!IE)]>&lt;!&ndash;>-->
<!--                    </div>-->
<!--                    &lt;!&ndash;<![endif]&ndash;&gt;-->
<!--                  </div>-->
<!--                </div>-->
<!--                &lt;!&ndash;[if (mso)|(IE)]></td></tr></table><![endif]&ndash;&gt;-->
<!--                &lt;!&ndash;[if (mso)|(IE)]></td>-->
<!--              <td align="center" width="300"-->
<!--                  style="background-color:#ffffff;width:300px; border-top: 0px solid transparent; border-left: 0px solid transparent; border-bottom: 0px solid transparent; border-right: 0px solid transparent;"-->
<!--                  valign="top">-->
<!--              <table width="100%" cellpadding="0" cellspacing="0" border="0">-->
<!--                <tr>-->
<!--                  <td-->
<!--                    style="padding-right: 0px; padding-left: 0px; padding-top:5px; padding-bottom:5px;background-color:#f3f5f2;">-->
<!--                <![endif]&ndash;&gt;-->
<!--                <div class="col num4"-->
<!--                     style="display: table-cell; vertical-align: top; max-width: 320px; min-width: 300px; background-color: #f3f5f2; width: 300px;">-->

<!--                </div>-->
<!--                &lt;!&ndash;[if (mso)|(IE)]></td></tr></table><![endif]&ndash;&gt;-->
<!--                &lt;!&ndash;[if (mso)|(IE)]></td>-->
<!--              <td align="center" width="150"-->
<!--                  style="background-color:#ffffff;width:150px; border-top: 0px solid transparent; border-left: 0px solid transparent; border-bottom: 0px solid transparent; border-right: 0px solid transparent;"-->
<!--                  valign="top">-->
<!--              <table width="100%" cellpadding="0" cellspacing="0" border="0">-->
<!--                <tr>-->
<!--                  <td style="padding-right: 0px; padding-left: 0px; padding-top:5px; padding-bottom:5px;"><![endif]&ndash;&gt;-->
<!--                <div class="col num2"-->
<!--                     style="display: table-cell; vertical-align: top; max-width: 320px; min-width: 150px; width: 150px;">-->
<!--                  <div class="col_cont" style="width:100% !important;">-->
<!--                    &lt;!&ndash;[if (!mso)&(!IE)]>&lt;!&ndash;>-->
<!--                    <div-->
<!--                      style="border-top:0px solid transparent; border-left:0px solid transparent; border-bottom:0px solid transparent; border-right:0px solid transparent; padding-top:5px; padding-bottom:5px; padding-right: 0px; padding-left: 0px;">-->
<!--                      &lt;!&ndash;<![endif]&ndash;&gt;-->
<!--                      &lt;!&ndash;[if mso]>-->
<!--                      <table width="100%" cellpadding="0" cellspacing="0" border="0">-->
<!--                      <tr>-->
<!--                        <td style="padding-right: 10px; padding-left: 10px; padding-top: 10px; padding-bottom: 10px; font-family: Tahoma, Verdana, sans-serif">-->
<!--                      <![endif]&ndash;&gt;-->

<!--                      &lt;!&ndash;[if mso]></td></tr></table><![endif]&ndash;&gt;-->
<!--                      &lt;!&ndash;[if (!mso)&(!IE)]>&lt;!&ndash;>-->
<!--                    </div>-->
<!--                    &lt;!&ndash;<![endif]&ndash;&gt;-->
<!--                  </div>-->
<!--                </div>-->
<!--                &lt;!&ndash;[if (mso)|(IE)]></td></tr></table><![endif]&ndash;&gt;-->
<!--                &lt;!&ndash;[if (mso)|(IE)]></td>-->
<!--              <td align="center" width="150"-->
<!--                  style="background-color:#ffffff;width:150px; border-top: 0px solid transparent; border-left: 0px solid transparent; border-bottom: 0px solid transparent; border-right: 0px solid transparent;"-->
<!--                  valign="top">-->
<!--              <table width="100%" cellpadding="0" cellspacing="0" border="0">-->
<!--                <tr>-->
<!--                  <td style="padding-right: 0px; padding-left: 0px; padding-top:5px; padding-bottom:5px;"><![endif]&ndash;&gt;-->
<!--                <div class="col num2"-->
<!--                     style="display: table-cell; vertical-align: top; max-width: 320px; min-width: 150px; width: 150px;">-->
<!--                  <div class="col_cont" style="width:100% !important;">-->
<!--                    &lt;!&ndash;[if (!mso)&(!IE)]>&lt;!&ndash;>-->
<!--                    <div-->
<!--                      style="border-top:0px solid transparent; border-left:0px solid transparent; border-bottom:0px solid transparent; border-right:0px solid transparent; padding-top:5px; padding-bottom:5px; padding-right: 0px; padding-left: 0px;">-->
<!--                      &lt;!&ndash;<![endif]&ndash;&gt;-->
<!--                      &lt;!&ndash;[if mso]>-->
<!--                      <table width="100%" cellpadding="0" cellspacing="0" border="0">-->
<!--                      <tr>-->
<!--                        <td-->
<!--                          style="padding-right: 10px; padding-left: 10px; padding-top: 10px; padding-bottom: 10px; font-family: Tahoma, Verdana, sans-serif">-->
<!--                      <![endif]&ndash;&gt;-->
<!--                      <div-->
<!--                        style="color:#1a1a1a;font-family:'Roboto', Tahoma, Verdana, Segoe, sans-serif;line-height:1.2;padding-top:10px;padding-right:10px;padding-bottom:10px;padding-left:10px;">-->
<!--                        <div class="txtTinyMce-wrapper"-->
<!--                             style="font-size: 12px; line-height: 1.2; color: #1a1a1a; font-family: 'Roboto', Tahoma, Verdana, Segoe, sans-serif; mso-line-height-alt: 14px;">-->
<!--                          <p-->
<!--                            style="font-size: 12px; text-align: center; line-height: 1.2; word-break: break-word; mso-line-height-alt: 14px; margin: 0;">-->
<!--                            1</p>-->
<!--                        </div>-->
<!--                      </div>-->
<!--                      &lt;!&ndash;[if mso]></td></tr></table><![endif]&ndash;&gt;-->
<!--                      &lt;!&ndash;[if (!mso)&(!IE)]>&lt;!&ndash;>-->
<!--                    </div>-->
<!--                    &lt;!&ndash;<![endif]&ndash;&gt;-->
<!--                  </div>-->
<!--                </div>-->
<!--                &lt;!&ndash;[if (mso)|(IE)]></td></tr></table><![endif]&ndash;&gt;-->
<!--                &lt;!&ndash;[if (mso)|(IE)]></td>-->
<!--              <td align="center" width="150"-->
<!--                  style="background-color:#ffffff;width:150px; border-top: 0px solid transparent; border-left: 0px solid transparent; border-bottom: 0px solid transparent; border-right: 0px solid transparent;"-->
<!--                  valign="top">-->
<!--              <table width="100%" cellpadding="0" cellspacing="0" border="0">-->
<!--                <tr>-->
<!--                  <td style="padding-right: 0px; padding-left: 0px; padding-top:5px; padding-bottom:5px;"><![endif]&ndash;&gt;-->
<!--                <div class="col num2"-->
<!--                     style="display: table-cell; vertical-align: top; max-width: 320px; min-width: 150px; width: 150px;">-->
<!--                  <div class="col_cont" style="width:100% !important;">-->
<!--                    &lt;!&ndash;[if (!mso)&(!IE)]>&lt;!&ndash;>-->

<!--                    &lt;!&ndash;<![endif]&ndash;&gt;-->
<!--                  </div>-->
<!--                </div>-->
<!--                &lt;!&ndash;[if (mso)|(IE)]></td></tr></table><![endif]&ndash;&gt;-->
<!--                &lt;!&ndash;[if (mso)|(IE)]></td></tr></table></td></tr></table><![endif]&ndash;&gt;-->
<!--              </div>-->
<!--            </div>-->
<!--          </div>-->
<!--          <div style="background-color:transparent;">-->
<!--            <div class="block-grid three-up no-stack"-->
<!--                 style="min-width: 320px; max-width: 900px; overflow-wrap: break-word; word-wrap: break-word; word-break: break-word; Margin: 0 auto; background-color: #ffffff;">-->
<!--              <div style="border-collapse: collapse;display: table;width: 100%;background-color:#ffffff;">-->
<!--                &lt;!&ndash;[if (mso)|(IE)]>-->
<!--                <table width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color:transparent;">-->
<!--                <tr>-->
<!--                  <td align="center">-->
<!--                    <table cellpadding="0" cellspacing="0" border="0" style="width:900px">-->
<!--                      <tr class="layout-full-width" style="background-color:#ffffff"><![endif]&ndash;&gt;-->
<!--                &lt;!&ndash;[if (mso)|(IE)]>-->
<!--                <td align="center" width="150"-->
<!--                    style="background-color:#ffffff;width:150px; border-top: 0px solid transparent; border-left: 0px solid transparent; border-bottom: 0px solid transparent; border-right: 0px solid transparent;"-->
<!--                    valign="top">-->
<!--                <table width="100%" cellpadding="0" cellspacing="0" border="0">-->
<!--                  <tr>-->
<!--                    <td-->
<!--                      style="padding-right: 0px; padding-left: 0px; padding-top:0px; padding-bottom:0px;background-color:#1a1a1a;">-->
<!--                <![endif]&ndash;&gt;-->
<!--                <div class="col num2"-->
<!--                     style="display: table-cell; vertical-align: top; max-width: 320px; min-width: 150px; background-color: #1a1a1a; width: 150px;">-->
<!--                  <div class="col_cont" style="width:100% !important;">-->
<!--                    &lt;!&ndash;[if (!mso)&(!IE)]>&lt;!&ndash;>-->
<!--                    <div-->
<!--                      style="border-top:0px solid transparent; border-left:0px solid transparent; border-bottom:0px solid transparent; border-right:0px solid transparent; padding-top:0px; padding-bottom:0px; padding-right: 0px; padding-left: 0px;">-->
<!--                      &lt;!&ndash;<![endif]&ndash;&gt;-->
<!--                      <table border="0" cellpadding="0" cellspacing="0" class="divider" role="presentation"-->
<!--                             style="table-layout: fixed; vertical-align: top; border-spacing: 0; border-collapse: collapse; mso-table-lspace: 0pt; mso-table-rspace: 0pt; min-width: 100%; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%;"-->
<!--                             valign="top" width="100%">-->
<!--                        <tbody>-->
<!--                        <tr style="vertical-align: top;" valign="top">-->
<!--                          <td class="divider_inner"-->
<!--                              style="word-break: break-word; vertical-align: top; min-width: 100%; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; padding-top: 0px; padding-right: 0px; padding-bottom: 0px; padding-left: 0px;"-->
<!--                              valign="top">-->
<!--                            <table align="center" border="0" cellpadding="0" cellspacing="0" class="divider_content"-->
<!--                                   role="presentation"-->
<!--                                   style="table-layout: fixed; vertical-align: top; border-spacing: 0; border-collapse: collapse; mso-table-lspace: 0pt; mso-table-rspace: 0pt; border-top: 1px solid transparent; width: 100%;"-->
<!--                                   valign="top" width="100%">-->
<!--                              <tbody>-->
<!--                              <tr style="vertical-align: top;" valign="top">-->
<!--                                <td-->
<!--                                  style="word-break: break-word; vertical-align: top; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%;"-->
<!--                                  valign="top"><span></span></td>-->
<!--                              </tr>-->
<!--                              </tbody>-->
<!--                            </table>-->
<!--                          </td>-->
<!--                        </tr>-->
<!--                        </tbody>-->
<!--                      </table>-->
<!--                      &lt;!&ndash;[if (!mso)&(!IE)]>&lt;!&ndash;>-->
<!--                    </div>-->
<!--                    &lt;!&ndash;<![endif]&ndash;&gt;-->
<!--                  </div>-->
<!--                </div>-->
<!--                &lt;!&ndash;[if (mso)|(IE)]></td></tr></table><![endif]&ndash;&gt;-->
<!--                &lt;!&ndash;[if (mso)|(IE)]></td>-->
<!--              <td align="center" width="300"-->
<!--                  style="background-color:#ffffff;width:300px; border-top: 0px solid transparent; border-left: 0px solid transparent; border-bottom: 0px solid transparent; border-right: 0px solid transparent;"-->
<!--                  valign="top">-->
<!--              <table width="100%" cellpadding="0" cellspacing="0" border="0">-->
<!--                <tr>-->
<!--                  <td-->
<!--                    style="padding-right: 0px; padding-left: 0px; padding-top:5px; padding-bottom:5px;background-color:#f3f5f2;">-->
<!--                <![endif]&ndash;&gt;-->
<!--                <div class="col num4"-->
<!--                     style="display: table-cell; vertical-align: top; max-width: 320px; min-width: 300px; background-color: #f3f5f2; width: 300px;">-->
<!--                  <div class="col_cont" style="width:100% !important;">-->
<!--                    &lt;!&ndash;[if (!mso)&(!IE)]>&lt;!&ndash;>-->
<!--                    <div-->
<!--                      style="border-top:0px solid transparent; border-left:0px solid transparent; border-bottom:0px solid transparent; border-right:0px solid transparent; padding-top:5px; padding-bottom:5px; padding-right: 0px; padding-left: 0px;">-->
<!--                      &lt;!&ndash;<![endif]&ndash;&gt;-->
<!--                      <table border="0" cellpadding="0" cellspacing="0" class="divider" role="presentation"-->
<!--                             style="table-layout: fixed; vertical-align: top; border-spacing: 0; border-collapse: collapse; mso-table-lspace: 0pt; mso-table-rspace: 0pt; min-width: 100%; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%;"-->
<!--                             valign="top" width="100%">-->
<!--                        <tbody>-->
<!--                        <tr style="vertical-align: top;" valign="top">-->
<!--                          <td class="divider_inner"-->
<!--                              style="word-break: break-word; vertical-align: top; min-width: 100%; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; padding-top: 0px; padding-right: 0px; padding-bottom: 0px; padding-left: 0px;"-->
<!--                              valign="top">-->
<!--                            <table align="center" border="0" cellpadding="0" cellspacing="0" class="divider_content"-->
<!--                                   height="1" role="presentation"-->
<!--                                   style="table-layout: fixed; vertical-align: top; border-spacing: 0; border-collapse: collapse; mso-table-lspace: 0pt; mso-table-rspace: 0pt; border-top: 1px solid #1A1A1A; height: 1px; width: 100%;"-->
<!--                                   valign="top" width="100%">-->
<!--                              <tbody>-->
<!--                              <tr style="vertical-align: top;" valign="top">-->
<!--                                <td height="1"-->
<!--                                    style="word-break: break-word; vertical-align: top; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%;"-->
<!--                                    valign="top"><span></span></td>-->
<!--                              </tr>-->
<!--                              </tbody>-->
<!--                            </table>-->
<!--                          </td>-->
<!--                        </tr>-->
<!--                        </tbody>-->
<!--                      </table>-->
<!--                      &lt;!&ndash;[if (!mso)&(!IE)]>&lt;!&ndash;>-->
<!--                    </div>-->
<!--                    &lt;!&ndash;<![endif]&ndash;&gt;-->
<!--                  </div>-->
<!--                </div>-->
<!--                &lt;!&ndash;[if (mso)|(IE)]></td></tr></table><![endif]&ndash;&gt;-->
<!--                &lt;!&ndash;[if (mso)|(IE)]></td>-->
<!--              <td align="center" width="450"-->
<!--                  style="background-color:#ffffff;width:450px; border-top: 0px solid transparent; border-left: 0px solid transparent; border-bottom: 0px solid transparent; border-right: 0px solid transparent;"-->
<!--                  valign="top">-->
<!--              <table width="100%" cellpadding="0" cellspacing="0" border="0">-->
<!--                <tr>-->
<!--                  <td-->
<!--                    style="padding-right: 0px; padding-left: 0px; padding-top:5px; padding-bottom:5px;background-color:#ffffff;">-->
<!--                <![endif]&ndash;&gt;-->
<!--                <div class="col num6"-->
<!--                     style="display: table-cell; vertical-align: top; max-width: 320px; min-width: 450px; background-color: #ffffff; width: 450px;">-->
<!--                  <div class="col_cont" style="width:100% !important;">-->
<!--                    &lt;!&ndash;[if (!mso)&(!IE)]>&lt;!&ndash;>-->
<!--                    <div-->
<!--                      style="border-top:0px solid transparent; border-left:0px solid transparent; border-bottom:0px solid transparent; border-right:0px solid transparent; padding-top:5px; padding-bottom:5px; padding-right: 0px; padding-left: 0px;">-->
<!--                      &lt;!&ndash;<![endif]&ndash;&gt;-->
<!--                      <table border="0" cellpadding="0" cellspacing="0" class="divider" role="presentation"-->
<!--                             style="table-layout: fixed; vertical-align: top; border-spacing: 0; border-collapse: collapse; mso-table-lspace: 0pt; mso-table-rspace: 0pt; min-width: 100%; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%;"-->
<!--                             valign="top" width="100%">-->
<!--                        <tbody>-->
<!--                        <tr style="vertical-align: top;" valign="top">-->
<!--                          <td class="divider_inner"-->
<!--                              style="word-break: break-word; vertical-align: top; min-width: 100%; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; padding-top: 0px; padding-right: 0px; padding-bottom: 0px; padding-left: 0px;"-->
<!--                              valign="top">-->
<!--                            <table align="center" border="0" cellpadding="0" cellspacing="0" class="divider_content"-->
<!--                                   height="1" role="presentation"-->
<!--                                   style="table-layout: fixed; vertical-align: top; border-spacing: 0; border-collapse: collapse; mso-table-lspace: 0pt; mso-table-rspace: 0pt; border-top: 1px solid #1A1A1A; height: 1px; width: 100%;"-->
<!--                                   valign="top" width="100%">-->
<!--                              <tbody>-->
<!--                              <tr style="vertical-align: top;" valign="top">-->
<!--                                <td height="1"-->
<!--                                    style="word-break: break-word; vertical-align: top; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%;"-->
<!--                                    valign="top"><span></span></td>-->
<!--                              </tr>-->
<!--                              </tbody>-->
<!--                            </table>-->
<!--                          </td>-->
<!--                        </tr>-->
<!--                        </tbody>-->
<!--                      </table>-->
<!--                      &lt;!&ndash;[if (!mso)&(!IE)]>&lt;!&ndash;>-->
<!--                    </div>-->
<!--                    &lt;!&ndash;<![endif]&ndash;&gt;-->
<!--                  </div>-->
<!--                </div>-->
<!--                &lt;!&ndash;[if (mso)|(IE)]></td></tr></table><![endif]&ndash;&gt;-->
<!--                &lt;!&ndash;[if (mso)|(IE)]></td></tr></table></td></tr></table><![endif]&ndash;&gt;-->
<!--              </div>-->
<!--            </div>-->
<!--          </div>-->
          <div style='background-color:transparent;'>
            <div class='block-grid three-up no-stack'
                 style='min-width: 320px; max-width: 900px; overflow-wrap: break-word; word-wrap: break-word; word-break: break-word; Margin: 0 auto; background-color: #ffffff;'>
              <div style='border-collapse: collapse;display: table;width: 100%;background-color:#ffffff;'>
                <!--[if (mso)|(IE)]>
                <table width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color:transparent;">
                <tr>
                  <td align="center">
                    <table cellpadding="0" cellspacing="0" border="0" style="width:900px">
                      <tr class="layout-full-width" style="background-color:#ffffff"><![endif]-->
                <!--[if (mso)|(IE)]>
                <td align="center" width="150"
                    style="background-color:#ffffff;width:150px; border-top: 0px solid transparent; border-left: 0px solid transparent; border-bottom: 0px solid transparent; border-right: 0px solid transparent;"
                    valign="top">
                <table width="100%" cellpadding="0" cellspacing="0" border="0">
                  <tr>
                    <td
                      style="padding-right: 0px; padding-left: 0px; padding-top:0px; padding-bottom:0px;background-color:#1a1a1a;">
                <![endif]-->
                <div class='col num2'
                     style='display: table-cell; vertical-align: top; max-width: 320px; min-width: 150px; background-color: #1a1a1a; width: 150px;'>
                  <div class='col_cont' style='width:100% !important;'>
                    <!--[if (!mso)&(!IE)]><!-->
                    <div
                      style='border-top:0px solid transparent; border-left:0px solid transparent; border-bottom:0px solid transparent; border-right:0px solid transparent; padding-top:0px; padding-bottom:0px; padding-right: 0px; padding-left: 0px;'>
                      <!--<![endif]-->
                      <table border='0' cellpadding='0' cellspacing='0' class='divider' role='presentation'
                             style='table-layout: fixed; vertical-align: top; border-spacing: 0; border-collapse: collapse; mso-table-lspace: 0pt; mso-table-rspace: 0pt; min-width: 100%; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%;'
                             valign='top' width='100%'>
                        <tbody>
                        <tr style='vertical-align: top;' valign='top'>
                          <td class='divider_inner'
                              style='word-break: break-word; vertical-align: top; min-width: 100%; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; padding-top: 10px; padding-right: 10px; padding-bottom: 10px; padding-left: 10px;'
                              valign='top'>
                            <table align='center' border='0' cellpadding='0' cellspacing='0' class='divider_content'
                                   role='presentation'
                                   style='table-layout: fixed; vertical-align: top; border-spacing: 0; border-collapse: collapse; mso-table-lspace: 0pt; mso-table-rspace: 0pt; border-top: 1px solid transparent; width: 100%;'
                                   valign='top' width='100%'>
                              <tbody>
                              <tr style='vertical-align: top;' valign='top'>
                                <td
                                  style='word-break: break-word; vertical-align: top; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%;'
                                  valign='top'><span></span></td>
                              </tr>
                              </tbody>
                            </table>
                          </td>
                        </tr>
                        </tbody>
                      </table>
                      <!--[if (!mso)&(!IE)]><!-->
                    </div>
                    <!--<![endif]-->
                  </div>
                </div>
                <!--[if (mso)|(IE)]></td></tr></table><![endif]-->
                <!--[if (mso)|(IE)]></td>
              <td align="center" width="300"
                  style="background-color:#ffffff;width:300px; border-top: 0px solid transparent; border-left: 0px solid transparent; border-bottom: 0px solid transparent; border-right: 0px solid transparent;"
                  valign="top">
              <table width="100%" cellpadding="0" cellspacing="0" border="0">
                <tr>
                  <td
                    style="padding-right: 0px; padding-left: 0px; padding-top:5px; padding-bottom:5px;background-color:#f3f5f2;">
                <![endif]-->
                <div class='col num4'
                     style='display: table-cell; vertical-align: top; max-width: 320px; min-width: 300px; background-color: #f3f5f2; width: 300px;'>
                  <div class='col_cont' style='width:100% !important;'>
                    <!--[if (!mso)&(!IE)]><!-->
                    <div
                      style='border-top:0px solid transparent; border-left:0px solid transparent; border-bottom:0px solid transparent; border-right:0px solid transparent; padding-top:5px; padding-bottom:5px; padding-right: 0px; padding-left: 0px;'>
                      <!--<![endif]-->
                      <table border='0' cellpadding='0' cellspacing='0' class='divider' role='presentation'
                             style='table-layout: fixed; vertical-align: top; border-spacing: 0; border-collapse: collapse; mso-table-lspace: 0pt; mso-table-rspace: 0pt; min-width: 100%; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%;'
                             valign='top' width='100%'>
                        <tbody>
                        <tr style='vertical-align: top;' valign='top'>
                          <td class='divider_inner'
                              style='word-break: break-word; vertical-align: top; min-width: 100%; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; padding-top: 10px; padding-right: 10px; padding-bottom: 10px; padding-left: 10px;'
                              valign='top'>
                            <table align='center' border='0' cellpadding='0' cellspacing='0' class='divider_content'
                                   role='presentation'
                                   style='table-layout: fixed; vertical-align: top; border-spacing: 0; border-collapse: collapse; mso-table-lspace: 0pt; mso-table-rspace: 0pt; border-top: 1px solid transparent; width: 100%;'
                                   valign='top' width='100%'>
                              <tbody>
                              <tr style='vertical-align: top;' valign='top'>
                                <td
                                  style='word-break: break-word; vertical-align: top; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%;'
                                  valign='top'><span></span></td>
                              </tr>
                              </tbody>
                            </table>
                          </td>
                        </tr>
                        </tbody>
                      </table>
                      <!--[if (!mso)&(!IE)]><!-->
                    </div>
                    <!--<![endif]-->
                  </div>
                </div>
                <!--[if (mso)|(IE)]></td></tr></table><![endif]-->
                <!--[if (mso)|(IE)]></td>
              <td align="center" width="450"
                  style="background-color:#ffffff;width:450px; border-top: 0px solid transparent; border-left: 0px solid transparent; border-bottom: 0px solid transparent; border-right: 0px solid transparent;"
                  valign="top">
              <table width="100%" cellpadding="0" cellspacing="0" border="0">
                <tr>
                  <td
                    style="padding-right: 0px; padding-left: 0px; padding-top:5px; padding-bottom:5px;background-color:#ffffff;">
                <![endif]-->
                <div class='col num6'
                     style='display: table-cell; vertical-align: top; max-width: 320px; min-width: 450px; background-color: #ffffff; width: 450px;'>
                  <div class='col_cont' style='width:100% !important;'>
                    <!--[if (!mso)&(!IE)]><!-->
                    <div
                      style='border-top:0px solid transparent; border-left:0px solid transparent; border-bottom:0px solid transparent; border-right:0px solid transparent; padding-top:5px; padding-bottom:5px; padding-right: 0px; padding-left: 0px;'>
                      <!--<![endif]-->
                      <table border='0' cellpadding='0' cellspacing='0' class='divider' role='presentation'
                             style='table-layout: fixed; vertical-align: top; border-spacing: 0; border-collapse: collapse; mso-table-lspace: 0pt; mso-table-rspace: 0pt; min-width: 100%; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%;'
                             valign='top' width='100%'>
                        <tbody>
                        <tr style='vertical-align: top;' valign='top'>
                          <td class='divider_inner'
                              style='word-break: break-word; vertical-align: top; min-width: 100%; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; padding-top: 10px; padding-right: 10px; padding-bottom: 10px; padding-left: 10px;'
                              valign='top'>
                            <table align='center' border='0' cellpadding='0' cellspacing='0' class='divider_content'
                                   role='presentation'
                                   style='table-layout: fixed; vertical-align: top; border-spacing: 0; border-collapse: collapse; mso-table-lspace: 0pt; mso-table-rspace: 0pt; border-top: 1px solid transparent; width: 100%;'
                                   valign='top' width='100%'>
                              <tbody>
                              <tr style='vertical-align: top;' valign='top'>
                                <td
                                  style='word-break: break-word; vertical-align: top; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%;'
                                  valign='top'><span></span></td>
                              </tr>
                              </tbody>
                            </table>
                          </td>
                        </tr>
                        </tbody>
                      </table>
                      <!--[if (!mso)&(!IE)]><!-->
                    </div>
                    <!--<![endif]-->
                  </div>
                </div>
                <!--[if (mso)|(IE)]></td></tr></table><![endif]-->
                <!--[if (mso)|(IE)]></td></tr></table></td></tr></table><![endif]-->
              </div>
            </div>
          </div>
          <div style='background-color:transparent;'>
            <div class='block-grid five-up no-stack'
                 style='min-width: 320px; max-width: 900px; overflow-wrap: break-word; word-wrap: break-word; word-break: break-word; Margin: 0 auto; background-color: #ffffff;'>
              <div style='border-collapse: collapse;display: table;width: 100%;background-color:#ffffff;'>
                <!--[if (mso)|(IE)]>
                <table width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color:transparent;">
                <tr>
                  <td align="center">
                    <table cellpadding="0" cellspacing="0" border="0" style="width:900px">
                      <tr class="layout-full-width" style="background-color:#ffffff"><![endif]-->
                <!--[if (mso)|(IE)]>
                <td align="center" width="150"
                    style="background-color:#ffffff;width:150px; border-top: 0px solid transparent; border-left: 0px solid transparent; border-bottom: 0px solid transparent; border-right: 0px solid transparent;"
                    valign="top">
                <table width="100%" cellpadding="0" cellspacing="0" border="0">
                  <tr>
                    <td
                      style="padding-right: 0px; padding-left: 0px; padding-top:0px; padding-bottom:0px;background-color:#1a1a1a;">
                <![endif]-->
                <div class='col num2'
                     style='display: table-cell; vertical-align: top; max-width: 320px; min-width: 150px; background-color: #1a1a1a; width: 150px;'>
                  <div class='col_cont' style='width:100% !important;'>
                    <!--[if (!mso)&(!IE)]><!-->
                    <div
                      style='border-top:0px solid transparent; border-left:0px solid transparent; border-bottom:0px solid transparent; border-right:0px solid transparent; padding-top:0px; padding-bottom:0px; padding-right: 0px; padding-left: 0px;'>
                      <!--<![endif]-->
                      <table border='0' cellpadding='0' cellspacing='0' class='divider' role='presentation'
                             style='table-layout: fixed; vertical-align: top; border-spacing: 0; border-collapse: collapse; mso-table-lspace: 0pt; mso-table-rspace: 0pt; min-width: 100%; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%;'
                             valign='top' width='100%'>
                        <tbody>
                        <tr style='vertical-align: top;' valign='top'>
                          <td class='divider_inner'
                              style='word-break: break-word; vertical-align: top; min-width: 100%; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; padding-top: 10px; padding-right: 10px; padding-bottom: 10px; padding-left: 10px;'
                              valign='top'>
                            <table align='center' border='0' cellpadding='0' cellspacing='0' class='divider_content'
                                   role='presentation'
                                   style='table-layout: fixed; vertical-align: top; border-spacing: 0; border-collapse: collapse; mso-table-lspace: 0pt; mso-table-rspace: 0pt; border-top: 1px solid transparent; width: 100%;'
                                   valign='top' width='100%'>
                              <tbody>
                              <tr style='vertical-align: top;' valign='top'>
                                <td
                                  style='word-break: break-word; vertical-align: top; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%;'
                                  valign='top'><span></span></td>
                              </tr>
                              </tbody>
                            </table>
                          </td>
                        </tr>
                        </tbody>
                      </table>
                      <!--[if (!mso)&(!IE)]><!-->
                    </div>
                    <!--<![endif]-->
                  </div>
                </div>
                <!--[if (mso)|(IE)]></td></tr></table><![endif]-->
                <!--[if (mso)|(IE)]></td>
              <td align="center" width="300"
                  style="background-color:#ffffff;width:300px; border-top: 0px solid transparent; border-left: 0px solid transparent; border-bottom: 0px solid transparent; border-right: 0px solid transparent;"
                  valign="top">
              <table width="100%" cellpadding="0" cellspacing="0" border="0">
                <tr>
                  <td
                    style="padding-right: 0px; padding-left: 0px; padding-top:5px; padding-bottom:5px;background-color:#f3f5f2;">
                <![endif]-->
                <div class='col num4'
                     style='display: table-cell; vertical-align: top; max-width: 320px; min-width: 300px; background-color: #f3f5f2; width: 300px;'>
                  <div class='col_cont' style='width:100% !important;'>
                    <!--[if (!mso)&(!IE)]><!-->
                    <div
                      style='border-top:0px solid transparent; border-left:0px solid transparent; border-bottom:0px solid transparent; border-right:0px solid transparent; padding-top:5px; padding-bottom:5px; padding-right: 0px; padding-left: 0px;'>
                      <!--<![endif]-->
                      <!--[if mso]>
                      <table width="100%" cellpadding="0" cellspacing="0" border="0">
                      <tr>
                        <td
                          style="padding-right: 10px; padding-left: 10px; padding-top: 10px; padding-bottom: 10px; font-family: Tahoma, Verdana, sans-serif">
                      <![endif]-->
                      <div
                        style="color:#1a1a1a;font-family:'Roboto', Tahoma, Verdana, Segoe, sans-serif;line-height:1.2;padding-top:10px;padding-right:10px;padding-bottom:10px;padding-left:10px;">
                        <div class='txtTinyMce-wrapper'
                             style="font-size: 12px; line-height: 1.2; color: #1a1a1a; font-family: 'Roboto', Tahoma, Verdana, Segoe, sans-serif; mso-line-height-alt: 14px;">
                          <p
                            style='font-size: 12px; line-height: 1.2; word-break: break-word; mso-line-height-alt: 14px; margin: 0;'>
                             </p>
                        </div>
                      </div>
                      <!--[if mso]></td></tr></table><![endif]-->
                      <!--[if (!mso)&(!IE)]><!-->
                    </div>
                    <!--<![endif]-->
                  </div>
                </div>
                <!--[if (mso)|(IE)]></td></tr></table><![endif]-->
                <!--[if (mso)|(IE)]></td>
              <td align="center" width="150"
                  style="background-color:#ffffff;width:150px; border-top: 0px solid transparent; border-left: 0px solid transparent; border-bottom: 0px solid transparent; border-right: 0px solid transparent;"
                  valign="top">
              <table width="100%" cellpadding="0" cellspacing="0" border="0">
                <tr>
                  <td style="padding-right: 0px; padding-left: 0px; padding-top:5px; padding-bottom:5px;"><![endif]-->
                <div class='col num2'
                     style='display: table-cell; vertical-align: top; max-width: 320px; min-width: 150px; width: 150px;'>
                  <div class='col_cont' style='width:100% !important;'>
                    <!--[if (!mso)&(!IE)]><!-->
                    <div
                      style='border-top:0px solid transparent; border-left:0px solid transparent; border-bottom:0px solid transparent; border-right:0px solid transparent; padding-top:5px; padding-bottom:5px; padding-right: 0px; padding-left: 0px;'>
                      <!--<![endif]-->
                      <!--[if mso]>
                      <table width="100%" cellpadding="0" cellspacing="0" border="0">
                      <tr>
                        <td
                          style="padding-right: 10px; padding-left: 10px; padding-top: 10px; padding-bottom: 10px; font-family: Tahoma, Verdana, sans-serif">
                      <![endif]-->
                      <div
                        style="color:#1a1a1a;font-family:'Roboto', Tahoma, Verdana, Segoe, sans-serif;line-height:1.2;padding-top:10px;padding-right:10px;padding-bottom:10px;padding-left:10px;">
                        <div class='txtTinyMce-wrapper'
                             style="font-size: 12px; line-height: 1.2; color: #1a1a1a; font-family: 'Roboto', Tahoma, Verdana, Segoe, sans-serif; mso-line-height-alt: 14px;">
                          <p
                            style='font-size: 12px; line-height: 1.2; word-break: break-word; mso-line-height-alt: 14px; margin: 0;'>
                             </p>
                        </div>
                      </div>
                      <!--[if mso]></td></tr></table><![endif]-->
                      <!--[if (!mso)&(!IE)]><!-->
                    </div>
                    <!--<![endif]-->
                  </div>
                </div>
                <!--[if (mso)|(IE)]></td></tr></table><![endif]-->
                <!--[if (mso)|(IE)]></td>
              <td align="center" width="150"
                  style="background-color:#ffffff;width:150px; border-top: 0px solid transparent; border-left: 0px solid transparent; border-bottom: 0px solid transparent; border-right: 0px solid transparent;"
                  valign="top">
              <table width="100%" cellpadding="0" cellspacing="0" border="0">
                <tr>
                  <td style="padding-right: 0px; padding-left: 0px; padding-top:5px; padding-bottom:5px;"><![endif]-->
                <div class='col num2'
                     style='display: table-cell; vertical-align: top; max-width: 320px; min-width: 150px; width: 150px;'>
                  <div class='col_cont' style='width:100% !important;'>
                    <!--[if (!mso)&(!IE)]><!-->
                    <div
                      style='border-top:0px solid transparent; border-left:0px solid transparent; border-bottom:0px solid transparent; border-right:0px solid transparent; padding-top:5px; padding-bottom:5px; padding-right: 0px; padding-left: 0px;'>
                      <!--<![endif]-->
                      <!--[if mso]>
                      <table width="100%" cellpadding="0" cellspacing="0" border="0">
                      <tr>
                        <td
                          style="padding-right: 10px; padding-left: 10px; padding-top: 10px; padding-bottom: 10px; font-family: 'Trebuchet MS', Tahoma, sans-serif">
                      <![endif]-->
                      <div
                        style="color:#1a1a1a;font-family:'Montserrat', 'Trebuchet MS', 'Lucida Grande', 'Lucida Sans Unicode', 'Lucida Sans', Tahoma, sans-serif;line-height:1.2;padding-top:10px;padding-right:10px;padding-bottom:10px;padding-left:10px;">
                        <div class='txtTinyMce-wrapper'
                             style="font-size: 12px; line-height: 1.2; font-family: 'Montserrat', 'Trebuchet MS', 'Lucida Grande', 'Lucida Sans Unicode', 'Lucida Sans', Tahoma, sans-serif; color: #1a1a1a; mso-line-height-alt: 14px;">
                          <p
                            style="font-size: 12px; text-align: center; line-height: 1.2; word-break: break-word; font-family: Montserrat, 'Trebuchet MS', 'Lucida Grande', 'Lucida Sans Unicode', 'Lucida Sans', Tahoma, sans-serif; mso-line-height-alt: 14px; margin: 0;">
                            <strong>Subtotal:</strong></p>
                        </div>
                      </div>
                      <!--[if mso]></td></tr></table><![endif]-->
                      <!--[if mso]>
                      <table width="100%" cellpadding="0" cellspacing="0" border="0">
                      <tr>
                        <td
                          style="padding-right: 10px; padding-left: 10px; padding-top: 10px; padding-bottom: 10px; font-family: 'Trebuchet MS', Tahoma, sans-serif">
                      <![endif]-->
                      <div
                        style="color:#1a1a1a;font-family:'Montserrat', 'Trebuchet MS', 'Lucida Grande', 'Lucida Sans Unicode', 'Lucida Sans', Tahoma, sans-serif;line-height:1.2;padding-top:10px;padding-right:10px;padding-bottom:10px;padding-left:10px;">
                        <div class='txtTinyMce-wrapper'
                             style="font-size: 12px; line-height: 1.2; font-family: 'Montserrat', 'Trebuchet MS', 'Lucida Grande', 'Lucida Sans Unicode', 'Lucida Sans', Tahoma, sans-serif; color: #1a1a1a; mso-line-height-alt: 14px;">
                          <p
                            style="font-size: 12px; text-align: center; line-height: 1.2; word-break: break-word; font-family: Montserrat, 'Trebuchet MS', 'Lucida Grande', 'Lucida Sans Unicode', 'Lucida Sans', Tahoma, sans-serif; mso-line-height-alt: 14px; margin: 0;">
                            0% VAT</p>
                        </div>
                      </div>
                      <!--[if mso]></td></tr></table><![endif]-->
                      <!--[if mso]>
                      <table width="100%" cellpadding="0" cellspacing="0" border="0">
                      <tr>
                        <td
                          style="padding-right: 10px; padding-left: 10px; padding-top: 10px; padding-bottom: 10px; font-family: 'Trebuchet MS', Tahoma, sans-serif">
                      <![endif]-->
                      <div
                        style="color:#1a1a1a;font-family:'Montserrat', 'Trebuchet MS', 'Lucida Grande', 'Lucida Sans Unicode', 'Lucida Sans', Tahoma, sans-serif;line-height:1.2;padding-top:10px;padding-right:10px;padding-bottom:10px;padding-left:10px;">
                        <div class='txtTinyMce-wrapper'
                             style="font-size: 12px; line-height: 1.2; font-family: 'Montserrat', 'Trebuchet MS', 'Lucida Grande', 'Lucida Sans Unicode', 'Lucida Sans', Tahoma, sans-serif; color: #1a1a1a; mso-line-height-alt: 14px;">
                          <p
                            style="font-size: 12px; text-align: center; line-height: 1.2; word-break: break-word; font-family: Montserrat, 'Trebuchet MS', 'Lucida Grande', 'Lucida Sans Unicode', 'Lucida Sans', Tahoma, sans-serif; mso-line-height-alt: 14px; margin: 0;">
                            <strong>Total:</strong></p>
                        </div>
                      </div>
                      <!--[if mso]></td></tr></table><![endif]-->
                      <!--[if (!mso)&(!IE)]><!-->
                    </div>
                    <!--<![endif]-->
                  </div>
                </div>
                <!--[if (mso)|(IE)]></td></tr></table><![endif]-->
                <!--[if (mso)|(IE)]></td>
              <td align="center" width="150"
                  style="background-color:#ffffff;width:150px; border-top: 0px solid transparent; border-left: 0px solid transparent; border-bottom: 0px solid transparent; border-right: 0px solid transparent;"
                  valign="top">
              <table width="100%" cellpadding="0" cellspacing="0" border="0">
                <tr>
                  <td style="padding-right: 0px; padding-left: 0px; padding-top:5px; padding-bottom:5px;"><![endif]-->
                <div class='col num2'
                     style='display: table-cell; vertical-align: top; max-width: 320px; min-width: 150px; width: 150px;'>
                  <div class='col_cont' style='width:100% !important;'>
                    <!--[if (!mso)&(!IE)]><!-->
                    <div
                      style='border-top:0px solid transparent; border-left:0px solid transparent; border-bottom:0px solid transparent; border-right:0px solid transparent; padding-top:5px; padding-bottom:5px; padding-right: 0px; padding-left: 0px;'>
                      <!--<![endif]-->
                      <!--[if mso]>
                      <table width="100%" cellpadding="0" cellspacing="0" border="0">
                      <tr>
                        <td
                          style="padding-right: 10px; padding-left: 10px; padding-top: 10px; padding-bottom: 10px; font-family: Tahoma, Verdana, sans-serif">
                      <![endif]-->
                      <div
                        style="color:#1a1a1a;font-family:'Roboto', Tahoma, Verdana, Segoe, sans-serif;line-height:1.2;padding-top:10px;padding-right:10px;padding-bottom:10px;padding-left:10px;">
                        <div class='txtTinyMce-wrapper'
                             style="font-size: 12px; line-height: 1.2; color: #1a1a1a; font-family: 'Roboto', Tahoma, Verdana, Segoe, sans-serif; mso-line-height-alt: 14px;">
                          <p
                            style='font-size: 12px; text-align: center; line-height: 1.2; word-break: break-word; mso-line-height-alt: 14px; margin: 0;'>
                            € ${data.order.price}</p>
                        </div>
                      </div>
                      <!--[if mso]></td></tr></table><![endif]-->
                      <!--[if mso]>
                      <table width="100%" cellpadding="0" cellspacing="0" border="0">
                      <tr>
                        <td
                          style="padding-right: 10px; padding-left: 10px; padding-top: 10px; padding-bottom: 10px; font-family: Tahoma, Verdana, sans-serif">
                      <![endif]-->
                      <div
                        style="color:#1a1a1a;font-family:'Roboto', Tahoma, Verdana, Segoe, sans-serif;line-height:1.2;padding-top:10px;padding-right:10px;padding-bottom:10px;padding-left:10px;">
                        <div class='txtTinyMce-wrapper'
                             style="font-size: 12px; line-height: 1.2; color: #1a1a1a; font-family: 'Roboto', Tahoma, Verdana, Segoe, sans-serif; mso-line-height-alt: 14px;">
                          <p
                            style='font-size: 12px; text-align: center; line-height: 1.2; word-break: break-word; mso-line-height-alt: 14px; margin: 0;'>
                            €0.00</p>
                        </div>
                      </div>
                      <!--[if mso]></td></tr></table><![endif]-->
                      <!--[if mso]>
                      <table width="100%" cellpadding="0" cellspacing="0" border="0">
                      <tr>
                        <td
                          style="padding-right: 10px; padding-left: 10px; padding-top: 10px; padding-bottom: 10px; font-family: Tahoma, Verdana, sans-serif">
                      <![endif]-->
                      <div
                        style="color:#1a1a1a;font-family:'Roboto', Tahoma, Verdana, Segoe, sans-serif;line-height:1.2;padding-top:10px;padding-right:10px;padding-bottom:10px;padding-left:10px;">
                        <div class='txtTinyMce-wrapper'
                             style="font-size: 12px; line-height: 1.2; color: #1a1a1a; font-family: 'Roboto', Tahoma, Verdana, Segoe, sans-serif; mso-line-height-alt: 14px;">
                          <p
                            style='font-size: 12px; text-align: center; line-height: 1.2; word-break: break-word; mso-line-height-alt: 14px; margin: 0;'>
                            <strong>€ ${data.order.price}</strong></p>
                        </div>
                      </div>
                      <!--[if mso]></td></tr></table><![endif]-->
                      <!--[if (!mso)&(!IE)]><!-->
                    </div>
                    <!--<![endif]-->
                  </div>
                </div>
                <!--[if (mso)|(IE)]></td></tr></table><![endif]-->
                <!--[if (mso)|(IE)]></td></tr></table></td></tr></table><![endif]-->
              </div>
            </div>
          </div>
          <div style='background-color:transparent;'>
            <div class='block-grid mixed-two-up no-stack'
                 style='min-width: 320px; max-width: 900px; overflow-wrap: break-word; word-wrap: break-word; word-break: break-word; Margin: 0 auto; background-color: #ffffff;'>
              <div style='border-collapse: collapse;display: table;width: 100%;background-color:#ffffff;'>
                <!--[if (mso)|(IE)]>
                <table width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color:transparent;">
                <tr>
                  <td align="center">
                    <table cellpadding="0" cellspacing="0" border="0" style="width:900px">
                      <tr class="layout-full-width" style="background-color:#ffffff"><![endif]-->
                <!--[if (mso)|(IE)]>
                <td align="center" width="150"
                    style="background-color:#ffffff;width:150px; border-top: 0px solid transparent; border-left: 0px solid transparent; border-bottom: 0px solid transparent; border-right: 0px solid transparent;"
                    valign="top">
                <table width="100%" cellpadding="0" cellspacing="0" border="0">
                  <tr>
                    <td
                      style="padding-right: 0px; padding-left: 0px; padding-top:5px; padding-bottom:5px;background-color:#ffffff;">
                <![endif]-->
                <div class='col num2'
                     style='display: table-cell; vertical-align: top; max-width: 320px; min-width: 150px; background-color: #ffffff; width: 150px;'>
                  <div class='col_cont' style='width:100% !important;'>
                    <!--[if (!mso)&(!IE)]><!-->
                    <div
                      style='border-top:0px solid transparent; border-left:0px solid transparent; border-bottom:0px solid transparent; border-right:0px solid transparent; padding-top:5px; padding-bottom:5px; padding-right: 0px; padding-left: 0px;'>
                      <!--<![endif]-->
                      <table border='0' cellpadding='0' cellspacing='0' class='divider' role='presentation'
                             style='table-layout: fixed; vertical-align: top; border-spacing: 0; border-collapse: collapse; mso-table-lspace: 0pt; mso-table-rspace: 0pt; min-width: 100%; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%;'
                             valign='top' width='100%'>
                        <tbody>
                        <tr style='vertical-align: top;' valign='top'>
                          <td class='divider_inner'
                              style='word-break: break-word; vertical-align: top; min-width: 100%; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; padding-top: 10px; padding-right: 10px; padding-bottom: 10px; padding-left: 10px;'
                              valign='top'>
                            <table align='center' border='0' cellpadding='0' cellspacing='0' class='divider_content'
                                   role='presentation'
                                   style='table-layout: fixed; vertical-align: top; border-spacing: 0; border-collapse: collapse; mso-table-lspace: 0pt; mso-table-rspace: 0pt; border-top: 1px solid transparent; width: 100%;'
                                   valign='top' width='100%'>
                              <tbody>
                              <tr style='vertical-align: top;' valign='top'>
                                <td
                                  style='word-break: break-word; vertical-align: top; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%;'
                                  valign='top'><span></span></td>
                              </tr>
                              </tbody>
                            </table>
                          </td>
                        </tr>
                        </tbody>
                      </table>
                      <!--[if (!mso)&(!IE)]><!-->
                    </div>
                    <!--<![endif]-->
                  </div>
                </div>
                <!--[if (mso)|(IE)]></td></tr></table><![endif]-->
                <!--[if (mso)|(IE)]></td>
              <td align="center" width="750"
                  style="background-color:#ffffff;width:750px; border-top: 0px solid transparent; border-left: 0px solid transparent; border-bottom: 0px solid transparent; border-right: 0px solid transparent;"
                  valign="top">
              <table width="100%" cellpadding="0" cellspacing="0" border="0">
                <tr>
                  <td style="padding-right: 0px; padding-left: 0px; padding-top:5px; padding-bottom:5px;"><![endif]-->
                <div class='col num10'
                     style='display: table-cell; vertical-align: top; max-width: 320px; min-width: 750px; width: 750px;'>
                  <div class='col_cont' style='width:100% !important;'>
                    <!--[if (!mso)&(!IE)]><!-->
                    <div
                      style='border-top:0px solid transparent; border-left:0px solid transparent; border-bottom:0px solid transparent; border-right:0px solid transparent; padding-top:5px; padding-bottom:5px; padding-right: 0px; padding-left: 0px;'>
                      <!--<![endif]-->
                      <!--[if mso]>
                      <table width="100%" cellpadding="0" cellspacing="0" border="0">
                      <tr>
                        <td
                          style="padding-right: 5px; padding-left: 5px; padding-top: 5px; padding-bottom: 5px; font-family: 'Trebuchet MS', Tahoma, sans-serif">
                      <![endif]-->
                      <div
                        style="color:#000000;font-family:'Montserrat', 'Trebuchet MS', 'Lucida Grande', 'Lucida Sans Unicode', 'Lucida Sans', Tahoma, sans-serif;line-height:1.2;padding-top:5px;padding-right:5px;padding-bottom:5px;padding-left:5px;">
                        <div class='txtTinyMce-wrapper'
                             style="line-height: 1.2; font-size: 12px; font-family: 'Montserrat', 'Trebuchet MS', 'Lucida Grande', 'Lucida Sans Unicode', 'Lucida Sans', Tahoma, sans-serif; color: #000000; mso-line-height-alt: 14px;">
                          <p
                            style="font-size: 10px; line-height: 1.2; word-break: break-word; text-align: left; font-family: Montserrat, 'Trebuchet MS', 'Lucida Grande', 'Lucida Sans Unicode', 'Lucida Sans', Tahoma, sans-serif; mso-line-height-alt: 12px; margin: 0;">
                            <span style='font-size: 10px;'>Sale declaration</span></p>
                        </div>
                      </div>
                      <!--[if mso]></td></tr></table><![endif]-->
                      <!--[if mso]>
                      <table width="100%" cellpadding="0" cellspacing="0" border="0">
                      <tr>
                        <td
                          style="padding-right: 10px; padding-left: 10px; padding-top: 10px; padding-bottom: 10px; font-family: 'Trebuchet MS', Tahoma, sans-serif">
                      <![endif]-->
                      <div
                        style="color:#000000;font-family:'Montserrat', 'Trebuchet MS', 'Lucida Grande', 'Lucida Sans Unicode', 'Lucida Sans', Tahoma, sans-serif;line-height:1.2;padding-top:10px;padding-right:10px;padding-bottom:10px;padding-left:10px;">
                        <div class='txtTinyMce-wrapper'
                             style="line-height: 1.2; font-size: 12px; font-family: 'Montserrat', 'Trebuchet MS', 'Lucida Grande', 'Lucida Sans Unicode', 'Lucida Sans', Tahoma, sans-serif; color: #000000; mso-line-height-alt: 14px;">
                          <p
                            style="font-size: 10px; line-height: 1.2; word-break: break-word; text-align: justify; font-family: Montserrat, 'Trebuchet MS', 'Lucida Grande', 'Lucida Sans Unicode', 'Lucida Sans', Tahoma, sans-serif; mso-line-height-alt: 12px; margin: 0;">
                            <span style='font-size: 10px;'>R.Logmans is sole holder of all IP (Intellectual property) rights within the TVS group. By paying this invoice for software services and –credits, the client declares a contractual agreement between the client(buyer) and R.Logmans(IP supplier), independent of the reselling entity within the TVS-group.</span>
                          </p>
                        </div>
                      </div>
                      <!--[if mso]></td></tr></table><![endif]-->
                      <!--[if (!mso)&(!IE)]><!-->
                    </div>
                    <!--<![endif]-->
                  </div>
                </div>
                <!--[if (mso)|(IE)]></td></tr></table><![endif]-->
                <!--[if (mso)|(IE)]></td></tr></table></td></tr></table><![endif]-->
              </div>
            </div>
          </div>
          <div style='background-color:transparent;'>
            <div class='block-grid four-up'
                 style='min-width: 320px; max-width: 900px; overflow-wrap: break-word; word-wrap: break-word; word-break: break-word; Margin: 0 auto; background-color: #ffffff;'>
              <div style='border-collapse: collapse;display: table;width: 100%;background-color:#ffffff;'>
                <!--[if (mso)|(IE)]>
                <table width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color:transparent;">
                <tr>
                  <td align="center">
                    <table cellpadding="0" cellspacing="0" border="0" style="width:900px">
                      <tr class="layout-full-width" style="background-color:#ffffff"><![endif]-->
                <!--[if (mso)|(IE)]>
                <td align="center" width="150"
                    style="background-color:#ffffff;width:150px; border-top: 0px solid transparent; border-left: 0px solid transparent; border-bottom: 0px solid transparent; border-right: 0px solid transparent;"
                    valign="top">
                <table width="100%" cellpadding="0" cellspacing="0" border="0">
                  <tr>
                    <td style="padding-right: 0px; padding-left: 0px; padding-top:5px; padding-bottom:5px;"><![endif]-->
                <div class='col num2'
                     style='display: table-cell; vertical-align: top; max-width: 320px; min-width: 150px; width: 150px;'>
                  <div class='col_cont' style='width:100% !important;'>
                    <!--[if (!mso)&(!IE)]><!-->
                    <div
                      style='border-top:0px solid transparent; border-left:0px solid transparent; border-bottom:0px solid transparent; border-right:0px solid transparent; padding-top:5px; padding-bottom:5px; padding-right: 0px; padding-left: 0px;'>
                      <!--<![endif]-->
                      <table border='0' cellpadding='0' cellspacing='0' class='divider' role='presentation'
                             style='table-layout: fixed; vertical-align: top; border-spacing: 0; border-collapse: collapse; mso-table-lspace: 0pt; mso-table-rspace: 0pt; min-width: 100%; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%;'
                             valign='top' width='100%'>
                        <tbody>
                        <tr style='vertical-align: top;' valign='top'>
                          <td class='divider_inner'
                              style='word-break: break-word; vertical-align: top; min-width: 100%; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; padding-top: 10px; padding-right: 10px; padding-bottom: 10px; padding-left: 10px;'
                              valign='top'>
                            <table align='center' border='0' cellpadding='0' cellspacing='0' class='divider_content'
                                   role='presentation'
                                   style='table-layout: fixed; vertical-align: top; border-spacing: 0; border-collapse: collapse; mso-table-lspace: 0pt; mso-table-rspace: 0pt; border-top: 1px solid transparent; width: 100%;'
                                   valign='top' width='100%'>
                              <tbody>
                              <tr style='vertical-align: top;' valign='top'>
                                <td
                                  style='word-break: break-word; vertical-align: top; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%;'
                                  valign='top'><span></span></td>
                              </tr>
                              </tbody>
                            </table>
                          </td>
                        </tr>
                        </tbody>
                      </table>
                      <!--[if (!mso)&(!IE)]><!-->
                    </div>
                    <!--<![endif]-->
                  </div>
                </div>
                <!--[if (mso)|(IE)]></td></tr></table><![endif]-->
                <!--[if (mso)|(IE)]></td>
              <td align="center" width="150"
                  style="background-color:#ffffff;width:150px; border-top: 0px solid transparent; border-left: 0px solid transparent; border-bottom: 0px solid transparent; border-right: 0px solid transparent;"
                  valign="top">
              <table width="100%" cellpadding="0" cellspacing="0" border="0">
                <tr>
                  <td style="padding-right: 0px; padding-left: 0px; padding-top:5px; padding-bottom:5px;"><![endif]-->
                <div class='col num2'
                     style='display: table-cell; vertical-align: top; max-width: 320px; min-width: 150px; width: 150px;'>
                  <div class='col_cont' style='width:100% !important;'>
                    <!--[if (!mso)&(!IE)]><!-->
                    <div
                      style='border-top:0px solid transparent; border-left:0px solid transparent; border-bottom:0px solid transparent; border-right:0px solid transparent; padding-top:5px; padding-bottom:5px; padding-right: 0px; padding-left: 0px;'>
                      <!--<![endif]-->
                      <!--[if mso]>
                      <table width="100%" cellpadding="0" cellspacing="0" border="0">
                      <tr>
                        <td
                          style="padding-right: 0px; padding-left: 0px; padding-top: 0px; padding-bottom: 0px; font-family: 'Trebuchet MS', Tahoma, sans-serif">
                      <![endif]-->
                      <div
                        style="color:#000000;font-family:'Montserrat', 'Trebuchet MS', 'Lucida Grande', 'Lucida Sans Unicode', 'Lucida Sans', Tahoma, sans-serif;letter-spacing:0px;line-height:2;padding-top:0px;padding-right:0px;padding-bottom:0px;padding-left:0px;">
                        <div class='txtTinyMce-wrapper'
                             style="font-size: 12px; line-height: 2; font-family: 'Montserrat', 'Trebuchet MS', 'Lucida Grande', 'Lucida Sans Unicode', 'Lucida Sans', Tahoma, sans-serif; color: #000000; letter-spacing: 0px; mso-line-height-alt: 24px;">
                          <p
                            style="font-size: 12px; line-height: 2; word-break: break-word; text-align: left; font-family: Montserrat, 'Trebuchet MS', 'Lucida Grande', 'Lucida Sans Unicode', 'Lucida Sans', Tahoma, sans-serif; mso-line-height-alt: 24px; letter-spacing: normal; margin: 0;">
                            <strong>Invoice to</strong></p>
                        </div>
                      </div>
                      <!--[if mso]></td></tr></table><![endif]-->
                      <table border='0' cellpadding='0' cellspacing='0' class='divider' role='presentation'
                             style='table-layout: fixed; vertical-align: top; border-spacing: 0; border-collapse: collapse; mso-table-lspace: 0pt; mso-table-rspace: 0pt; min-width: 100%; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%;'
                             valign='top' width='100%'>
                        <tbody>
                        <tr style='vertical-align: top;' valign='top'>
                          <td class='divider_inner'
                              style='word-break: break-word; vertical-align: top; min-width: 100%; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; padding-top: 10px; padding-right: 0px; padding-bottom: 10px; padding-left: 10px;'
                              valign='top'>
                            <table align='center' border='0' cellpadding='0' cellspacing='0' class='divider_content'
                                   role='presentation'
                                   style='table-layout: fixed; vertical-align: top; border-spacing: 0; border-collapse: collapse; mso-table-lspace: 0pt; mso-table-rspace: 0pt; border-top: 1px solid transparent; width: 100%;'
                                   valign='top' width='100%'>
                              <tbody>
                              <tr style='vertical-align: top;' valign='top'>
                                <td
                                  style='word-break: break-word; vertical-align: top; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%;'
                                  valign='top'><span></span></td>
                              </tr>
                              </tbody>
                            </table>
                          </td>
                        </tr>
                        </tbody>
                      </table>
                      <!--[if mso]>
                      <table width="100%" cellpadding="0" cellspacing="0" border="0">
                      <tr>
                        <td
                          style="padding-right: 0px; padding-left: 0px; padding-top: 0px; padding-bottom: 0px; font-family: 'Trebuchet MS', Tahoma, sans-serif">
                      <![endif]-->
                      <div
                        style="color:#000000;font-family:'Montserrat', 'Trebuchet MS', 'Lucida Grande', 'Lucida Sans Unicode', 'Lucida Sans', Tahoma, sans-serif;letter-spacing:0px;line-height:1.5;padding-top:0px;padding-right:0px;padding-bottom:0px;padding-left:0px;">
                        <div class='txtTinyMce-wrapper'
                             style="font-size: 12px; line-height: 1.5; font-family: 'Montserrat', 'Trebuchet MS', 'Lucida Grande', 'Lucida Sans Unicode', 'Lucida Sans', Tahoma, sans-serif; color: #000000; letter-spacing: 0px; mso-line-height-alt: 18px;">
                          <p
                            style="font-size: 12px; line-height: 1.5; word-break: break-word; text-align: left; font-family: Montserrat, 'Trebuchet MS', 'Lucida Grande', 'Lucida Sans Unicode', 'Lucida Sans', Tahoma, sans-serif; mso-line-height-alt: 18px; letter-spacing: normal; margin: 0;">
                            <strong>Company name:</strong></p>
                        </div>
                      </div>
                      <!--[if mso]></td></tr></table><![endif]-->
                      <!--[if mso]>
                      <table width="100%" cellpadding="0" cellspacing="0" border="0">
                      <tr>
                        <td
                          style="padding-right: 5px; padding-left: 0px; padding-top: 0px; padding-bottom: 0px; font-family: 'Trebuchet MS', Tahoma, sans-serif">
                      <![endif]-->
                      <div
                        style="color:#000000;font-family:'Montserrat', 'Trebuchet MS', 'Lucida Grande', 'Lucida Sans Unicode', 'Lucida Sans', Tahoma, sans-serif;letter-spacing:0px;line-height:1.5;padding-top:0px;padding-right:5px;padding-bottom:0px;padding-left:0px;">
                        <div class='txtTinyMce-wrapper'
                             style="font-size: 12px; line-height: 1.5; font-family: 'Montserrat', 'Trebuchet MS', 'Lucida Grande', 'Lucida Sans Unicode', 'Lucida Sans', Tahoma, sans-serif; color: #000000; letter-spacing: 0px; mso-line-height-alt: 18px;">
                          <p
                            style="font-size: 12px; line-height: 1.5; word-break: break-word; text-align: left; font-family: Montserrat, 'Trebuchet MS', 'Lucida Grande', 'Lucida Sans Unicode', 'Lucida Sans', Tahoma, sans-serif; mso-line-height-alt: 18px; letter-spacing: normal; margin: 0;">
                            <strong>Attention to:</strong></p>
                        </div>
                      </div>
                      <!--[if mso]></td></tr></table><![endif]-->
                      <!--[if mso]>
                      <table width="100%" cellpadding="0" cellspacing="0" border="0">
                      <tr>
                        <td
                          style="padding-right: 0px; padding-left: 0px; padding-top: 0px; padding-bottom: 0px; font-family: 'Trebuchet MS', Tahoma, sans-serif">
                      <![endif]-->
                      <div
                        style="color:#000000;font-family:'Montserrat', 'Trebuchet MS', 'Lucida Grande', 'Lucida Sans Unicode', 'Lucida Sans', Tahoma, sans-serif;letter-spacing:0px;line-height:1.5;padding-top:0px;padding-right:0px;padding-bottom:0px;padding-left:0px;">
                        <div class='txtTinyMce-wrapper'
                             style="font-size: 12px; line-height: 1.5; font-family: 'Montserrat', 'Trebuchet MS', 'Lucida Grande', 'Lucida Sans Unicode', 'Lucida Sans', Tahoma, sans-serif; color: #000000; letter-spacing: 0px; mso-line-height-alt: 18px;">
                          <p
                            style="font-size: 12px; line-height: 1.5; word-break: break-word; text-align: left; font-family: Montserrat, 'Trebuchet MS', 'Lucida Grande', 'Lucida Sans Unicode', 'Lucida Sans', Tahoma, sans-serif; mso-line-height-alt: 18px; letter-spacing: normal; margin: 0;">
                            <strong>Address 1:</strong></p>
                        </div>
                      </div>
                      <!--[if mso]></td></tr></table><![endif]-->
                      <!--[if mso]>
                      <table width="100%" cellpadding="0" cellspacing="0" border="0">
                      <tr>
                        <td
                          style="padding-right: 0px; padding-left: 0px; padding-top: 0px; padding-bottom: 0px; font-family: 'Trebuchet MS', Tahoma, sans-serif">
                      <![endif]-->
                      <div
                        style="color:#000000;font-family:'Montserrat', 'Trebuchet MS', 'Lucida Grande', 'Lucida Sans Unicode', 'Lucida Sans', Tahoma, sans-serif;letter-spacing:0px;line-height:1.5;padding-top:0px;padding-right:0px;padding-bottom:0px;padding-left:0px;">
                        <div class='txtTinyMce-wrapper'
                             style="font-size: 12px; line-height: 1.5; font-family: 'Montserrat', 'Trebuchet MS', 'Lucida Grande', 'Lucida Sans Unicode', 'Lucida Sans', Tahoma, sans-serif; color: #000000; letter-spacing: 0px; mso-line-height-alt: 18px;">
                          <p
                            style="font-size: 12px; line-height: 1.5; word-break: break-word; text-align: left; font-family: Montserrat, 'Trebuchet MS', 'Lucida Grande', 'Lucida Sans Unicode', 'Lucida Sans', Tahoma, sans-serif; mso-line-height-alt: 18px; letter-spacing: normal; margin: 0;">
                            <strong>Address 2:</strong></p>
                        </div>
                      </div>
                      <!--[if mso]></td></tr></table><![endif]-->
                      <!--[if mso]>
                      <table width="100%" cellpadding="0" cellspacing="0" border="0">
                      <tr>
                        <td
                          style="padding-right: 0px; padding-left: 0px; padding-top: 0px; padding-bottom: 0px; font-family: 'Trebuchet MS', Tahoma, sans-serif">
                      <![endif]-->
                      <div
                        style="color:#000000;font-family:'Montserrat', 'Trebuchet MS', 'Lucida Grande', 'Lucida Sans Unicode', 'Lucida Sans', Tahoma, sans-serif;letter-spacing:0px;line-height:1.5;padding-top:0px;padding-right:0px;padding-bottom:0px;padding-left:0px;">
                        <div class='txtTinyMce-wrapper'
                             style="font-size: 12px; line-height: 1.5; font-family: 'Montserrat', 'Trebuchet MS', 'Lucida Grande', 'Lucida Sans Unicode', 'Lucida Sans', Tahoma, sans-serif; color: #000000; letter-spacing: 0px; mso-line-height-alt: 18px;">
                          <p
                            style="font-size: 12px; line-height: 1.5; word-break: break-word; text-align: left; font-family: Montserrat, 'Trebuchet MS', 'Lucida Grande', 'Lucida Sans Unicode', 'Lucida Sans', Tahoma, sans-serif; mso-line-height-alt: 18px; letter-spacing: normal; margin: 0;">
                            <strong>City:</strong></p>
                        </div>
                      </div>
                      <!--[if mso]></td></tr></table><![endif]-->
                      <!--[if mso]>
                      <table width="100%" cellpadding="0" cellspacing="0" border="0">
                      <tr>
                        <td
                          style="padding-right: 0px; padding-left: 0px; padding-top: 0px; padding-bottom: 0px; font-family: 'Trebuchet MS', Tahoma, sans-serif">
                      <![endif]-->
                      <div
                        style="color:#000000;font-family:'Montserrat', 'Trebuchet MS', 'Lucida Grande', 'Lucida Sans Unicode', 'Lucida Sans', Tahoma, sans-serif;letter-spacing:0px;line-height:1.5;padding-top:0px;padding-right:0px;padding-bottom:0px;padding-left:0px;">
                        <div class='txtTinyMce-wrapper'
                             style="font-size: 12px; line-height: 1.5; font-family: 'Montserrat', 'Trebuchet MS', 'Lucida Grande', 'Lucida Sans Unicode', 'Lucida Sans', Tahoma, sans-serif; color: #000000; letter-spacing: 0px; mso-line-height-alt: 18px;">
                          <p
                            style="font-size: 12px; line-height: 1.5; word-break: break-word; text-align: left; font-family: Montserrat, 'Trebuchet MS', 'Lucida Grande', 'Lucida Sans Unicode', 'Lucida Sans', Tahoma, sans-serif; mso-line-height-alt: 18px; letter-spacing: normal; margin: 0;">
                            <strong>Zip code:</strong></p>
                        </div>
                      </div>
                      <!--[if mso]></td></tr></table><![endif]-->
                      <!--[if mso]>
                      <table width="100%" cellpadding="0" cellspacing="0" border="0">
                      <tr>
                        <td
                          style="padding-right: 0px; padding-left: 0px; padding-top: 0px; padding-bottom: 0px; font-family: 'Trebuchet MS', Tahoma, sans-serif">
                      <![endif]-->
                      <div
                        style="color:#000000;font-family:'Montserrat', 'Trebuchet MS', 'Lucida Grande', 'Lucida Sans Unicode', 'Lucida Sans', Tahoma, sans-serif;letter-spacing:0px;line-height:1.5;padding-top:0px;padding-right:0px;padding-bottom:0px;padding-left:0px;">
                        <div class='txtTinyMce-wrapper'
                             style="font-size: 12px; line-height: 1.5; font-family: 'Montserrat', 'Trebuchet MS', 'Lucida Grande', 'Lucida Sans Unicode', 'Lucida Sans', Tahoma, sans-serif; color: #000000; letter-spacing: 0px; mso-line-height-alt: 18px;">
                          <p
                            style="font-size: 12px; line-height: 1.5; word-break: break-word; text-align: left; font-family: Montserrat, 'Trebuchet MS', 'Lucida Grande', 'Lucida Sans Unicode', 'Lucida Sans', Tahoma, sans-serif; mso-line-height-alt: 18px; letter-spacing: normal; margin: 0;">
                            <strong>Country:</strong></p>
                        </div>
                      </div>
                      <!--[if mso]></td></tr></table><![endif]-->
                      <table border='0' cellpadding='0' cellspacing='0' class='divider' role='presentation'
                             style='table-layout: fixed; vertical-align: top; border-spacing: 0; border-collapse: collapse; mso-table-lspace: 0pt; mso-table-rspace: 0pt; min-width: 100%; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%;'
                             valign='top' width='100%'>
                        <tbody>
                        <tr style='vertical-align: top;' valign='top'>
                          <td class='divider_inner'
                              style='word-break: break-word; vertical-align: top; min-width: 100%; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; padding-top: 10px; padding-right: 10px; padding-bottom: 10px; padding-left: 10px;'
                              valign='top'>
                            <table align='center' border='0' cellpadding='0' cellspacing='0' class='divider_content'
                                   role='presentation'
                                   style='table-layout: fixed; vertical-align: top; border-spacing: 0; border-collapse: collapse; mso-table-lspace: 0pt; mso-table-rspace: 0pt; border-top: 1px solid transparent; width: 100%;'
                                   valign='top' width='100%'>
                              <tbody>
                              <tr style='vertical-align: top;' valign='top'>
                                <td
                                  style='word-break: break-word; vertical-align: top; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%;'
                                  valign='top'><span></span></td>
                              </tr>
                              </tbody>
                            </table>
                          </td>
                        </tr>
                        </tbody>
                      </table>
                      <!--[if (!mso)&(!IE)]><!-->
                    </div>
                    <!--<![endif]-->
                  </div>
                </div>
                <!--[if (mso)|(IE)]></td></tr></table><![endif]-->
                <!--[if (mso)|(IE)]></td>
              <td align="center" width="300"
                  style="background-color:#ffffff;width:300px; border-top: 0px solid transparent; border-left: 0px solid transparent; border-bottom: 0px solid transparent; border-right: 0px solid transparent;"
                  valign="top">
              <table width="100%" cellpadding="0" cellspacing="0" border="0">
                <tr>
                  <td style="padding-right: 0px; padding-left: 0px; padding-top:5px; padding-bottom:5px;"><![endif]-->
                <div class='col num4'
                     style='display: table-cell; vertical-align: top; max-width: 320px; min-width: 300px; width: 300px;'>
                  <div class='col_cont' style='width:100% !important;'>
                    <!--[if (!mso)&(!IE)]><!-->
                    <div v-if='company !== undefined'
                      style='border-top:0px solid transparent; border-left:0px solid transparent; border-bottom:0px solid transparent; border-right:0px solid transparent; padding-top:5px; padding-bottom:5px; padding-right: 0px; padding-left: 0px;'>
                      <!--<![endif]-->
                      <table border='0' cellpadding='0' cellspacing='0' class='divider' role='presentation'
                             style='table-layout: fixed; vertical-align: top; border-spacing: 0; border-collapse: collapse; mso-table-lspace: 0pt; mso-table-rspace: 0pt; min-width: 100%; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%;'
                             valign='top' width='100%'>
                        <tbody>
                        <tr style='vertical-align: top;' valign='top'>
                          <td class='divider_inner'
                              style='word-break: break-word; vertical-align: top; min-width: 100%; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; padding-top: 10px; padding-right: 10px; padding-bottom: 10px; padding-left: 10px;'
                              valign='top'>
                            <table align='center' border='0' cellpadding='0' cellspacing='0' class='divider_content'
                                   role='presentation'
                                   style='table-layout: fixed; vertical-align: top; border-spacing: 0; border-collapse: collapse; mso-table-lspace: 0pt; mso-table-rspace: 0pt; border-top: 1px solid transparent; width: 100%;'
                                   valign='top' width='100%'>
                              <tbody>
                              <tr style='vertical-align: top;' valign='top'>
                                <td
                                  style='word-break: break-word; vertical-align: top; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%;'
                                  valign='top'><span></span></td>
                              </tr>
                              </tbody>
                            </table>
                          </td>
                        </tr>
                        </tbody>
                      </table>
                      <table border='0' cellpadding='0' cellspacing='0' class='divider' role='presentation'
                             style='table-layout: fixed; vertical-align: top; border-spacing: 0; border-collapse: collapse; mso-table-lspace: 0pt; mso-table-rspace: 0pt; min-width: 100%; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%;'
                             valign='top' width='100%'>
                        <tbody>
                        <tr style='vertical-align: top;' valign='top'>
                          <td class='divider_inner'
                              style='word-break: break-word; vertical-align: top; min-width: 100%; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; padding-top: 10px; padding-right: 10px; padding-bottom: 10px; padding-left: 10px;'
                              valign='top'>
                            <table align='center' border='0' cellpadding='0' cellspacing='0' class='divider_content'
                                   role='presentation'
                                   style='table-layout: fixed; vertical-align: top; border-spacing: 0; border-collapse: collapse; mso-table-lspace: 0pt; mso-table-rspace: 0pt; border-top: 1px solid transparent; width: 100%;'
                                   valign='top' width='100%'>
                              <tbody>
                              <tr style='vertical-align: top;' valign='top'>
                                <td
                                  style='word-break: break-word; vertical-align: top; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%;'
                                  valign='top'><span></span></td>
                              </tr>
                              </tbody>
                            </table>
                          </td>
                        </tr>
                        </tbody>
                      </table>
                      <!--[if mso]>
                      <table width="100%" cellpadding="0" cellspacing="0" border="0">
                      <tr>
                        <td
                          style="padding-right: 0px; padding-left: 0px; padding-top: 0px; padding-bottom: 0px; font-family: 'Trebuchet MS', Tahoma, sans-serif">
                      <![endif]-->
                      <div
                        style="color:#000000;font-family:'Montserrat', 'Trebuchet MS', 'Lucida Grande', 'Lucida Sans Unicode', 'Lucida Sans', Tahoma, sans-serif;letter-spacing:0px;line-height:1.5;padding-top:0px;padding-right:0px;padding-bottom:0px;padding-left:0px;">
                        <div class='txtTinyMce-wrapper'
                             style="font-size: 12px; line-height: 1.5; font-family: 'Montserrat', 'Trebuchet MS', 'Lucida Grande', 'Lucida Sans Unicode', 'Lucida Sans', Tahoma, sans-serif; color: #000000; letter-spacing: 0px; mso-line-height-alt: 18px;">
                          <p
                            style="font-size: 12px; line-height: 1.5; word-break: break-word; text-align: left; font-family: Montserrat, 'Trebuchet MS', 'Lucida Grande', 'Lucida Sans Unicode', 'Lucida Sans', Tahoma, sans-serif; mso-line-height-alt: 18px; letter-spacing: normal; margin: 0;">
                            <strong>${data.company.nameCompany}</strong></p>
                        </div>
                      </div>
                      <!--[if mso]></td></tr></table><![endif]-->
                      <!--[if mso]>
                      <table width="100%" cellpadding="0" cellspacing="0" border="0">
                      <tr>
                        <td
                          style="padding-right: 0px; padding-left: 0px; padding-top: 0px; padding-bottom: 0px; font-family: 'Trebuchet MS', Tahoma, sans-serif">
                      <![endif]-->
                      <div
                        style="color:#000000;font-family:'Montserrat', 'Trebuchet MS', 'Lucida Grande', 'Lucida Sans Unicode', 'Lucida Sans', Tahoma, sans-serif;letter-spacing:0px;line-height:1.5;padding-top:0px;padding-right:0px;padding-bottom:0px;padding-left:0px;">
                        <div class='txtTinyMce-wrapper'
                             style="font-size: 12px; line-height: 1.5; font-family: 'Montserrat', 'Trebuchet MS', 'Lucida Grande', 'Lucida Sans Unicode', 'Lucida Sans', Tahoma, sans-serif; color: #000000; letter-spacing: 0px; mso-line-height-alt: 18px;">
                          <p
                            style="font-size: 12px; line-height: 1.5; word-break: break-word; text-align: left; font-family: Montserrat, 'Trebuchet MS', 'Lucida Grande', 'Lucida Sans Unicode', 'Lucida Sans', Tahoma, sans-serif; mso-line-height-alt: 18px; letter-spacing: normal; margin: 0;">
                            <strong>Attn. ${data.company.legalRepresentative}</strong></p>
                        </div>
                      </div>
                      <!--[if mso]></td></tr></table><![endif]-->
                      <!--[if mso]>
                      <table width="100%" cellpadding="0" cellspacing="0" border="0">
                      <tr>
                        <td
                          style="padding-right: 0px; padding-left: 0px; padding-top: 0px; padding-bottom: 0px; font-family: 'Trebuchet MS', Tahoma, sans-serif">
                      <![endif]-->
                      <div
                        style="color:#000000;font-family:'Montserrat', 'Trebuchet MS', 'Lucida Grande', 'Lucida Sans Unicode', 'Lucida Sans', Tahoma, sans-serif;letter-spacing:0px;line-height:1.5;padding-top:0px;padding-right:0px;padding-bottom:0px;padding-left:0px;">
                        <div class='txtTinyMce-wrapper'
                             style="font-size: 12px; line-height: 1.5; font-family: 'Montserrat', 'Trebuchet MS', 'Lucida Grande', 'Lucida Sans Unicode', 'Lucida Sans', Tahoma, sans-serif; color: #000000; letter-spacing: 0px; mso-line-height-alt: 18px;">
                          <p
                            style="font-size: 12px; line-height: 1.5; word-break: break-word; text-align: left; font-family: Montserrat, 'Trebuchet MS', 'Lucida Grande', 'Lucida Sans Unicode', 'Lucida Sans', Tahoma, sans-serif; mso-line-height-alt: 18px; letter-spacing: normal; margin: 0;">
                            <strong>${data.company.address}</strong></p>
                        </div>
                      </div>
                      <!--[if mso]></td></tr></table><![endif]-->
                      <!--[if mso]>
                      <table width="100%" cellpadding="0" cellspacing="0" border="0">
                      <tr>
                        <td
                          style="padding-right: 0px; padding-left: 0px; padding-top: 0px; padding-bottom: 0px; font-family: 'Trebuchet MS', Tahoma, sans-serif">
                      <![endif]-->
                      <div
                        style="color:#000000;font-family:'Montserrat', 'Trebuchet MS', 'Lucida Grande', 'Lucida Sans Unicode', 'Lucida Sans', Tahoma, sans-serif;letter-spacing:0px;line-height:1.5;padding-top:0px;padding-right:0px;padding-bottom:0px;padding-left:0px;">
                        <div class='txtTinyMce-wrapper'
                             style="font-size: 12px; line-height: 1.5; font-family: 'Montserrat', 'Trebuchet MS', 'Lucida Grande', 'Lucida Sans Unicode', 'Lucida Sans', Tahoma, sans-serif; color: #000000; letter-spacing: 0px; mso-line-height-alt: 18px;">
                          <p
                            style="font-size: 12px; line-height: 1.5; word-break: break-word; text-align: left; font-family: Montserrat, 'Trebuchet MS', 'Lucida Grande', 'Lucida Sans Unicode', 'Lucida Sans', Tahoma, sans-serif; mso-line-height-alt: 18px; letter-spacing: normal; margin: 0;">
                            <strong>${data.company.address}</strong></p>
                        </div>
                      </div>
                      <!--[if mso]></td></tr></table><![endif]-->
                      <!--[if mso]>
                      <table width="100%" cellpadding="0" cellspacing="0" border="0">
                      <tr>
                        <td
                          style="padding-right: 0px; padding-left: 0px; padding-top: 0px; padding-bottom: 0px; font-family: 'Trebuchet MS', Tahoma, sans-serif">
                      <![endif]-->
                      <div
                        style="color:#000000;font-family:'Montserrat', 'Trebuchet MS', 'Lucida Grande', 'Lucida Sans Unicode', 'Lucida Sans', Tahoma, sans-serif;letter-spacing:0px;line-height:1.5;padding-top:0px;padding-right:0px;padding-bottom:0px;padding-left:0px;">
                        <div class='txtTinyMce-wrapper'
                             style="font-size: 12px; line-height: 1.5; font-family: 'Montserrat', 'Trebuchet MS', 'Lucida Grande', 'Lucida Sans Unicode', 'Lucida Sans', Tahoma, sans-serif; color: #000000; letter-spacing: 0px; mso-line-height-alt: 18px;">
                          <p
                            style="font-size: 12px; line-height: 1.5; word-break: break-word; text-align: left; font-family: Montserrat, 'Trebuchet MS', 'Lucida Grande', 'Lucida Sans Unicode', 'Lucida Sans', Tahoma, sans-serif; mso-line-height-alt: 18px; letter-spacing: normal; margin: 0;">
                            <strong> ${data.company.city}</strong></p>
                        </div>
                      </div>
                      <!--[if mso]></td></tr></table><![endif]-->
                      <!--[if mso]>
                      <table width="100%" cellpadding="0" cellspacing="0" border="0">
                      <tr>
                        <td
                          style="padding-right: 0px; padding-left: 0px; padding-top: 0px; padding-bottom: 0px; font-family: 'Trebuchet MS', Tahoma, sans-serif">
                      <![endif]-->
                      <div
                        style="color:#000000;font-family:'Montserrat', 'Trebuchet MS', 'Lucida Grande', 'Lucida Sans Unicode', 'Lucida Sans', Tahoma, sans-serif;letter-spacing:0px;line-height:1.5;padding-top:0px;padding-right:0px;padding-bottom:0px;padding-left:0px;">
                        <div class='txtTinyMce-wrapper'
                             style="font-size: 12px; line-height: 1.5; font-family: 'Montserrat', 'Trebuchet MS', 'Lucida Grande', 'Lucida Sans Unicode', 'Lucida Sans', Tahoma, sans-serif; color: #000000; letter-spacing: 0px; mso-line-height-alt: 18px;">
                          <p
                            style="font-size: 12px; line-height: 1.5; word-break: break-word; text-align: left; font-family: Montserrat, 'Trebuchet MS', 'Lucida Grande', 'Lucida Sans Unicode', 'Lucida Sans', Tahoma, sans-serif; mso-line-height-alt: 18px; letter-spacing: normal; margin: 0;">
                            <strong>${data.company.zipCode}</strong></p>
                        </div>
                      </div>
                      <!--[if mso]></td></tr></table><![endif]-->
                      <!--[if mso]>
                      <table width="100%" cellpadding="0" cellspacing="0" border="0">
                      <tr>
                        <td
                          style="padding-right: 0px; padding-left: 0px; padding-top: 0px; padding-bottom: 0px; font-family: 'Trebuchet MS', Tahoma, sans-serif">
                      <![endif]-->
                      <div
                        style="color:#000000;font-family:'Montserrat', 'Trebuchet MS', 'Lucida Grande', 'Lucida Sans Unicode', 'Lucida Sans', Tahoma, sans-serif;letter-spacing:0px;line-height:1.5;padding-top:0px;padding-right:0px;padding-bottom:0px;padding-left:0px;">
                        <div class='txtTinyMce-wrapper'
                             style="font-size: 12px; line-height: 1.5; font-family: 'Montserrat', 'Trebuchet MS', 'Lucida Grande', 'Lucida Sans Unicode', 'Lucida Sans', Tahoma, sans-serif; color: #000000; letter-spacing: 0px; mso-line-height-alt: 18px;">
                          <p
                            style="font-size: 12px; line-height: 1.5; word-break: break-word; text-align: left; font-family: Montserrat, 'Trebuchet MS', 'Lucida Grande', 'Lucida Sans Unicode', 'Lucida Sans', Tahoma, sans-serif; mso-line-height-alt: 18px; letter-spacing: normal; margin: 0;">
                            <strong>${data.company.country}</strong></p>
                        </div>
                      </div>
                      <!--[if mso]></td></tr></table><![endif]-->
                      <!--[if (!mso)&(!IE)]><!-->
                    </div>
                    <div v-if='company=== undefined'>
                      
                    </div>
                    <!--<![endif]-->
                  </div>
                </div>
                <!--[if (mso)|(IE)]></td></tr></table><![endif]-->
                <!--[if (mso)|(IE)]></td>
              <td align="center" width="300"
                  style="background-color:#ffffff;width:300px; border-top: 0px solid transparent; border-left: 0px solid transparent; border-bottom: 0px solid transparent; border-right: 0px solid transparent;"
                  valign="top">
              <table width="100%" cellpadding="0" cellspacing="0" border="0">
                <tr>
                  <td style="padding-right: 0px; padding-left: 0px; padding-top:5px; padding-bottom:5px;"><![endif]-->
                <div class='col num4'
                     style='display: table-cell; vertical-align: top; max-width: 320px; min-width: 300px; width: 300px;'>
                  <div class='col_cont' style='width:100% !important;'>
                    <!--[if (!mso)&(!IE)]><!-->
                    <div
                      style='border-top:0px solid transparent; border-left:0px solid transparent; border-bottom:0px solid transparent; border-right:0px solid transparent; padding-top:5px; padding-bottom:5px; padding-right: 0px; padding-left: 0px;'>
                      <!--<![endif]-->
                      <!--[if mso]>
                      <table width="100%" cellpadding="0" cellspacing="0" border="0">
                      <tr>
                        <td
                          style="padding-right: 0px; padding-left: 0px; padding-top: 0px; padding-bottom: 0px; font-family: 'Trebuchet MS', Tahoma, sans-serif">
                      <![endif]-->
                      <div
                        style="color:#000000;font-family:'Montserrat', 'Trebuchet MS', 'Lucida Grande', 'Lucida Sans Unicode', 'Lucida Sans', Tahoma, sans-serif;letter-spacing:0px;line-height:2;padding-top:0px;padding-right:0px;padding-bottom:0px;padding-left:0px;">
                        <div class='txtTinyMce-wrapper'
                             style="font-size: 12px; line-height: 2; font-family: 'Montserrat', 'Trebuchet MS', 'Lucida Grande', 'Lucida Sans Unicode', 'Lucida Sans', Tahoma, sans-serif; color: #000000; letter-spacing: 0px; mso-line-height-alt: 24px;">
                          <p
                            style="font-size: 12px; line-height: 2; word-break: break-word; text-align: left; font-family: Montserrat, 'Trebuchet MS', 'Lucida Grande', 'Lucida Sans Unicode', 'Lucida Sans', Tahoma, sans-serif; mso-line-height-alt: 24px; letter-spacing: normal; margin: 0;">
                            <strong>Disclaimer &amp; info</strong></p>
                        </div>
                      </div>
                      <!--[if mso]></td></tr></table><![endif]-->
                      <table border='0' cellpadding='0' cellspacing='0' class='divider' role='presentation'
                             style='table-layout: fixed; vertical-align: top; border-spacing: 0; border-collapse: collapse; mso-table-lspace: 0pt; mso-table-rspace: 0pt; min-width: 100%; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%;'
                             valign='top' width='100%'>
                        <tbody>
                        <tr style='vertical-align: top;' valign='top'>
                          <td class='divider_inner'
                              style='word-break: break-word; vertical-align: top; min-width: 100%; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; padding-top: 10px; padding-right: 10px; padding-bottom: 10px; padding-left: 10px;'
                              valign='top'>
                            <table align='center' border='0' cellpadding='0' cellspacing='0' class='divider_content'
                                   role='presentation'
                                   style='table-layout: fixed; vertical-align: top; border-spacing: 0; border-collapse: collapse; mso-table-lspace: 0pt; mso-table-rspace: 0pt; border-top: 1px solid transparent; width: 100%;'
                                   valign='top' width='100%'>
                              <tbody>
                              <tr style='vertical-align: top;' valign='top'>
                                <td
                                  style='word-break: break-word; vertical-align: top; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%;'
                                  valign='top'><span></span></td>
                              </tr>
                              </tbody>
                            </table>
                          </td>
                        </tr>
                        </tbody>
                      </table>
                      <!--[if mso]>
                      <table width="100%" cellpadding="0" cellspacing="0" border="0">
                      <tr>
                        <td
                          style="padding-right: 20px; padding-left: 20px; padding-top: 20px; padding-bottom: 20px; font-family: 'Trebuchet MS', Tahoma, sans-serif">
                      <![endif]-->
                      <div
                        style="color:#000000;font-family:'Montserrat', 'Trebuchet MS', 'Lucida Grande', 'Lucida Sans Unicode', 'Lucida Sans', Tahoma, sans-serif;letter-spacing:0px;line-height:1.2;padding-top:20px;padding-right:20px;padding-bottom:20px;padding-left:20px;">
                        <div class='txtTinyMce-wrapper'
                             style="font-size: 12px; line-height: 1.2; font-family: 'Montserrat', 'Trebuchet MS', 'Lucida Grande', 'Lucida Sans Unicode', 'Lucida Sans', Tahoma, sans-serif; color: #000000; letter-spacing: 0px; mso-line-height-alt: 14px;">
                          <p
                            style="font-size: 10px; line-height: 1.2; word-break: break-word; text-align: left; font-family: Montserrat, 'Trebuchet MS', 'Lucida Grande', 'Lucida Sans Unicode', 'Lucida Sans', Tahoma, sans-serif; mso-line-height-alt: 12px; letter-spacing: normal; margin: 0;">
                            <span style='font-size: 10px;'>This invoice has an expiry date of 14 days. We kindly request to pay within this period. </span><span
                            style='font-size: 10px;'>The system will automatically detect your payment and add the credits to your balance. When an (incorrect) payment is received, you will be informed by the system immediately. </span>
                          </p>
                        </div>
                      </div>
                      <!--[if mso]></td></tr></table><![endif]-->
                      <!--[if (!mso)&(!IE)]><!-->
                    </div>
                    <!--<![endif]-->
                  </div>
                </div>
                <!--[if (mso)|(IE)]></td></tr></table><![endif]-->
                <!--[if (mso)|(IE)]></td></tr></table></td></tr></table><![endif]-->
              </div>
            </div>
          </div>
          <div style='background-color:transparent;'>
            <div class='block-grid no-stack'
                 style='min-width: 320px; max-width: 900px; overflow-wrap: break-word; word-wrap: break-word; word-break: break-word; Margin: 0 auto; background-color: #ffffff;'>
              <div style='border-collapse: collapse;display: table;width: 100%;background-color:#ffffff;'>
                <!--[if (mso)|(IE)]>
                <table width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color:transparent;">
                <tr>
                  <td align="center">
                    <table cellpadding="0" cellspacing="0" border="0" style="width:900px">
                      <tr class="layout-full-width" style="background-color:#ffffff"><![endif]-->
                <!--[if (mso)|(IE)]>
                <td align="center" width="900"
                    style="background-color:#ffffff;width:900px; border-top: 0px solid transparent; border-left: 0px solid transparent; border-bottom: 0px solid transparent; border-right: 0px solid transparent;"
                    valign="top">
                <table width="100%" cellpadding="0" cellspacing="0" border="0">
                  <tr>
                    <td
                      style="padding-right: 0px; padding-left: 0px; padding-top:5px; padding-bottom:5px;background-color:#f3f5f2;">
                <![endif]-->
                <div class='col num12'
                     style='min-width: 320px; max-width: 900px; display: table-cell; vertical-align: top; background-color: #f3f5f2; width: 900px;'>
                  <div class='col_cont' style='width:100% !important;'>
                    <!--[if (!mso)&(!IE)]><!-->
                    <div
                      style='border-top:0px solid transparent; border-left:0px solid transparent; border-bottom:0px solid transparent; border-right:0px solid transparent; padding-top:5px; padding-bottom:5px; padding-right: 0px; padding-left: 0px;'>
                      <!--<![endif]-->
                      <!--[if mso]>
                      <table width="100%" cellpadding="0" cellspacing="0" border="0">
                      <tr>
                        <td
                          style="padding-right: 30px; padding-left: 30px; padding-top: 30px; padding-bottom: 30px; font-family: 'Trebuchet MS', Tahoma, sans-serif">
                      <![endif]-->
                      <div
                        style="color:#000000;font-family:'Montserrat', 'Trebuchet MS', 'Lucida Grande', 'Lucida Sans Unicode', 'Lucida Sans', Tahoma, sans-serif;line-height:1.2;padding-top:30px;padding-right:30px;padding-bottom:30px;padding-left:30px;">
                        <div class='txtTinyMce-wrapper'
                             style="line-height: 1.2; font-size: 12px; font-family: 'Montserrat', 'Trebuchet MS', 'Lucida Grande', 'Lucida Sans Unicode', 'Lucida Sans', Tahoma, sans-serif; color: #000000; mso-line-height-alt: 14px;">
                          <p
                            style="font-size: 10px; line-height: 1.2; word-break: break-word; text-align: justify; font-family: Montserrat, 'Trebuchet MS', 'Lucida Grande', 'Lucida Sans Unicode', 'Lucida Sans', Tahoma, sans-serif; mso-line-height-alt: 12px; margin: 0;">
                            <span style='font-size: 10px;'>TVS-g r o u p (international) is a private organization with over 8 entities, owned by R.Logmans, the original founder&amp;owner of TVS-engineering Netherlands </span><br/><span
                            style='font-size: 10px;'>R.Logmans is sole shareholder of all individual entities in the TVS g r o u p, worldwide. TVS LATAM S.A.S is a service supplier belonging to the TVS g r o u p. TVS LATAM S.A.S is one of the authorized resellers of TVS-credits from the TVS-g r o u p.</span>
                          </p>
                        </div>
                      </div>
                      <!--[if mso]></td></tr></table><![endif]-->
                      <!--[if (!mso)&(!IE)]><!-->
                    </div>
                    <!--<![endif]-->
                  </div>
                </div>
                <!--[if (mso)|(IE)]></td></tr></table><![endif]-->
                <!--[if (mso)|(IE)]></td></tr></table></td></tr></table><![endif]-->
              </div>
            </div>
          </div>
          <!--[if (mso)|(IE)]></td></tr></table><![endif]-->
        </td>
      </tr>
      </tbody>
    </table>
    <!--[if (IE)]></div><![endif]-->
    </body>
    </html>
  `;
}
