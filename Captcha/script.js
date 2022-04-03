 function Captcha(){
     var array = new Array('A','B','C','D','E',')','!','^','+','%','&','','=','?','*','-','%','(','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z',
         'a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z', 
             '0','1','2','3','4','5','6','7','8','9');
     var i;
     for (i=0;i<3;i++){
        
         var c = array[Math.floor(Math.random() * array.length)];
         var a = array[Math.floor(Math.random() * array.length)];
         var n = array[Math.floor(Math.random() * array.length)];

        
         var code = c +' '+ a +' ' + n;

         document.getElementById("captcha").innerHTML = code
         document.getElementById("captcha").value = code
       }
     }
 function Onayla(){
     var s1 = dlt(document.getElementById('captcha').value);
     var s2 = dlt(document.getElementById('txt').value);
     var txt = document.getElementById('txt');
     
     txt.value = '';
     txt.innerHTML = '';
     Captcha();


     if (s1 == s2){
            return true;          
     }
     else{        
          return false;
          }

 }
 function dlt(string){
     return string.split(' ').join('');
 }

