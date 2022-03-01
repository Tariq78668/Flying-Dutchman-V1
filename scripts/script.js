$(document).ready(function(){
  if(sessionStorage.getItem("username") !== null){
    $('#login_btn').hide();
    $('#username').text("Welcome " + sessionStorage.getItem("username"));
    $('#log_out').show();
  }
  else{
    $('#log_out').hide();
    $('#username').hide();
  }
});
$('#log_out').click(function(){
  sessionStorage.clear();
  $('#login_btn').show();
  $('#username').remove();
  $('#log_out').hide();
});
function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}
$('#login_btn').click(function(){
  $('#login_form').show();
});
$('#login_close').click(function(){
  $('#login_form').hide();
});

function user_login(){
  var user = login.username.value;
  var pass = login.password.value;
  // DB is object coming from DBLoaded.js
  // with each function check usernam and password matches or not
  $.each(DB.users, function(index, element){
    // console.log(DB.element);
    if(element.username == user && element.password == pass){
      sessionStorage.setItem("id", element.user_id);
      sessionStorage.setItem("credentials", element.credentials);
      sessionStorage.setItem("username", element.username);
      sessionStorage.setItem("first_name", element.first_name);
      sessionStorage.setItem("last_name", element.last_name);
      console.log(sessionStorage);
      $('#username').text("Welcome " + sessionStorage.getItem("username"));
      $('#login_form').hide();
      $('#login_btn').hide();
      $('#username').show();
      console.log(sessionStorage.getItem('username'));
      $('#log_out').show();
      // console.log(element.username + " enteered" + user);
      // console.log('matched');
      // alert('correct username and password');
      // console.log(DB);
    }
    else{
      $('#login_err').text('Entered username or password is wrong').css({'color': 'red', 'margin-bottom': '5px'});
    }
  });
}
// window.addEventListener('click', function(e){   
//   if (!(document.getElementById('login_form').contains(e.target))){
//     $('#login_form').hide();
//     console.log('clicked outside of box');}
// });