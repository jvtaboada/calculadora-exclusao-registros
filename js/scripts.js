let agora = moment();

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

let inicio; 
let final;
let ms;
let d;

//registros: valor, inicio e fim
let regFinal = document.getElementById("regFinal");
let regInicio = document.getElementById("regInicio");

//declarando variaveis para o cálculo
let tempoIntervalo; //em minuto
let regIntervalo;

button.addEventListener("click", function func_calcVelocidade(){
    console.log("teste do botao 1");
    func_tempoIntervalo();
    func_regIntervalo();

    result.value = (regIntervalo / tempoIntervalo) / 60;
});

function func_tempoIntervalo (){
    console.log("teste do botao 2");
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
    console.log("teste da func dif horas");

    inicio = horaInicio.value + ':' + minInicio.value;
    final = horaFinal.value + ':' + minFinal.value;

    ms = moment(final,"HH:mm").diff(moment(inicio,"HH:mm"));
    d = moment.duration(ms);
    tempoIntervalo = d.asMinutes();
}