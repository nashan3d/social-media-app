
//import sqlite  from 'sqlite';
//import sqlite3 from 'sqlite3';

const sqlite = require('sqlite');
const sqlite3 = require('sqlite3');

//const sql3 = sqlite3;
export  default async function updatePost(req,res){
    const db = await openDb(); 
    console.log('req',req.body);
    const statement = await db.prepare('Update post Set isFavourite = ? where id = ? ');
    const result = await statement.run(req.body.favourite,req.query.id); 
    
    db.close();
    return {
      data : true
    }
}

async function openDb() {
    return sqlite.open({
      filename: './database.db',
      driver: sqlite3.Database,
    });
  }

