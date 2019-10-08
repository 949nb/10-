import * as chai from 'chai'
import * as sinon from 'sinon'
import * as sinonChai from 'sinon-chai'
chai.use(sinonChai)

import Promise from "../src/Promise";

const assert = chai.assert

describe('Promise', () => {
  it('是一个类么', () => {
    assert(typeof Promise === 'function')
    assert.isFunction(Promise)
  })
  it('new Promise() 必须接受一个函数', () => {
    assert.throw(() => {
      // @ts-ignore
      new Promise()
    })
  })
  it('new Promise(fn) 会生成一个对象，拥有then方法', () => {
    let fn = () => {}
    assert.isFunction(new Promise(fn).then)
  })
  it('new Promise(fn) 中的fn必须立即执行', () => {
    let [a, fn] = [false, () => a = true]
    new Promise(fn)
    assert(a === true)
  })
  it('new Promise(fn) 中的fn接受两个参数均为函数', (done) => {
    function fn(resolve, reject) {
      assert.isFunction(resolve)
      assert.isFunction(reject)
      done()
    }
    new Promise(fn)
  })
  it('new Promise(fn) 中fn的参数resolve 传入就执行', () => {
    let success = sinon.fake()
    let promise = new Promise((resolve, reject) => {
      assert.isFalse(success.called)
      resolve()
      setTimeout(() => {
        assert(success.called)
      }, 1);
    })
    promise.then(success)
  })
  it('new Promise(fn) 中fn的参数reject 传入就执行', () => {
    let fail = sinon.fake()
    let promise = new Promise((resolve, reject) => {
      assert.isFalse(fail.called)
      reject()
      setTimeout(() => {
        assert(fail.called)
      }, 1);
    })
    promise.then(null, fail)
  })
})