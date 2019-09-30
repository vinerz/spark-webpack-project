declare namespace ViperDebugModule {
/** 
* ```
debugString: StringSignal
```

Gets a debug string piped through from Viper.
*/ 
const debugString: any;
/** 
*  
 * setViperOnlyMode() : void
 *  
 * 
 * Makes underlying camera + anchor tracking algorithms run in viper only mode.
 */function setViperOnlyMode() : void
 ;

/** 
*  
 * clearViperOnlyMode() : void
 *  
 * 
 * Removes running in viper only mode. (Aka, runs the normal gyro+regiontracking+SLAM)
 */function clearViperOnlyMode() : void
 ;

} 
export = ViperDebugModule;