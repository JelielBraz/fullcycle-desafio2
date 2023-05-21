const express = require('express')
const app = express()
const port = 3000
const config = {
    host: 'db',
    user: 'root',
    password: 'root',
    database: 'nodedb'
};
const mysql = require('mysql')
const connection = mysql.createConnection(config)
const sql = `INSERT INTO people(name) VALUES ('Jeliel')`
connection.query(sql);
connection.end()

app.get('/', (_, res) => {
    
    connection.query("SELECT name from people", function (err, result) {
        if (err) {
            throw err;
        }
        console.log(result);
    });
    
    
    response = "<h1>Full Cycle Rocks!</h1>";
   
    res.send(response);
})

app.listen(port, () => {
    console.log('Rodando na porta ' + port)
}) 