const db = require('../database/db');

const Usuario = {
    getAll: () =>{
        return new Promise((resolve,reject) => {
            db.all("SELECT * FROM usuarios",[],(err,rows)=>{
                if(err){
                    reject(err);
                }

                else{
                    resolve(rows);
                }
            });
        });
    },

    getById: (id) => {
        return new Promise((resolve,reject)=>{
            db.get("SELECT * FROM usuarios WHERE id = ?",[id],(err,row)=>{
                if(err){
                    reject(err);
                }

                else{
                    resolve(row);
                }
            });
        });
    },

    create:(user) => {
        const {usuario,email,senha} = user;
        return new Promise((resolve,reject)=>{
            db.run("INSERT INTO usuarios (usuario,email,senha) VALUES (?,?,?)",[usuario,email,senha],
                function (err) {
                    if(err){
                        reject(err);
                    }

                    else{
                       resolve({id:this.lastID}); 
                    }
                }
            );
        });
    }
}