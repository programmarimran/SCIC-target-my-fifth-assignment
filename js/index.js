//************************************************ */
document.getElementById("question-btn")
.addEventListener("click",function(){
    window.location.href="question.html"
})
//****************************************************** */

const date =new Date();
    const spliteddd =date.toString()
    let dateSplite =spliteddd.split(" ");
    let aipaisi =dateSplite.splice(0,4)
    let tarik =""
    for(let i of aipaisi){
        
        tarik +=i
        console.log(tarik)
    }
   
   let day=tarik.slice(0,3)
   let month=tarik.slice(3,6)
   let date1=tarik.slice(6,8)
   let year1=tarik.slice(8,12)
   
   const currentDate=`${month}-${date1}-${year1}`
   const currentDay=`${day},`
   document.getElementById("current-day").innerText=currentDay
   document.getElementById("current-date").innerText=currentDate


//******************************************************** */
const completedBtn =document.querySelectorAll(".completed-btn  ")

for (let i = 0; i < completedBtn.length; i++){
    completedBtn[i].addEventListener("click",function(event){
        alert("Board Updated Succesfully");

        completedBtn[i].setAttribute("disabled",true);

        const taskAssignedNumber=convertedElementStringToNumber("task-assigned");
        document.getElementById("task-assigned").innerText=taskAssignedNumber-1;

        const navNumber=convertedElementStringToNumber("navNumber");
        document.getElementById("navNumber").innerText=navNumber+1;

    })
}
