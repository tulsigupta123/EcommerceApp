import mongoose from "mongoose"
const connectToDb = async()=>{
try{
    const connect = await mongoose.connect(process.env.Mongo_url || "mongodb://127.0.0.1:27017/onlineshoppingsite");
    console.log(`Connected to mongodb database ${connect.connection.host}`);

}catch(error){
console.log(`Error is: ${error}`);
}
};
export default connectToDb;