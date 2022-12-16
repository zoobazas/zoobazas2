// ---------------------------------------------------------------
//	get_token.js
//	TCS andre.chow  2022 11 17
// ---------------------------------------------------------------
'use strict'

console.error("*** start ***")
var cognito = require('amazon-cognito-identity-js')
const dotenv = require('dotenv')

dotenv.config()
const user_pool_id = `${process.env.USER_POOL_ID}`
const user_pool_client_id = `${process.env.USER_POOL_CLIENT_ID}`
const usr = `${process.env.USR}`
const password = `${process.env.PASSWORD}`

console.error(usr)
console.error(password)


var poolData = {
	UserPoolId : user_pool_id,
	ClientId : user_pool_client_id
}

var userPool = new cognito.CognitoUserPool(poolData)

var authenticationData = {
	Username : usr,
	Password : password
}

var authenticationDetails = new cognito.AuthenticationDetails(authenticationData)
var userData = {
	Username : usr,
	Pool : userPool
}

var cognitoUser = new cognito.CognitoUser(userData)
var refresh_token_str="";
cognitoUser.authenticateUser(authenticationDetails, {
	onSuccess: function (result) {
		console.log('access token')
		console.log(result.getAccessToken().getJwtToken())
		console.log('id token')
		let idToken = result.idToken.jwtToken;
		console.log(idToken);
		refresh_token_str = result.getRefreshToken().getToken();
		console.log('refresh token')
		console.log(refresh_token_str);
	},

	onFailure: function(err) {
		console.error("*** error ***")
		console.error('error ' + err)
	},
})

console.error("*** end ***")
