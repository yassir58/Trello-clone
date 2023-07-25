import nodemailer from "nodemailer";

interface emailOptions {
  to: string;
  from: string;
  subject: string;
  text: string;
}

const sendMail = async (options: emailOptions) => {
  const transporter = nodemailer.createTransport({
    host: "sandbox.smtp.mailtrap.io",
    port: 25,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  const email: emailOptions = {
    to: options.to,
    from: options.from,
    subject: options.subject,
    text: options.text,
  };

  console.log(email);
  transporter.sendMail(email);
};

export default sendMail;
