import * as st from './settimeout';
export function asyncTimeout(ms : number){
    let resolve;
    const promise = new Promise(function timerPromise(r){
        resolve = r;
    });
    const timer = st(resolve , ms);
    return {
        timer,
        promise
    }
}
export function waitFor(ms : number){
    return asyncTimeout(ms).promise;
}