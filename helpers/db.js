import { MongoClient } from "mongodb";

export async function connectToDatabase() {
    const client = await MongoClient.connect(
        'mongodb+srv://nextjs:**********@cluster0.5c4vuum.mongodb.net/authentication?retryWrites=true&w=majority'
    );
    
    return client;
}
