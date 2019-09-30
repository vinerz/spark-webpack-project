/// <reference path="../string/index.d.ts" />
/// <reference path="../PrefabBase/index.d.ts" />
declare namespace PrefabsModule {
/** 
*  
 * get(prefabName: string): PrefabBase
 *  
 * 
 * Returns a prefab object, derived from `PrefabBase`, that is specified by `prefabName`. An exception is thrown when prefab isn't found. At the moment we have only one type:
 * 
 *   * `PrefabGltf`
 * 
 * **See Also**: `PrefabBase.name`.
 */function get(prefabName: string): PrefabBase
 ;

} 
export = PrefabsModule;