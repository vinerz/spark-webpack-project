/// <reference path="../EventSource/index.d.ts" />
/// <reference path="../Object/index.d.ts" />
/// <reference path="../void/index.d.ts" />
declare namespace PlatformEventsModule {
/** 
* ```
(get) allEvents: EventSource
(set) (Not Available)
```

Returns an `EventSource` that emits an event for every app/platform-specific event received.
The event contains a JSON object with the data associated with the event.
*/ 
const allEvents: EventSource;
/** 
*  
 * send(event: Object): void
 *  
 * 
 * Send a given event in a form of any Object to the platform-specific implementation.
 */function send(event: Object): void
 ;

} 
export = PlatformEventsModule;