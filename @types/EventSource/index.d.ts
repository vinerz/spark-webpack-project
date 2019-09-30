/// <reference path="../mixed/index.d.ts" />
/// <reference path="../Subscription/index.d.ts" />
/// <reference path="../number/index.d.ts" />
/// <reference path="../EventSource/index.d.ts" />
/// <reference path="../string/index.d.ts" />
declare interface EventSource {
/** 
*  
 * subscribe(callback: (event: mixed) => void): Subscription
 *  
 * 
 * Sets a callback for the event source. The callback will be invoked every time an event is emitted from this `EventSource`.
 * 
 * **See Also**: `Subscription.unsubscribe`.
 * 
 * **Note**: `subscribe` and `subscribeOnNext` functions are completely equivalent.
 */subscribe(callback: (event: mixed) => void): Subscription
 ;

/** 
*  
 * subscribeWithSnapshot(snapshot: { [name: string]: Signal}, callback: (event: mixed, snapshot: mixed) => void): Subscription
 *  
 * 
 * Sets a callback for the event source, similar to `Subscribe` function, but with additional `Snapshot` parameter.
 * `Snapshot` is a dictionary of String/Bool/Scalar signals, which will be passed as JSON to the callback function using lastValue from requested signals
 */subscribeWithSnapshot(snapshot: { [name: string]: Signal}, callback: (event: mixed, snapshot: mixed) => void): Subscription
 ;

/** 
*  
 * subscribeOnNext(callback: (event: mixed) => void): Subscription
 *  
 * 
 * Sets a callback for the event source. The callback will be invoked every time an event is emitted from this `EventSource`.
 * 
 * **See Also**: `Subscription.unsubscribe`.
 * 
 * **Note**: `subscribe` and `subscribeOnNext` functions are completely equivalent.
 */subscribeOnNext(callback: (event: mixed) => void): Subscription
 ;

/** 
*  
 * skip(count: number): EventSource
 *  
 * 
 * Yields a filtered event source: the first `count` events from the original source are dropped, and subsequent ones signaled.
 */skip(count: number): EventSource
 ;

/** 
*  
 * select(property: string): EventSource
 *  
 * 
 * Converts event source by selecting a property in the event object. Events without specified property are ignored.
 */select(property: string): EventSource
 ;

/** 
*  
 * take(count: number): EventSource
 *  
 * 
 * Yields a filtered event source: the first `count` events from the original source are signaled, and subsequent ones ignored.
 */take(count: number): EventSource
 ;

} 
