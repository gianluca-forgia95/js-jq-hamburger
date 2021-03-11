/*
Hamburger menu:
mostrare / nascondere il menu principale
*/
//Variabili utili
var menuResp = $('.hamburger-menu');
var burgerBtn = $('.header-right > a');

burgerBtn.click(
  function () {
  menuResp.show();
  }
);
