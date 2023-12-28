    
function reset(){
    document.getElementById("panjang").value = ""
    document.getElementById("lebar").value = ""
    document.getElementById("luas").innerHTML = "0"
    document.getElementById("keliling").innerHTML = "0"
}

function reset22(){
    document.getElementById("sisi1").value = ""
    document.getElementById("sisi2").value = ""
    document.getElementById("luass").innerHTML = "0"

}

function reset3(){
    document.getElementById("s1").value = ""
    document.getElementById("s2").value = ""
    document.getElementById("s3").value = ""
    document.getElementById("s4").value = ""
    document.getElementById("kelilings").innerHTML = ""
}

function reset4(){
    document.getElementById("jar").value = ""
    document.getElementById("luasL").innerHTML = ""
    document.getElementById("kelilingL").innerHTML= "0"
}



function persegi_panjang() {
    var panjang = Number (document.getElementById("panjang").value)
    var lebar = Number (document.getElementById("lebar").value)
    var luas = Number (panjang * lebar)
    var keliling = Number (2* (panjang + lebar))
    document.getElementById("luas").innerHTML = luas
    document.getElementById("keliling").innerHTML = keliling
}

function bujursangkar() {
    var sisi1       = Number (document.getElementById("sisi1").value)
    var sisi2       = Number (document.getElementById("sisi2").value)
    var luass       = Number (sisi1 * sisi2)
    document.getElementById("luass").innerHTML = luass
    
}

function bujursangkar2 (){
    var s1 = Number (document.getElementById("s1").value)
    var s2 = Number (document.getElementById("s2").value)
    var s3 = Number (document.getElementById("s3").value)
    var s4 = Number (document.getElementById("s4").value)
    var kelilings = Number (s1 + s2 + s3 +s4)
    document.getElementById("kelilings").innerHTML = kelilings

}

function lingkaran(){
    var jar   = Number (document.getElementById("jar").value)
    var phi   = Number( 3.14 )
    var luasL = Number(phi * jar * jar)
    var kelilingL = Number (2 * phi * jar)
    document.getElementById("luasL").innerHTML = luasL
    document.getElementById("kelilingL").innerHTML = kelilingL


}

function openCity(evt, cityName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += " active";
}

