function updateCaseNumber(isIncreasing){
    let caseInpute =document.getElementById('case-number');
    let caseNumber=caseInpute.value;
    
    if(isIncreasing==true){
        caseNumber= parseInt(caseNumber)+1;
        caseInpute.innerText=caseNumber;
        
    } 
    else if (caseNumber>0) {
        caseNumber= parseInt(caseNumber)-1;
  
    } 
    caseInpute.value=caseNumber;
    const caseTotal=document.getElementById('totalPrice');
    
    caseTotal.innerText =caseNumber*59;
    }
document.getElementById('case-plus').addEventListener('click',function(){
    updateCaseNumber(true);
  
      //সাধারণ ভাবে ফাংশনকে কল করার মত ক্লিক ইভেন থেকেও কল করা যায়। ***  
})
document.getElementById('case-minus').addEventListener('click', function(){
    updateCaseNumber(false);

    //সাধারণ ভাবে ফাংশনকে কল করার মত ক্লিক ইভেন থেকেও কল করা যায়। ***
   /// একাধিক বার কল করা যায় যদি কাজ একই হয়ে থাকে। 
})


//copy
// document.getElementById('case-plus').addEventListener('click',function(){
//     updateCaseNumber();
//     // const caseInpute =document.getElementById('case-number');
//     // const caseInputeNumber=parseInt(caseInpute.value)+1;
//     // caseInpute.value=caseInputeNumber;

//     const total=document.getElementById('totalPrice');
//         const amauntTk=parseInt(total.innerText);
        
        
// })
// document.getElementById('case-minus').addEventListener('click', function(){
//     console.log("clicked minus")
// const caseInputeMinus=document.getElementById('case-number');
//     const caseIntputeMinusNumber=parseInt(caseInputeMinus.value);
//    if(caseIntputeMinusNumber>0){
//     const number=caseIntputeMinusNumber-1;

//     caseInputeMinus.value=number;
//    }

// });//
