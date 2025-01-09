import express from 'express';
import { sendMail } from '../controllers/mailController.js';

const sendMailRouter = express.Router();

sendMailRouter.post('/', sendMail);


export default sendMailRouter;