/// <reference path="../StringValue/index.d.ts" />
/// <reference path="../ShaderSignal/index.d.ts" />
/// <reference path="../ScalarSignal/index.d.ts" />
declare interface TextureBase {
/** 
* ```
(get) name: StringValue
(set) (Not Available)
```

Specifies the unique texture name. The texture name is specified in AR Studio at design time.

**See Also**: `TexturesModule.get`.
*/ 
name: StringValue;
/** 
* ```
(get) signal: ShaderSignal
```

Gets the RGBA ShaderSignal of the given texture. This signal can then be used in shader computations.
*/ 
signal: ShaderSignal;
/** 
* ```
(get) identifier: StringValue
(set) (Not Available)
```

Specifies the unique texture identifier. This value is specified internally in AR Studio.
*/ 
identifier: StringValue;
/** 
* ```
(get) width: ScalarSignal
```

Gets the width of the texture in pixels.
*/ 
width: ScalarSignal;
/** 
* ```
(get) height: ScalarSignal
```

Gets the height of the texture in pixels.
*/ 
height: ScalarSignal;
} 
