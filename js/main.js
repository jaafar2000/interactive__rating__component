let spans = document.querySelectorAll("span");
let userRate = document.querySelector(".rater")
let x = [];
spans.forEach(span=>{
    span.addEventListener("click",function(){
        spans.forEach(span => {
            span.classList.remove("active");
        })
        span.classList.add("active");
        x.push(parseInt(span.textContent))
        window.localStorage.setItem("no" , `${x[x.length - 1]}`)
        
    })

})
userRate.innerHTML = `You selected ${window.localStorage["no"]} out of 5`
