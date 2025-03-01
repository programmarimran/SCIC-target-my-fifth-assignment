//************************************************ */
document.getElementById("question-btn")
.addEventListener("click",function(){
    window.location.href="question.html"
})
//****************************************************** */

const completedBtn =document.querySelectorAll(".completed-btn  ")

for (let i = 0; i < completedBtn.length; i++){
    completedBtn[i].addEventListener("click",function(event){
        alert("Board Updated Succesfully");

        completedBtn[i].setAttribute("disabled",true);

        const taskAssignedNumber=convertedElementStringToNumber("task-assigned");
        document.getElementById("task-assigned").innerText=taskAssignedNumber-1;

        const navNumber=convertedElementStringToNumber("navNumber");
        document.getElementById("navNumber").innerText=navNumber+1;
//************************************************************ */
const cardTitle =document.querySelectorAll(".card-title");

const historyContainer =document.getElementById("history-container");
const comment =document.createElement("div");
const titleLengthNumber=[]
for(let j = 0; j < cardTitle.length ; j++){
    const title =cardTitle[j].innerText;
    
    const length=title.length;
    titleLengthNumber.push(length)

   

for(const number of titleLengthNumber){

   comment.innerHTML=`<p class="bg-themecolor rounded-lg m-6 p-3 font-normal text-base text-descriptioncolor">You have Complete The Task ${title.length==number?title:``} at 12:48:15 PM </p>`
        console.log(number)
}
}
  

historyContainer.appendChild(comment);
    })
}