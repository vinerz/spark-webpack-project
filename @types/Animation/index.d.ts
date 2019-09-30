/// <reference path="../SamplerFactory/index.d.ts" />
/// <reference path="../ScalarSignal/index.d.ts" />
/// <reference path="../number/index.d.ts" />
/// <reference path="../ValueDriver/index.d.ts" />
/// <reference path="../Driver/index.d.ts" />
/// <reference path="../ScalarSampler/index.d.ts" />
/// <reference path="../ArrayOfScalarSamplers/index.d.ts" />
/// <reference path="../RotationSampler/index.d.ts" />
/// <reference path="../ColorSampler/index.d.ts" />
/// <reference path="../ArrayOfScalarSignals/index.d.ts" />
/// <reference path="../RotationSignal/index.d.ts" />
/// <reference path="../RgbaSignal/index.d.ts" />
/// <reference path="../TimeDriver/index.d.ts" />
/// <reference path="../SignalRecorder/index.d.ts" />
declare namespace AnimationModule {
/** 
* 
```
(get) samplers: SamplerFactory
(set) (Not Available)
```

Specifies an instance of a `SamplerFactory` object.

*/ 
const samplers: SamplerFactory;
/** 
*  
 * valueDriver(value: ScalarSignal, min: number, max: number): ValueDriver
 *  
 * 
 * Returns a `ValueDriver` object that drives an animation based on values emitted from a `ScalarValue`. The signal values are normalized and clamped to maximum and minimum values.
 */function valueDriver(value: ScalarSignal, min: number, max: number): ValueDriver
 ;

/** 
*  
 * animate(driver: Driver, sampler: ScalarSampler): ScalarSignal
 * animate(driver: Driver, sampler: ArrayOfScalarSamplers): ArrayOfScalarSignals
 * animate(driver: Driver, sampler: RotationSampler): RotationSignal
 * animate(driver: Driver, sampler: ColorSampler): RgbaSignal
 *  
 * 
 * Combines the driver and the sampler to create a signal that can be used to animate arbitrary properties of arbitrary objects.
 * 
 * For `TimeDriver`-based animations the animation will start only when `TimeDriver.start` is invoked.
 */function animate(driver: Driver, sampler: ScalarSampler): ScalarSignal
 ;

function animate(driver: Driver, sampler: ArrayOfScalarSamplers): ArrayOfScalarSignals
 ;

function animate(driver: Driver, sampler: RotationSampler): RotationSignal
 ;

function animate(driver: Driver, sampler: ColorSampler): RgbaSignal
 ;

/** 
*  
 * timeDriver(timeDriverParams: {durationMilliseconds: number, loopCount: ?number, mirror: ?boolean}): TimeDriver
 *  
 * 
 * Returns a `TimeDriver` object that drives an animation for the specified parameters.
 * `loopCount` defines the number of iterations before the time driver stops; this can be infinity.
 * When `mirror` is `TRUE`, the time driver follows a *yoyo* effect with every odd iteration going forwards and every even iteration going backwards.
 */function timeDriver(timeDriverParams: {durationMilliseconds: number, loopCount: ?number, mirror: ?boolean}): TimeDriver
 ;

/** 
*  
 * makeSignalRecorder(targetSignal: ScalarSignal): SignalRecorder
 * makeSignalRecorder(targetSignal: ScalarSignal, recordingSignalParams: {minRecordingGapMs: ?number, maxRecordCount: ?number): SignalRecorder
 *  
 * 
 * Begins recording a scalar signal (targetSignal) for use in a sampler. This returns a SignalRecorder object that returns a SignalRecord when stopped.
 * 
 * minRecordingGapMs and maxRecordCount are included for performance reasons: minRecordingGapMs defines the minimum amount of delay between snapshots taken in ms while maxRecordCount defines the maximum number of snapshots. maxRecordCount must be > 0. If these two values are not included, a default of 10 is used for minRecordingGapMs and 1000 is used for maxRecordCount.
 */function makeSignalRecorder(targetSignal: ScalarSignal): SignalRecorder
 ;

function makeSignalRecorder(targetSignal: ScalarSignal, recordingSignalParams: {minRecordingGapMs: ?number, maxRecordCount: ?number): SignalRecorder
 ;

} 
export = AnimationModule;