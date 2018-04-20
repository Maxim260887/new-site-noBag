function myF1() {
    
    var x = document.querySelectorAll(".box_js1");
    x[0].style.display = "none";
}

function myF2() {
    
    var x = document.querySelectorAll(".box_js2");
    x[0].style.display = "none";
}

function myF3() {
    
    var x = document.querySelectorAll(".box_js3");
    x[0].style.display = "none";
}

function myF4() {
    
    var x = document.querySelectorAll(".box_js4");
    x[0].style.display = "none";
}

function myF5() {
    
    var x = document.querySelectorAll(".box_js1, .box_js2, .box_js3, .box_js4");
    var i;
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "block";
    }
}
