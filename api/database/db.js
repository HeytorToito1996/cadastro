const sqlite3 = require('sqlite3').verbose();

const DB_SOURCE = "database.sqlite";

const db = new sqlite3.Database(DB_SOURCE,(err)=>{
    if(err){
        console.error(err.message);
        throw err;
    }

    else{
        console.log('Banco Conectado!');
    

    const SQL = `CREATE TABLE IF NOT EXISTS usuarios (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        usuario TEXT,
        email TEXT,
        senha TEXT
    )`;

    db.run(SQL);
   }
});

module.exports = db;