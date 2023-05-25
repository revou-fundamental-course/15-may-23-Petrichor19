function hitungLuas() {
    var sisiLuas = document.getElementById("sisi-luas").value;
    var output = document.getElementById("output-luas");
    const resultSquare = sisiLuas*sisiLuas
    const fixedLuasSquare = resultSquare.toFixed(2);
    document.getElementById("rumus-luas").innerHTML = sisiLuas + ' x ' + sisiLuas
    document.getElementById("result-luas").innerHTML = fixedLuasSquare
    output.style.display = "block";
}

function resetLuas(flag) {
    document.getElementById("output-Luas").style.display = flag === 1 ? 'block' : 'none'
    document.getElementById("sisi-Luas").value
}

function hitungKeliling () {
    var output = document.getElementById("output-keliling");
    document.getElementById("rumus-keliling").innerHTML = sisikeliling + 'x 4';
    document.getElementById("result-keliling").innerHTML = sisikeliling*4;
    output.style.display = "block"; 
}

function resetKeliling(flag) {
    document.getElementById("output-keliling").style.display = flag === 1 ? 'block' : 'none';
    document.getElementById("sisi-luas").value = '';
}
    
