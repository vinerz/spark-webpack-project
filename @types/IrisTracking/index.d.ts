/// <reference path="../Face/index.d.ts" />
/// <reference path="../Eyeball/index.d.ts" />
declare namespace IrisTrackingModule {
/** 
*  
 * leftEyeball(face: Face): Eyeball
 *  
 * 
 * Returns an `Eyeball` object for the given face, containing information about the 3D position of the left eyeball.
 */function leftEyeball(face: Face): Eyeball
 ;

/** 
*  
 * rightEyeball(face: Face): Eyeball
 *  
 * 
 * Returns an `Eyeball` object for the given face, containing information about the 3D position of the right eyeball.
 */function rightEyeball(face: Face): Eyeball
 ;

} 
export = IrisTrackingModule;