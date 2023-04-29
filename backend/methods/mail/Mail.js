import {transporter} from './ServiceKey.js';

export const sendMail = async (recevier, token) => {
    await transporter.sendMail({
        from: '"Knury Knurów" <info@knuryknurow.pl>',
        to: recevier,
        subject: 'Potwierdzenie rejestracji na turniej Knury Knurów 2023 🏀🔥',
        html: `<a href='http://localhost:8080/eventy/streetball/weryfikacja/${token}'>Potwierdź rejestrację</a>`,
    });
};