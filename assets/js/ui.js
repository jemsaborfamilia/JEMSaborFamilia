let currentSlide = 0;

const slides = document.querySelectorAll(".slide");
const dots = document.querySelectorAll(".dot");

function mostrarSlide(index){

    slides.forEach((s,i)=>{
        s.classList.remove("active");
        dots[i].classList.remove("active");
    });

    slides[index].classList.add("active");
    dots[index].classList.add("active");

}

function nextSlide(){

    currentSlide++;

    if(currentSlide >= slides.length){
        currentSlide = 0;
    }

    mostrarSlide(currentSlide);

}

setInterval(nextSlide, 4000);

// clique nas bolinhas
dots.forEach((dot, index)=>{
    dot.addEventListener("click", ()=>{
        currentSlide = index;
        mostrarSlide(index);
    });
});