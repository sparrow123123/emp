const express = require('express')
const cors  = require('cors');
const mysql = require('mysql')






const app = express();
app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '9943060731',
    database: 'employee'

})

db.connect(()=>{
    console.log("connected to the server")

})

app.get('/send/:empid/:empname/:department/:dob/:salary/:designation/:gender',(req,res)=>{
    let empid = req.params.empid;
    let empname = req.params.empname;
    let  department = req.params.department;
    let dob = req.params.dob;
    let  salary = req.params.salary;
    let designation = req.params.designation;
    let gen = req.params.gender;
    id = empid
   
    const xtm = empid
    

    
  
    console.log(empid,empname,department,dob,salary,designation);

    let query= `INSERT INTO empldetail (empid, empname, departement, dob,salary, designation,gender) VALUES(?,?,?,?,?,?,?); `

     db.query(query,[empid,empname,department,dob,salary,designation,gen],(err,results) => {
        if(!err){
            console.log("success")
            res.send(results)
        }
        else{
            console.error(err)
        }
     })

})


app.get('/register/:company/:experience/:doj/:location/:id',(req,res)=>{
    let  company = req.params.company;
    let experience= req.params.experience;
    let doj = req.params.doj;
    let location = req.params.location;
    let id = req.params.id;
    let sql = "UPDATE empldetail SET  company=?,experience=?,dateofjoining=?,location=? WHERE empid=?;"
    db.query(sql,[company,experience,doj,location,id],(err,result)=> {
        if(!err){
            console.log("success")
        }
        else{
            console.error(err);
        }


    })
})








app.listen('3000',()=>{console.log("Server is running on port 3000")})