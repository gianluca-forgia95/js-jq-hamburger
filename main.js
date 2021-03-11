/*
Hamburger menu:
mostrare / nascondere il menu principale
*/
//Variabili utili
var menuResp = $('.hamburger-menu');
var burgerBtn = $('.header-right > a');
var crossMenu = $('.close');

 //Mostro il menu al click sul burger
 burgerBtn.click(
   function () {
   menuResp.show();
   }
 );

 //Lo nascondo al click sulla x
 crossMenu.click(
   function () {
     menuResp.hide();
   }
 );
