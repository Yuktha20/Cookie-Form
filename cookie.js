function setcookie() {
  document.cookie = "Email = abc@gmail.com; expires=Thu, 18 Dec 2022 12:00:00 UTC";";
}
function getcookie() {
  let x = document.cookie;
  alert(x);
}
