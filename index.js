var express= require('express');
var app= express();
var sql = require('mssql');

app.listen(5000, console.log("server running at 5000"));
var config={
    user: 'sa',
    password: 'password@123',
    server: 'TLMUGGCORPL0237\\SQLSERVER2022',
    database: 'University',
    options:{
        encrypt:false,
        useUTC:true
    }   }

    sql.connect(config, function(error){
        if(error)
        console.log("error");
        else console.log("connected to SQL!");
    })

    app.get('/viewteachers', function(req, res){
        var request = new sql.Request();
        request.query('select * from teacher',(recordset, error)=>{
            if(error)
            console.log(error);
            else
            res.send(recordset);
        })
    })

    app.post('/insert', function(req,res){
        var request = new sql.Request();
        request.query(`insert into teacher values(17,'Pradnya',2)`,
        (recordset, error)=>{
            if(error)
            console.log(error);
            else
            res.send(recordset);
        })
    })

    app.post('/insertone', function(req,res){
        var request = new sql.Request();
        request.query(`insert into teacher values(`+
        [req.params.id]+`,'`+[req.params.name]+`',`+[req.params.deptid]+`)`,
        (recordset, error)=>{
            if(error)
            console.log(error);
            else
            res.send(recordset);
        })
    })