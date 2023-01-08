import mongoose, { Schema, connect, disconnect, model } from "mongoose";

mongoose.set('strictQuery', true)
const url = "mongodb://127.0.0.1:27017/hello"

export async function main() {
  try {
    await connect(url)
    console.log('[egg-mongoose] connected success')
    // const ProductSchema = new Schema({
    //   name: { type: String },
    //   price: { type: Number }
    // })
    // const ProductModel = model('Product', ProductSchema)
    // const result = await ProductModel.create({
    //   name: 'cellphone',
    //   price: 2400
    // })
    // console.log(result)
    // const ipad = new ProductModel({
    //   name: 'ipad',
    //   price: 3333,
    //   age: 11
    // })
    // await ipad.save()

    const UserScheme = new Schema({
      name: { type: String },
      age: { type: Number },
      hobbies: { type: Array },
      team: { type: Schema.Types.ObjectId, ref: "Team" }
    }, { collection: 'user' })
    const userModel = model('User', UserScheme)
    const result = await userModel.find({ age: { $gt: 16 } }).exec()
    console.log(result)
  } catch (e) {
    console.error(e)
  } finally {
    await disconnect()
  }
}

main()