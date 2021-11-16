function validate() {
    var password = document.getElementById("1");
    var password2 = document.getElementById("2");
    if(password.value.length < 8)
    {
      alert("The password has to be longer than 8 character!");
    }
    else if(password.value != password2.value)
    {
      alert("The passwords have to match!");
    }
    else
    {
      alert("The passwords are the same!");
    }
  }
