import mongoose from 'mongoose'

const userSchema = mongoose.Schema({
  firstName: String,
  lastName: String,
  email: String,
  address: String,
  mobileNo: Number,
  password: String,
  createdAt: {
    type: Date,
    default: new Date(),
  },
})

var userModel = mongoose.model('userModel', userSchema)

export default userModel
