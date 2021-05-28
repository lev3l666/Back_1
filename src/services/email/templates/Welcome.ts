export function Welcome(data) {
  return `<!DOCTYPE html>
<html lang="en" xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office">
<head>
    <meta charset="utf-8"> <!-- utf-8 works for most cases -->
    <meta name="viewport" content="width=device-width"> <!-- Forcing initial-scale shouldn't be necessary -->
    <meta http-equiv="X-UA-Compatible" content="IE=edge"> <!-- Use the latest (edge) version of IE rendering engine -->
    <meta name="x-apple-disable-message-reformatting">  <!-- Disable auto-scale in iOS 10 Mail entirely -->
    <title></title> <!-- The title tag shows in email notifications, like Android 4.4. -->

    <link href="https://fonts.googleapis.com/css?family=Lato:300,400,700" rel="stylesheet">

    <!-- CSS Reset : BEGIN -->
    <style>

        /* What it does: Remove spaces around the email design added by some email clients. */
        /* Beware: It can remove the padding / margin and add a background color to the compose a reply window. */
        html,
body {
    margin: 0 auto !important;
    padding: 0 !important;
    height: 100% !important;
    width: 100% !important;
    background: #f1f1f1;
}

/* What it does: Stops email clients resizing small text. */
* {
    -ms-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%;
}

/* What it does: Centers email on Android 4.4 */
div[style*="margin: 16px 0"] {
    margin: 0 !important;
}

/* What it does: Stops Outlook from adding extra spacing to tables. */
table,
td {
    mso-table-lspace: 0pt !important;
    mso-table-rspace: 0pt !important;
}

/* What it does: Fixes webkit padding issue. */
table {
    border-spacing: 0 !important;
    border-collapse: collapse !important;
    table-layout: fixed !important;
    margin: 0 auto !important;
}

/* What it does: Uses a better rendering method when resizing images in IE. */
img {
    -ms-interpolation-mode:bicubic;
}

/* What it does: Prevents Windows 10 Mail from underlining links despite inline CSS. Styles for underlined links should be inline. */
a {
    text-decoration: none;
}

/* What it does: A work-around for email clients meddling in triggered links. */
*[x-apple-data-detectors],  /* iOS */
.unstyle-auto-detected-links *,
.aBn {
    border-bottom: 0 !important;
    cursor: default !important;
    color: inherit !important;
    text-decoration: none !important;
    font-size: inherit !important;
    font-family: inherit !important;
    font-weight: inherit !important;
    line-height: inherit !important;
}

/* What it does: Prevents Gmail from displaying a download button on large, non-linked images. */
.a6S {
    display: none !important;
    opacity: 0.01 !important;
}

/* What it does: Prevents Gmail from changing the text color in conversation threads. */
.im {
    color: inherit !important;
}

/* If the above doesn't work, add a .g-img class to any image in question. */
img.g-img + div {
    display: none !important;
}

/* What it does: Removes right gutter in Gmail iOS app: https://github.com/TedGoas/Cerberus/issues/89  */
/* Create one of these media queries for each additional viewport size you'd like to fix */

/* iPhone 4, 4S, 5, 5S, 5C, and 5SE */
@media only screen and (min-device-width: 320px) and (max-device-width: 374px) {
    u ~ div .email-container {
        min-width: 320px !important;
    }
}
/* iPhone 6, 6S, 7, 8, and X */
@media only screen and (min-device-width: 375px) and (max-device-width: 413px) {
    u ~ div .email-container {
        min-width: 375px !important;
    }
}
/* iPhone 6+, 7+, and 8+ */
@media only screen and (min-device-width: 414px) {
    u ~ div .email-container {
        min-width: 414px !important;
    }
}

    </style>

    <!-- CSS Reset : END -->

    <!-- Progressive Enhancements : BEGIN -->
    <style>

\t    .primary{
\tbackground: #30e3ca;
}
.bg_white{
\tbackground: #ffffff;
}
.bg_light{
\tbackground: #fafafa;
}
.bg_black{
\tbackground: #000000;
}
.bg_dark{
\tbackground: rgba(0,0,0,.8);
}
.email-section{
\tpadding:2.5em;
}

/*BUTTON*/
.btn{
\tpadding: 10px 15px;
\tdisplay: inline-block;
}
.btn.btn-primary{
\tborder-radius: 5px;
\tbackground: #30e3ca;
\tcolor: #ffffff;
}
.btn.btn-white{
\tborder-radius: 5px;
\tbackground: #ffffff;
\tcolor: #000000;
}
.btn.btn-white-outline{
\tborder-radius: 5px;
\tbackground: transparent;
\tborder: 1px solid #fff;
\tcolor: #fff;
}
.btn.btn-black-outline{
\tborder-radius: 0px;
\tbackground: transparent;
\tborder: 2px solid #000;
\tcolor: #000;
\tfont-weight: 700;
}

h1,h2,h3,h4,h5,h6{
\tfont-family: 'Lato', sans-serif;
\tcolor: #000000;
\tmargin-top: 0;
\tfont-weight: 400;
}

body{
\tfont-family: 'Lato', sans-serif;
\tfont-weight: 400;
\tfont-size: 15px;
\tline-height: 1.8;
\tcolor: rgba(0,0,0,.4);
}

a{
\tcolor: #30e3ca;
}

table{
}
/*LOGO*/

.logo h1{
\tmargin: 0;
}
.logo h1 a{
\tcolor: #30e3ca;
\tfont-size: 24px;
\tfont-weight: 700;
\tfont-family: 'Lato', sans-serif;
}

/*HERO*/
.hero{
\tposition: relative;
\tz-index: 0;
}

.hero .text{
\tcolor: rgba(0,0,0,.3);
}
.hero .text h2{
\tcolor: #000;
\tfont-size: 40px;
\tmargin-bottom: 0;
\tfont-weight: 400;
\tline-height: 1.4;
}
.hero .text h3{
\tfont-size: 24px;
\tfont-weight: 300;
}
.hero .text h2 span{
\tfont-weight: 600;
\tcolor: #30e3ca;
}


/*HEADING SECTION*/
.heading-section{
}
.heading-section h2{
\tcolor: #000000;
\tfont-size: 28px;
\tmargin-top: 0;
\tline-height: 1.4;
\tfont-weight: 400;
}
.heading-section .subheading{
\tmargin-bottom: 20px !important;
\tdisplay: inline-block;
\tfont-size: 13px;
\ttext-transform: uppercase;
\tletter-spacing: 2px;
\tcolor: rgba(0,0,0,.4);
\tposition: relative;
}
.heading-section .subheading::after{
\tposition: absolute;
\tleft: 0;
\tright: 0;
\tbottom: -10px;
\tcontent: '';
\twidth: 100%;
\theight: 2px;
\tbackground: #30e3ca;
\tmargin: 0 auto;
}

.heading-section-white{
\tcolor: rgba(255,255,255,.8);
}
.heading-section-white h2{
\tfont-family: 12;
\tline-height: 1;
\tpadding-bottom: 0;
}
.heading-section-white h2{
\tcolor: #ffffff;
}
.heading-section-white .subheading{
\tmargin-bottom: 0;
\tdisplay: inline-block;
\tfont-size: 13px;
\ttext-transform: uppercase;
\tletter-spacing: 2px;
\tcolor: rgba(255,255,255,.4);
}


ul.social{
\tpadding: 0;
}
ul.social li{
\tdisplay: inline-block;
\tmargin-right: 10px;
}

/*FOOTER*/

.footer{
\tborder-top: 1px solid rgba(0,0,0,.05);
\tcolor: rgba(0,0,0,.5);
}
.footer .heading{
\tcolor: #000;
\tfont-size: 20px;
}
.footer ul{
\tmargin: 0;
\tpadding: 0;
}
.footer ul li{
\tlist-style: none;
\tmargin-bottom: 10px;
}
.footer ul li a{
\tcolor: rgba(0,0,0,1);
}


@media screen and (max-width: 500px) {


}


    </style>


</head>

<body width="100%" style="margin: 0; padding: 0 !important; mso-line-height-rule: exactly; background-color: #f1f1f1;">
\t<center style="width: 100%; background-color: #f1f1f1;">
    <div style="display: none; font-size: 1px;max-height: 0px; max-width: 0px; opacity: 0; overflow: hidden; mso-hide: all; font-family: sans-serif;">
      &zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;
    </div>
    <div style="max-width: 600px; margin: 0 auto;" class="email-container">
    \t<!-- BEGIN BODY -->
      <table align="center" role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%" style="margin: auto;">
      \t<tr>
          <td valign="top" class="bg_white" style="padding: 1em 2.5em 0 2.5em;">
          \t<table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%">
          \t\t<tr>
          \t\t\t<td class="logo" style="text-align: center;">
\t\t\t            <h1><a href="#">e-Verify</a></h1>
\t\t\t          </td>
          \t\t</tr>
          \t</table>
          </td>
\t      </tr><!-- end tr -->
\t      <tr>
          <td valign="middle" class="hero bg_white" style="padding: 3em 0 2em 0;">
            <img src="images/email.png" alt="" style="width: 300px; max-width: 600px; height: auto; margin: auto; display: block;">
          </td>
\t      </tr><!-- end tr -->
\t\t\t\t<tr>
          <td valign="middle" class="hero bg_white" style="padding: 2em 0 4em 0;">
            <table>
            \t<tr>
            \t\t<td>
            \t\t\t<div class="text" style="padding: 0 2.5em; text-align: center;">
            \t\t\t\t<h2>Please verify your email</h2>
            \t\t\t\t<h3>Amazing deals, updates, interesting news right in your inbox</h3>
            \t\t\t\t<p><a href="#" class="btn btn-primary">Yes! Subscribe Me</a></p>
            \t\t\t</div>
            \t\t</td>
            \t</tr>
            </table>
          </td>
\t      </tr><!-- end tr -->
      <!-- 1 Column Text + Button : END -->
      </table>
      <table align="center" role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%" style="margin: auto;">
      \t<tr>
          <td valign="middle" class="bg_light footer email-section">
            <table>
            \t<tr>
                <td valign="top" width="33.333%" style="padding-top: 20px;">
                  <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%">
                    <tr>
                      <td style="text-align: left; padding-right: 10px;">
                      \t<h3 class="heading">About</h3>
                      \t<p>A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
                      </td>
                    </tr>
                  </table>
                </td>
                <td valign="top" width="33.333%" style="padding-top: 20px;">
                  <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%">
                    <tr>
                      <td style="text-align: left; padding-left: 5px; padding-right: 5px;">
                      \t<h3 class="heading">Contact Info</h3>
                      \t<ul>
\t\t\t\t\t                <li><span class="text">203 Fake St. Mountain View, San Francisco, California, USA</span></li>
\t\t\t\t\t                <li><span class="text">+2 392 3929 210</span></a></li>
\t\t\t\t\t              </ul>
                      </td>
                    </tr>
                  </table>
                </td>
                <td valign="top" width="33.333%" style="padding-top: 20px;">
                  <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%">
                    <tr>
                      <td style="text-align: left; padding-left: 10px;">
                      \t<h3 class="heading">Useful Links</h3>
                      \t<ul>
\t\t\t\t\t                <li><a href="#">Home</a></li>
\t\t\t\t\t                <li><a href="#">About</a></li>
\t\t\t\t\t                <li><a href="#">Services</a></li>
\t\t\t\t\t                <li><a href="#">Work</a></li>
\t\t\t\t\t              </ul>
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>
            </table>
          </td>
        </tr><!-- end: tr -->
        <tr>
          <td class="bg_light" style="text-align: center;">
          \t<p>No longer want to receive these email? You can <a href="#" style="color: rgba(0,0,0,.8);">Unsubscribe here</a></p>
          </td>
        </tr>
      </table>

    </div>
  </center>
</body>
</html>`;
}
