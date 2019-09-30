/** 
 * The `State` enum describes the state of a prefab mesh.
 * @property DEFAULT Indicates the the prefab is in the default state.
 * @property AVAILABLE Indicates that the resource has been downloaded.
 * @property FAILED Indicates that the resource failed to download.
 * @property PENDING Indicates that the resource download is pending.
 */ 
declare interface State{ 
DEFAULT, 
AVAILABLE, 
FAILED, 
PENDING, 
} 
