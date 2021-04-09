import * as MongoDB from 'mongodb';

export interface oauth_clients {
    client_name: string;
    client_id: string;
    client_secret: string;
    redirect_uri: string;
    user_id: number;
} 