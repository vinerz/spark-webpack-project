/// <reference path="../string/index.d.ts" />
/// <reference path="../ConstStringSignal/index.d.ts" />
declare interface StringValue {
/** 
* ```
(get) lastValue: string
(set) (Not Available)
```

Specifies a string representing the last value of the object.
*/ 
lastValue: string;
/** 
*  
 * pinLastValue(): ConstStringSignal
 *  
 * 
 * Returns a `ConstStringSignal` containing a constant value which is the last value of the specified signal before `pinLastValue` is called.
 * ConstStringSignal can be passed to a functions which accept strings.
 */pinLastValue(): ConstStringSignal
 ;

} 
