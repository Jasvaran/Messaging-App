import mongoose from "mongoose"


const Schema = mongoose.Schema

const UserSchema = new Schema({
    username: {
        type: String,
        required: true,
        minLength: 1,
        maxLength: 30
    },

    password: {
        type: String,
        minLength: 6,
        required: true,
    },

})

UserSchema.virtual("ur").get(function () {
    return `/user/${this.id}`
})

const UserModel = mongoose.model("User", UserSchema)

export default UserModel