//************************************************ */
document.getElementById("question-btn")
.addEventListener("click",function(){
    window.location.href="question.html"
})
//****************************************************** */

const completedBtn =document.querySelectorAll(".completed-btn  ")

for (let i = 0; i < completedBtn.length; i++){
    completedBtn[i].addEventListener("click",function(){
        console.log("bondo amake ki dekha jai")
    })
}