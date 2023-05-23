const ratingState = {
    stars: document.querySelectorAll(".card__rating"),
    submit: document.querySelector(".cta"),
    disp: document.querySelector(".ratingState").style
},
    thankyouState = {
        rating: document.querySelector("#rating"),
        disp: document.querySelector(".thankyouState").style
    };

console.log(ratingState.stars);

function updateState(){
    ratingState.disp.display = "none";
    thankyouState.disp.display = "block";
}

ratingState.submit.addEventListener("click", updateState)