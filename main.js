function myfunction() {
      var x = document.getElementById('password');
      var y = document.getElementById('hide');
      var z = document.getElementById('hide2');

      if (x.type === 'password') {
            x.type = "text";
            y.style.display = "block";
            z.style.display = "none";

      }
      else {
            x.type = "text";
            y.style.display = "none";
            z.style.display = "block";
      }

}

var objProject = [
  {
    email: "shaki@gmail.com",
    password: "shaki"
  },
  {
    email: "vijay@gmail.com",
    password: "vijay"
  },
  {
    email: "vishnu@gmail.com",
    password: "vishnu"
  },
  {
    email: "sharu@gmail.com",
    password: "sharu"
  },
  {
    email: "siva@gmail.com",
    password: "siva"
  }
]
function validate() {
  var email = document.getElementById('mail').value;
  var password = document.getElementById('password').value;

  for (var i = 0; i < objProject.length; i++) {
    if (email == objProject[i].email && password == objProject[i].password) {
       alert("Login Successfully")
       return

    }
      alert("Incorrect email or password!.Try again")


  }

}
