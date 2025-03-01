//************************************************ */
document.getElementById("question-btn")
.addEventListener("click",function(){
    window.location.href="question.html"
})
//****************************************************** */


// document.getElementById("current-date").innerText=currentDate
// const currentDate =new Date()

// let tsrik =currentDate.getDate()
// let mas =currentDate.getMonth()
// let year=currentDate.getFullYear()
// const fulldateandtime ={tsrik,mas,year}
// console.log(fulldateandtime)


// const date = new Date();

// let day = date.getDate();
// let month = date.getMonth() + 1;
// let year = date.getFullYear();

// // This arrangement can be altered based on how we want the date's format to appear.
// let currentDate = `${day}-${month}-${year}`;
// console.log(currentDate); // "17-6-2022"


// document.getElementById("current-date").innerText=currentDate



// let kkk =moment()
// console.log(kkk)

















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
