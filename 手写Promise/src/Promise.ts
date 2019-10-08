class myPromise {
  constructor(fn) {
    if(typeof fn !== 'function') {
      throw new Error('我只接受函数')
    }
    fn(this.resolve.bind(this), this.reject.bind(this))
  }
  resolve() {
    setTimeout(() => this.success() ,0)
  }
  reject() {
    setTimeout(() => this.fail() ,0)
  }
  success
  fail
  then(success?, fail?) {
    this.success = success
    this.fail = fail
  }
  
}

export default myPromise