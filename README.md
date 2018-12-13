# setTimeout promise

[![Greenkeeper badge](https://badges.greenkeeper.io/hisco/settimeout-promise.svg)](https://greenkeeper.io/)
[![NPM Version][npm-image]][npm-url]
[![Build Status][travis-image]][travis-url]
[![Known Vulnerabilities][snyk-image]][snyk-url]
[![Test Coverage][coveralls-image]][coveralls-url]

Use setTimout es6 async/await style.
`setTimeout-promise` is simple with zero dependecies.

#Motivation
When using promises and async/await style and it's sometimes required to wait for X ms.
It usually requires some boilerplate code to be written.
`setTimeout-promise` saves you from writing this boilerplate code.
So, instead of:
```ts
  //Do something
  const promise = new Promise((resolve)=>{
    setTimeout(resolve , 10)
  });
  await promise;
  //Do something after waiting;
```
You can use this module
```ts
  //Do something
  await waitFor(10);
  //Do something after waiting;
```

#API
`setTimeout-promise` come with two simple functions:
 * waitFor(ms : number) : Promise<{}>
 * asyncTimeout(ms : number) : { promise : Promise<{}> , timer : NodeJS.Timeout}

 So this means you can use if you just need to wait for X ms you can use `waitFor`:
 ```ts
    import {waitFor} from 'settimeout-promise'
    
    (async function(){
      await waitFor(10);
    })()
 ```
  Or if you may need to cancel the timeout you can use `asyncTimeout`:
 ```ts
    import {asyncTimeout} from 'settimeout-promise'
    
    (async function(){
      const {promise , timer} = await asyncTimeout(10)
      promise.then(()=>{
        //This will never be invoked
      })
      //You need to cancel timeout
      clearTimeout(timer)
    })()
 ```


## License

  [MIT](LICENSE)

[npm-image]: https://img.shields.io/npm/v/settimeout-promise.svg
[npm-url]: https://npmjs.org/package/settimeout-promise
[travis-image]: https://img.shields.io/travis/hisco/settimeout-promise/master.svg?style=flat-square
[travis-url]: https://travis-ci.org/hisco/settimeout-promise
[snyk-image]: https://snyk.io/test/github/hisco/settimeout-promise/badge.svg?targetFile=package.json
[snyk-url]: https://snyk.io/test/github/hisco/settimeout-promise/badge.svg?targetFile=package.json
[coveralls-image]: https://coveralls.io/repos/github/hisco/settimeout-promise/badge.svg?branch=master
[coveralls-url]: https://coveralls.io/github/hisco/settimeout-promise?branch=master





