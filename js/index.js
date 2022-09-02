// =============== FUNÇÃO JS PRA AUTOCOMPLETAR FORMULÁRIO HTML ===============


// ******************** FUNÇÃO JS PROTEÇÃO 50 ABC ********************

// função para mostrar o valor de corrente calculada 50 ABC
function mostrarCorrente50ABC(valor){
	var caixaValor = document.getElementById("input_corrente_calculada_50ABC");
	caixaValor.value = parseFloat((valor*1.15).toFixed(2));
    // console.log(valor);
}

// função para mostrar o valor de tempo calculada 50 ABC
function mostrarTempo50ABC(valor){
	var caixaValor = document.getElementById("input_tempo_calculado_50ABC");
	caixaValor.value = parseFloat((valor/60).toFixed(2));
    // console.log(valor);
}

// função para calcular o tempo real ([tempo final - tempo inicial] * 86400)
function mostrarTempoReal50ABC(){
	var caixaValor = document.getElementById('input_tempo_real_50ABC');
	var tempoInicial = document.getElementById('input_tempo_inicial_50ABC').value.split(':');
	var tempoFinal = document.getElementById('input_tempo_final_50ABC').value.split(':');


	var hrInicial = (tempoInicial[0]);
	var mmInicial = (tempoInicial[1]);
	var ssInicial = (tempoInicial[2].replace(',', '.'));

	var hrFinal = (tempoFinal[0]);
	var mmFinal = (tempoFinal[1]);
	var ssFinal = (tempoFinal[2].replace(',', '.'));
	
	var tempoInicial = convHoraToSegundo(hrInicial, mmInicial, ssInicial);
	var tempoFinal = convHoraToSegundo(hrFinal, mmFinal, ssFinal);

	caixaValor.value = parseFloat(tempoFinal - tempoInicial).toFixed(3);

	mostrarErro50ABC();
	
}


// função para calcular o erro entre os tempos
function mostrarErro50ABC(){
	caixaValor = document.getElementById('input_erro_50ABC');
	var tempoReal = parseFloat(document.getElementById('input_tempo_real_50ABC').value).toFixed(3);
	var tempoCalculado = parseFloat(document.getElementById('input_tempo_calculado_50ABC').value).toFixed(3);

	var erro = parseFloat((tempoReal - tempoCalculado) * 100).toFixed(2);
	caixaValor.value = (Math.abs(erro) + '%');
	// console.log(tempoReal);
	// console.log(tempoCalculado);
	// console.log(caixaValor.value)
}


// ******************** FUNÇÃO JS PROTEÇÃO 51 ABC ********************

// função para mostrar o valor de corrente calculada 51 ABC
function mostrarCorrente51ABC(valor){
	var caixaValor = document.getElementById("input_corrente_calculada_51ABC");
	caixaValor.value = parseFloat((valor*1.15).toFixed(4));
    // console.log(valor);
    return caixaValor.value;
}

// função para capturar o valor de curva da 51 ABC
function getCurva51ABC(){
	valor = document.getElementById("input_curva_51ABC").value;
	// console.log(valor);
	return valor;
}

// função para capturar o valor de tempo da 51 ABC
function getTempo51ABC(){
	valor = document.getElementById("input_time_dial_51ABC").value;
	// console.log(valor);
	return valor;
}

