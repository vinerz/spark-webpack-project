/// <reference path="../EventSource/index.d.ts" />
declare interface LiveStreamingComments {
/** 
* ```
(get) stream: EventSource
(set) (Not Available)
```

Specifies an `EventSource` that emits an update every time the Live stream receives a new comment. You may `subscribe()` to the `EventSource` and provide it with a callback that takes a single argument; when the callback is called, this argument will have the properties `body` (containing the text of the comment), and `timestampInVideoMs` (containing the video timestamp in milliseconds at which the comment was submitted).
The stream will only return comments that are displayed on the broadcaster's screen, which in the case of high comment volume will not include every comments. To process potentially large volumes of comments, use the Counter and Vote methods below.
*/ 
stream: EventSource;
/** 
*  
 * startMatchCounter(matchStrings, isCaseSensitive): EventSource
 *  
 * 
 * Returns an `EventSource` that emits an update every time there is a change in the count of comments on the Live stream that match one or more target strings. The `matchStrings` argument is an array of strings to search for in comments. The `isCaseSensitive` determines whether the string matching respects letter case. You may `subscribe()` to the `EventSource` and provide a callback that receives a single argument, which will be a JavaScript Object containing matched strings to comment counts. Up to 20 match strings may be requested in one counter. A maximum of 10 counter/vote subscriptions may be active at a time. If one is created beyond that limit then the oldest one will not receive any more updates. The subscription will receive a maximum of one update per second.
 */startMatchCounter(matchStrings, isCaseSensitive): EventSource
 ;

/** 
*  
 * startMatchVote(matchStrings, isCaseSensitive): EventSource
 *  
 * 
 * This method is identical to `startMatchCounter()` except that for each user only the first matched string appearing in the comment will be counted.
 */startMatchVote(matchStrings, isCaseSensitive): EventSource
 ;

/** 
*  
 * startHashtagCounter(): EventSource
 *  
 * 
 * Returns an `EventSource` that emits an update every time there is a change in the count of comments on the Live stream that contain hashtags. Hashtags are counted in case insensitive mode. You may `subscribe()` to the `EventSource` and provide a callback that receives a single argument, which will be a JavaScript Object containing hashtagged strings to comment counts. The hashtags will be provided in a canonical format, which will generally be CamelCase (for example #FacebookLive or #GrilledCheese). Internally, only the first 500 hashtags will be tracked and only the top 20 will be surfaced to the subscription. A maximum of 10 counter/vote subscriptions may be active at a time. If one is created beyond that limit then the oldest one will not receive any more updates. The subscription will receive a maximum of one update per second.
 */startHashtagCounter(): EventSource
 ;

/** 
*  
 * startHashtagVote(): EventSource
 *  
 * 
 * This method is identical to `startHashtagCounter()` except that for each user only the first hashtag appeared in his/her comments will be counted.
 */startHashtagVote(): EventSource
 ;

} 
