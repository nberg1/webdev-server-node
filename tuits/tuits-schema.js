import mongoose from "mongoose";
const schema = mongoose.Schema({
    tuit: String,
    title: String,
    likes: Number,
    Like: Number,
    Dislike: Number,
    User: String,
    userName: String,
    UserImage: String,
    postedBy: {
        username: String
    }
}, {collection: 'tuits'});
export default schema;