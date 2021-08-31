import * as MongoDB from 'mongodb';

export interface userModel {
    _id: MongoDB.ObjectId;
    name :string;
    id :number;
    password :string;
}