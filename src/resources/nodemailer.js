import nodeMailer from 'nodemailer';
import hbs from 'nodemailer-express-handlebars';
import dotenv from 'dotenv';

dotenv.config();

const transporter = nodeMailer.createTransport({
  host: process.env.HOST_EMAIL,
  port: Number(process.env.PORT_EMAIL),
  secure: false,
  auth: {
    user: process.env.USER_EMAIL,
    pass: process.env.PASS_EMAIL,
  },
  tls: {
    rejectUnauthorized: false,
  },
});

transporter.use(
  'compile',
  hbs({
    viewEngine: {
      extName: '.hbs',
      partialsDir: './src/resources/templates',
      defaultLayout: false,
    },
    viewPath: './src/resources/templates',
    extName: '.hbs',
  }),
);

export default transporter;
