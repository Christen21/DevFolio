//NavBar Change On Scroll
$(window).scroll(()=>{
    changeNavbar()
});

changeNavbar();

function changeNavbar() {
    if ($(window).scrollTop() > $('.home').outerHeight(true)-50){
        $('.navbar').css("background-color" , "#0078FF");
        $('.navbar').css("padding-left" , "100px");
        $('.navbar').css("padding-right" , "100px");
    } else{
        $('.navbar').css("background-color" , "transparent");
        $('.navbar').css("padding-left" , "50px");
        $('.navbar').css("padding-right" , "50px");
    }
}

//Loading Screen
$(window).on("load" , () => {
    setTimeout ( () => {
        $(".loadingScreen").fadeOut(500)
        $(document.body).css("overflow" , "visible")
    }, 500)
})


//Set List Colors
let colors = ["red" , "green" , "blue" , "orange"];
let lis = document.querySelectorAll(".colors li");

for (let i=0; i < lis.length; i++) {
    lis[i].style.backgroundColor = colors[i]
}

//Change Some Colors in the Site
$('.colors li').click((e)=>{
    let selectedColor = $(e.target).css("background-color")
    $('.elementColor').css("color" , selectedColor)
})


//Click On The cycle
let colorsWidth = $(".colors").outerWidth(true);
$(".colorsOption").animate({"left" : `-${colorsWidth}`});

$(".cycle").click(() => {
    let colorsWidth = $(".colors").outerWidth(true);

    if ($(".colorsOption").css("left") == "0px") {
        $(".colorsOption").animate({"left" : `-${colorsWidth}`})
    } else {
        $(".colorsOption").animate({"left" : "0px"})
    }
})

//Go to The links when Click
$('.nav-item a').click((e)=>{

    let targetSection = $(e.target).attr("my-href");

    $("html , body").animate({"scrollTop" : $(targetSection).offset().top}, 200)

})