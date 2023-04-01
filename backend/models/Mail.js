import { MailtrapClient } from 'mailtrap';

const TOKEN = '41860dc9cb3217459be221ea4df2b293';
const ENDPOINT = 'https://send.api.mailtrap.io/';

const client = new MailtrapClient({ endpoint: ENDPOINT, token: TOKEN });

const sender = { email: 'mailtrap@knuryknurow.pl', name: 'Mailtrap Test' };
const recipients = [{ email: "knury.knurow@gmail.com" }];

client.send({
        from: sender,
        to: recipients,
        subject: "You are awesome!",
        text: "Congrats for sending test email with Mailtrap!",
        category: "Integration Test",
    }).then(console.log, console.error);