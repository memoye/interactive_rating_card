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
        console.log(star);
        thankyouState.ratingVal.innerHTML = star.innerHTML;
    })
});

ratingState.submit.addEventListener("click", submitAction);