// função para mostrar o valor de tempo calculado do 51 ABC
function mostrarTempo51ABC(){
	valCurva = getCurva51ABC();
	valTempo = getTempo51ABC();
	valCorrenteAjuste = document.getElementById("input_corrente_ajuste_51ABC").value;
	valCorrenteCalculada = document.getElementById("input_corrente_calculada_51ABC").value;
	valCorrenteReal = document.getElementById("input_corrente_real_51ABC").value;
	caixaValor = document.getElementById("input_tempo_calculado_51ABC");

// formula pra calcular o tempo, caso não tenha valor de corrente real
// será usado valor de corrente calculado pro calculo
	switch(valCurva){
		case('1'):
		 // caso correntecalculada == "", usar corrente real
			if (valCorrenteReal != '') {	
				caixaValor.value = parseFloat(((valTempo*0.14)/(Math.pow((valCorrenteReal/valCorrenteAjuste), 0.02)-1)).toFixed(3));
			} else {
				caixaValor.value = parseFloat(((valTempo*0.14)/(Math.pow((valCorrenteCalculada/valCorrenteAjuste), 0.02)-1)).toFixed(3));
			}
			break;
		case('2'):
			if (valCorrenteReal != '') {	
				caixaValor.value = parseFloat(((valTempo*13.5)/((valCorrenteReal/valCorrenteAjuste)-1)).toFixed(3));
			} else {
				caixaValor.value = parseFloat(((valTempo*13.5)/((valCorrenteCalculada/valCorrenteAjuste)-1)).toFixed(3));
			}
			break;
		case('3'): 
			if (valCorrenteReal != '') {	
				caixaValor.value = parseFloat(((valTempo*80)/(Math.pow((valCorrenteReal/valCorrenteAjuste), 2)-1)).toFixed(3));
			} else {
				caixaValor.value = parseFloat(((valTempo*80)/(Math.pow((valCorrenteCalculada/valCorrenteAjuste), 2)-1)).toFixed(3));
			}
			break;
		case('4'):
			if (valCorrenteReal != '') {	
				caixaValor.value = parseFloat(((valTempo*120)/((valCorrenteReal/valCorrenteAjuste)-1)).toFixed(3));
			} else {
				caixaValor.value = parseFloat(((valTempo*120)/((valCorrenteCalculada/valCorrenteAjuste)-1)).toFixed(3));
			}
			break;
		case('5'):
			if (valCorrenteReal != '') {	
				caixaValor.value = parseFloat(((valTempo*0.05)/(Math.pow((valCorrenteReal/valCorrenteAjuste), 0.04)-1)).toFixed(3));
			} else {
				caixaValor.value = parseFloat(((valTempo*0.05)/(Math.pow((valCorrenteCalculada/valCorrenteAjuste), 0.04)-1)).toFixed(3));
			}
			break;
		case('6'):
		// altera a formula completamente nas curvas do tipo 'U'
			if (valCorrenteReal != '') {
				caixaValor.value = parseFloat(valTempo*(0.0226 + (0.0104 / (Math.pow((valCorrenteReal/valCorrenteAjuste), 0.02)-1))).toFixed(3));
			} else {
				caixaValor.value = parseFloat(valTempo*(0.0226 + (0.0104 / (Math.pow((valCorrenteCalculada/valCorrenteAjuste), 0.02)-1))).toFixed(3));
			}
			break;
		case('7'):
			if (valCorrenteReal != '') {
				caixaValor.value = parseFloat(valTempo*(0.18 + (5.95 / (Math.pow((valCorrenteReal/valCorrenteAjuste), 2)-1))).toFixed(3));
			} else {
				caixaValor.value = parseFloat(valTempo*(0.18 + (5.95 / (Math.pow((valCorrenteCalculada/valCorrenteAjuste), 2)-1))).toFixed(3));
			}
			break;
		case('8'):
			if (valCorrenteReal != '') {
				caixaValor.value = parseFloat(valTempo*(0.0963 + (3.88 / (Math.pow((valCorrenteReal/valCorrenteAjuste), 2)-1))).toFixed(3));
			} else {
				caixaValor.value = parseFloat(valTempo*(0.0963 + (3.88 / (Math.pow((valCorrenteCalculada/valCorrenteAjuste), 2)-1))).toFixed(3));
			}
			break;
		case('9'):
			if (valCorrenteReal != '') {
				caixaValor.value = parseFloat(valTempo*(0.0352 + (5.67 / (Math.pow((valCorrenteReal/valCorrenteAjuste), 2)-1))).toFixed(3));
			} else {
				caixaValor.value = parseFloat(valTempo*(0.0352 + (5.67 / (Math.pow((valCorrenteCalculada/valCorrenteAjuste), 2)-1))).toFixed(3));
			}
			break;
		case('10'):
			if (valCorrenteReal != '') {
				caixaValor.value = parseFloat(valTempo*(0.00262 + (0.00342 / (Math.pow((valCorrenteReal/valCorrenteAjuste), 0.02)-1))).toFixed(3));
			} else {
				caixaValor.value = parseFloat(valTempo*(0.00262 + (0.00342 / (Math.pow((valCorrenteCalculada/valCorrenteAjuste), 0.02)-1))).toFixed(3));
			}
			break;

		default:
		caixaValor.value = 0;
    	console.log('Não foi cadastrado a curva.');
	}

}


