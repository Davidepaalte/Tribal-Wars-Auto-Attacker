var data_de_hoje = new Date();
data_de_hoje.setHours(0,0,0,0);
var dd = data_de_hoje.getDate();
var mm = data_de_hoje.getMonth()+1;
var yyyy = data_de_hoje.getFullYear();

var chegada_handle = $('.vis').find('td:contains("Chegada")').next().text().split("\n");
var chegada_ultimate_handle = chegada_handle[chegada_handle.length -2].split(" ");

var chegada = "00:00:00";

$(chegada_ultimate_handle).each(function( index ) {
  if( chegada_ultimate_handle[index].match(/\d?\d:\d?\d:\d?\d/)){
	chegada = chegada_ultimate_handle[index];
	console.log(chegada);
  }
});

// pergunta e tal
var data_do_ataque = prompt("Dia do Ataque", yyyy + "-" + mm + "-" + dd);
var hora_definida_do_ataque = prompt("Hora do Ataque", chegada);





var tempo_das_tropas = $('.vis').find('td:contains("Duração")').next().text();
var wanted_time = new Date(data_do_ataque + " " + hora_definida_do_ataque).getTime();
var duration = new Date("Jan 1 1970 " + tempo_das_tropas).getTime();
var tempo_do_servidor = new Date("Jan 1 1970 " + $('#serverTime').text()).getTime();

var time = data_de_hoje.getTime() + tempo_do_servidor;

var handle = setInterval(function(){
	tempo_do_servidor = new Date("Jan 1 1970 " + $('#serverTime').text()).getTime();
	time = data_de_hoje.getTime() + tempo_do_servidor;
  
	if(time >= parseInt(wanted_time) - parseInt(duration)){
		$('#troop_confirm_go').click();
		clearInterval(handle);
		handle = 0;
	}
}, 200);


var checkTime = function(){
	alert("Faltam: " + ((parseInt(wanted_time) - parseInt(duration) - time) / 1000) + " Segundos");
};




var clearAttack = function(){
	clearInterval(handle); handle = 0;
};


