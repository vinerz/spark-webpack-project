/// <reference path="../String/index.d.ts" />
/// <reference path="../Promise/index.d.ts" />
/// <reference path="../Object/index.d.ts" />
declare interface StorageScope {
/** 
*  
 *                           get(key: String): Promise<Object>
 *                            
 * 
 *                           Gets the value with the specified key
 *                           Returns a `JS Promise` which will be fulfilled with a JavaScript object or an error.
 */get(key: String): Promise<Object>
 ;

/** 
*  
 *                           set(key: String, value: Object): Promise<>
 *                            
 *                           Sets the value for the key
 *                           Returns a `JS Promise` or an error.
 */set(key: String, value: Object): Promise<>
 ;

/** 
*  
 *                           remove(key: String): Promise<>
 *                            
 * 
 *                           Removes the key.
 *                           Returns a `JS Promise` or an error.
 */remove(key: String): Promise<>
 ;

} 
