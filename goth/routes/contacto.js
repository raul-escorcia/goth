var express = require('express');
var router = express.Router();
var nodemailer = require('nodemailer');

router.get('/', function (req, res, next) {
    res.render('contacto', {
        isContacto: true
    });
});

router.post('/', async (req, res, next) => {
    console.log(req.body);
    var nombre = req.body.nombre; 
    var email = req.body.email; 
    var tel = req.body.tel; 
    var comentarios = req.body.comentarios; 

    var obj = {
        to: 'raul@gmail.com',
        subject: 'CONTACTO GOTH',
        html: nombre + ' se contacto a traves de la pagina y quiere saber mas info a este correo: ' + email + ' además hizo el siguiente comentario: ' + comentarios + ' y su tel es: ' + tel
    };

    var transport = nodemailer.createTransport({
        host: process.env.SMTP_HOST,
        port: process.env.SMTP_PORT,
        auth: {
            user: process.env.SMTP_USER,
            pass: process.env.SMTP_PASS
        }
    });

    var info = await transport.sendMail(obj);

    res.render('contacto', {
        message: 'mensaje enviado correctamente'
    });
});

module.exports = router;