import mongoose from "mongoose";

const Schema = mongoose.Schema

const MessageSchema = new Schema({
    messageText: {
        type: String,
        minLength: 1,
        required: true
    },
    timestamp: {
        type: Date
    },
    User: {
        type: Schema.Types.ObjectId,
        ref: "User"
    }
})

const MessageModel = mongoose.model("Message", MessageSchema)

export default MessageModel