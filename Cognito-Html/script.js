// ---------------------------------------------------------------
//	get_token.js
//	TCS andre.chow  2022 11 17
// ---------------------------------------------------------------
const region = 'ap-northeast-1';
const userpoolid = 'ap-northeast-1_2lvOEvPx7';
const clientid = '46il5tmmic9msluo5fj358do62';

function callCognito() {
  document.getElementById('result').value = "";
  $('#message').empty();

  const username = document.getElementById('idTxt').value;
  const password = document.getElementById('pwTxt').value;

  const authenticationData = {
       Username : username,
       Password : password,
   };
  const authenticationDetails = new AmazonCognitoIdentity.AuthenticationDetails(authenticationData);
  const poolData = {
     UserPoolId : userpoolid,
     ClientId : clientid
  };
  const userPool = new AmazonCognitoIdentity.CognitoUserPool(poolData);
  const userData = {
     Username : username,
     Pool : userPool
  };

  const cognitoUser = new AmazonCognitoIdentity.CognitoUser(userData);
  cognitoUser.authenticateUser(authenticationDetails, {
   // 認証成功時の処理
    onSuccess: function (result) { 
       let accessToken = result.getAccessToken().getJwtToken();
       console.log(JSON.stringify(result));
       let idToken = result.idToken.jwtToken;
       console.log(idToken);
       $('#result').val(idToken);
    },
    // エラー発生時の処理
    onFailure: function(err) { 
       console.log(JSON.stringify(err));
       $('#message').append(JSON.stringify(err));
    },
   // パスワード変更が必要なユーザーの、パスワードを強制変更
    newPasswordRequired: function(userAttributes, requiredAttributes) { 
       cognitoUser.completeNewPasswordChallenge("Test9999@", {}, this)
       $('#message').append("パスワード変更が必要なユーザーのため、パスワードを「Test9999@」に変更しました\n");
    }
  });
}
