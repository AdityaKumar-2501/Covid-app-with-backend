const express = require("express")
const app = express()
const mysql = require("mysql")
require("dotenv").config()
const bcrypt = require("bcrypt")
const cors = require("cors")

app.use(express.json())
//middleware to read req.body.<params>

app.use(cors());

const db = mysql.createPool({
    connectionLimit: 100,
    host: "127.0.0.1",       //This is your localhost IP
    user: "newuser",         // "newuser" created in Step 1(e)
    password: "password1#",  // password for the new user
    database: "doctordb",      // Database name
    port: "3306"             // port name, "3306" by default
});

app.get("/createUser", (req,res) => {
    console.log("connected...");
    res.send("<h1>Not Working</h1>")
    console.log(req.body);
});

//CREATE USER
app.post("/createUser", async (req, res) => {
    console.log("Post clam!!!!");
    const fname = req.body.fname;
    const lname = req.body.lname;
    const email = req.body.email;
    const hashedPassword = await bcrypt.hash(req.body.password, 10);
    db.getConnection(async (err, connection) => {
        if (err) throw (err)
        const sqlSearch = "SELECT * FROM usertable WHERE email = ?"
        const search_query = mysql.format(sqlSearch, [email])
        const sqlInsert = "INSERT INTO usertable VALUES (0,?,?,?,?)"
        const insert_query = mysql.format(sqlInsert, [fname,lname,email, hashedPassword])
        // ? will be replaced by values
        // ?? will be replaced by string
        await connection.query(search_query, async (err, result) => {
            if (err) throw (err)
            console.log("------> Search Results")
            console.log(result.length)
            if (result.length != 0) {
                connection.release()
                console.log("------> User already exists")
                res.sendStatus(409)
            }
            else {
                await connection.query(insert_query, (err, result) => {
                    connection.release()
                    if (err) throw (err)
                    console.log("--------> Created new User")
                    console.log(result.insertId)
                    res.sendStatus(201)
                })
            }
        }) //end of connection.query()
    }) //end of db.getConnection()
}) //end of app.post()

//LOGIN (AUTHENTICATE USER)
app.post("/login", (req, res) => {
    const user = req.body.email
    const password = req.body.password
    db.getConnection(async (err, connection) => {
        if (err) throw (err)
        if(password === undefined) console.log(password)
        const sqlSearch = "Select * from userTable where email = ?"
        const search_query = mysql.format(sqlSearch, [user])
        await connection.query(search_query, async (err, result) => {
            connection.release()

            if (err) throw (err)
            if (result.length == 0) {
                console.log("--------> User does not exist")
                res.sendStatus(404)
            }
            else {

                var sql = result[0].fname;
                const hashedPassword = result[0].password
                //get the hashedPassword from result
                if (await bcrypt.compare(password, hashedPassword)) {
                    console.log("---------> Login Successful")
                    res.send(`${sql} is logged in!`)
                }
                else {
                    console.log("---------> Password Incorrect")
                    res.send("Password incorrect!")
                } //end of bcrypt.compare()
            }//end of User exists i.e. results.length==0
        }) //end of connection.query()
    }) //end of db.connection()
}) //end of app.post()


db.getConnection((err, connection) => {
    if (err) throw (err)
    console.log("DB connected successful: " + connection.threadId)
})

app.listen(3005,
    () => console.log(`Server Started on port 3005...`))