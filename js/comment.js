for(let btn of completedBtn){
    btn.addEventListener("click",function(event){
















        const titleArry=['Review Ami Probashi Site',
            'Integrate AI search',
            'Fix Video Loading Issue',
            'Add new reaction 🙌',
            'Add Pay Success Modal',
            'Fix Mobile Button Issue'

        ]
        

        


        const cardTitle=document.getElementsByClassName("card-title");
       
        for(const title of cardTitle){
        
            titleArry.push(title.innerText)


        


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