// função para calcular o tempo real ([tempo final - tempo inicial] * 86400)
function mostrarTempoReal51ABC(){
	var caixaValor = document.getElementById('input_tempo_real_51ABC');
	var tempoInicial = document.getElementById('input_tempo_inicial_51ABC').value.split(':');
	var tempoFinal = document.getElementById('input_tempo_final_51ABC').value.split(':');


	var hrInicial = (tempoInicial[0]);
	var mmInicial = (tempoInicial[1]);
	var ssInicial = (tempoInicial[2].replace(',', '.'));

	var hrFinal = (tempoFinal[0]);
	var mmFinal = (tempoFinal[1]);
	var ssFinal = (tempoFinal[2].replace(',', '.'));
	
	var tempoInicial = convHoraToSegundo(hrInicial, mmInicial, ssInicial);
	var tempoFinal = convHoraToSegundo(hrFinal, mmFinal, ssFinal);

	caixaValor.value = parseFloat(tempoFinal - tempoInicial).toFixed(3);

	mostrarErro51ABC();
	// console.log(hrInicial+'hh'+mmInicial+'mm'+ssInicial+'ss');
	// console.log(hrFinal+'hh'+mmFinal+'mm'+ssFinal+'ss');
	// console.log(tempoInicial+' tempo inicial / '+tempoFinal+' tempo final')
}


// função para calcular o erro entre os tempos
function mostrarErro51ABC(){
	caixaValor = document.getElementById('input_erro_51ABC');
	var tempoReal = parseFloat(document.getElementById('input_tempo_real_51ABC').value).toFixed(3);
	var tempoCalculado = parseFloat(document.getElementById('input_tempo_calculado_51ABC').value).toFixed(3);

	var erro = parseFloat((tempoReal - tempoCalculado) / tempoCalculado * 100).toFixed(2);
	caixaValor.value = (Math.abs(erro) + '%');
	// console.log(tempoReal);
	// console.log(tempoCalculado);
	// console.log(caixaValor.value)
}




// ******************** FUNÇÃO JS PROTEÇÃO 50 G ********************

// função para mostrar o valor de corrente calculada 50 G
function mostrarCorrente50G(valor){
	var caixaValor = document.getElementById("input_corrente_calculada_50G");
	caixaValor.value = parseFloat((valor*1.15).toFixed(2));
    // console.log(valor);
}

// função para mostrar o valor de tempo calculada 50 G
function mostrarTempo50G(valor){
	var caixaValor = document.getElementById("input_tempo_calculado_50G");
	caixaValor.value = parseFloat((valor/60).toFixed(2));
    // console.log(valor);
}

// função para calcular o tempo real ([tempo final - tempo inicial] * 86400)
function mostrarTempoReal50G(){
	var caixaValor = document.getElementById('input_tempo_real_50G');
	var tempoInicial = document.getElementById('input_tempo_inicial_50G').value.split(':');
	var tempoFinal = document.getElementById('input_tempo_final_50G').value.split(':');


	var hrInicial = (tempoInicial[0]);
	var mmInicial = (tempoInicial[1]);
	var ssInicial = (tempoInicial[2].replace(',', '.'));

	var hrFinal = (tempoFinal[0]);
	var mmFinal = (tempoFinal[1]);
	var ssFinal = (tempoFinal[2].replace(',', '.'));
	
	var tempoInicial = convHoraToSegundo(hrInicial, mmInicial, ssInicial);
	var tempoFinal = convHoraToSegundo(hrFinal, mmFinal, ssFinal);

	caixaValor.value = parseFloat(tempoFinal - tempoInicial).toFixed(3);

	mostrarErro50G();
	
}


// função para calcular o erro entre os tempos
function mostrarErro50G(){
	caixaValor = document.getElementById('input_erro_50G');
	var tempoReal = parseFloat(document.getElementById('input_tempo_real_50G').value).toFixed(3);
	var tempoCalculado = parseFloat(document.getElementById('input_tempo_calculado_50G').value).toFixed(3);

	var erro = parseFloat((tempoReal - tempoCalculado) * 100).toFixed(2);
	caixaValor.value = (Math.abs(erro) + '%');
	// console.log(tempoReal);
	// console.log(tempoCalculado);
	// console.log(caixaValor.value);
}



