
var hd, md, ld;
var high, low, med;
function Maker(){
    hd=""; md=""; ld="";
    var x = Math.floor(Math.random() * 3) + 1;
    var y=x;
    while (y == x) {
        y = Math.floor(Math.random() * 3) + 1;
    }
    var z=6-x-y;
    high=x; med=y; low=z;
    if (high==1) { hd = "DS IBM";} else if (high==2) { hd = "ML Andrew";} else if (high==3) {hd = "DS Mic";}
    if (med==1) { md = "DS IBM";} else if (med==2) { md = "ML Andrew";} else if (med==3) {md = "DS Mic";}
    if (low==1) { ld = "DS IBM";} else if (low==2) { ld = "ML Andrew";} else if (low==3) {ld = "DS Mic";}
}
function Solve(){
    Maker();
    document.getElementById("high2").innerHTML = hd ;
    document.getElementById("med2").innerHTML = md ;
    document.getElementById("low2").innerHTML = ld ;
    Maker();
    document.getElementById("high3").innerHTML = hd ;
    document.getElementById("med3").innerHTML = md ;
    document.getElementById("low3").innerHTML = ld ;
    Maker();
    document.getElementById("high4").innerHTML = hd ;
    document.getElementById("med4").innerHTML = md ;
    document.getElementById("low4").innerHTML = ld ;
    Maker();
    document.getElementById("high5").innerHTML = hd ;
    document.getElementById("med5").innerHTML = md ;
    document.getElementById("low5").innerHTML = ld ;
    Maker();
    document.getElementById("high6").innerHTML = hd ;
    document.getElementById("med6").innerHTML = md ;
    document.getElementById("low6").innerHTML = ld ;
    Maker();
    document.getElementById("high7").innerHTML = hd ;
    document.getElementById("med7").innerHTML = md ;
    document.getElementById("low7").innerHTML = ld ;
    Maker();
    document.getElementById("high8").innerHTML = hd ;
    document.getElementById("med8").innerHTML = md ;
    document.getElementById("low8").innerHTML = ld ;
}
