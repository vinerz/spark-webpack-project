/// <reference path="../boolean/index.d.ts" />
/// <reference path="../BoolSignal/index.d.ts" />
/// <reference path="../EventSource/index.d.ts" />
/// <reference path="../ScalarSignal/index.d.ts" />
/// <reference path="../StringSignal/index.d.ts" />
/// <reference path="../ConstBoolSignal/index.d.ts" />
/// <reference path="../this/index.d.ts" />
declare interface BoolSignal {
/** 
* ```
(get) lastValue: boolean
(set) (Not Available)
```

Specifies a Boolean representing the last value of the signal.

**Note**: The signal value is updated during simulation tick. This means that the value of `lastValue` is undefined before its first update. It is also undefined for signals that aren't used for any bindings/subscriptions, because those signals aren't guaranteed to be updated at each simulation tick.
*/ 
lastValue: boolean;
/** 
*  
 * eq(other: BoolSignal): BoolSignal
 *  
 * 
 * Returns a Boolean signal that takes the value of `true` every time when the value of the left-hand-side signal is **equal** to the value of the right-hand-side one, and the value of `false` all other time.
 * 
 * **See Also**: `ReactiveModule.eq`
 */eq(other: BoolSignal): BoolSignal
 ;

/** 
*  
 * or(other: BoolSignal): BoolSignal
 *  
 * 
 * Returns a signal with the value that is the logical disjunction of the values of the given signals. It is `true` every time at least one of the input signals is `true` and `false` at all other times.
 * 
 * **See Also**: `ReactiveModule.or`
 */or(other: BoolSignal): BoolSignal
 ;

/** 
*  
 * not(): BoolSignal
 *  
 * 
 * Returns a signal with the logically negated value of the given signal.
 * 
 * **See Also**: `ReactiveModule.not`
 */not(): BoolSignal
 ;

/** 
*  
 * xor(other: BoolSignal): BoolSignal
 *  
 * 
 * Returns a signal with the value that is the logical exclusive disjunction of the values of the given signals. It is `true` every time exactly one of the input signals is `true` and `false` at all other times.
 * 
 * **Note**: It is equivalent to `BoolSignal.ne`.
 * 
 * **See Also**: `ReactiveModule.xor`
 */xor(other: BoolSignal): BoolSignal
 ;

/** 
*  
 * pin(): BoolSignal
 *  
 * 
 * Returns a `BoolSignal` containing a constant value which is the value of the specified signal immediately after `pin` is called.
 */pin(): BoolSignal
 ;

/** 
*  
 * ne(other: BoolSignal): BoolSignal
 *  
 * 
 * Returns a Boolean signal that takes the value of `true` every time when the value of the left-hand-side signal is **not equal** to the value of the right-hand-side one, and the value of `false` all other time.
 * 
 * **See Also**: `ReactiveModule.ne`
 */ne(other: BoolSignal): BoolSignal
 ;

/** 
*  
 * ifThenElse(thenValue: EventSource, elseValue: EventSource): EventSource
 * ifThenElse(thenValue: ScalarSignal, elseValue: ScalarSignal): ScalarSignal
 * ifThenElse(thenValue: StringSignal, elseValue: StringSignal): StringSignal
 * ifThenElse(thenValue: BoolSignal, elseValue: BoolSignal): BoolSignal
 *  
 * 
 * Returns a signal or an `EventSource` which at any point of time takes the value (passes the events in case of `EventSource`) of one or another inputs, depending on the momentary value of the given `BoolSignal`.
 */ifThenElse(thenValue: EventSource, elseValue: EventSource): EventSource
 ;

ifThenElse(thenValue: ScalarSignal, elseValue: ScalarSignal): ScalarSignal
 ;

ifThenElse(thenValue: StringSignal, elseValue: StringSignal): StringSignal
 ;

ifThenElse(thenValue: BoolSignal, elseValue: BoolSignal): BoolSignal
 ;

/** 
* 
 *  
 * monitor(): EventSource
 * monitor(config: { fireOnInitialValue: ?boolean}): EventSource
 *  
 * 
 * Returns an `EventSource` that emits an event every time the value of the input signal changes. The event contains a JSON object with the old and new values in the format:
 * 
 *  
 * { "oldValue": val, "newValue": val }
 *  
 * 
 * **Note**: By default, there is no event fired for the initial value of the signal. If `config.fireOnInitialValue` is set to `true` then an event for initial signal value is also emitted. `oldValue` is unset for this initial event.
 * 
 */monitor(): EventSource
 ;

monitor(config: { fireOnInitialValue: ?boolean}): EventSource
 ;

/** 
*  
 * and(other: BoolSignal): BoolSignal
 *  
 * 
 * Returns a signal with the value that is the logical conjunction of the values of the given signals. It is `true` every time both input signals are `true` and `false` at all other times.
 * 
 * **See Also**: `ReactiveModule.and`
 */and(other: BoolSignal): BoolSignal
 ;

/** 
*  
 * pinLastValue(): ConstBoolSignal
 *  
 * 
 * Returns a `ConstBoolSignal` containing a constant value which is the last value of the specified signal before `pinLastValue` is called.
 * ConstBoolSignal can be passed to a functions which accept bool.
 */pinLastValue(): ConstBoolSignal
 ;

/** 
* 
 *  
 * onOn(): EventSource
 * onOn(config: { fireOnInitialValue: ?boolean}): EventSource
 *  
 * 
 * Returns an `EventSource` that emits an event every time the value of the input signal changes to `true`. The event contains a JSON object with the old and new values in the format:
 * 
 *  
 * { "oldValue": val, "newValue": val }
 *  
 * 
 * **Note**: By default, there is no event fired for the initial value of the signal if it's `true` straight away. If `config.fireOnInitialValue` is set to `true` then an event for initial signal value is also emitted. `oldValue` is unset for this initial event.
 * 
 */onOn(): EventSource
 ;

onOn(config: { fireOnInitialValue: ?boolean}): EventSource
 ;

/** 
* 
 *  
 * onOff(): EventSource
 * onOff(config: { fireOnInitialValue: ?boolean}): EventSource
 *  
 * 
 * Returns an `EventSource` that emits an event every time the value of the input signal changes to `false`. The event contains a JSON object with the old and new values in the format:
 * 
 *  
 * { "oldValue": val, "newValue": val }
 *  
 * 
 * **Note**: By default, there is no event fired for the initial value of the signal if it's `false` straight away. If `config.fireOnInitialValue` is set to `true` then an event for initial signal value is also emitted. `oldValue` is unset for this initial event.
 * 
 */onOff(): EventSource
 ;

onOff(config: { fireOnInitialValue: ?boolean}): EventSource
 ;

/** 
*  
 * delayBy(timeSpan: {milliseconds: number}): this
 *  
 * Delays a signal. The argument is an object with a "milliseconds" property specifying the delay duration in milliseconds.
 */delayBy(timeSpan: {milliseconds: number}): this
 ;

} 
