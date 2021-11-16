function changeValues() {
    document.getElementById("paragraph").style.borderStyle = "solid"
    document.getElementById("paragraph").style.borderWidth = document.getElementById("width").value
    document.getElementById("paragraph").style.borderColor = 'rgb(' + document.getElementById("bRed").value + ',' + document.getElementById("bGreen").value + ',' + document.getElementById("bBlue").value + ')';
    document.getElementById("paragraph").style.backgroundColor = 'rgb(' + document.getElementById("bgRed").value + ',' + document.getElementById("bgGreen").value + ',' + document.getElementById("bgBlue").value + ')';
}
