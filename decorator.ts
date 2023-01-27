// 1 类装饰器
// 2 方法装饰器
// 3 访问器或属性装饰器
// 4 参数装饰器

function doc1(prototype, key: string, descriptor: PropertyDescriptor) {
  console.log('pro', prototype === Car.prototype);
  console.log('key', key);
  console.log('descriptor', descriptor);
  const originalFn = descriptor.value;
  descriptor.value = function () {
    originalFn.call(this);
    console.log('doc1 descriptor executed!')
  }
}

function doc2(prototype, key: string, descriptor: PropertyDescriptor) {
  console.log('doc2 executed!')
}

function docFactory(brand: string) {
  return function(prototype, key: string, descriptor: PropertyDescriptor) {
  console.log(`${brand} docFactory executed!`)
}
}

class Car {
  brand: string;
  constructor(brand: string) {
    this.brand = brand;
  }

  // @doc1
  // @doc2
  @docFactory('benz')
  run() {
    console.log(this.brand + 'running');
  }
}

const car = new Car('BMW');
car.run()