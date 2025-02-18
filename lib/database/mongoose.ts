import mongoose, { Mongoose } from 'mongoose';

const MONGODB_URL = process.env.MONGODB_URL as string;

interface MongooseConnection {
    conn: Mongoose | null;
    promise: Promise<Mongoose> | null;
}

//Usually, In express applications, we connect MONGODB to our application only once
//BUt in next, we have to call it on each and every server action or API call they do.
//We connect to the database on every request or server action because nextjs runs in a serverless env.
//Serverless functions are stateless, they start up to handle a request and shutdown right after, without maintaining a continous connection to the databses.
//This allows better scalability and reliability  as there is no need to manage persistence econnections  across many instances.
//But doing that without any optimization, meaning too many mongodb connections open for each and every action we perform on server side.
 //To optimize our approach we will resolve to caching our connections.

 let cached: MongooseConnection = (global as any).mongoose;
//global is used becausse in serverless functions, variables are not shared between requests
//We store the database connection globally to resue it


//Initializing empty cache if no cache exists
 if(!cached) {
    //(global as any).mongoose ensures the connections persists across multiple invocations
    cached = (global as any).mongoose = {
        conn: null, promise: null
    }
 }

 export const connectToDatabase = async () => {
    if(cached.conn) return cached.conn; //Use existing connection if available

    if(!MONGODB_URL) throw new Error("Missing MONGODB_URL");

    cached.promise = 
        cached.promise || 
        mongoose.connect(MONGODB_URL, 
            { dbName: 'Imagineer', 
                bufferCommands: false
        })

    cached.conn = await cached.promise; //Wait for connectiona and store it
    
    return cached.conn;
 }