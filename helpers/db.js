import { MongoClient } from "mongodb";

export async function connectToDatabase() {
    const client = await MongoClient.connect(
        'mongodb+srv://nextjs:BkvTgarATV9OiTxV@cluster0.5c4vuum.mongodb.net/authentication?retryWrites=true&w=majority'
    );
    
    return client;
}