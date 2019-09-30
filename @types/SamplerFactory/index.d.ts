/// <reference path="../number/index.d.ts" />
/// <reference path="../Array/index.d.ts" />
/// <reference path="../ScalarSampler/index.d.ts" />
/// <reference path="../ArrayOfScalarSamplers/index.d.ts" />
/// <reference path="../ColorSampler/index.d.ts" />
/// <reference path="../RotationSampler/index.d.ts" />
/// <reference path="../SignalRecord/index.d.ts" />
declare interface SamplerFactory {
/** 
* 
 *  
 * constant(value: number): ScalarSampler
 * constant(value: Array<number>): ArrayOfScalarSamplers
 *  
 * 
 * Returns a sampler that returns the same value at all points in the animation.
 * 
 */constant(value: number): ScalarSampler
 ;

constant(value: Array<number>): ArrayOfScalarSamplers
 ;

/** 
* 
 *  
 * HSVA(channelSamplers: ArrayOfScalarSamplers): ColorSampler
 *  
 * 
 * Returns a sampler that specifies a color by interpreting the provided samplers as HSVA channels, respectively.
 * 
 * The dimension of `channelSamplers` must be exactly 4.
 * `channelSamplers` must be an instance of `ArrayOfScalarSamplers`, not a regular JS Array object.
 * 
 */HSVA(channelSamplers: ArrayOfScalarSamplers): ColorSampler
 ;

/** 
* 
 *  
 * easeOutQuart(beginValue: number, endValue: number): ScalarSampler
 * easeOutQuart(beginValue: Array<number>, endValue: Array<number>): ArrayOfScalarSamplers
 *  
 * 
 * Easing sampler. Behaves similarly to the linear sampler, but with easing functions at the beginning and/or end.
 * 
 */easeOutQuart(beginValue: number, endValue: number): ScalarSampler
 ;

easeOutQuart(beginValue: Array<number>, endValue: Array<number>): ArrayOfScalarSamplers
 ;

/** 
* 
 *  
 * polybezier(config: { keyframes: Array<number>, knots: ?Array<number>, tangents: ?Array<number> }): ScalarSampler
 * polybezier(config: { keyframes: Array<Array<number>>, knots: ?Array<number>, tangents: ?Array<Array<number>> }): ArrayOfScalarSamplers
 *  
 * 
 * Returns a sampler object that generates values of a piecewise cubic Bezier spline that goes through specified `keyframes` as the attached driver's progress goes from 0.0 to 1.0 through normalized `knots` points.
 * 
 * When `tangents` is specified, the curve is C1-smooth, otherwise the curve is C2-smooth and the second derivatives at the begin and end points are zero.
 * 
 * The dimensions of `config.keyframes` and `config.knots`, if specified, and `config.tangents`, if specified, arrays must be equal and have no less than 2 elements. The first element of `config.knots`, if specified, must always be zero. If `config.knots` is not specified then the knot sequence is defaulted to [0, 1, 2, ..., `config.keyframes.length` - 1].
 * 
 */polybezier(config: { keyframes: Array<number>, knots: ?Array<number>, tangents: ?Array<number> }): ScalarSampler
 ;

polybezier(config: { keyframes: Array<Array<number>>, knots: ?Array<number>, tangents: ?Array<Array<number>> }): ArrayOfScalarSamplers
 ;

/** 
* 
 *  
 * easeOutSine(beginValue: number, endValue: number): ScalarSampler
 * easeOutSine(beginValue: Array<number>, endValue: Array<number>): ArrayOfScalarSamplers
 *  
 * 
 * Easing sampler. Behaves similarly to the linear sampler, but with easing functions at the beginning and/or end.
 * 
 */easeOutSine(beginValue: number, endValue: number): ScalarSampler
 ;

easeOutSine(beginValue: Array<number>, endValue: Array<number>): ArrayOfScalarSamplers
 ;

/** 
* 
 *  
 * easeInOutBack(beginValue: number, endValue: number): ScalarSampler
 * easeInOutBack(beginValue: Array<number>, endValue: Array<number>): ArrayOfScalarSamplers
 *  
 * 
 * Easing sampler. Behaves similarly to the linear sampler, but with easing functions at the beginning and/or end.
 * 
 */easeInOutBack(beginValue: number, endValue: number): ScalarSampler
 ;

easeInOutBack(beginValue: Array<number>, endValue: Array<number>): ArrayOfScalarSamplers
 ;

/** 
* 
 *  
 * linear(beginValue: number, endValue: number): ScalarSampler
 * linear(beginValue: Array<number>, endValue: Array<number>): ArrayOfScalarSamplers
 *  
 * 
 * Returns a sampler object that generates values that change linearly from `beginValue` to `endValue` as the attached driver's progress goes from 0.0 to 1.0.
 * 
 */linear(beginValue: number, endValue: number): ScalarSampler
 ;

linear(beginValue: Array<number>, endValue: Array<number>): ArrayOfScalarSamplers
 ;

/** 
* 
 *  
 * easeInOutQuint(beginValue: number, endValue: number): ScalarSampler
 * easeInOutQuint(beginValue: Array<number>, endValue: Array<number>): ArrayOfScalarSamplers
 *  
 * 
 * Easing sampler. Behaves similarly to the linear sampler, but with easing functions at the beginning and/or end.
 * 
 */easeInOutQuint(beginValue: number, endValue: number): ScalarSampler
 ;

easeInOutQuint(beginValue: Array<number>, endValue: Array<number>): ArrayOfScalarSamplers
 ;

/** 
* 
 *  
 * easeInBack(beginValue: number, endValue: number): ScalarSampler
 * easeInBack(beginValue: Array<number>, endValue: Array<number>): ArrayOfScalarSamplers
 *  
 * 
 * Easing sampler. Behaves similarly to the linear sampler, but with easing functions at the beginning and/or end.
 * 
 */easeInBack(beginValue: number, endValue: number): ScalarSampler
 ;

easeInBack(beginValue: Array<number>, endValue: Array<number>): ArrayOfScalarSamplers
 ;

/** 
* 
 *  
 * easeInOutElastic(beginValue: number, endValue: number): ScalarSampler
 * easeInOutElastic(beginValue: Array<number>, endValue: Array<number>): ArrayOfScalarSamplers
 *  
 * 
 * Easing sampler. Behaves similarly to the linear sampler, but with easing functions at the beginning and/or end.
 * 
 */easeInOutElastic(beginValue: number, endValue: number): ScalarSampler
 ;

easeInOutElastic(beginValue: Array<number>, endValue: Array<number>): ArrayOfScalarSamplers
 ;

/** 
* 
 *  
 * easeInCubic(beginValue: number, endValue: number): ScalarSampler
 * easeInCubic(beginValue: Array<number>, endValue: Array<number>): ArrayOfScalarSamplers
 *  
 * 
 * Easing sampler. Behaves similarly to the linear sampler, but with easing functions at the beginning and/or end.
 * 
 */easeInCubic(beginValue: number, endValue: number): ScalarSampler
 ;

easeInCubic(beginValue: Array<number>, endValue: Array<number>): ArrayOfScalarSamplers
 ;

/** 
* 
 *  
 * polyline(config: { keyframes: Array<number>, knots: ?Array<number> }): ScalarSampler
 * polyline(config: { keyframes: Array<Array<number>>, knots: ?Array<number> }): ArrayOfScalarSamplers
 * polyline(config: { keyframes: Array<Rotation>, knots: ?Array<number> }): RotationSampler
 *  
 * 
 * Returns a sampler object that generates values that goes piecewise linearly through specified `keyframes` as the attached driver's progress goes from 0.0 to 1.0 through normalized `knots` points.
 * 
 * The dimensions of the `config.keyframes` and `config.knots` arrays, if specified, must be equal and be not less than 2. The first element of `config.knots`, if specified, must be zero. If `config.knots` is not specified then the knot sequence defaults to [0, 1, 2, ..., `config.keyframes.length` - 1].
 * 
 */polyline(config: { keyframes: Array<number>, knots: ?Array<number> }): ScalarSampler
 ;

polyline(config: { keyframes: Array<Array<number>>, knots: ?Array<number> }): ArrayOfScalarSamplers
 ;

polyline(config: { keyframes: Array<Rotation>, knots: ?Array<number> }): RotationSampler
 ;

/** 
* 
 *  
 * easeInSine(beginValue: number, endValue: number): ScalarSampler
 * easeInSine(beginValue: Array<number>, endValue: Array<number>): ArrayOfScalarSamplers
 *  
 * 
 * Easing sampler. Behaves similarly to the linear sampler, but with easing functions at the beginning and/or end.
 * 
 */easeInSine(beginValue: number, endValue: number): ScalarSampler
 ;

easeInSine(beginValue: Array<number>, endValue: Array<number>): ArrayOfScalarSamplers
 ;

/** 
* 
 *  
 * easeInOutQuart(beginValue: number, endValue: number): ScalarSampler
 * easeInOutQuart(beginValue: Array<number>, endValue: Array<number>): ArrayOfScalarSamplers
 *  
 * 
 * Easing sampler. Behaves similarly to the linear sampler, but with easing functions at the beginning and/or end.
 * 
 */easeInOutQuart(beginValue: number, endValue: number): ScalarSampler
 ;

easeInOutQuart(beginValue: Array<number>, endValue: Array<number>): ArrayOfScalarSamplers
 ;

/** 
* 
 *  
 * easeInExpo(beginValue: number, endValue: number): ScalarSampler
 * easeInExpo(beginValue: Array<number>, endValue: Array<number>): ArrayOfScalarSamplers
 *  
 * 
 * Easing sampler. Behaves similarly to the linear sampler, but with easing functions at the beginning and/or end.
 * 
 */easeInExpo(beginValue: number, endValue: number): ScalarSampler
 ;

easeInExpo(beginValue: Array<number>, endValue: Array<number>): ArrayOfScalarSamplers
 ;

/** 
* 
 *  
 * easeInOutQuad(beginValue: number, endValue: number): ScalarSampler
 * easeInOutQuad(beginValue: Array<number>, endValue: Array<number>): ArrayOfScalarSamplers
 *  
 * 
 * Easing sampler. Behaves similarly to the linear sampler, but with easing functions at the beginning and/or end.
 * 
 */easeInOutQuad(beginValue: number, endValue: number): ScalarSampler
 ;

easeInOutQuad(beginValue: Array<number>, endValue: Array<number>): ArrayOfScalarSamplers
 ;

/** 
* 
 *  
 * polylineFromRecord(signalRecord: SignalRecord): ScalarSampler
 *  
 * 
 * Returns a polyline with values recorded from a signal as keyframes. Elapsed time
 *   is used as knots. See 'polyline' function.
 * 
 */polylineFromRecord(signalRecord: SignalRecord): ScalarSampler
 ;

/** 
* 
 *  
 * easeOutExpo(beginValue: number, endValue: number): ScalarSampler
 * easeOutExpo(beginValue: Array<number>, endValue: Array<number>): ArrayOfScalarSamplers
 *  
 * 
 * Easing sampler. Behaves similarly to the linear sampler, but with easing functions at the beginning and/or end.
 * 
 */easeOutExpo(beginValue: number, endValue: number): ScalarSampler
 ;

easeOutExpo(beginValue: Array<number>, endValue: Array<number>): ArrayOfScalarSamplers
 ;

/** 
* 
 *  
 * bezier(p0: number, p1: number, p2: number, p3: number): ScalarSampler
 * bezier(p0: Array<number>, p1: Array<number>, p2: Array<number>, p3: Array<number>): ArrayOfScalarSamplers
 *  
 * 
 * Returns a sampler object that generates values of a cubic Bezier curve with the specified control points. The control points are assumed to be equidistant along the parameter axis.
 * 
 */bezier(p0: number, p1: number, p2: number, p3: number): ScalarSampler
 ;

bezier(p0: Array<number>, p1: Array<number>, p2: Array<number>, p3: Array<number>): ArrayOfScalarSamplers
 ;

/** 
* 
 *  
 * sequence(config: { samplers: Array<ScalarSampler>, knots: ?Array<number> }): ScalarSampler
 * sequence(config: { samplers: Array<ArrayOfScalarSamplers>, knots: ?Array<number> }): ArrayOfScalarSamplers
 *  
 * 
 * Returns an animation sequence built from provided segments with respect to the optionally provided knots.
 * 
 * `config.samplers` must contain at least 2 elements.
 * `config.knots`, if specified, must contain exactly `config.samplers.length`+1 elements.
 * The first element of `config.knots`, when specified, must always be zero.
 * If `config.knots` is not specified then the knot sequence defaults to [0, 1, 2, ..., `config.samplers.length`].
 * 
 * 
 */sequence(config: { samplers: Array<ScalarSampler>, knots: ?Array<number> }): ScalarSampler
 ;

sequence(config: { samplers: Array<ArrayOfScalarSamplers>, knots: ?Array<number> }): ArrayOfScalarSamplers
 ;

/** 
* 
 *  
 * easeInQuad(beginValue: number, endValue: number): ScalarSampler
 * easeInQuad(beginValue: Array<number>, endValue: Array<number>): ArrayOfScalarSamplers
 *  
 * 
 * Easing sampler. Behaves similarly to the linear sampler, but with easing functions at the beginning and/or end.
 * 
 */easeInQuad(beginValue: number, endValue: number): ScalarSampler
 ;

easeInQuad(beginValue: Array<number>, endValue: Array<number>): ArrayOfScalarSamplers
 ;

/** 
* 
 *  
 * easeInOutSine(beginValue: number, endValue: number): ScalarSampler
 * easeInOutSine(beginValue: Array<number>, endValue: Array<number>): ArrayOfScalarSamplers
 *  
 * 
 * Easing sampler. Behaves similarly to the linear sampler, but with easing functions at the beginning and/or end.
 * 
 */easeInOutSine(beginValue: number, endValue: number): ScalarSampler
 ;

easeInOutSine(beginValue: Array<number>, endValue: Array<number>): ArrayOfScalarSamplers
 ;

/** 
* 
 *  
 * frame(numberOfFrames: number): ScalarSampler
 * frame(numberOfFrames: number, startFrame: number): ScalarSampler
 * frame(numberOfFrames: Array<number>): ArrayOfScalarSamplers
 * frame(numberOfFrames: Array<number>, startFrame: Array<number>): ArrayOfScalarSamplers
 *  
 * 
 * Returns a sampler object that cyclically generates integer frame numbers in the range [0..`numberOfFrames`-1] as the attached driver's progress goes from 0.0 to 1.0.
 * 
 * If the `startFrame` is supplied, then the output values are shifted by that value.
 * 
 */frame(numberOfFrames: number): ScalarSampler
 ;

frame(numberOfFrames: number, startFrame: number): ScalarSampler
 ;

frame(numberOfFrames: Array<number>): ArrayOfScalarSamplers
 ;

frame(numberOfFrames: Array<number>, startFrame: Array<number>): ArrayOfScalarSamplers
 ;

/** 
* 
 *  
 * easeOutQuad(beginValue: number, endValue: number): ScalarSampler
 * easeOutQuad(beginValue: Array<number>, endValue: Array<number>): ArrayOfScalarSamplers
 *  
 * 
 * Easing sampler. Behaves similarly to the linear sampler, but with easing functions at the beginning and/or end.
 * 
 */easeOutQuad(beginValue: number, endValue: number): ScalarSampler
 ;

easeOutQuad(beginValue: Array<number>, endValue: Array<number>): ArrayOfScalarSamplers
 ;

/** 
* 
 *  
 * easeOutCubic(beginValue: number, endValue: number): ScalarSampler
 * easeOutCubic(beginValue: Array<number>, endValue: Array<number>): ArrayOfScalarSamplers
 *  
 * 
 * Easing sampler. Behaves similarly to the linear sampler, but with easing functions at the beginning and/or end.
 * 
 */easeOutCubic(beginValue: number, endValue: number): ScalarSampler
 ;

easeOutCubic(beginValue: Array<number>, endValue: Array<number>): ArrayOfScalarSamplers
 ;

/** 
* 
 *  
 * easeInOutBounce(beginValue: number, endValue: number): ScalarSampler
 * easeInOutBounce(beginValue: Array<number>, endValue: Array<number>): ArrayOfScalarSamplers
 *  
 * 
 * Easing sampler. Behaves similarly to the linear sampler, but with easing functions at the beginning and/or end.
 * 
 */easeInOutBounce(beginValue: number, endValue: number): ScalarSampler
 ;

easeInOutBounce(beginValue: Array<number>, endValue: Array<number>): ArrayOfScalarSamplers
 ;

/** 
* 
 *  
 * easeInOutCubic(beginValue: number, endValue: number): ScalarSampler
 * easeInOutCubic(beginValue: Array<number>, endValue: Array<number>): ArrayOfScalarSamplers
 *  
 * 
 * Easing sampler. Behaves similarly to the linear sampler, but with easing functions at the beginning and/or end.
 * 
 */easeInOutCubic(beginValue: number, endValue: number): ScalarSampler
 ;

easeInOutCubic(beginValue: Array<number>, endValue: Array<number>): ArrayOfScalarSamplers
 ;

/** 
* 
 *  
 * easeInOutExpo(beginValue: number, endValue: number): ScalarSampler
 * easeInOutExpo(beginValue: Array<number>, endValue: Array<number>): ArrayOfScalarSamplers
 *  
 * 
 * Easing sampler. Behaves similarly to the linear sampler, but with easing functions at the beginning and/or end.
 * 
 */easeInOutExpo(beginValue: number, endValue: number): ScalarSampler
 ;

easeInOutExpo(beginValue: Array<number>, endValue: Array<number>): ArrayOfScalarSamplers
 ;

/** 
* 
 *  
 * easeInQuart(beginValue: number, endValue: number): ScalarSampler
 * easeInQuart(beginValue: Array<number>, endValue: Array<number>): ArrayOfScalarSamplers
 *  
 * 
 * Easing sampler. Behaves similarly to the linear sampler, but with easing functions at the beginning and/or end.
 * 
 */easeInQuart(beginValue: number, endValue: number): ScalarSampler
 ;

easeInQuart(beginValue: Array<number>, endValue: Array<number>): ArrayOfScalarSamplers
 ;

/** 
* 
 *  
 * easeInQuint(beginValue: number, endValue: number): ScalarSampler
 * easeInQuint(beginValue: Array<number>, endValue: Array<number>): ArrayOfScalarSamplers
 *  
 * 
 * Easing sampler. Behaves similarly to the linear sampler, but with easing functions at the beginning and/or end.
 * 
 */easeInQuint(beginValue: number, endValue: number): ScalarSampler
 ;

easeInQuint(beginValue: Array<number>, endValue: Array<number>): ArrayOfScalarSamplers
 ;

/** 
* 
 *  
 * easeOutQuint(beginValue: number, endValue: number): ScalarSampler
 * easeOutQuint(beginValue: Array<number>, endValue: Array<number>): ArrayOfScalarSamplers
 *  
 * 
 * Easing sampler. Behaves similarly to the linear sampler, but with easing functions at the beginning and/or end.
 * 
 */easeOutQuint(beginValue: number, endValue: number): ScalarSampler
 ;

easeOutQuint(beginValue: Array<number>, endValue: Array<number>): ArrayOfScalarSamplers
 ;

/** 
* 
 *  
 * RGBA(channelSamplers: ArrayOfScalarSamplers): ColorSampler
 *  
 * 
 * Returns a sampler that specifies a color by interpreting the provided samplers as RGBA channels, respectively.
 * 
 * The dimension of `channelSamplers` must be exactly 4.
 * `channelSamplers` must be an instance of `ArrayOfScalarSamplers`, not a JavaScript Array object.
 * 
 */RGBA(channelSamplers: ArrayOfScalarSamplers): ColorSampler
 ;

/** 
* 
 *  
 * easeInCirc(beginValue: number, endValue: number): ScalarSampler
 * easeInCirc(beginValue: Array<number>, endValue: Array<number>): ArrayOfScalarSamplers
 *  
 * 
 * Easing sampler. Behaves similarly to the linear sampler, but with easing functions at the beginning and/or end.
 * 
 */easeInCirc(beginValue: number, endValue: number): ScalarSampler
 ;

easeInCirc(beginValue: Array<number>, endValue: Array<number>): ArrayOfScalarSamplers
 ;

/** 
* 
 *  
 * easeOutCirc(beginValue: number, endValue: number): ScalarSampler
 * easeOutCirc(beginValue: Array<number>, endValue: Array<number>): ArrayOfScalarSamplers
 *  
 * 
 * Easing sampler. Behaves similarly to the linear sampler, but with easing functions at the beginning and/or end.
 * 
 */easeOutCirc(beginValue: number, endValue: number): ScalarSampler
 ;

easeOutCirc(beginValue: Array<number>, endValue: Array<number>): ArrayOfScalarSamplers
 ;

/** 
* 
 *  
 * easeInElastic(beginValue: number, endValue: number): ScalarSampler
 * easeInElastic(beginValue: Array<number>, endValue: Array<number>): ArrayOfScalarSamplers
 *  
 * 
 * Easing sampler. Behaves similarly to the linear sampler, but with easing functions at the beginning and/or end.
 * 
 */easeInElastic(beginValue: number, endValue: number): ScalarSampler
 ;

easeInElastic(beginValue: Array<number>, endValue: Array<number>): ArrayOfScalarSamplers
 ;

/** 
* 
 *  
 * easeInOutCirc(beginValue: number, endValue: number): ScalarSampler
 * easeInOutCirc(beginValue: Array<number>, endValue: Array<number>): ArrayOfScalarSamplers
 *  
 * 
 * Easing sampler. Behaves similarly to the linear sampler, but with easing functions at the beginning and/or end.
 * 
 */easeInOutCirc(beginValue: number, endValue: number): ScalarSampler
 ;

easeInOutCirc(beginValue: Array<number>, endValue: Array<number>): ArrayOfScalarSamplers
 ;

/** 
* 
 *  
 * easeOutBack(beginValue: number, endValue: number): ScalarSampler
 * easeOutBack(beginValue: Array<number>, endValue: Array<number>): ArrayOfScalarSamplers
 *  
 * 
 * Easing sampler. Behaves similarly to the linear sampler, but with easing functions at the beginning and/or end.
 * 
 */easeOutBack(beginValue: number, endValue: number): ScalarSampler
 ;

easeOutBack(beginValue: Array<number>, endValue: Array<number>): ArrayOfScalarSamplers
 ;

/** 
* 
 *  
 * easeOutElastic(beginValue: number, endValue: number): ScalarSampler
 * easeOutElastic(beginValue: Array<number>, endValue: Array<number>): ArrayOfScalarSamplers
 *  
 * 
 * Easing sampler. Behaves similarly to the linear sampler, but with easing functions at the beginning and/or end.
 * 
 */easeOutElastic(beginValue: number, endValue: number): ScalarSampler
 ;

easeOutElastic(beginValue: Array<number>, endValue: Array<number>): ArrayOfScalarSamplers
 ;

/** 
* 
 *  
 * easeInBounce(beginValue: number, endValue: number): ScalarSampler
 * easeInBounce(beginValue: Array<number>, endValue: Array<number>): ArrayOfScalarSamplers
 *  
 * 
 * Easing sampler. Behaves similarly to the linear sampler, but with easing functions at the beginning and/or end.
 * 
 */easeInBounce(beginValue: number, endValue: number): ScalarSampler
 ;

easeInBounce(beginValue: Array<number>, endValue: Array<number>): ArrayOfScalarSamplers
 ;

/** 
* 
 *  
 * polybezierFromRecord(signalRecord: SignalRecord): ScalarSampler
 *  
 * 
 * Returns a polybezier with values recorded from a sampler as keyframes. Elapsed
 *    time is used as the knots. See 'polybezier' function. (This does not have
 *    tangents specified.)
 * 
 */polybezierFromRecord(signalRecord: SignalRecord): ScalarSampler
 ;

/** 
* 
 *  
 * easeOutBounce(beginValue: number, endValue: number): ScalarSampler
 * easeOutBounce(beginValue: Array<number>, endValue: Array<number>): ArrayOfScalarSamplers
 *  
 * 
 * Easing sampler. Behaves similarly to the linear sampler, but with easing functions at the beginning and/or end.
 * 
 */easeOutBounce(beginValue: number, endValue: number): ScalarSampler
 ;

easeOutBounce(beginValue: Array<number>, endValue: Array<number>): ArrayOfScalarSamplers
 ;

} 
