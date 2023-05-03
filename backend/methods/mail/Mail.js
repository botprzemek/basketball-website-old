import {transporter} from './ServiceKey.js';
import {getTemplate} from './Template.js';

export const sendMail = async (recevier, token) => {
    await transporter.sendMail({
        from: '"Knury Knurów" <info@knuryknurow.pl>',
        to: recevier,
        subject: 'Potwierdzenie rejestracji na turniej Knury Streetball 2023 🏀🔥',
        html: getTemplate(token),
    });
    console.log(`Send email to ${recevier} with ${token}`);
};