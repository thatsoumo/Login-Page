//now make a function
//now going to make fake array of objects

var objUser=[
  {
username :"soumoee",
password :"tastey",
}

]
function getInfo(){
    var username=document.getElementById("username").value;
    var password=document.getElementById("password").value;

   for(i=0;i<objUser.length;i++)
    {//get length of user
    if(username==objUser[i].username && password == objUser[i].password){//match username and password
      console.log(username+"is logged in")
      return//brake the loop
    }
   }
   console.log("incorect username or password")
}