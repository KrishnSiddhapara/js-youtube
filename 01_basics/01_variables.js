const accountId = 13322
let accountEmail = "krishna@google.com"
var accountPassword = "12345"
accountCity = "dungarpur"
let accountState;

/*prefer not to use var 
because of issue in block scope and functional scope
 */
// accountId = 22 )not allowed)

console.log(accountId);

accountEmail = "krish@google.com"
accountPassword  = "2121"
accountCity = "jaipur"

console.table([accountEmail , accountId , accountPassword , accountCity  , accountState])