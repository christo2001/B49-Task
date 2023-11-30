import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'otismelbourn22@gmail.com',
    pass: 'xpur qesj lfvz fwhe'
  },
});

export async function sendmail(toemail, subject, content) {
  try {
    const mailConfigurations = {
      from: 'otismelbourn22@gmail.com',
      to: toemail,
      subject: subject,
      html: content, // Use the 'html' property instead of 'text' for HTML content
    };

    const info = await transporter.sendMail(mailConfigurations);

    console.log('Email Sent Successfully');
    console.log(info);
  } catch (error) {
    console.error(error);
    throw new Error('Email could not be sent');
  }
}
