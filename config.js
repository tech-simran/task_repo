const mysql = require('mysql')
const connection = mysql.createConnection({
    host:"localhost",
    password:"",
    user:'root',
    port:3306,
    database:"backeend"
})
connection.connect((err)=>{
    if(err){
        console.log("connection is not created")
    }
    else{
        console.log("connection is created succefully")
    }
})
module.exports = connection;