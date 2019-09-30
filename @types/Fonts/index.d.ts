/// <reference path="../string/index.d.ts" />
/// <reference path="../FontId/index.d.ts" />
declare namespace FontsModule {
/** 
*  
 * get(fontName: string): FontId
 *  
 * 
 * Returns a font object identified by the `fontName` argument.
 * 
 * Throws an exception if there is no such font in the project.
 */function get(fontName: string): FontId
 ;

} 
export = FontsModule;