for(let btn of completedBtn){
    btn.addEventListener("click",function(event){



        const dateTime=new Date();
        let currnentTime=dateTime.toLocaleString()
        const timeArry=currnentTime.split(" ")
    
        const time =timeArry.slice(1,2)
        const timeAmOrPm =timeArry.slice(2,3)
       
        const title =event.target.parentNode.parentNode.children[1].innerText;

      
       const historyContainer=document.getElementById("history-container");
      const dynamicComment =document.createElement("div")
      
      
      dynamicComment.innerHTML=`
      <p class="dynamicComment bg-themecolor rounded-lg m-6 p-3 font-normal text-base text-descriptioncolor">
      You have Complete The Task ${title} at ${time} ${timeAmOrPm}
      </p>
      `
      historyContainer.appendChild(dynamicComment)
    

    })
}