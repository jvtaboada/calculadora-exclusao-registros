//trazendo o botão para utilizar o event listener no click
let button = document.getElementById("btn");

//res é o que vai alterar o input de resultado no doc HTML
let result = document.getElementById("res");

//Trazendo pro doc JS os valores recebidos no doc HTML
//horario: HORA e MIN, inicio e fim
let horaFinal = document.getElementById("horaFinal");
let horaInicio = document.getElementById("horaInicio");

let minFinal = document.getElementById("minFinal");
let minInicio = document.getElementById("minInicio");

//registros: QTD REGISTROS, inicio e fim
let regFinal = document.getElementById("regFinal");
let regInicio = document.getElementById("regInicio");


//declarando variaveis que serão usadas em diversas funções
let tempoIntervalo; //em minuto
let regIntervalo;

button.addEventListener("click", function func_confereInput(){
    if( (horaFinal.value === "") || (minFinal.value === "") || (horaInicio.value === "") || (minInicio.value === "") || (regInicio.value === "") || (regFinal.value === "")  ){
        alert('Atenção! Algum campo não foi preenchido!');
    }
    else{
        func_calcVelocidade();
    }
});

function func_calcVelocidade(){
    func_tempoIntervalo();
    func_regIntervalo();

    let aux =  (regIntervalo / tempoIntervalo) / 60;

    result.value = aux.toFixed(2);
}

function func_tempoIntervalo (){
    if(horaFinal.value === horaInicio.value){
        tempoIntervalo = minFinal.value - minInicio.value;
    }
    else{
        func_difHoras();
    }
}

function func_regIntervalo (){
    regIntervalo = regInicio.value - regFinal.value;
}

function func_difHoras(){
    let inicio = horaInicio.value + ':' + minInicio.value;
    let final = horaFinal.value + ':' + minFinal.value;

    let ms = moment(final,"HH:mm").diff(moment(inicio,"HH:mm"));
    let d = moment.duration(ms);

    tempoIntervalo = d.asMinutes();
}