
const ratingState = {
    stars: document.querySelectorAll(".card__rating"),
    submit: document.querySelector(".cta"),
    disp: document.querySelector(".ratingState").style
},
    thankyouState = {
        ratingVal: document.querySelector("#rating"),
        disp: document.querySelector(".thankyouState").style
    };

function submitAction() {
    console.log(ratingState.ratingVal);
    ratingState.disp.display = "none";
    thankyouState.disp.display = "block";
}

console.log(thankyouState.ratingVal);

ratingState.stars.forEach(star => {
    star.addEventListener("click", () => {
        for (i of ratingState.stars) {
            i.style.background = '#252d37'
        }
        thankyouState.ratingVal.innerHTML = star.innerHTML;
        star.style.background = 'hsl(25, 97%, 53%)'
        star.style.color = 'white'
    })
});



ratingState.submit.addEventListener("click", submitAction);