//************************************************ */
document.getElementById("question-btn")
.addEventListener("click",function(){
    window.location.href="question.html"
})
//****************************************************** */

const completedBtn =document.querySelectorAll(".completed-btn  ")

for (let i = 0; i < completedBtn.length; i++){
    completedBtn[i].addEventListener("click",function(){
        alert("Board Updated Succesfully");
        completedBtn[i].setAttribute("disabled",true);
        
    })
}