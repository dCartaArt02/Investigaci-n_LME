function calIMC(){
var weight = document.getElementById('weight').value;
var height = document.getElementById('height').value;

if(weight !== '' && height !== ''){
    var bmi = weight / (height * height);
    var result = document.getElementById('result');
    result.innerHTML = 'Tu IMC es: '+Math.round(bmi);
    
}

if(bmi < 18.5){
    result.innerHTML += ' Peso Bajo';
}
else if(bmi < 25){
    result.innerHTML += ' Peso Normal';

}

else if(bmi < 30){
    result.innerHTML += ' Sobrepeso';

}

else{
    result.innerHTML += ' Obesidad';

}
}