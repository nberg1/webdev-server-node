import mongoose from 'mongoose';
const schema = mongoose.Schema({
    tuit: String,
    title: String,
    likes: Number,
    Like: Number,
    postedBy: {
        username: String
    },
    User: String
}, {collection: 'tuits'});
export default schema;