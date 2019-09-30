/// <reference path="../string/index.d.ts" />
/// <reference path="../BoolSignal/index.d.ts" />
/// <reference path="../TextureBase/index.d.ts" />
/// <reference path="../TextureTransform/index.d.ts" />
/// <reference path="../ScalarSignal/index.d.ts" />
/// <reference path="../ShaderSignal/index.d.ts" />
/// <reference path="../void/index.d.ts" />
declare interface MaterialBase {
/** 
* ```
(get) name: string
(set) (Not Available)
```

Specifies the unique identifier for the material name. This value is specified in AR Studio at design time.

**See Also**: `MaterialsModule.get`.
*/ 
name: string;
/** 
* ```
(get) __internalDiffuseTextureIdentifier: string
(set) (Not Available)
```

Specifies the unique internal diffuse identifier for the texture, assigned to material.
*/ 
__internalDiffuseTextureIdentifier: string;
/** 
* ```
(get) doubleSided: BoolSignal
(set) doubleSided: BoolSignal
```

Indicates whether the material can be seen from both sides when rendering the scene.

**Note**: When `FALSE`, only the side specified by object's **Cull Mode** is rendered.
*/ 
doubleSided: BoolSignal;
/** 
* ```
(get) diffuse: TextureBase
(set) diffuse: TextureBase
```

Specifies the texture that forms the basis of this material.
*/ 
diffuse: TextureBase;
/** 
* ```
(get) diffuseTextureTransform: TextureTransform
(set) diffuseTextureTransform: TextureTransformSignal
```

Specifies the coordinates transform of the diffuse texture of this material.
*/ 
diffuseTextureTransform: TextureTransform;
/** 
* ```
(get) identifier: string
(set) (Not Available)
```

Specifies the unique identifier for the material.
*/ 
identifier: string;
/** 
* ```
(get) opacity: ScalarSignal
(set) opacity: ScalarSignal
```

Specifies a number between 0.0 and 1.0 indicating the opacity threshold for discarding pixels. 0 is transparent and 1 is opaque.
*/ 
opacity: ScalarSignal;
/** 
* ```
(get) alphaCutoff: ScalarSignal
(set) alphaCutoff: ScalarSignal
```
Specifies a number between 0.0 and 1.0.
*/ 
alphaCutoff: ScalarSignal;
/** 
*  
 * setTexture(signal: ShaderSignal, config: {
 *   textureSlotName: DefaultMaterialTextures | BlendedMaterialTextures | FacePaintMaterialTextures | PhysicallyBasedMaterialTextures
 * }): void
 *  
 * 
 * Assigns a `ShaderSignal` to the specified texture slot.
 */setTexture(signal: ShaderSignal, config: {
 ;

} 
