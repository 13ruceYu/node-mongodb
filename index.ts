import { FindOptions, MongoClient, ObjectId, UpdateFilter } from "mongodb"

const url = "mongodb://127.0.0.1:27017/"
const client = new MongoClient(url)

const records = [
  {
    name: 'Bobo',
    age: 25
  },
  {
    name: 'Bruce',
    age: 26
  }
]

async function run() {
  try {
    await client.connect()
    const db = client.db('hello')
    const res = await db.command({ ping: 1 })
    console.log('connected', res)
    const userCollection = db.collection('user')

    // 数据插入
    // const result = await userCollection.insertOne({name: 'Jim', age: '16'})
    // console.log(result)
    // const resMany = await userCollection.insertMany(records)
    // console.log(resMany)

    // 数据查询
    // const result = await userCollection.findOne({ name: 'Bobo' })
    // console.log('one find:', result)
    // 1 query with cursor
    // const cursor = userCollection.find()
    // await cursor.forEach(doc => console.log(doc))
    // 2 query with toArray()
    // const results = await userCollection.find().toArray()
    // console.log(results)
    // 3 query with comparison: $eq, $gt, $gte, $in, $lt, $lte, $ne, $nin
    // const results = await userCollection.find({age: {$gt: 20}}).toArray()
    // console.log(results)
    // 4 query with logical: $and, $or, $not, $nor
    // const results = await userCollection.find({
    //   $or: [
    //     { name: { $eq: 'Bruce' } },
    //     { name: {$eq: 'AD'}}
    //   ]
    // }).toArray()
    // console.log(results)
    // 5 query with element: $exists, $type
    // const results = await userCollection.find({hobby: {$exists: true}}).toArray()
    // console.log(results)
    // const results = await userCollection.find({age: {$type: 'string'}}).toArray()
    // console.log(results)
    // 6 query options
    // const options: FindOptions = {
    //   limit: 2
    // }
    // const results = await userCollection.find({age: {$type: 'number'}}, options).toArray()
    // console.log(results)


    // 数据更新
    // replace - put
    // const replaceDoc = await userCollection.replaceOne({name: "Jim"}, {name: "Jimmy"})
    // console.log(replaceDoc)

    // update - patch
    const updateFilter: UpdateFilter<{ name: string, age: number }> = {
      $set: {
        name: 'Will'
      }
    }
    const updateDoc = await userCollection.updateOne({ _id: new ObjectId('63b93ef13d7fca60be632bc9') }, updateFilter)
    console.log(updateDoc)


  } catch (e) {
    console.error(e)
  } finally {
    await client.close()
  }
}

run()