const articlesCol = document.querySelector(".article-col");
const buttons = document.querySelectorAll(".btn");
const article = document.querySelectorAll(".article-content");

articlesCol.addEventListener('click',function(e){
    const id = e.target.dataset.id;
    if(id){
        //remove active class from other buttons
        buttons.forEach(function(btn){
            btn.classList.remove('active');
            e.target.classList.add('active');
        })

        //Hide Other Articles
        article.forEach(function(article){
            article.classList.remove('active');
        })
        const singleArticle = document.getElementById(id);  
        singleArticle.classList.add('active');

    }
})