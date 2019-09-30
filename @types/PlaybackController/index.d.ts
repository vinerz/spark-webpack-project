/// <reference path="../BoolValue/index.d.ts" />
/// <reference path="../void/index.d.ts" />
declare interface PlaybackController {
/** 
*  
 * setPlaying(playing: BoolValue): void
 *  
 * 
 * Plays or pauses the playback controller depending on the value entered. When the audio is finished playing, use `reset` to play from the beginning.
 */setPlaying(playing: BoolValue): void
 ;

/** 
*  
 * loop(): void
 *  
 * 
 * Deprecated: Please use the `setLooping` method. Loop the playback controller, sound comes through all speakers (also known as Audio Source in the past) that reference the playback controller.
 */loop(): void
 ;

/** 
*  
 * reset(): void
 *  
 * 
 * Resets the playback controller audio to the beginning. If the playback controller is currently playing then it will immediately re-start.
 */reset(): void
 ;

/** 
*  
 * setLooping(looping: BoolValue): void
 *  
 * 
 * Loops the playback controller. To be used in pair with the `setPlaying` method. If set to `true`, the audio will repeat infinitely.
 */setLooping(looping: BoolValue): void
 ;

/** 
*  
 * play(): void
 *  
 * 
 * Deprecated: Please use the `setPlaying` method. Play the playback controller, sound comes through all speakers (also known as Audio Source in the past) that reference the playback controller.
 */play(): void
 ;

/** 
*  
 * stop(): void
 *  
 * Deprecated: Please use the `setPlaying` method to pause the audio or the `reset` method to return the audio to the beginning. Stop the playback controller.
 */stop(): void
 ;

} 
