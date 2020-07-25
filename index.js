var gamerDefaultval= document.querySelector('.gamerValue');
var computerDefaultval= document.querySelector('.computerValue');
var selectOpt= document.querySelector('.selectedVal');
var selectNumber= document.querySelector('.selectedNumber');
var numberChoosen= document.querySelector('.valueChoosen');
var finalResult=document.querySelector('.resultValue');
var goButton=document.querySelector('.GO');
goButton.addEventListener('click', (e)=>{
    e.preventDefault();
    console.log(numberChoosen.value);
    console.log(selectOpt.options[selectOpt.selectedIndex].innerHTML);
    console.log(selectNumber.options[selectNumber.selectedIndex].innerHTML);
   var finalResultN=Math.floor((Math.random()*(36-1) +1));
   finalResult.innerHTML=finalResultN;
   console.log(gamerDefaultval.innerHTML);
   console.log(computerDefaultval.innerHTML);
   var cCagnotte;
   var gCagnotte;
   gamerDefaultval.innerHTML=numberChoosen.value;
   if(finalResult==0)
   {
       alert('PERDU');
       computerDefaultval.innerHTML=Number(computerDefaultval.innerHTML)+Number(numberChoosen.value);
       gamerDefaultval.innerHTML=Number(gamerDefaultval.innerHTML) - Number(numberChoosen.value);
      

   }
   else if(finalResult==numberChoosen.value)
   {
      alert('GAGNE');
      gamerDefaultval.innerHTML=Number(gamerDefaultval.innerHTML)+ Number(numberChoosen.value)*35;
   }
   else if(Number(selectNumber.options[selectNumber.selectedIndex].innerHTML)%2==0 &&selectOpt.options[selectOpt.selectedIndex].innerHTML=="pair")
   {
    alert('GAGNE');
    gamerDefaultval.innerHTML=Number(gamerDefaultval.innerHTML)+ Number(numberChoosen.value)*35;
   }
   else if(Number(selectNumber.options[selectNumber.selectedIndex].innerHTML)%2==0 &&selectOpt.options[selectOpt.selectedIndex].innerHTML=="pair")
   {
    alert('GAGNE');
    gamerDefaultval.innerHTML=Number(gamerDefaultval.innerHTML)+ Number(numberChoosen.value);
   }
   else{
    alert('PERDU');
    computerDefaultval.innerHTML=Number(computerDefaultval.innerHTML)+Number(numberChoosen.value);
    gamerDefaultval.innerHTML=Number(gamerDefaultval.innerHTML) - Number(numberChoosen.value);
   
   }
 
     
  

  
});
 
 