// ******************** FUNÇÃO JS PROTEÇÃO 51 G ********************

// função para mostrar o valor de corrente calculada 51 G
function mostrarCorrente51G(valor){
	var caixaValor = document.getElementById("input_corrente_calculada_51G");
	caixaValor.value = parseFloat((valor*1.15).toFixed(2));
    // console.log(valor);
    return caixaValor.value;
}

// função para capturar o valor de curva da 51 G
function getCurva51G(){
	valor = document.getElementById("input_curva_51G").value;
	// console.log(valor);
	return valor;
}

// função para capturar o valor de tempo da 51 G
function getTempo51G(){
	valor = document.getElementById("input_time_dial_51G").value;
	// console.log(valor);
	return valor;
}

// função para mostrar o valor de tempo calculado do 51 G
function mostrarTempo51G() {
	valCurva = getCurva51G();
	valTempo = getTempo51G();
	valCorrenteAjuste = document.getElementById("input_corrente_ajuste_51G").value;
	valCorrenteCalculada = document.getElementById("input_corrente_calculada_51G").value;
	valCorrenteReal = document.getElementById("input_corrente_real_51G").value;
	caixaValor = document.getElementById("input_tempo_calculado_51G");

// formula pra calcular o tempo, caso não tenha valor de corrente real
// será usado valor de corrente calculado pro calculo
	switch(valCurva){
		case('1'):
		 // caso correntecalculada == "", usar corrente real
			if (valCorrenteReal != '') {	
				caixaValor.value = parseFloat(((valTempo*0.14)/(Math.pow((valCorrenteReal/valCorrenteAjuste), 0.02)-1)).toFixed(3));
			} else {
				caixaValor.value = parseFloat(((valTempo*0.14)/(Math.pow((valCorrenteCalculada/valCorrenteAjuste), 0.02)-1)).toFixed(3));
			}
			break;
		case('2'):
			if (valCorrenteReal != '') {	
				caixaValor.value = parseFloat(((valTempo*13.5)/((valCorrenteReal/valCorrenteAjuste)-1)).toFixed(3));
			} else {
				caixaValor.value = parseFloat(((valTempo*13.5)/((valCorrenteCalculada/valCorrenteAjuste)-1)).toFixed(3));
			}
			break;
		case('3'): 
			if (valCorrenteReal != '') {	
				caixaValor.value = parseFloat(((valTempo*80)/(Math.pow((valCorrenteReal/valCorrenteAjuste), 2)-1)).toFixed(3));
			} else {
				caixaValor.value = parseFloat(((valTempo*80)/(Math.pow((valCorrenteCalculada/valCorrenteAjuste), 2)-1)).toFixed(3));
			}
			break;
		case('4'):
			if (valCorrenteReal != '') {	
				caixaValor.value = parseFloat(((valTempo*120)/((valCorrenteReal/valCorrenteAjuste)-1)).toFixed(3));
			} else {
				caixaValor.value = parseFloat(((valTempo*120)/((valCorrenteCalculada/valCorrenteAjuste)-1)).toFixed(3));
			}
			break;
		case('5'):
			if (valCorrenteReal != '') {	
				caixaValor.value = parseFloat(((valTempo*0.05)/(Math.pow((valCorrenteReal/valCorrenteAjuste), 0.04)-1)).toFixed(3));
			} else {
				caixaValor.value = parseFloat(((valTempo*0.05)/(Math.pow((valCorrenteCalculada/valCorrenteAjuste), 0.04)-1)).toFixed(3));
			}
			break;
		case('6'):
		// altera a formula completamente nas curvas do tipo 'U'
			if (valCorrenteReal != '') {
				caixaValor.value = parseFloat(valTempo*(0.0226 + (0.0104 / (Math.pow((valCorrenteReal/valCorrenteAjuste), 0.02)-1))).toFixed(3));
			} else {
				caixaValor.value = parseFloat(valTempo*(0.0226 + (0.0104 / (Math.pow((valCorrenteCalculada/valCorrenteAjuste), 0.02)-1))).toFixed(3));
			}
			break;
		case('7'):
			if (valCorrenteReal != '') {
				caixaValor.value = parseFloat(valTempo*(0.18 + (5.95 / (Math.pow((valCorrenteReal/valCorrenteAjuste), 2)-1))).toFixed(3));
			} else {
				caixaValor.value = parseFloat(valTempo*(0.18 + (5.95 / (Math.pow((valCorrenteCalculada/valCorrenteAjuste), 2)-1))).toFixed(3));
			}
			break;
		case('8'):
			if (valCorrenteReal != '') {
				caixaValor.value = parseFloat(valTempo*(0.0963 + (3.88 / (Math.pow((valCorrenteReal/valCorrenteAjuste), 2)-1))).toFixed(3));
			} else {
				caixaValor.value = parseFloat(valTempo*(0.0963 + (3.88 / (Math.pow((valCorrenteCalculada/valCorrenteAjuste), 2)-1))).toFixed(3));
			}
			break;
		case('9'):
			if (valCorrenteReal != '') {
				caixaValor.value = parseFloat(valTempo*(0.0352 + (5.67 / (Math.pow((valCorrenteReal/valCorrenteAjuste), 2)-1))).toFixed(3));
			} else {
				caixaValor.value = parseFloat(valTempo*(0.0352 + (5.67 / (Math.pow((valCorrenteCalculada/valCorrenteAjuste), 2)-1))).toFixed(3));
			}
			break;
		case('10'):
			if (valCorrenteReal != '') {
				caixaValor.value = parseFloat(valTempo*(0.00262 + (0.00342 / (Math.pow((valCorrenteReal/valCorrenteAjuste), 0.02)-1))).toFixed(3));
			} else {
				caixaValor.value = parseFloat(valTempo*(0.00262 + (0.00342 / (Math.pow((valCorrenteCalculada/valCorrenteAjuste), 0.02)-1))).toFixed(3));
			}
			break;

		default:
		caixaValor.value = 0;
    	console.log(`Não foi cadastrado a curva.`);
	}

}



