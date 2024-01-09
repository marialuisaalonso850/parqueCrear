const nodemailer = require("nodemailer");
const password1="multiservicios1234"
const password="rwam fpkv zevq bnmn"
const correo="parkinlocation753@gmail.com"

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  auth: {
    user: correo,
    pass: password,
  },
});

async function sendConfirmationEmail(email) {
  try {
    await transporter.sendMail({
      from: "parkinlocation753@gmail.com",
      to: email,
      subject: "Confirmación de Registro",
      text: "¡Gracias por registrarte!",
      html:  `
      <div>
        <p>Bienvenido a parkinglocation</p>
        <p>Haz ingresado correctamente a nuestra web</p>
        <p>Gracias por ingresar :) </p>
        <img> url:https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.ESD5spAnnyoC7kdLGk8kLwHaDw%26pid%3DApi&f=1&ipt=c253e26387854990d6e100306c5ec0040eb807164e8bb28ddc3172c19727edec&ipo=images</img>
      </div>
    `,
    });
    console.log("Correo de confirmación enviado."+email);
  } catch (error) {
    console.error("Error al enviar el correo de confirmación:", error);
  }
}

module.exports = sendConfirmationEmail;
