
// -----TENTATIVA (OK) ----- trocar cor do box
function colorBox() {
    
    setInterval
    var boxColor = document.getElementById("box").className

    if (boxColor = "login-box") {
        document.getElementById("box").classList.remove("login-box");
        document.getElementById("box").classList.add("login-box-shuffle");
        
    } else if (boxColor = "login-box-shuffle") {
        document.getElementById("box").classList.remove("login-box-shuffle");
        document.getElementById("box").classList.add("login-box");
        
    }
}

// -------TENTATIVA (NÃO ROLOU) --- trocar cor do box
$(document).ready(function () {

    $("#deh").click(function () {
        
        if ($("#login-box").hasClass("login-box-shuffle")) {
            $("#login-box").removeClass("login-box")
        } else {
            $("#login-box").addClass("login-box-shuffle")
        }
    })
})
