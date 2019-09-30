/// <reference path="../string/index.d.ts" />
/// <reference path="../ScalarValue/index.d.ts" />
/// <reference path="../ScalarSignal/index.d.ts" />
/// <reference path="../void/index.d.ts" />
/// <reference path="../BoolValue/index.d.ts" />
/// <reference path="../BoolSignal/index.d.ts" />
declare interface ShaderProcessor {
/** 
*  
 * floatParameter(paramName: string): ScalarValue
 *  
 * 
 * Returns the `ScalarValue` value representing the shader parameter indicated by the `paramName` argument. An exception is thrown when the identifier isn't found in the shader processor.
 * 
 * **See Also**: `ShaderProcessor.setFloatParameter`.
 */floatParameter(paramName: string): ScalarValue
 ;

/** 
*  
 * setFloatParameter(paramName: string, source: ScalarSignal): void
 *  
 * 
 * Specifies the value of the shader parameter indicated by the `paramName` argument. An exception is thrown when the identifier isn't found in the shader processor.
 * 
 * **See Also**: `ShaderProcessor.floatParameter`.
 */setFloatParameter(paramName: string, source: ScalarSignal): void
 ;

/** 
*  
 * boolParameter(paramName: string): BoolValue
 *  
 * 
 * Returns the Boolean value indicated by the `paramName` argument. An exception is thrown when the identifier isn't found in the shader processor.
 * 
 * **See Also**: `ShaderProcessor.setBoolParameter`.
 */boolParameter(paramName: string): BoolValue
 ;

/** 
*  
 * setBoolParameter(paramName: string, source: BoolSignal): void
 *  
 * 
 * Specifies the value of a shader parameter indicated by the `paramName` argument. An exception is thrown when the identifier isn't found in the shader processor.
 * 
 * **See Also**: `ShaderProcessor.boolParameter`.
 */setBoolParameter(paramName: string, source: BoolSignal): void
 ;

} 
