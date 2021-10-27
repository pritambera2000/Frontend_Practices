const btns = document.querySelectorAll(".question");

btns.forEach(
    function(btn){
        btn.addEventListener('click', (e)=>{
           const question = e.currentTarget.parentElement;
           console.log(question);
           
            question.classList.toggle("show_answer");
        })
    })
