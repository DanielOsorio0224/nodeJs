const mysql = require('mysql')

const connection = mysql.createConnection({
    host:'localhost',
    user: 'root',
    password: '',
    database: 'project_jwt'
})

module.exports = connection