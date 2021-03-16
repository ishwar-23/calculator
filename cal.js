 var buttons = document.getElementsByClassName('button');
 var display = document.getElementById('display');

 var operend1=0;
 var operend2= null;
 var operator=null;

function isoperator(value){
    return value=='+' || value=='-'|| value=='/' || value=='*';
 }




 for(var i=0; i< buttons.length;i++){
     buttons[i].addEventListener('click', function(){
       var value = this.getAttribute('data-value');
       
       
       if (isoperator(value)) {

       operator = value;
       operend1 = parseFloat(display.textContent);
       display.textContent = "";




       }else if (value =='=') {

       operend2 = parseFloat(display.textContent);
       var result = eval(operend1+ '' + operator+''+ operend2)
       if (result) {
        display.textContent= result;
        operend1= result;
        operend2=null;
        operator= null;
       }


       }else if (value=='ac') {
        display.textContent= '';

      } else if (value=='%') {

          operend1= parseFloat(display.textContent);
          operend1 = operend1/100;
          display.textContent= operend1;
     

      }else if (value== 'sign') {
         operand1 = parseFloat(display.textContent);
            operand1 = -1 * operand1;
            display.textContent = operand1;
      } else{
          display.textContent += value;
       }

     

     });

 }

// var buttons = document.getElementsByClassName('button');
// var display = document.getElementById('display');

// operend1=0;
// operend2= null;
// operator= null;


//  function isoperator(value){
//     return value=='+'|| value=='-' || value=='*' || value=='/'
//  }

// for (var i = 0; i< buttons.length; i++) {
//     buttons[i].addEventListener('click', function(){

//     var value = this.getAttribute('data-value');

//     if ( isoperator(value)) {
//         operator = value;
//         operend1 = parseFloat(display.textContent);
//          display.textContent = ''
//     }else if (value=='%') {
//         operend1 = parseFloat(display.textContent);
//         operend1 = operend1/100;
//         display.textContent=operend1
//     }else if (value=='ac') {
//       display.textContent='';

//     }else if (value=='sign') {
//         operend1= parseFloat(display.textContent);
//         operend1 = -1 * operend1;
//         display.textContent = operend1;
//     }else if (value=='=') {
//         operend2 = parseFloat(display.textContent);
//         var result = eval(operend1 + operator + operend2);
//         if (result) {
//             display.textContent = result;
//             operend1= result;
//             operend2=null;
//             operator2= null;
//         }
//     }
//     else{
//         display.textContent += value;
//     }








//     });
// }



      


      

