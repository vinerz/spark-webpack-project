/// <reference path="../string/index.d.ts" />
/// <reference path="../ScalarSignal/index.d.ts" />
declare interface AudioComponent {
/** 
*  
 * getParameterValue(parameterName: string): ScalarSignal
 *  
 * 
 * Returns a scalar signal providing the value of an output parameter
 */getParameterValue(parameterName: string): ScalarSignal
 ;

} 
