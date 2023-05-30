const nodemailer = require('nodemailer');

const sendMail = async ( toMail, name ) => {
    try {
        const config = {
            host : 'smtp.gmail.com',
            port : 587,
            auth : {
                user: 'lvalcke88@gmail.com',
                pass: 'zufbzfgeamtirhxo'
            },
            tls: {
              rejectUnauthorized: false
            }
        }
        const mail = {
            from: 'elbodegondetony2023@gmail.com',
            to: toMail,
            subject: 'Confirmacion de registro El bodegon de Tony',
            html: 
            `<div style= "background-color:black; border-radius:20px; padding:50px; text-align:center; color: white;" >
                <div style= "border: 2px solid white; border-radius: 20px; padding:50px;" >
                <img src="https://res.cloudinary.com/dalhatgbg/image/upload/v1680593842/El%20bodegon%20-%20Logo/El_Bodegon_de_Tony_rorqsh.png" alt=":C" style="width:100%; max-width: 150px; height:auto; "/>
                    <h1>Hola, ${name}!!!</h1>
                    <h2 style= "color: white;" >Bienvenido a "El Bodegon De Tony"</h2>
                    <h2 style= "color: white;" >Es un placer para nosotros darte la bienvenida</h2>
                    <h2 style= "color: white;" >y ofrecerte los mejores platos a los mejores precios</h2>
                    <a style= "color: rgb(235, 158, 14); margin: 100px;" href="https://el-bodegon-cliente-local.vercel.app/">Volver a la pagina principal</a>
                </div>
             </div>`
        }
        
        const transport = nodemailer.createTransport(config)
        const send = await transport.sendMail(mail)
        console.log(send)
    } catch (error) {
        console.log(error)
    }
}


const sendPurchaseMail = async ( toMail, name ) => {
    try {
        const config = {
            host : 'smtp.gmail.com',
            port : 587,
            auth : {
                user: 'lvalcke88@gmail.com',
                pass: 'zufbzfgeamtirhxo'
            },
            tls: {
              rejectUnauthorized: false
            }
        }
        const mail = {
            from: 'elbodegondetony2023@gmail.com',
            to: toMail,
            subject: 'Confirmacion de compra',
            html: 
            `<div style= "background-color:black; border-radius:20px; padding:50px; text-align:center; color: white;" >
                <div style= "border: 2px solid white; border-radius: 20px; padding:50px;" >
                <img src="https://res.cloudinary.com/dalhatgbg/image/upload/v1680593842/El%20bodegon%20-%20Logo/El_Bodegon_de_Tony_rorqsh.png" alt=":C" style="width:100%; max-width: 150px; height:auto; "/>
                    <h1>Hola, ${name}!!!</h1>
                    <h2 style= "color: white;" >Tu compra fue exitosa!!!</h2>
                    <h2 style= "color: white;" >Fue un placer atenderte...</h2>
                    <a style= "color: rgb(235, 158, 14); margin: 100px;" href="https://el-bodegon-cliente-local.vercel.app/">Volver a la pagina principal</a>
                </div>
             </div>`
        }


        const transport = nodemailer.createTransport(config)
        const send = await transport.sendMail(mail)
        console.log(send)
    } catch (error) {
        console.log(error)
    }
}
module.exports = {
    sendMail,
    sendPurchaseMail
};