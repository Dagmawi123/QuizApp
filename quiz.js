var number=0;
var Questions;
var answer_given
var score=0;
 fetch("https://the-trivia-api.com/v2/questions").then(Response=>{
    if(Response.ok)
    return Response.json()
    else throw(Response)
}).then(Json=>{
    Questions=Json
var len=Json.length;
// for(var i=0;i<len;i++){
//   //  console.log(Json[i].question.text)
//     var Element=document.createElement("p");
//     Element.textContent=++number+Json[i].question.text;
//     document.body.appendChild(Element);
//     var input=document.createElement("input");
//     input.setAttribute('correct',Json[i].correctAnswer);
//     Element.appendChild(input)
// }
         document.body.querySelector(".question").textContent=Json[0].question.text
         var new_arr=Json[0].incorrectAnswers;
         new_arr.push(Json[0].correctAnswer)
         Answer(new_arr)

 //console.log(Json.length);
return Json;
} ).catch(error=>{
    console.log(error);
})
function Answer(arr){
var num=Math.floor(Math.random()*4)
for(var J=0;J<arr.length;J++){
var choice=document.createElement("p")
if(num==arr.length-1)
num=0
else num++;
choice.textContent=arr[num]
document.querySelector(".Answers").appendChild(choice)

}
var Answers= document.querySelectorAll(".Answers p")
Answers.forEach(element => {
    element.addEventListener('click',function(){
     //   console.log("population");
     if(answer_given!=null){
    answer_given.classList.remove("choice") 
    }
     answer_given=element
        element.classList.add("choice")
})});
}




function answerSelected(){
if(!answer_given)
answer_given=true
}

function next(){
//console.log("ENTERING");
if(number<9&&answer_given!=null){
    if(Questions[number].correctAnswer==answer_given.textContent)
    score++;
    document.body.querySelector(".question").textContent=Questions[++number].question.text;
    var new_arr=Questions[number].incorrectAnswers;
    new_arr.push(Questions[number].correctAnswer)
    document.querySelector(".Answers").innerHTML="" 
     Answer(new_arr)    
   answer_given=null
   // var new_Answer=document.createElement("div")
}
else
alert("you have got "+score+" out of 10")
}





















// var inputs=document.querySelectorAll('input')
// inputs.forEach(element => {
//     element.onkeyup=function(){
//         //console.log("object");
//         if(element.value!=element.getAttribute('correct'))
//         element.style.borderColor="Red"
//         else 
//         element.style.borderColor="Green"
//     }
// }); 
// inputs.onchange=function(){
//     if(input.value!=input.getAttribute('correct'))
//     input.style.borderColor="Red"
// }