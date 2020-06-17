//read the values of userName and password
function login(){
    var userName=document.getElementById('userName').value;
   console.log(userName);
   var password=document.getElementById('password').value;
   console.log(password);


auth.signInWithEmailAndPassword(userName, password).then(cred=>{
  console.log(cred.user);
  var userObject=cred.user;
   console.log(userObject.email);
   var emailId=userObject.email;
   if(emailId!=null){
     window.location.replace('MainHtml.html');

   }

})
.catch(function(errorMessage){
  alert('You are not authorized');
});
}


  
//verify with database