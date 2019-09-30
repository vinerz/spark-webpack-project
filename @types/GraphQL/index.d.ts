/// <reference path="../String/index.d.ts" />
/// <reference path="../Object/index.d.ts" />
/// <reference path="../Promise/index.d.ts" />
declare namespace GraphQLModule {
/** 
*  
 *                             sendRequest(query: String, variables: Object): Promise<Object>
 *                              
 * 
 *                             Sends the GraphQL request with the given query string and variables
 *                             Returns a `JS Promise` or an error.
 */function sendRequest(query: String, variables: Object): Promise<Object>
 ;

} 
export = GraphQLModule;