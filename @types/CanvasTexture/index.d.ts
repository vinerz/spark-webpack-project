/// <reference path="../ScalarSignal/index.d.ts" />
/// <reference path="../void/index.d.ts" />
declare interface CanvasTexture {
/** 
*  
 * addPath(startProgress: ScalarSignal, endProgress: ScalarSignal, xSampler: ScalarSampler, ySampler: ScalarSampler, widthSampler: ScalarSampler, colorSampler: ColorSampler): void
 *  
 * 
 * Adds a path based on the specified samplers.
 */addPath(startProgress: ScalarSignal, endProgress: ScalarSignal, xSampler: ScalarSampler, ySampler: ScalarSampler, widthSampler: ScalarSampler, colorSampler: ColorSampler): void
 ;

/** 
*  
 * clearPaths(): void
 *  
 * 
 * Deletes all paths.
 */clearPaths(): void
 ;

} 
