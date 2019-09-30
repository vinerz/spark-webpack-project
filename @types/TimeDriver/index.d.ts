/// <reference path="../void/index.d.ts" />
/// <reference path="../EventSource/index.d.ts" />
/// <reference path="../BoolSignal/index.d.ts" />
declare interface TimeDriver {
/** 
*  
 * start(): void
 *  
 * 
 * Starts the animation.
 */start(): void
 ;

/** 
*  
 * stop(): void
 *  
 * 
 * Stops or pauses the animation.
 */stop(): void
 ;

/** 
*  
 * reset(): void
 *  
 * 
 * Resets the driver progress to time point zero.
 */reset(): void
 ;

/** 
*  
 * reverse(): void
 *  
 * 
 * Reverses the animation from the moment it is called and goes back in time.
 */reverse(): void
 ;

/** 
*  
 * onCompleted(): EventSource
 *  
 * 
 * Returns an `EventSource` to which you may subscribe. The event fires once when the animation completes.
 */onCompleted(): EventSource
 ;

/** 
*  
 * onAfterIteration(): EventSource
 *  
 * 
 * Returns an `EventSource` to which you may subscribe. The event fires when the animation with loopCount completes an iteration.
 * Subscribers will receive the one-based index of the completed iteration.
 */onAfterIteration(): EventSource
 ;

/** 
*  
 * isRunning(): BoolSignal
 *  
 * 
 * Returns a `BoolSignal` indicating whether the animation is running.
 */isRunning(): BoolSignal
 ;

} 
