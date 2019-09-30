/// <reference path="../TextureBase/index.d.ts" />
/// <reference path="../ScalarSignal/index.d.ts" />
/// <reference path="../TextureTransform/index.d.ts" />
/// <reference path="../ColorSignal/index.d.ts" />
declare interface MetallicRoughnessPbrMaterial {
/** 
* ```
(get) emissive: TextureBase
(set) emissive: TextureBase
```

Specifies the emissive texture of the material.
*/ 
emissive: TextureBase;
/** 
* ```
(get) metallicFactor: ScalarSignal
(set) metallicFactor: ScalarSignal
 ```
Specifies the metallic factor.
*/ 
metallicFactor: ScalarSignal;
/** 
* ```
(get) emissiveTextureTransform: TextureTransform
(set) emissiveTextureTransform: TextureTransformSignal
```

Specifies the coordinates transform of the emissive texture of this material.
*/ 
emissiveTextureTransform: TextureTransform;
/** 
* ```
(get) (Not Available)
(set) baseColorFactor: ColorSignal
```
Specifies a `ColorSignal` for a base color factor. A `ColorSignal` may be created using the `RGBA()` and `HSVA()` methods of the `Reactive` module.
**See Also**: `ReactiveModule.RGBA` and `ReactiveModule.HSVA`.
*/ 
baseColorFactor: ColorSignal;
/** 
* ```
(get) roughnessFactor: ScalarSignal
(set) roughnessFactor: ScalarSignal
```
Specifies the roughness factor.
*/ 
roughnessFactor: ScalarSignal;
/** 
* ```
(get) (Not Available)
(set) baseColor: TextureBase
```

Specifies the baseColor texture of the material.
*/ 
baseColor: TextureBase;
/** 
* ```
(get) baseColorTextureTransform: TextureTransform
(set) baseColorTextureTransform: TextureTransformSignal
```

Specifies the coordinates transform of the baseColorFactor texture of this material.
*/ 
baseColorTextureTransform: TextureTransform;
/** 
* ```
(get) metallicRoughnessTextureTransform: TextureTransform
(set) metallicRoughnessTextureTransform: TextureTransformSignal
```

Specifies the coordinates transform of the metallicRoughness texture of this material.
*/ 
metallicRoughnessTextureTransform: TextureTransform;
/** 
* ```
(get) (Not Available)
(set) metallicRoughness: TextureBase
```

Specifies the metallicRoughness texture of the material.
*/ 
metallicRoughness: TextureBase;
} 
