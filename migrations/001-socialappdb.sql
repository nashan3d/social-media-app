--Up
CREATE TABLE IF NOT EXISTS Post (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    postOwnerName TEXT,
    profileImageUrl TEXT,
    imageUrl TEXT,
    imageName TEXT,
    postDescription TEXT,
    price NUMERIC,
    postLikes INTEGER,
    postComments INTEGER,
    isFavourite INTEGER
);

--- Delete Existing Data
DELETE FROM POST;

INSERT INTO Post( 
    postOwnerName,
    profileImageUrl,
    imageUrl,
    imageName ,
    postDescription,
    price,
    postLikes,
    postComments,
    isFavourite)VALUES('Nashan','profile.jpg','phonecover_1.jpg','Iphone cover 6s'
                       ,'It is lates model'
                       ,230,34,12,1);

INSERT INTO Post( 
    postOwnerName,
    profileImageUrl,
    imageUrl,
    imageName ,
    postDescription,
    price,
    postLikes,
    postComments,
    isFavourite)VALUES('Nashan','profile.jpg','phonecover_2.jpg','Iphone cover 6s'
                       ,'It is lates model'
                       ,230,34,12,1);
    
INSERT INTO Post( 
    postOwnerName,
    profileImageUrl,
    imageUrl,
    imageName ,
    postDescription,
    price,
    postLikes,
    postComments,
    isFavourite)VALUES('Nashan','profile.jpg','phonecover_1.jpg','Iphone cover 6s'
                       ,'It is lates model'
                       ,230,34,12,1);


