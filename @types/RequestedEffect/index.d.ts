/// <reference path="../string/index.d.ts" />
/// <reference path="../void/index.d.ts" />
declare interface RequestedEffect {
/** 
* ```
(get) effectID: string
(set) (Not Available)
```

Specifies the effectID associated with this RequestedEffect.
*/ 
effectID: string;
/** 
* ```
onApplyFailure(): EventSource
```

Returns an `EventSource` to which you may subscribe. The event fires when a request to apply an effect fails. The event contains a JSON object in the format:

```
{ "failureReason": string }
```
*/ 
onApplyFailure: any;
/** 
*  
 * apply(): void
 *  
 * 
 * Attempts to apply the effect (i.e. load) that this RequestedEffect represents.
 */apply(): void
 ;

} 
