const express = require('express')
const nodemailer = require('nodemailer')

const SMTP_CONFIG = require('./config/smtp')
const cors = require('cors')
//const sendmail = require('sendmail')
const sendmail = require('sendmail')();

const app = express()

app.use(cors())
app.use(express.json())


app.get("/",(req,res)=>{
  res.json("Bem vindo")
})

app.get("/envia",async (req,res)=>{
 

  var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'davidsampler.engenharia@gmail.com',
      pass: 'turbonegro4624'
    }
  });
  
  var mailOptions = {
    from: 'davidsampler.engenharia@gmail.com',
    to: 'davidengenheiro2021@gmail.com',
    subject: 'Email do site Café de Açai',
    text: 'Bem vindo amigo ao novo metodo!'
  };
  
  const email = await transporter.sendMail(mailOptions, function(error, info){
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }

    res.json(info.response)
  });

})




app.post("/enviar",async (req,res)=>{

    const {nome,assunto,email,contato} = req.body  

  var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'davidsampler.engenharia@gmail.com',
      pass: 'turbonegro4624'
    }
  });
  
  var mailOptions = {
    from: `Meu nome é ${nome}<${email}>`,
    to: 'davidengenheiro2021@gmail.com',
    subject: 'Email do site Café de Açai',
    text: `${assunto} + ${contato}`,
    html:`   <div style="width: 100%; height: 400px;  ">

    <h1 style="text-align: center;">Email enviado do site</h1>
    <h2>Meu nome é ${nome}</h2>

    <h3> 
    Messagem: <p style="margin: 10px;">${assunto}</p>
    </h3>

    <h3>Email:
        <p  style="margin: 10px; ">${email}</p>
    </h3>

    <h3>Contato:
        <p  style="margin: 10px; " >${contato}</p>
    </h3>
  
    
    
    </div>
    ` 
  };
  
  const email2 = await transporter.sendMail(mailOptions, function(error, info){
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }

    res.json("ENVIADO COM SUCESS")
  });

})

app.listen(process.env.PORT || 3000, () => { console.log("Servido no ar") })

