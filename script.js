"use strict "
//naznaceaem obrabot4ik sobitii
 //ispolizuem svoistva dom dereva 
 const btns =document.querySelectorAll('button'),
 overlay = document.querySelector('.overlay');

//  btn.onclick=function() {
//      alert('vasdfsd');
//  };
//navodim s mishkoi - mouseenter
//udaliaem element
// btn.addEventListener('click',(e)=>{
//     console.log(e.target);
//     e.target.remove();
//   //alert('vasdfsd');
// });
let i =0;
const delet =(e)=>{
console.log(e.target);
console.log(e.type);
// i++;
// if ( i == 1){
// btn.removeEventListener('click', delet);
// }
};
//naznaceaem obrabot4ik i potom udaoiaem 
// btn.addEventListener('click',delet);
// overlay.addEventListener('click', delet);

// btn.addEventListener('click', () => {
//     alert('hyyu');
// });
btns.forEach (function (btn) {
    btn.addEventListener('click', delet, {once:true});
});

// const link = document.querySelector('a');
// //stavim obrabot4ik sobitii
// link.addEventListener('click ', function (event){
//     //otmeneaem standart povedenie 
// event.preventDefault();
// alert(event.target);
// });


