import Redis from 'ioredis'

const redis = new Redis();
const pub = new Redis();
const sub = new Redis();

async function run() {
  try {
    // await redis.set('name', 'viking')
    const result = await redis.get('name')
    console.log(result)

    await redis.lpush('arr', 'item-1', 'item-2');
    const arr = await redis.lrange('arr', 0, 10);
    console.log(arr);

    await redis.hmset('map', { name: 'bobo', age: '26' });
    const obj = await redis.hgetall('map');
    console.log(obj)

    // pub / sub
    // sub
    const r = await sub.subscribe('channel-1');
    console.log(r);
    sub.on('message', (channel, message) => {
      console.log(`receive ${message} from ${channel}`)
    })
    // pub
    setTimeout(() => {
      pub.publish('channel-1', 'hello world');
    }, 1000);
  } catch (e) {
    console.error(e)
  } finally {
    // redis.disconnect()
  }
}

run()