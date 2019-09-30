/// <reference path="../string/index.d.ts" />
/// <reference path="../TextureBase/index.d.ts" />
/// <reference path="../TextureTransform/index.d.ts" />
declare interface DefaultMaterial {
/** 
* ```
(get) __internalEnvironmentTextureIdentifier: string
(set) (Not Available)
```
Specifies the unique environment identifier for the texture, assigned to material.
*/ 
__internalEnvironmentTextureIdentifier: string;
/** 
* ```
(get) __internalMultiplyTextureIdentifier: string
(set) (Not Available)
```
Specifies the unique multiply identifier for the texture, assigned to material.
*/ 
__internalMultiplyTextureIdentifier: string;
/** 
* ```
(get) __internalEmissiveTextureIdentifier: string
(set) (Not Available)
```
Specifies the unique emissive identifier for the texture, assigned to material.
*/ 
__internalEmissiveTextureIdentifier: string;
/** 
* ```
(get) multiply: TextureBase
(set) multiply: TextureBase
```

Specifies the multiplicative texture of the material. This can be used for masking and other purposes.
*/ 
multiply: TextureBase;
/** 
* ```
(get) reflective: TextureBase
(set) reflective: TextureBase
```

Specifies the reflective texture of the material.
*/ 
reflective: TextureBase;
/** 
* ```
(get) multiplyTextureTransform: TextureTransform
(set) multiplyTextureTransform: TextureTransformSignal
```

Specifies the coordinates transform of the multiplicative texture of this material.
*/ 
multiplyTextureTransform: TextureTransform;
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
  (get) emissive: TextureBase
  (set) emissive: TextureBase
  ```

  Specifies the emissive texture of the material.
*/ 
emissive: TextureBase;
} 
