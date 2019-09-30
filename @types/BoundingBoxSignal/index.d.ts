/// <reference path="../ScalarSignal/index.d.ts" />
/// <reference path="../Point2DSignal/index.d.ts" />
declare interface BoundingBoxSignal {
/** 
* ```
(get) x: ScalarSignal
(set) (Not Available)
```

Represents the X-position of top left corner of the bounding box, in normalized screen space units.
*/ 
x: ScalarSignal;
/** 
* ```
(get) y: ScalarSignal
(set) (Not Available)
```

Represents the Y-position of top left corner of the bounding box, in normalized screen space units.
*/ 
y: ScalarSignal;
/** 
* ```
(get) width: ScalarSignal
(set) (Not Available)
```

Represents the width of the bounding box, in normalized screen space units.
*/ 
width: ScalarSignal;
/** 
* ```
(get) height: ScalarSignal
(set) (Not Available)
```

Represents the height of the bounding box, in normalized screen space units.
*/ 
height: ScalarSignal;
/** 
* ```
(get) center: Point2DSignal
(set) (Not Available)
```

Represents the center of the bounding box, in normalized screen space units.
*/ 
center: Point2DSignal;
} 
