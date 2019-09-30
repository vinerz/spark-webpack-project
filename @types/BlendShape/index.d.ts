/// <reference path="../ScalarValue/index.d.ts" />
/// <reference path="../string/index.d.ts" />
declare interface BlendShape {
/** 
* ```
(get) weight: ScalarValue
(set) weight: ScalarSignal
```

Specifies the weight of the blend shape.
*/ 
weight: ScalarValue;
/** 
* ```
(get) prefabName: string
(set) (Not Available)
```

Specifies the name of prefab for BlendShape. This is the unique identifier of the prefab.
*/ 
prefabName: string;
/** 
* ```
(get) name: string
(set) (Not Available)
```

Retrieves the name of the BlendShape.
*/ 
name: string;
} 
