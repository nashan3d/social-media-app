import {NextApiRequest,NextApiResponse} from 'next'

const sqlite  = require('sqlite');
const sqlite3 = require('sqlite3');


export default async  function getFavouritePosts(req :NextApiRequest,res :NextApiResponse){
    const db = await openDb(); 
    const favouritePosts = await db.all('SELECT * FROM Post Where isFavourite=1');
    res.json({posts:favouritePosts,method:req.method})
    db.close();

} 


async function openDb() {
    return sqlite.open({
      filename: './database.db',
      driver: sqlite3.Database,
    });
  }
