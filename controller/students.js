var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "studentdb"
});

export default class StudentController {
  static create (req, res) {
      let sql = "INSERT INTO students SET ?";
      con.query(sql, req.body, function (err, result) {
        if (err) throw err;
        return res.status(200).send({
          message: 'successful',
          data: `${result.insertId} inserted`
        });

      });
  }

  static getAllStudents(req, res) {
      con.query("SELECT * FROM students", function (err, result, fields) {
        if (err) throw err;
        return res.status(200).send({
          message: 'successful',
          data: result
        });
    })
  }

  static getOneStudent(req,res){
      let stdId = parseInt(req.params.id)
      let sql = `SELECT * FROM students WHERE id = ${stdId}`
      con.query(sql, function (err, result) {
        if (err) throw err;
        return res.status(200).send({
          message: 'successful',
          data: result
        });
    })
  }

  static deletestudent(req,res){
      let stdId = parseInt(req.params.id)
      let sql = `DELETE FROM students WHERE id = ${stdId}`
      con.query(sql, function (err, result) {
        if (err) throw err;
        return res.status(200).send({
          message: 'successful delete',
          data: `${result.affectedRows} row(s) deleted`
        });
      })
  }

  static updateStudent(req,res) {
      let stdId = parseInt(req.params.id)
      let sql = `UPDATE students SET ? WHERE id = ${stdId}`
      con.query(sql, req.body, function (err, result) {
        if (err) throw err;
        return res.status(200).send({
          message: 'successful',
          data: result
        });
    })
  }
}
