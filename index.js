const pausable = paused => source => {
  // let paused = externalControlPause
  return (type, data) => {
    if (type === 0) {
      const sink = data
      let talkback
      // give back talkback
      sink(0, (t, d) => {
        if (talkback === undefined) {
          return
        }
        if (t === 1) {
          talkback(t, d)
        } else if (t === 2) {
          talkback(2)
        }
      })
      // register with source
      source(0, (t, d) => {
        if (t === 0) {
          talkback = d
        } else if (t === 1 && talkback !== undefined) {
          if (paused() == true) {
            return
          }
          // pass along data to sink if it is initialized and not paused
          sink(t, d)
        }
      })
    }
  }
}

export default pausable;