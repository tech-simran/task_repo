const express = require("express");
const connection = require("./config");
const app = express();
const Port = 5000;

app.use(express.json())

app.post("/addstudent", async (req, res) => {
try{
  const data = req.body;
  console.log(req.body);
  console.log(data);
  const sqlQuery = `INSERT INTO student SET ?`;
  connection.query(sqlQuery, [data], (err, result) => {
    if (err) {
      res.status(400).json({
        Response: err.sqlMessage,
      });
    } else {
        res.status(400).json({
            Response: result,
          });
    }
  });
}catch(err){
    res.status(400).json({
        Response: err.sqlMessage,
      });
      console.log(err, "helllo")
}
});

app.get("/getdata/:rollno", (req, res) => {
  const roll_no = req.params.rollno;
  const sqlQuery = `select * from student where roll_no = ?`;
  connection.query(sqlQuery, roll_no, (err, result) => {
    if (err) {
      res.send({
        status: 400,
        Response: err.sql,
      });
    } else {
      res.send({
        status: 200,
        Response: result,
      });
    }
  });
});
app.listen(Port, () => {
  console.log(`server is llistening on ${Port}`);
});
