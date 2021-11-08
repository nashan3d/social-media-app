
//import sqlite  from 'sqlite';
//import sqlite3 from 'sqlite3';

const sqlite = require('sqlite');
const sqlite3 = require('sqlite3');

//const sql3 = sqlite3;
export  default async function getAllPosts(req,res){
    const db = await openDb(); 
    const posts = await db.all('SELECT * FROM Post');   
    res.json({posts})
    db.close();
}

async function openDb() {
    return sqlite.open({
      filename: './database.db',
      driver: sqlite3.Database,
    });
  }

