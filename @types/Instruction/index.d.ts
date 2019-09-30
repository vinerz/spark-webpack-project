/// <reference path="../boolean/index.d.ts" />
/// <reference path="../BooleanSignal/index.d.ts" />
/// <reference path="../StringSignal/index.d.ts" />
/// <reference path="../void/index.d.ts" />
declare namespace InstructionModule {
/** 
* ```
(get) automaticInstructionsEnabled: boolean
(set) (Not Available)
```

Specifies whether or not automatic instructions are enabled.
*/ 
const automaticInstructionsEnabled: boolean;
/** 
*  
 * bind(enabled: BooleanSignal, token: StringSignal): void
 *  
 * 
 * When enabled, shows instruction for given token (you can find and select custom instruction
 * tokens in project capabilities)
 * 
 * To hide instruction simply set enabled to `false`.
 * 
 * You can have at most one binding for instructions, meaning that setting a different binding
 * would replace any previously created and setup binding for instructions.
 */function bind(enabled: BooleanSignal, token: StringSignal): void
 ;

} 
export = InstructionModule;