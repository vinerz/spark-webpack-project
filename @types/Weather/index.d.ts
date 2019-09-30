/// <reference path="../Promise/index.d.ts" />
declare namespace WeatherModule {
/** 
*  
 *   getWeather(): Promise<Weather>
 *  
 * 
 * 
 * Returns a `JS Promise` which will be fulfilled with `Weather` object or an error.
 */function getWeather(): Promise<Weather>
 ;

} 
export = WeatherModule;