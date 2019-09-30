/// <reference path="../ShaderProcessor/index.d.ts" />
/// <reference path="../string/index.d.ts" />
/// <reference path="../MaterialBase/index.d.ts" />
declare namespace MaterialsModule {
/** 
* ```
(get) preProcessor: ShaderProcessor
(set) (Not Available)
```

Specifies the `ShaderProcessor` object used for the pre-rendering pass.
*/ 
const preProcessor: ShaderProcessor;
/** 
* ```
(get) postProcessor: ShaderProcessor
(set) (Not Available)
```

Specifies the `ShaderProcessor` object used for the post-rendering pass.
*/ 
const postProcessor: ShaderProcessor;
/** 
*  
 * get(materialName: string): MaterialBase
 *  
 * 
 * Returns a `MaterialBase` class that represents the material specified by the `materialName` parameter. The materials are defined in the AR Studio project.
 * 
 * An exception is thrown when the identifier isn't found in the project.
 * 
 * **See Also**: `MaterialBase.name`.
 */function get(materialName: string): MaterialBase
 ;

} 
export = MaterialsModule;