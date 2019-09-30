/// <reference path="../MaterialBase/index.d.ts" />
/// <reference path="../ScalarSignal/index.d.ts" />
declare interface Plane {
/** 
* ```
(get) material: MaterialBase
(set) material: MaterialBase
```

Specifies the material of the scene object.
*/ 
material: MaterialBase;
/** 
* ```
(get) x: ScalarSignal
(set) x: ScalarSignal
```

Specifies the horizontal offset, in 3D units.
*/ 
x: ScalarSignal;
/** 
* ```
(get) y: ScalarSignal
(set) y: ScalarSignal
```

Specifies the vertical offset, in 3D units.
*/ 
y: ScalarSignal;
/** 
* ```
(get) width: ScalarSignal
(set) width: ScalarSignal
```

Specifies the horizontal size, in 3D units.
*/ 
width: ScalarSignal;
/** 
* ```
(get) height: ScalarSignal
(set) height: ScalarSignal
```

Specifies the vertical size, in 3D units.
*/ 
height: ScalarSignal;
} 
