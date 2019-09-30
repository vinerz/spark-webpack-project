/// <reference path="../SceneCategories/index.d.ts" />
/// <reference path="../SceneCategory/index.d.ts" />
declare namespace SceneUnderstandingModule {
/** 
*  
 *                         category(category: SceneCategories): SceneCategory
 *                          
 * 
 *                         Returns a `SceneCategory` object capable of identifying if the scene captured by the camera is that category.
 */function category(category: SceneCategories): SceneCategory
 ;

} 
export = SceneUnderstandingModule;