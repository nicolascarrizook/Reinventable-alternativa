const imgBx = document.querySelector('.imgBx');
const contentBx = document.querySelector('.contentBx');
const slides = imgBx.getElementsByTagName('img');
const slidesText = contentBx.getElementsByTagName('div');
const prev = document.querySelector('#prev');
const next = document.querySelector('#next');
var i = 0;
var j = 0;

prev.addEventListener('click', function(){
	anteriorSlide();
	anteriorSlideText();
});
next.addEventListener('click', function(){
	proximoSlide();
	proximoSlideText();
});

function proximoSlide(){
	slides[i].classList.remove('active');
	i = (i + 1) % slides.length;
	slides[i].classList.add('active');
}

function anteriorSlide(){
	slides[i].classList.remove('active');
	i = (i - 1 + slides.length) % slides.length;
	slides[i].classList.add('active');
}

function proximoSlideText(){
	slidesText[j].classList.remove('active');
	j = (j + 1) % slidesText.length;
	slidesText[j].classList.add('active');
}

function anteriorSlideText(){
	slidesText[j].classList.remove('active');
	j = (j - 1 + slidesText.length) % slidesText.length;
	slidesText[j].classList.add('active');
}


//navbar

$(function() {
	$(window).on("scroll", function() {
	   if($(window).scrollTop() > 280) {
		   //background on scroll
		   $("#navbar").addClass("scroll");
	   } else {
		   //background at top
		  $("#navbar").removeClass("scroll");
	   }
	 });
   });