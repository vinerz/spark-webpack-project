/// <reference path="../ScalarSignal/index.d.ts" />
declare interface SignalRecorder {
/** 
* ```
(get) durationMs: ScalarSignal
(set) (Not Available)
```

Returns duration of SignalRecorder recording so far, in milliseconds.

**NOTE**: There may be up to a 2 frame delay in this value.
*/ 
durationMs: ScalarSignal;
/** 
* ```
(get) recordCount: ScalarSignal
(set) (Not Available)```

Returns number of records taken in this SignalRecorder so far.

**NOTE**: There may be up to a 2 frame delay in this value.
*/ 
recordCount: ScalarSignal;
/** 
*  
 * stop() : SignalRecord
 *  
 * 
 * Stops this Signal Recorder and returns a Signal Record.
 */stop() : SignalRecord
 ;

} 
