const Chai = require("chai")
const sinon = require("sinon")
const sinonChai = require("sinon-chai")
Chai.use(sinonChai)

const assert = Chai.assert
const DeepClone = require("../src/index")

describe("深拷贝测试用例", function () {
  it("是一个类", () => {
    assert.isFunction(DeepClone)
  })
  it('能够复制基本类型', () => {
    const string = '小明'
    const string2 = DeepClone(string)
    assert(string === string2)
    const number = 12345
    const number2 = DeepClone(number)
    assert(number === number2)
    const boolean = false
    const boolean2 = DeepClone(boolean)
    assert(boolean === boolean2)
  })
  it('能够复制基本对象', () => {
    const obj = {name: 'blandly'}
    const obj2 = DeepClone(obj)
    assert(obj !== obj2)
  })
   describe('能复制复杂对象', () => {
    it('能够复制对象中的数组', () => {
      const obj = {name: 'blandly', children: ['刘春晓']}
      const obj1 = DeepClone(obj)
      assert(obj.name === obj1.name)
      assert(obj.children !== obj1.children)
    })
    it('能够复制对象中的对象', () => {
      const obj = {name: 'blandly', children: {name: '刘春晓'}}
      const obj1 = DeepClone(obj)
      assert(obj.name === obj1.name)
      assert(obj.children !== obj1.children)
    })
    
  })
})