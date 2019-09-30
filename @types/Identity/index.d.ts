/// <reference path="../Promise/index.d.ts" />
declare namespace IdentityModule {
/** 
*  
 *   getAccessToken(): Promise<String>
 *  
 * 
 * 
 * Returns a `JS Promise` which will be fulfilled with Access Token `String` object or an error.
 */function getAccessToken(): Promise<String>
 ;

/** 
*  
 * getEmailAddress(): Promise<String>
 *  
 * 
 * 
 * Returns a `JS Promise` which will be fulfilled with user Email Address `String` object or an error.
 */function getEmailAddress(): Promise<String>
 ;

/** 
*  
 * getAppScopedID(): Promise<String>
 *  
 * 
 * 
 * Returns a `JS Promise` which will be fulfilled with App Scope ID `String` object or an error.
 */function getAppScopedID(): Promise<String>
 ;

/** 
*  
 * getFullName(): Promise<String>
 *  
 * 
 * 
 * Returns a `JS Promise` which will be fulfilled with user Full Name `String` object or an error.
 */function getFullName(): Promise<String>
 ;

} 
export = IdentityModule;