const inputBox=document.querySelector(".inputBox");
const suggestion=document.querySelector(".suggestion");

inputBox.addEventListener('keyup',autoSuggestion);
inputBox.addEventListener('click',()=>{
  inputBox.select()
})

async function autoSuggestion(){
  const data= await fetch('./data.json');
 const dataresult= await data.json();

 input=inputBox.value;


 let arr=[];
 if(input.length){
  arr=dataresult.filter(d=>{
    return  d.search.toLowerCase().includes(input.toLowerCase());
   })
 }

 
displaySuggestion(arr);
if(!arr.length){
  suggestion.innerHTML="";
}
}
function displaySuggestion(list){
 
 const content=list.map(l=>{
    return `<li onclick="update(this)">${l.search}</li>`
 })

 if(input.length){
  suggestion.innerHTML=`<ul>${content.join("")}</ul>`
 }else
   suggestion.innerHTML=""

}

function update(list){
  inputBox.value=list.innerHTML
  suggestion.innerHTML=''
}