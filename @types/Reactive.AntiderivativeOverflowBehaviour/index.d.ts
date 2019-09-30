/** 
 * The `AntiderivativeOverflowBehaviour` enum describes the recovery technique used when an antiderivative overflows.
 * @property WRAP Start from the other end of the interval (min,max)
 * @property CLAMP Clamp to either min and max
 */ 
declare interface AntiderivativeOverflowBehaviour{ 
WRAP, 
CLAMP, 
} 
