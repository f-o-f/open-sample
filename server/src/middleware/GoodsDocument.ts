 import * as MongoDB from 'mongodb';

export interface GoodsDocument {
    name: string;
    goods_id: string;
    size: number;
    amount: number;
    note: string;
} 