const accountId=144553
let accountEmail="saubhagya@google.com"
var accountPass="12345"
accountCity="jaipur"

// accountId=2 //change in const not allowed
console.log(accountId);
accountEmail="ababa@google.com"
accountPass="4345"
accountCity="delhi"
let accountState
/*
prefer not to use var
due to issue of block scope and functional scope
*/
console.table([accountId,accountEmail,accountPass,accountCity, accountState]);
