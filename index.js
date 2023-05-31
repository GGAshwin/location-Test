const app = require('express')()
const port = 3000

app.get('/',(req,res)=>{
    res.send('working!!')
})

app.listen(port,()=>{
    console.log('listening on por',port);
})