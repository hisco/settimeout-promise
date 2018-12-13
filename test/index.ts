import { asyncTimeout ,waitFor } from '../src/index';

const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-spies'));

describe('settimeout' , ()=>{
    describe('asyncTimeout' , ()=>{
        it('Should wait for 0ms (next tick)',async ()=>{
            let before;
            const promise = asyncTimeout(0).promise;
            promise.then(()=>{
                before = 2
            })
            before = 1;
            expect(before).eq(1);
            await promise;
            expect(before).eq(2);
        })
        it('Should cancel timeout',async ()=>{
            let before;
            const {promise , timer} = asyncTimeout(0);
            promise.then(()=>{
                before = 2
            });
            clearTimeout(timer)
            before = 1;
            expect(before).eq(1);
            return new Promise((resolve , reject)=>{
                setTimeout(()=>{
                    try{
                        expect(before).eq(1);
                        resolve()
                    }
                    catch(err){
                        reject(err)
                    }
                },0)
            })
        })
    })
    describe('waitFor',()=>{
        it('Should waitFor 0ms (nextTick)' , async ()=>{
            let before;
            const promise = waitFor(0);
            promise.then(()=>{
                before = 2
            })
            before = 1;
            expect(before).eq(1);
            await promise;
            expect(before).eq(2);
        })
    })
})