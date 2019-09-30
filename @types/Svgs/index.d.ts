/// <reference path="../string/index.d.ts" />
/// <reference path="../Svg/index.d.ts" />
declare namespace SvgsModule {
/** 
*  
 * get(svgName: string): Svg
 *  
 * 
 * Returns a svg object identified by the `svgName` argument.
 * 
 * Throws an exception if there is no such identifier in the project.
 */function get(svgName: string): Svg
 ;

} 
export = SvgsModule;