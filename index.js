const app = require("./app")

app.get('/',(req,res)=>{
    const {data}=req.body;
res.send(`hello ${data}`)
})

app.listen(3000,()=>{
    console.log("local host express is running");
})
