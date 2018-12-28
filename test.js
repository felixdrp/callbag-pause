const test = require('tape');
const mock = require('callbag-mock');
const pause = require('.');

test('it pause and resume', t => {
  const source = mock('source',true);
  const sink = mock('sink');
  let pauseStream = false;

  const sourcePausable = pause(() => pauseStream)(source);
  // Connect sourcePausable to the sink
  sourcePausable(0, sink);

  [0, 1, 2, 3, 4].forEach(value => {
    if (value === 2) {
      pauseStream = true;
    } else if (value === 3) {
      pauseStream = false;
    }
    source.emit(1, value);
  });

  t.deepEqual(
    sink.getReceivedData(),
    [0, 1, 3, 4], `The 2 was emited when it was paused so it is missed`
  );
  t.end();
});