// função para calcular o tempo real ([tempo final - tempo inicial] * 86400)
function mostrarTempoReal51G(){
	var caixaValor = document.getElementById('input_tempo_real_51G');
	var tempoInicial = document.getElementById('input_tempo_inicial_51G').value.split(':');
	var tempoFinal = document.getElementById('input_tempo_final_51G').value.split(':');


	var hrInicial = (tempoInicial[0]);
	var mmInicial = (tempoInicial[1]);
	var ssInicial = (tempoInicial[2].replace(',', '.'));

	var hrFinal = (tempoFinal[0]);
	var mmFinal = (tempoFinal[1]);
	var ssFinal = (tempoFinal[2].replace(',', '.'));
	
	var tempoInicial = convHoraToSegundo(hrInicial, mmInicial, ssInicial);
	var tempoFinal = convHoraToSegundo(hrFinal, mmFinal, ssFinal);

	caixaValor.value = parseFloat(tempoFinal - tempoInicial).toFixed(3);

	mostrarErro51G();
	// console.log(hrInicial+'hh'+mmInicial+'mm'+ssInicial+'ss');
	// console.log(hrFinal+'hh'+mmFinal+'mm'+ssFinal+'ss');
	// console.log(tempoInicial+' tempo inicial / '+tempoFinal+' tempo final')
}


// função para calcular o erro entre os tempos
function mostrarErro51G(){
	caixaValor = document.getElementById('input_erro_51G');
	var tempoReal = parseFloat(document.getElementById('input_tempo_real_51G').value).toFixed(3);
	var tempoCalculado = parseFloat(document.getElementById('input_tempo_calculado_51G').value).toFixed(3);

	var erro = parseFloat((tempoReal - tempoCalculado) / tempoCalculado * 100).toFixed(2);
	caixaValor.value = (Math.abs(erro) + '%');
	// console.log(tempoReal);
	// console.log(tempoCalculado);
	// console.log(caixaValor.value)
}

































// ******************** FUNÇÃO PARA CONVERTER O TEMPO PRA SEGUNDOS ********************

function convHoraToSegundo(hh, mm, ss){
	var hora = hh;
	var minuto = mm;
	var segundo = ss;

	var totalSegundos = (hora * 3600) + (minuto * 60) + (segundo * 1);
	return totalSegundos;
}

function convSegundoToHora(){

}