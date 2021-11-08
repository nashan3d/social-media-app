const sqlite = require('sqlite');
const sqlite3 = require('sqlite3');


async function openDb() {
    return sqlite.open({
      filename: './database.db',
      driver: sqlite3.Database,
    });
  }

async function setup(){
    const db = await openDb();    
    await db.migrate(
        { 
          migrationsPath: './migrations', //add cutom path to your migrations
          force: 'last' 
        }
      );

    const posts = await db.all('SELECT * FROM Post');
    console.log('All posts',JSON.stringify(posts,null,2));
}

setup();