import nodemailer from 'nodemailer'
import crypto from 'crypto'
import path from 'path'
import { fileURLToPath } from 'url'
import fs from 'fs'
 
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
 
const otpTransport = nodemailer.createTransport({
    host: process.env.SMTP_SERVER,
    port: Number(process.env.SMTP_PORT) || 587,
    secure: Number(process.env.SMTP_PORT) === 465,
    auth: {
        user: process.env.SMTP_USER_NAME,
        pass: process.env.SMTP_PASSWORD
    }
})
 
export const createOtp = () => crypto.randomInt(100000, 1000000).toString()
 
// Generate a professional, modern, and lightweight HTML email template for OTP matching index.html
export function otpHtmlTemplate({ otp, purpose, cidPrefix = 'cid:' }) {
    const otpCode = String(otp || '934578');
    const digits = otpCode.split('');
    const purposeText = purpose || 'login';
    const currentYear = new Date().getFullYear();
 
    return `
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office" lang="en" style="background-color: #f1f5f9;">
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="x-apple-disable-message-reformatting" />
    <title>Email Verification - Worktrail</title>
    <!--[if gte mso 9]>
    <xml>
      <o:OfficeDocumentSettings>
        <o:AllowPNG/>
        <o:PixelsPerInch>96</o:PixelsPerInch>
      </o:OfficeDocumentSettings>
    </xml>
    <![endif]-->
    <!--[if mso]>
    <style type="text/css">
      table, td, div, p, a, span { font-family: 'Segoe UI', Arial, sans-serif !important; }
    </style>
    <![endif]-->
    <style type="text/css">
        body, table, td, a { -webkit-text-size-adjust: 100%; -ms-text-size-adjust: 100%; }
        table, td { mso-table-lspace: 0pt; mso-table-rspace: 0pt; }
        img { -ms-interpolation-mode: bicubic; border: 0; outline: none; text-decoration: none; }
        body { margin: 0; padding: 0; width: 100% !important; background-color: #f1f5f9; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; }
       
        @media only screen and (max-width: 620px) {
            .email-container { width: 100% !important; max-width: 100% !important; }
            .mobile-card-padding { padding-left: 18px !important; padding-right: 18px !important; }
            .otp-box { width: 40px !important; height: 48px !important; font-size: 24px !important; }
            .otp-spacer { width: 6px !important; }
            .service-links { font-size: 9.5px !important; line-height: 16px !important; }
            .contact-cell { display: block !important; width: 100% !important; padding: 4px 0 !important; }
        }
    </style>
</head>
<body style="margin: 0; padding: 0; background-color: #f1f5f9; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; -webkit-font-smoothing: antialiased;">
 
    <!-- Outer Background Table -->
    <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%" style="background-color: #f1f5f9; margin: 0; padding: 0 0 20px 0;">
        <tr>
            <td align="center" style="padding: 0;">
                <!--[if (gte mso 9)|(IE)]>
                <table role="presentation" align="center" border="0" cellspacing="0" cellpadding="0" width="600">
                <tr>
                <td align="center" valign="top" width="600">
                <![endif]-->
 
                <!-- Main Wrapper Container (600px Max) -->
                <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%" class="email-container" style="max-width: 600px; background-color: #f8fafc; margin: 0 auto; overflow: hidden; box-shadow: 0 8px 24px rgba(15, 23, 42, 0.08);">
                   
                    <!-- 1. Header Banner & Card Top Container -->
                    <tr>
                        <td align="center" background="${cidPrefix}Banner.png" style="background-color: #0b1728; background-image: url('${cidPrefix}Banner.png'); background-position: top center; background-repeat: no-repeat; background-size: 100% 67%; padding: 22px 18px 0 18px;">
                            <!--[if gte mso 9]>
                            <v:rect xmlns:v="urn:schemas-microsoft-com:vml" fill="true" stroke="false" style="width: 600px;">
                                <v:fill type="frame" src="${cidPrefix}Banner.png" color="#0b1728" />
                                <v:textbox style="mso-fit-shape-to-text: true;" inset="0,0,0,0">
                            <![endif]-->
                            <div>
                           
                            <!-- Securitas Logo -->
                            <table role="presentation" border="0" cellpadding="0" cellspacing="0" align="center" style="margin: 0 auto 16px auto;">
                                <tr>
                                    <td align="center">
                                        <img src="${cidPrefix}logo_w.png" width="115" alt="Securitas" style="display: block; width: 115px; height: auto; border: 0;" />
                                    </td>
                                </tr>
                            </table>
 
                            <!-- Main White Card -->
                            <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%" style="background-color: #ffffff; border-radius: 12px; box-shadow: 0 4px 16px rgba(0, 0, 0, 0.06); border: 1px solid #e2e8f0; overflow: hidden;">
                               
                                <!-- Card Header: WorkTrail • Secure Verification -->
                                <tr>
                                    <td align="center" style="padding: 16px 20px 12px 20px;" class="mobile-card-padding">
                                        <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; line-height: 20px;">
                                            <span style="color: #1e293b; font-weight: 700; font-size: 17px; letter-spacing: -0.3px;">Work</span><span style="color: #10b981; font-weight: 700; font-size: 17px; letter-spacing: -0.3px;">Trail</span>
                                            <span style="color: #64748b; font-size: 14px; margin: 0 5px;">&bull;</span>
                                            <span style="color: #64748b; font-weight: 400; font-size: 16px;">Secure Verification</span>
                                        </div>
                                        <p style="margin: 6px 0 0 0; color: #94a3b8; font-size: 12px; line-height: 16px; font-weight: 400; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; text-align: center;">
                                            For security purposes, please use the one-time verification code below to confirm your identity.
                                        </p>
                                    </td>
                                </tr>
 
                                <!-- Divider -->
                                <tr>
                                    <td style="border-top: 1px solid #f1f5f9; font-size: 0; line-height: 0;">&nbsp;</td>
                                </tr>
 
                                <!-- Card Body -->
                                <tr>
                                    <td align="center" style="padding: 16px 24px 14px 24px;" class="mobile-card-padding">
                                       
                                        <!-- Greeting -->
                                        <h2 style="margin: 0 0 6px 0; font-size: 21px; font-weight: 700; color: #0f172a; text-align: center; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;">
                                            Hello
                                        </h2>
 
                                        <!-- Purpose / Login Text -->
                                        <p style="margin: 0 0 14px 0; color: #475569; font-size: 13.5px; line-height: 19px; text-align: center; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;">
                                            Use the verification code below to <strong style="color: #0f172a; font-weight: 700;">${purposeText}</strong>.<br />
                                            This code can only be used once and expires in <strong style="color: #10b981; font-weight: 700;">10 minutes</strong>.
                                        </p>
 
                                        <!-- 6 OTP Rounded Digit Boxes -->
                                        <table role="presentation" border="0" cellpadding="0" cellspacing="0" align="center" style="margin: 0 auto 6px auto;">
                                            <tr>
                                                <td class="otp-box" align="center" valign="middle" style="width: 42px; height: 48px; border: 1.5px solid #10b981; border-radius: 8px; background-color: #ffffff; text-align: center; font-size: 24px; font-weight: 700; color: #0f172a; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;">
                                                    ${digits[0] || '9'}
                                                </td>
                                                <td class="otp-spacer" style="width: 8px; font-size: 0; line-height: 0;">&nbsp;</td>
                                                <td class="otp-box" align="center" valign="middle" style="width: 42px; height: 48px; border: 1.5px solid #10b981; border-radius: 8px; background-color: #ffffff; text-align: center; font-size: 24px; font-weight: 700; color: #0f172a; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;">
                                                    ${digits[1] || '3'}
                                                </td>
                                                <td class="otp-spacer" style="width: 8px; font-size: 0; line-height: 0;">&nbsp;</td>
                                                <td class="otp-box" align="center" valign="middle" style="width: 42px; height: 48px; border: 1.5px solid #10b981; border-radius: 8px; background-color: #ffffff; text-align: center; font-size: 24px; font-weight: 700; color: #0f172a; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;">
                                                    ${digits[2] || '4'}
                                                </td>
                                                <td class="otp-spacer" style="width: 8px; font-size: 0; line-height: 0;">&nbsp;</td>
                                                <td class="otp-box" align="center" valign="middle" style="width: 42px; height: 48px; border: 1.5px solid #10b981; border-radius: 8px; background-color: #ffffff; text-align: center; font-size: 24px; font-weight: 700; color: #0f172a; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;">
                                                    ${digits[3] || '5'}
                                                </td>
                                                <td class="otp-spacer" style="width: 8px; font-size: 0; line-height: 0;">&nbsp;</td>
                                                <td class="otp-box" align="center" valign="middle" style="width: 42px; height: 48px; border: 1.5px solid #10b981; border-radius: 8px; background-color: #ffffff; text-align: center; font-size: 24px; font-weight: 700; color: #0f172a; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;">
                                                    ${digits[4] || '7'}
                                                </td>
                                                <td class="otp-spacer" style="width: 8px; font-size: 0; line-height: 0;">&nbsp;</td>
                                                <td class="otp-box" align="center" valign="middle" style="width: 42px; height: 48px; border: 1.5px solid #10b981; border-radius: 8px; background-color: #ffffff; text-align: center; font-size: 24px; font-weight: 700; color: #0f172a; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;">
                                                    ${digits[5] || '8'}
                                                </td>
                                            </tr>
                                        </table>
 
                                    </td>
                                </tr>
 
                                <!-- Divider -->
                                <tr>
                                    <td style="border-top: 1px solid #e2e8f0; font-size: 0; line-height: 0;">&nbsp;</td>
                                </tr>
 
                                <!-- Important Security Reminders -->
                                <tr>
                                    <td style="padding: 14px 22px 14px 22px;" class="mobile-card-padding">
                                        <p style="margin: 0 0 8px 0; font-size: 12.5px; font-weight: 700; color: #0f172a; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;">
                                            Important Security Reminders:
                                        </p>
                                        <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%">
                                            <tr>
                                                <td width="22" valign="top" style="padding-top: 1px; padding-right: 8px;">
                                                    <img src="${cidPrefix}Shield-12th-Oct.png" width="15" height="17" alt="Shield" style="display: block; width: 15px; height: 17px; border: 0;" />
                                                </td>
                                                <td valign="top" style="color: #334155; font-size: 12px; line-height: 16px; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;">
                                                    Never share this one-time code with anyone.
                                                </td>
                                            </tr>
                                            <tr>
                                                <td colspan="2" style="height: 6px; font-size: 0; line-height: 0;">&nbsp;</td>
                                            </tr>
                                            <tr>
                                                <td width="22" valign="top" style="padding-top: 1px; padding-right: 8px;">
                                                    <img src="${cidPrefix}Shield-12th-Oct.png" width="15" height="17" alt="Shield" style="display: block; width: 15px; height: 17px; border: 0;" />
                                                </td>
                                                <td valign="top" style="color: #334155; font-size: 12px; line-height: 16px; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;">
                                                    If you did not request this verification, please ignore this email or review your account security.
                                                </td>
                                            </tr>
                                        </table>
                                    </td>
                                </tr>
 
                                <!-- Divider -->
                                <tr>
                                    <td style="border-top: 1px solid #e2e8f0; font-size: 0; line-height: 0;">&nbsp;</td>
                                </tr>
 
                                <!-- Need Help? -->
                                <tr>
                                    <td align="center" style="padding: 13px 20px 16px 20px; text-align: center;" class="mobile-card-padding">
                                        <p style="margin: 0; color: #64748b; font-size: 12px; line-height: 16px; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;">
                                            Need help? Reach out to your organization administrator or support desk.
                                        </p>
                                        <p style="margin: 5px 0 0 0;">
                                            <a href="mailto:worktrail.support@securitas-india.com" style="color: #6366f1; font-size: 12.5px; text-decoration: underline; font-weight: 500; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;">worktrail.support@securitas-india.com</a>
                                        </p>
                                    </td>
                                </tr>
 
                            </table>
                            <!-- End Main White Card -->
 
                            </div>
                            <!--[if gte mso 9]>
                                </v:textbox>
                            </v:rect>
                            <![endif]-->
 
                        </td>
                    </tr>
 
                    <!-- 2. Below Card Information -->
                    <tr>
                        <td align="center" style="padding: 16px 16px 6px 16px; text-align: center;">
                            <p style="margin: 0 0 4px 0; color: #64748b; font-size: 10.5px; font-weight: 700; letter-spacing: 0.8px; text-transform: uppercase; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;">
                                WALSONS WORKTRAIL VERIFICATION NETWORK
                            </p>
                            <p style="margin: 0; color: #94a3b8; font-size: 10.5px; line-height: 15px; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;">
                                This is an automated security transmission. Please do not reply directly to this email.<br />
                                &copy; ${currentYear} Worktrail Technologies &bull; Powered by Walsons Group. All rights reserved
                            </p>
                        </td>
                    </tr>
 
                    <!-- 3. Walsons Logo -->
                    <tr>
                        <td align="center" style="padding: 6px 16px 10px 16px;">
                            <img src="${cidPrefix}walson-h.png" width="140" alt="Walsons Building Faith" style="display: block; width: 140px; max-width: 100%; height: auto; margin: 0 auto; border: 0;" />
                        </td>
                    </tr>
 
                    <!-- 4. Pattern Wave Separator -->
                    <tr>
                        <td align="center" style="line-height: 0; font-size: 0; padding: 0;">
                            <img src="${cidPrefix}Pattern.png" width="600" alt="Pattern" style="display: block; width: 100%; max-width: 600px; max-height: 40px; object-fit: cover; border: 0;" />
                        </td>
                    </tr>
 
                    <!-- 5. Dark Blue Footer -->
                    <tr>
                        <td style="background-color: #011627; padding: 16px 20px 18px 20px; text-align: center;">
                           
                            <!-- Red Heading -->
                            <p style="margin: 0 0 7px 0; color: #ef4444; font-size: 14px; font-weight: 800; letter-spacing: 0.3px; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;">
                                Making Workplaces Safer!
                            </p>
 
                            <!-- Services List -->
                            <p class="service-links" style="margin: 0 0 11px 0; color: #ffffff; font-size: 10px; font-weight: 600; line-height: 16px; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;">
                                Leadership Due Diligence <span style="color: #ef4444; font-weight: 700; padding: 0 3px;">|</span>
                                Vendor Due Diligence <span style="color: #ef4444; font-weight: 700; padding: 0 3px;">|</span>
                                Investigations <span style="color: #ef4444; font-weight: 700; padding: 0 3px;">|</span>
                                Audits <span style="color: #ef4444; font-weight: 700; padding: 0 3px;">|</span>
                                KYC (Know your customer) checks <span style="color: #ef4444; font-weight: 700; padding: 0 3px;">|</span>
                                Substance Abuse <span style="color: #ef4444; font-weight: 700; padding: 0 3px;">|</span>
                                Facial match <span style="color: #ef4444; font-weight: 700; padding: 0 3px;">|</span>
                                Anniversary checks <span style="color: #ef4444; font-weight: 700; padding: 0 3px;">|</span>
                                Social Media <span style="color: #ef4444; font-weight: 700; padding: 0 3px;">|</span>
                                Advisory
                            </p>
 
                            <!-- Contact Us Heading -->
                            <p style="margin: 0 0 7px 0; color: #ffffff; font-size: 11.5px; font-weight: 700; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;">
                                To Know more about Securitas Contact Us at:
                            </p>
 
                            <!-- Contact Icons & Info Table -->
                            <table role="presentation" border="0" cellpadding="0" cellspacing="0" align="center" style="margin: 0 auto 10px auto;">
                                <tr>
                                    <td class="contact-cell" align="center" style="padding: 0 10px;">
                                        <table role="presentation" border="0" cellpadding="0" cellspacing="0">
                                            <tr>
                                                <td valign="middle" style="padding-right: 5px; line-height: 0;">
                                                    <img src="${cidPrefix}Email-icon.png" width="14" height="14" alt="Email" style="display: block; border: 0;" />
                                                </td>
                                                <td valign="middle">
                                                    <a href="mailto:ev.screen@securitas-india.com" style="color: #ffffff; font-size: 11px; text-decoration: none; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;">ev.screen@securitas-india.com</a>
                                                </td>
                                            </tr>
                                        </table>
                                    </td>
                                    <td class="contact-cell" align="center" style="padding: 0 10px;">
                                        <table role="presentation" border="0" cellpadding="0" cellspacing="0">
                                            <tr>
                                                <td valign="middle" style="padding-right: 5px; line-height: 0;">
                                                    <img src="${cidPrefix}Phone.png" width="14" height="14" alt="Phone" style="display: block; border: 0;" />
                                                </td>
                                                <td valign="middle">
                                                    <a href="tel:+918527256769" style="color: #ffffff; font-size: 11px; text-decoration: none; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;">+91 8527 256 769</a>
                                                </td>
                                            </tr>
                                        </table>
                                    </td>
                                </tr>
                            </table>
 
                            <!-- Disclaimer -->
                            <p style="margin: 0 0 2px 0; color: #94a3b8; font-size: 8px; font-style: italic; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;">
                                Disclaimer :
                            </p>
                            <p style="margin: 0; color: #94a3b8; font-size: 7.5px; line-height: 11px; font-style: italic; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; max-width: 520px; margin-left: auto; margin-right: auto;">
                                Our background checks are conducted with meticulous adherence to local laws and compliance standards, ensuring a thorough and legally sound verification process worldwide.
                            </p>
 
                        </td>
                    </tr>
 
                </table>
                <!-- End Main Wrapper Container -->
 
                <!--[if (gte mso 9)|(IE)]>
                </td>
                </tr>
                </table>
                <![endif]-->
            </td>
        </tr>
    </table>
    <!-- End Outer Background Table -->
 
</body>
</html>
    `;
}
 
export const sendOtp = async (email, otp, purpose) => {
    if (!process.env.SMTP_USER_NAME || !process.env.SMTP_PASSWORD || !process.env.SMTP_SERVER) {
        throw new Error('SMTP configuration is missing.')
    }
 
    const subject = `Worktrail verification code for ${purpose}`;
    const text = `Your Worktrail verification code is ${otp}. It expires in 10 minutes. If you did not request this code, you can safely ignore this email.`;
 
    const html = otpHtmlTemplate({ otp, purpose });
 
    const assetNames = [
        'Banner.png',
        'logo_w.png',
        'Shield-12th-Oct.png',
        'walson-h.png',
        'Pattern.png',
        'Email-icon.png',
        'Phone.png'
    ];
 
    const attachments = assetNames
        .map(name => {
            const filePath = path.join(__dirname, name);
            return fs.existsSync(filePath) ? { filename: name, path: filePath, cid: name } : null;
        })
        .filter(Boolean);
 
    await otpTransport.sendMail({
        from: process.env.SMTP_USER_NAME,
        cc: process.env.SMTP_USER_NAME,
        to: email,
        subject,
        text,
        html,
        attachments
    });
}
 