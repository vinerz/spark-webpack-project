/// <reference path="../ScalarSignal/index.d.ts" />
/// <reference path="../BoolSignal/index.d.ts" />
declare namespace PersonSegmentationModule {
/** 
* ```
(get) foregroundPercent: ScalarSignal
(set) (Not Available)
```

Represents the percentage of screen space occupied by a person/people.
*/ 
const foregroundPercent: ScalarSignal;
/** 
* ```
(get) hasForeground: BoolSignal
(set) (Not Available)
```

Represents whether there is anybody in the scene (TRUE/FALSE), based on whether the percentage of foreground is larger than a threshold.
*/ 
const hasForeground: BoolSignal;
/** 
* ```
(get) (Not Available)
(set) isEnabled: BoolSignal
```

Specifies whether the segmentation should be enabled. Default value is 'true'.
*/ 
const isEnabled: BoolSignal;
} 
export = PersonSegmentationModule;