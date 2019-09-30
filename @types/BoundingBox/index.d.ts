/// <reference path="../PointSignal/index.d.ts" />
declare interface BoundingBox {
/** 
* ```
(get) min: PointSignal
(set) (Not Available)
```

Retrieves the minimum point of object's bounding box in object's local coordinate system.

**NOTE**: There is 1 frame delay in this value.
*/ 
min: PointSignal;
/** 
* ```
(get) max: PointSignal
(set) (Not Available)
```

Retrieves the maximum point of object's bounding box in object's local coordinate system.

**NOTE**: There is 1 frame delay in this value.
*/ 
max: PointSignal;
} 
