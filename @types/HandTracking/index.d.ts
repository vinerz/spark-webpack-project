/// <reference path="../ScalarSignal/index.d.ts" />
/// <reference path="../Number/index.d.ts" />
/// <reference path="../Hand/index.d.ts" />
declare namespace HandTrackingModule {
/** 
* ```
                       (get) count: ScalarSignal
                       (set) (Not Available)
                       ```

                       Specifies a `ScalarSignal` indicating the number of detected hands.
*/ 
const count: ScalarSignal;
/** 
*  
 *                        hand(index: Number): Hand
 *                         
 * 
 *                        Returns the `Hand` indicated by index.
 */function hand(index: Number): Hand
 ;

} 
export = HandTrackingModule;