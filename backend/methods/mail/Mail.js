import {transporter} from './ServiceKey.js';
import {getTemplate} from './Template.js';

export const sendMail = async (recevier, token) => {
    await transporter.sendMail({
        from: '"Knury Knurów" <info@knuryknurow.pl>',
        to: recevier,
        subject: 'Potwierdzenie rejestracji na turniej Knury Knurów 2023 🏀🔥',
        html: getTemplate(token),
    });
};