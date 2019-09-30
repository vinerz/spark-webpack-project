/// <reference path="../BoundingBoxSignal/index.d.ts" />
/// <reference path="../StringSignal/index.d.ts" />
declare interface Face2D {
/** 
* ```
(get) boundingBox: BoundingBoxSignal
(set) (Not Available)
```

Specifies a `BoundingBoxSignal` object describing the face bounding box relative to normalized screen space.
*/ 
boundingBox: BoundingBoxSignal;
/** 
* ```
      (get) isTracked: StringSignal
      (set) (Not Available)
      ```

      A `boolSignal` indicating whether the face was tracked this frame.

      If the face was not tracked, other properties represent the most recent tracked frame.
*/ 
isTracked: StringSignal;
} 
