import * as MongoDB from 'mongodb';

export interface GoodsModel {
    _id: MongoDB.ObjectId;
    name :string;
    goods_id :string;
    size :number;
    amount :number;
    note :string;
}