const  express = require('express');
const  app = express();

// const  rootCall =(req ,res)=>{
//     res.send('Thank you very much')
// }

// function rootCall(req ,res){
//     res.send('Thank you very much')
// }
app.get('/',(req ,res)=>{
         res.send('Thank you for calling me')
     })

app.listen(3000, ()=> console.log('Listenting to port 3000'));