  document.addEventListener("DOMContentLoaded", function(event) {
    var nannyGif = document.getElementById("nannyGif");
    var nannyDemo =document.getElementById("nanny");
    var clickDemoNanny =document.getElementById("clickDemoNanny");
    var pocketGif =document.getElementById("pocketGif");
    var pocketDemo =document.getElementById("pocket");
    var clickDemoPocket =document.getElementById("clickDemoPocket");
    var monsterTounge =document.getElementById("intro");
    var monsterText =document.getElementById("introText");
    var welcomeAni =document.getElementById("welcome");
    var body =document.getElementById("body");
    // nannyDemo.pause();

    nannyGif.addEventListener("click", function(){
    console.log("i have been clicked");
    nannyDemo.style.display = "block";
    nannyDemo.play();
    nannyGif.style.display = "none";
  });
  nannyDemo.addEventListener("ended", function(){
    nannyGif.style.display = "block";
    nannyDemo.style.display = "none";
  })
  nannyGif.addEventListener("mouseenter", function(){
    clickDemoNanny.style.display = "block";
  })
  nannyGif.addEventListener("mouseleave", function(){
    clickDemoNanny.style.display = "none";
  })

  pocketGif.addEventListener("click", function(){
  console.log("i have been clicked");
  pocketDemo.style.display = "block";
  pocketDemo.play();
  pocketGif.style.display = "none";
});
pocketDemo.addEventListener("ended", function(){
  pocketGif.style.display = "block";
  pocketDemo.style.display = "none";
});
pocketGif.addEventListener("mouseenter", function(){
  clickDemoPocket.style.display = "block";
});
pocketGif.addEventListener("mouseleave", function(){
  clickDemoPocket.style.display = "none";
});
welcomeAni.addEventListener("animationend", function(){
  monsterTounge.style.animationPlayState="running";
});
monsterTounge.addEventListener("animationend",function(){
    monsterText.style.display ="block";
    // body.style.overflowY="scroll";

})

});
