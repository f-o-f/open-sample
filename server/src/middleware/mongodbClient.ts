import * as MongoDB from 'mongodb';

const url = 'mongodb://localhost:27017';
export const dbName = 'open-sample';
const connectOption = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}
export default function (callback: (err: MongoDB.MongoError, client: MongoDB.MongoClient, db: MongoDB.Db) => void) {
    const client = MongoDB.MongoClient;
    client.connect(url, connectOption, (err, client) => {
        if (err) {
            callback(err, null, null);
            return;
        }
        callback(null, client, client.db(dbName));
    });
}