/// <reference path="../number/index.d.ts" />
/// <reference path="../string/index.d.ts" />
declare interface SignalRecord {
/** 
* ```
(get) durationMs: number
(set) (Not Available)```

Returns duration of SignalRecord recording in milliseconds.
*/ 
durationMs: number;
/** 
* ```
(get) valuesString: string
(set) (Not available)
```

Returns the array of values (as doubles to 4 decimal precision) of this SignalRecord as a string
*/ 
valuesString: string;
/** 
* ```
(get) recordCount: number
(set) (Not Available)
```

Returns number of records taken in this SignalRecord.
*/ 
recordCount: number;
/** 
* ```
(get) timestampsString: string
(set) (Not available)
```

Returns the array of timestamps (as integer milliseconds) of this SignalRecord as a string
*/ 
timestampsString: string;
} 
