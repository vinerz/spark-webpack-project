/// <reference path="../BoolSignal/index.d.ts" />
/// <reference path="../ScalarSignal/index.d.ts" />
/// <reference path="../void/index.d.ts" />
declare interface Picker {
/** 
* ```
                                    (set) visible: BoolSignal
                                    ```
                                    Will instruct picker to be visible or not visible, according to passed boolean value.
*/ 
visible: BoolSignal;
/** 
* ```
                                    (get) selectedIndex: ScalarSignal
                                    (set) selectedIndex: ScalarSignal
                                    ```

                                    Represents the index of the selected item in the picker.
*/ 
selectedIndex: ScalarSignal;
/** 
*  
 *                                     configure(configuration: {selectedIndex?: int, items: [{image_texture: ImageTexture}]}): void
 *                                      
 *                                     Configures the picker with a given JSON configuration.
 *                                     The configuration consists of an optional initial selected index (0 will be used if not specified) and a list of items.
 *                                     For items you must specify a name of an uncompressed texture which will be used as the picker item image.
 */configure(configuration: {selectedIndex?: int, items: [{image_texture: ImageTexture}]}): void
 ;

} 
