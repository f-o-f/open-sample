import * as MongoDB from 'mongodb';

const url = 'mongodb://localhost:27017';
export const dbName = 'nekoblog';

export default function (callback: (err: MongoDB.MongoError, client: MongoDB.MongoClient, db: MongoDB.Db) => void) {
    const client = MongoDB.MongoClient;
    client.connect(url ,(err, client) => {
        const db = client.db('localhost');
    
        if (err) {
            return;
        }
        callback(null, client, client.db(dbName));

    });
};