/// <reference path="../StorageScope/index.d.ts" />
/// <reference path="../Object/index.d.ts" />
declare namespace PersistenceModule {
/** 
* ```
                          (get) userScope: StorageScope
                          ```

                          Gets an instance of StorageScope corresponding to the user scope
*/ 
const userScope: StorageScope;
/** 
* ```
                          (get) sharedScope: Object
                          ```

                          Gets an object corresponding to the shared scope
*/ 
const sharedScope: Object;
/** 
* ```
                          (get) captureScope: Object
                          ```

                          Gets an object corresponding to the capture scope
*/ 
const captureScope: Object;
} 
export = PersistenceModule;