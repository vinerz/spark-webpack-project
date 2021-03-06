/// <reference path="../Face/index.d.ts" />
/// <reference path="../EventSource/index.d.ts" />
/// <reference path="../BoolSignal/index.d.ts" />
declare namespace FaceGesturesModule {
/** 
*  
 * onShake(face: Face): EventSource
 * onShake(face: Face, config: { angle: ?number, period: ?number, swings: ?number }): EventSource
 *  
 * 
 * Returns an `EventSource` that fires immediately after a face shake is detected. A face shake is a series of consecutive head swings right and left. A swing is detected if the head rotates around the Y axis by the specified threshold angle within the specified period of time. The threshold, the period and the number of swings can be configured. When specified:
 * 
 * * `config.angle` sets the minimum rotation for one swing, in radians.
 * * `config.period` sets the maximum time limit for one swing, in milliseconds.
 * * `config.swings` sets the count of consecutive alternating swings after which the gesture is detected.
 */function onShake(face: Face): EventSource
 ;

function onShake(face: Face, config: { angle: ?number, period: ?number, swings: ?number }): EventSource
 ;

/** 
*  
 * hasEyebrowsRaised(face: Face): BoolSignal
 * hasEyebrowsRaised(face: Face, config: { observationPeriod: ?number, threshold: ?number, backlash: ?number }): BoolSignal
 *  
 * Returns a `BoolSignal` that indicates whether the specified `Face` object has raised eyebrows. When specified:
 * 
 * * `config.threshold` overrides the default threshold; the default value is 1.0.
 * * `config.backlash` overrides the default backlash. Backlash is used to suppress unstable behavior when the eyebrow position is close to threshold.
 * * `config.observationPeriod` sets the period over which median eyebrow positions are tracked, in milliseconds.
 * 
 * There is no explicit underlying driver signal for this face gesture.
 */function hasEyebrowsRaised(face: Face): BoolSignal
 ;

function hasEyebrowsRaised(face: Face, config: { observationPeriod: ?number, threshold: ?number, backlash: ?number }): BoolSignal
 ;

/** 
*  
 * isSmiling(face: Face): BoolSignal
 * isSmiling(face: Face, config: { lipMix: ?number, threshold: ?number, backlash: ?number }): BoolSignal
 *  
 * Returns a `BoolSignal` that indicates whether the specified face is smiling. A smile is detected when a weighted sum of lip curvatures (`mouth.upperLipCurvature` and `mouth.lowerLipCurvature`) reaches a threshold. When specified:
 * 
 * * `config.lipMix` sets the proportion of the upper and lower lip curvatures in the sum. 0.0 is lower lip only, 1.0 is upper lip only.
 * * `config.threshold` overrides the default threshold value for the curvature mix.
 * * `config.backlash` overrides the default backlash. Backlash is used to suppress unstable behavior when the mixed curvature value is close to threshold.
 * 
 * A signal goes ON when `mouth.upperLipCurvature * config.lipMix + mouth.lowerLipCurvature * (1 - config.lipMix)` reaches `config.threshold` and goes OFF at `config.threshold - config.backlash`.
 */function isSmiling(face: Face): BoolSignal
 ;

function isSmiling(face: Face, config: { lipMix: ?number, threshold: ?number, backlash: ?number }): BoolSignal
 ;

/** 
*  
 * hasRightEyeClosed(face: Face): BoolSignal
 * hasRightEyeClosed(face: Face, config: { threshold: ?number, backlash: ?number }): BoolSignal
 *  
 * Returns a `BoolSignal` that indicates whether the specified `Face` object has its right eye open. When specified:
 * 
 * * `config.threshold` overrides the default threshold for eye openness.
 * * `config.backlash` sets the default backlash. Backlash is used to minimize state jitter while the openness is near the threshold value.
 * 
 * A signal goes ON when `Face.rightEye.openness` reaches `config.threshold` and goes OFF at `config.threshold + config.backlash`.
 */function hasRightEyeClosed(face: Face): BoolSignal
 ;

function hasRightEyeClosed(face: Face, config: { threshold: ?number, backlash: ?number }): BoolSignal
 ;

/** 
*  
 * onBlink(face: Face): EventSource
 * onBlink(face: Face, config: { threshold: ?number, backlash: ?number }): EventSource
 *  
 * 
 * Returns an `EventSource` that fires when both eyes are closed. An eye is considered closed when its `openness` falls below a certain configurable threshold. When specified:
 * 
 * * `config.threshold` overrides the default threshold for determining eye openness.
 * * `config.backlash` sets the default backlash. Backlash is used to minimize state jitter while the openness is near the threshold value.
 */function onBlink(face: Face): EventSource
 ;

function onBlink(face: Face, config: { threshold: ?number, backlash: ?number }): EventSource
 ;

/** 
*  
 * isTurnedRight(face: Face): BoolSignal
 * isTurnedRight(face: Face, config: { angle: ?number, backlash: ?number }): BoolSignal
 *  
 * 
 * Returns a `BoolSignal` that indicates whether the specified `Face` object is turned to the right. When specified:
 * 
 * * `config.angle` overrides the default angular threshold, in radians.
 * * `config.backlash` overrides the default angular backlash, in radians. Backlash is used to suppress unstable behavior when the face rotation is close to threshold.
 * 
 * A signal goes ON when angle reaches `config.angle` and goes OFF at `config.angle - config.backlash`.
 */function isTurnedRight(face: Face): BoolSignal
 ;

function isTurnedRight(face: Face, config: { angle: ?number, backlash: ?number }): BoolSignal
 ;

/** 
*  
 * hasMouthOpen(face: Face): BoolSignal
 * hasMouthOpen(face: Face, config: { threshold: ?number, backlash: ?number }): BoolSignal
 *  
 * Returns a `BoolSignal` that indicates whether the specified `Face` object has an open mouth. When specified:
 * 
 * * `config.threshold` overrides the default threshold for mouth openness.
 * * `config.backlash` overrides the default backlash. Backlash is used to suppress unstable behavior when the mouth openness is close to threshold.
 * 
 * A signal goes ON when `Face.mouth.openness` reaches `config.threshold` and goes OFF at `config.threshold - config.backlash`.
 */function hasMouthOpen(face: Face): BoolSignal
 ;

function hasMouthOpen(face: Face, config: { threshold: ?number, backlash: ?number }): BoolSignal
 ;

/** 
*  
 * isTurnedLeft(face: Face): BoolSignal
 * isTurnedLeft(face: Face, config: { angle: ?number, backlash: ?number }): BoolSignal
 *  
 * 
 * Returns a `BoolSignal` that indicates whether the specified `Face` object is turned to the left. When specified:
 * 
 *           * `config.angle` overrides the default angular threshold, in radians.
 * * `config.backlash` overrides the default angular backlash, in radians. Backlash is used to suppress unstable behavior when the face rotation is close to threshold.
 * 
 *           A signal goes ON when angle reaches `config.angle` and goes OFF at `config.angle - config.backlash`.
 */function isTurnedLeft(face: Face): BoolSignal
 ;

function isTurnedLeft(face: Face, config: { angle: ?number, backlash: ?number }): BoolSignal
 ;

/** 
*  
 * isSurprised(face: Face): BoolSignal
 *  
 * Returns a `BoolSignal` that indicates whether the specified `Face` object is a surprised face.
 */function isSurprised(face: Face): BoolSignal
 ;

/** 
*  
 * isLeanedLeft(face: Face): BoolSignal
 * isLeanedLeft(face: Face, config: { angle: ?number, backlash: ?number }): BoolSignal
 *  
 * Returns a `BoolSignal` that indicates whether the specified `Face` object is leaning to the left. When specified:
 * 
 * * `config.angle` overrides the default angular threshold, in radians.
 * * `config.backlash` overrides the default angular backlash, in radians. Backlash is used to suppress unstable behavior when the face rotation is close to threshold.
 * 
 * A signal goes ON when angle reaches `config.angle` and goes OFF at `config.angle - config.backlash`.
 */function isLeanedLeft(face: Face): BoolSignal
 ;

function isLeanedLeft(face: Face, config: { angle: ?number, backlash: ?number }): BoolSignal
 ;

/** 
*  
 * isLeanedRight(face: Face): BoolSignal
 * isLeanedRight(face: Face, config: { angle: ?number, backlash: ?number }): BoolSignal
 *  
 * Returns a `BoolSignal` that indicates whether the specified `Face` object is leaning to the right. When specified:
 * 
 * * `config.angle` overrides the default angular threshold, in radians.
 * * `config.backlash` overrides the default angular backlash, in radians. Backlash is used to suppress unstable behavior when the face rotation is close to threshold.
 * 
 * A signal goes ON when angle reaches `config.angle` and goes OFF at `config.angle - config.backlash`.
 */function isLeanedRight(face: Face): BoolSignal
 ;

function isLeanedRight(face: Face, config: { angle: ?number, backlash: ?number }): BoolSignal
 ;

/** 
*  
 * onNod(face: Face): EventSource
 * onNod(face: Face, config: { angle: ?number, period: ?number, swings: ?number }): EventSource
 *  
 * 
 * Returns an `EventSource` that fires immediately after a face nod is detected. A face nod is a series of consecutive head swing down and up, the first movement is downwards. A swing is detected if the head rotates around the X axis by the specified threshold angle within the specified period of time. The threshold, the period and the number of swings can be configured. When specified:
 * 
 * * `config.angle` sets the minimum rotation for one swing, in radians.
 * * `config.period` sets the maximum time limit for one swing, in milliseconds.
 * * `config.swings` sets the count of consecutive alternating swings after which the gesture is detected.
 */function onNod(face: Face): EventSource
 ;

function onNod(face: Face, config: { angle: ?number, period: ?number, swings: ?number }): EventSource
 ;

/** 
*  
 * isKissing(face: Face): BoolSignal
 *  
 * Returns a `BoolSignal` that indicates whether the specified `Face` object is a kissing face.
 */function isKissing(face: Face): BoolSignal
 ;

/** 
*  
 * isLeanedForward(face: Face): BoolSignal
 * isLeanedForward(face: Face, config: { angle: ?number, backlash: ?number }): BoolSignal
 *  
 * Returns a `BoolSignal` that indicates whether the specified `Face` object is leaning forward. When specified:
 * 
 * * `config.angle` overrides the default angular threshold, in radians.
 * * `config.backlash` overrides the default angular backlash, in radians. Backlash is used to suppress unstable behavior when the face rotation is close to threshold.
 * 
 * A signal goes ON when angle reaches `config.angle` and goes OFF at `config.angle - config.backlash`.
 */function isLeanedForward(face: Face): BoolSignal
 ;

function isLeanedForward(face: Face, config: { angle: ?number, backlash: ?number }): BoolSignal
 ;

/** 
*  
 * isLeanedBack(face: Face): BoolSignal
 * isLeanedBack(face: Face, config: { angle: ?number, backlash: ?number }): BoolSignal
 *  
 * Returns a `BoolSignal` that indicates whether the specified `Face` object is leaning back. When specified:
 * 
 * * `config.angle` overrides the default angular threshold, in radians.
 * * `config.backlash` overrides the default angular backlash, in radians. Backlash is used to suppress unstable behavior when the face rotation is close to threshold.
 * 
 * A signal goes ON when angle reaches `config.angle` and goes OFF at `config.angle - config.backlash`.
 */function isLeanedBack(face: Face): BoolSignal
 ;

function isLeanedBack(face: Face, config: { angle: ?number, backlash: ?number }): BoolSignal
 ;

/** 
*  
 * hasLeftEyeClosed(face: Face): BoolSignal
 * hasLeftEyeClosed(face: Face, config: { threshold: ?number, backlash: ?number }): BoolSignal
 *  
 * Returns a `BoolSignal` that indicates whether the specified `Face` object has its left eye open. When specified:
 * 
 * * `config.threshold` overrides the default threshold for eye openness.
 * * `config.backlash` sets the default backlash. Backlash is used to minimize state jitter while the openness is near the threshold value.
 * 
 * A signal goes ON when `Face.leftEye.openness` reaches `config.threshold` and goes OFF at `config.threshold + config.backlash`.
 */function hasLeftEyeClosed(face: Face): BoolSignal
 ;

function hasLeftEyeClosed(face: Face, config: { threshold: ?number, backlash: ?number }): BoolSignal
 ;

/** 
*  
 * hasEyebrowsFrowned(face: Face): BoolSignal
 * hasEyebrowsFrowned(face: Face, config: { observationPeriod: ?number, threshold: ?number, backlash: ?number }): BoolSignal
 *  
 * Returns a `BoolSignal` that indicates whether the specified `Face` object has frowned eyebrows. When specified:
 * 
 * * `config.threshold` overrides the default threshold; the default value is 1.0.
 * * `config.backlash` overrides the default backlash. Backlash is used to suppress unstable behavior when the eyebrow position is close to threshold.
 * * `config.observationPeriod` sets the period over which median eyebrow positions are tracked, in milliseconds.
 * 
 * There is no explicit underlying driver signal for this face gesture.
 */function hasEyebrowsFrowned(face: Face): BoolSignal
 ;

function hasEyebrowsFrowned(face: Face, config: { observationPeriod: ?number, threshold: ?number, backlash: ?number }): BoolSignal
 ;

/** 
*  
 * isAngry(face: Face): BoolSignal
 *  
 * Returns a `BoolSignal` that indicates whether the specified `Face` object is an angry face.
 */function isAngry(face: Face): BoolSignal
 ;

/** 
*  
 * isHappy(face: Face): BoolSignal
 *  
 * Returns a `BoolSignal` that indicates whether the specified `Face` object is a happy face.
 */function isHappy(face: Face): BoolSignal
 ;

/** 
*  
 * isSad(face: Face): BoolSignal
 *  
 * Returns a `BoolSignal` that indicates whether the specified `Face` object is a sad face.
 */function isSad(face: Face): BoolSignal
 ;

/** 
*  
 * isNeutral(face: Face): BoolSignal
 *  
 * Returns a `BoolSignal` that indicates whether the specified `Face` object is a neutral face.
 */function isNeutral(face: Face): BoolSignal
 ;

} 
export = FaceGesturesModule;