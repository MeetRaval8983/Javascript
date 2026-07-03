const accountId = 12345;
let accountEmail = "meet@gmail.com";
var accountPass = "154543059438";
accountCity = "Mumbai";
let accountState;

// accountId = 12; not allowed because accountId is a constant
/*
Prefer not to use var, use let instead. 
var is function scoped and can be redeclared and updated. 
let is block scoped and can be updated but not redeclared. 
const is block scoped and cannot be updated or redeclared.
*/

console.log(accountId);

console.table([accountId, accountEmail, accountPass, accountCity, accountState]);