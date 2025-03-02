//*******************Connect Question page***************************** */
document.getElementById("question-btn")
.addEventListener("click",function(){
    window.location.href="question.html"
})
//***********************Set Current Date and time ******************************* */

const date =new Date();
    const spliteddd =date.toString()
    let dateSplite =spliteddd.split(" ");
    // console.log(dateSplite)
    let aipaisi =dateSplite.splice(0,4)
    let tarik =""
    for(let i of aipaisi){
        
        tarik +=i
        
    }
   
   let day=tarik.slice(0,3);
   let month=tarik.slice(3,6);
   let date1=tarik.slice(6,8);
   let year1=tarik.slice(8,12);
   
   const currentDate=month+"-"+date1+"-"+year1;
   const currentDay=day+" ,";
   document.getElementById("current-day").innerText=currentDay;
   document.getElementById("current-date").innerText=currentDate;

   //***********************Set current time*********************************** */
    // let currnentTime=date.toLocaleString()
    // const timeArry=currnentTime.split(" ")

    // const time =timeArry.slice(1,2)
    // const timeAmOrPm =timeArry.slice(2,3)

    // const localTime =time.toString()

  //***********************Set randomly color document body***************************** */


document.getElementById("navcolor-btn")
.addEventListener("click",function(event){

    let red =Math.floor(Math.random() * 256)
    let green =Math.floor(Math.random() * 256)
    let blue =Math.floor(Math.random() * 256)

    const rgbColor =`rgb(${red+","+green+","+blue})`
    
    document.getElementById("body").style.backgroundColor=rgbColor;
    
})

//*****************************History button click clear all comment****************************************** */

document.getElementById("history-btn")
.addEventListener("click",function(event){
    // document.getElementById("history-container").style.display="none";
     const comments=document.getElementsByClassName("dynamicComment");
    for(const comment of comments){
        comment.style.display="none"
    }
    
    
})


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

        if(taskAssignedNumber==1){
            alert("Congrates!!! You have completed all the current task.")
        }

    })
}
