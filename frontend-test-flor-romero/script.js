var myVar;

function loader() {
  myVar = setTimeout(showPage, 2000);
}

function showPage() {
  document.getElementById("loader").style.display = "none";
  document.getElementById("bg").style.display = "block";
}

var positionActive = 0;

function rightArrowClick(){
    positionActive++;
    showSlide(positionActive);
}

function leftArrowClick(){
    positionActive--;
    showSlide(positionActive);
}


function showSlide(id){
    positionActive=id;
    hideSlides(id);
    var slide = document.getElementById("slide"+id);
    var slideChecked = document.getElementById(id); 
    var step = document.getElementById("step" + id);
    var bg = document.getElementById("bg");

    slideChecked.classList.add('active');

    slide.classList.remove('hide');
    step.classList.remove('hide');

    bg.style.backgroundPositionX = id*12.5 + "%";

}

function hideSlides(id){
    for(var i= 0; i<10; i++) {
        if(i!=id){
        var slide = document.getElementById("slide"+i);
        slide.classList.add('hide'); 

        var slideChecked = document.getElementById(i); 
        slideChecked.classList.remove('active');  

        var step = document.getElementById("step" + i);
        step.classList.add('hide');
        }
    }
}





