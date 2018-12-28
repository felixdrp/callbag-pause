# callbag-pause
👜 Callbag Pause is a [Callbag 👜](https://github.com/callbag/callbag) that will convert any callbag stream into one that can be paused and resumed via an external variable.

Many thanks to 
André Staltz (staltz) for [Callbag 👜](https://github.com/callbag/callbag) 
and to 
Erik Rasmussen (erikras) for [callbag-pausable ⏯️](https://github.com/erikras/callbag-pausable)

## usage example

You can run the example by:

```
npm intall callbag-pause
npm run example
```

```js
import interval from 'callbag-interval'
import subscribe from 'callbag-subscribe'
import take from 'callbag-take'
import pipe from 'callbag-pipe'
import pause from './'

let pause = false

pipe(
    interval(100),
    pausable(() => pause),
    take(6),
    subscribe(console.log)
)

setTimeout(() => {
  console.log('PAUSING')
  pause = true
}, 400)
setTimeout(() => {
  console.log('RESUMING')
  pause = false
}, 1000)

/*
Result:
    0
    1
    2
    PAUSING
    RESUMING
    9
    10
    11
*/
```