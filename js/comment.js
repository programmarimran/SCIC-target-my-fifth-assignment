for(let btn of completedBtn){
    btn.addEventListener("click",function(event){


        

        const cardTitle=document.getElementsByClassName("card-title");
        for(const title of cardTitle){
           
        

            
        const historyContainer=document.getElementById("history-container");

        const dynamicComment =document.createElement("div")
        // dynamicComment.classList.add("bg-themecolor rounded-lg m-6 p-3 font-normal text-base text-descriptioncolor")
        
        dynamicComment.innerHTML=`
        <p class="dynamicComment bg-themecolor rounded-lg m-6 p-3 font-normal text-base text-descriptioncolor">
        You have Complete The Task ${title.innerText} at ${time} ${timeAmOrPm}
        </p>
        `

   
        historyContainer.appendChild(dynamicComment)

   
    }

    })
}