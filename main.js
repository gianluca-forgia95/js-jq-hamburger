/*
Hamburger menu:
mostrare / nascondere il menu principale
*/
//Variabili utili
var menuResp = $('.hamburger-menu');
var burgerBtn = $('.header-right > a');
var crossMenu = $('.close');

//Uso show e hide
 //Mostro il menu al click sul burger
 /*
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
*/

//Uso fadeIn e fadeOut
/*
burgerBtn.click(
  function () {
  menuResp.fadeIn('slow');
  }
);

//Lo nascondo al click sulla x
crossMenu.click(
  function () {
    menuResp.fadeOut('slow');
  }
);
*/


//Uso toggle
//Mostro il menu al click sul burger

burgerBtn.click(
  function () {
  menuResp.toggle('slow');
  }
);

//Lo nascondo al click sulla x
crossMenu.click(
  function () {
    menuResp.toggle('slow');
  }
);
