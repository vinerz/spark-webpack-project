/// <reference path="../string/index.d.ts" />
/// <reference path="../ScalarValue/index.d.ts" />
/// <reference path="../ScalarSignal/index.d.ts" />
/// <reference path="../void/index.d.ts" />
/// <reference path="../TextureBase/index.d.ts" />
/// <reference path="../BoolValue/index.d.ts" />
/// <reference path="../BoolSignal/index.d.ts" />
declare interface CustomMaterial {
/** 
*  
 * floatParameter(paramName: string): ScalarValue
 *  
 * 
 * Returns the `ScalarValue` value representing the shader parameter indicated by the `paramName` argument. An exception is thrown when the identifier isn't found in the material.
 * 
 * **See Also**: `CustomMaterial.setFloatParameter`.
 */floatParameter(paramName: string): ScalarValue
 ;

/** 
*  
 * setFloatParameter(paramName: string, source: ScalarSignal): void
 *  
 * 
 * Specifies the value of the shader parameter indicated by the `paramName` argument. An exception is thrown when the identifier isn't found in the material.
 * 
 * **See Also**: `CustomMaterial.floatParameter`.
 */setFloatParameter(paramName: string, source: ScalarSignal): void
 ;

/** 
*  
 * setTexture(paramName: string, texture: TextureBase): void
 *  
 * 
 * Specifies the value of the shader parameter indicated by the `paramName` argument. An exception is thrown when the identifier isn't found in the material.
 */setTexture(paramName: string, texture: TextureBase): void
 ;

/** 
*  
 * boolParameter(paramName: string): BoolValue
 *  
 * 
 * Returns the Boolean value indicated by the `paramName` argument. An exception is thrown when the identifier isn't found in the material.
 * 
 * **See Also**: `CustomMaterial.setBoolParameter`.
 */boolParameter(paramName: string): BoolValue
 ;

/** 
*  
 * setBoolParameter(paramName: string, source: BoolSignal): void
 *  
 * 
 * Specifies the value of a shader parameter indicated by the `paramName` argument. An exception is thrown when the identifier isn't found in the material.
 * 
 * **See Also**: `CustomMaterial.boolParameter`.
 */setBoolParameter(paramName: string, source: BoolSignal): void
 ;

} 
