import interval from 'callbag-interval'
import subscribe from 'callbag-subscribe'
import take from 'callbag-take'
import pipe from 'callbag-pipe'
import pausable from './'

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