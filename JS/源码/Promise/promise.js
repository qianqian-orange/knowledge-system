const PENDING = 'pending';
const RESOLVED = 'resolved';
const REJECTED = 'rejected';
function Promise(executor) {
  this.status = PENDING;
  this.value = null;
  this.reason = null;
  this.onFulfilledList = [];
  this.onRejectedList = [];

  let resolve = (value) => {
    if (this.status !== PENDING) return;
    this.status = RESOLVED;
    this.value = value;
    this.onFulfilledList.forEach(fn => fn());
  }

  let reject = (reason) => {
    if (this.status !== PENDING) return;
    this.status = REJECTED;
    this.reason = reason;
    this.onRejectedList.forEach(fn => fn());
  }

  try {
    executor(resolve, reject);
  } catch (e) {
    reject(e);
  }
}

Promise.prototype.then = function (onFulfilled, onRejected) {
  onFulfilled = typeof onFulfilled === 'function' ? onFulfilled : val => val;
  onRejected = typeof onRejected === 'function' ? onRejected : e => { throw Error(e) };
  let promise;
  let handle = (fn, data, resolve, reject) => {
    try {
      let result = fn(data);
      resolveResult(promise, result, resolve, reject);
    } catch (e) {
      reject(e);
    }
  }
  const self = this;
  promise = new Promise((resolve, reject) => {
    switch (self.status)
    {
      case PENDING:
        self.onFulfilledList.push(() => {
          handle(onFulfilled, self.value, resolve, reject);
        });
        self.onRejectedList.push(() => {
          handle(onRejected, self.reason, resolve, reject);
        });
        break;
      case RESOLVED:
        handle(onFulfilled, self.value, resolve, reject);
        break;
      case REJECTED:
        handle(onRejected, self.reason, resolve, reject);
        break;
      default:
        throw Error('status is illegal value');
    }
  });
  return promise;
}

function resolveResult(promise, result, resolve, reject) {
  if (res === promise) reject(new TypeError('Chaining cycle'));
  if (result === null) {
    resolve(null);
    return;
  }
  if (typeof result !== 'object') {
    resolve(result);
    return;
  }
  const then = result.then;
  if (typeof then !== 'function') {
    resolve(result);
    return;
  }
  then.call(result, (res) => {
    resolve(res);
  }, (e) => {
    reject(e);
  });
}

Promise.defer = Promise.deferred = function () {
  let dfd = {};
  dfd.promise = new Promise((resolve, reject) => {
      dfd.resolve = resolve;
      dfd.reject = reject;
  });
  return dfd;
}