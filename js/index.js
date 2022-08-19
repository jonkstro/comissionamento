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


	var hrInicial = parseInt(tempoInicial[0]);
	var mmInicial = parseInt(tempoInicial[1]);
	var ssInicial = parseFloat(tempoInicial[2].replace(',', '.')).toFixed(3);

	var hrFinal = parseInt(tempoFinal[0]);
	var mmFinal = parseInt(tempoFinal[1]);
	var ssFinal = parseFloat(tempoFinal[2].replace(',', '.')).toFixed(3);
	
	var hrReal = (hrFinal - hrInicial);
	var mmReal = (mmFinal  - mmInicial);
	var ssReal = parseFloat(ssFinal - ssInicial).toFixed(3);

	// if (hrReal < 10) {
	// 	hrCaixa = '0'+hrReal;
	// } else {
	// 	hrCaixa = hrReal;
	// }

	// if (mmReal < 10) {
	// 	mmCaixa = '0'+mmReal;
	// } else {
	// 	mmCaixa = mmReal;
	// }

	// if (ssReal < 10){
	// 	ssCaixa = '0'+ssReal;
	// } else {
	// 	ssCaixa = ssReal;
	// }

	caixaValor.value = ((hrReal * 3600) + (mmReal * 60) + ssReal.replace('.', ','));



	// var diferenca = tempoFinal - tempoInicial;
	// console.log(diferenca);
}


// função para calcular o erro entre os tempos
function mostrarErro50ABC(){
	caixaValor = document.getElementById('input_erro_50ABC');
	var tempoReal = parseFloat(document.getElementById('input_tempo_real_50ABC').value).toFixed(3);
	var tempoCalculado = parseFloat(document.getElementById('input_tempo_calculado_50ABC').value).toFixed(3);

	var erro = parseFloat(tempoReal - tempoCalculado).toFixed(3);
	caixaValor.value = (erro);
}


// ******************** FUNÇÃO JS PROTEÇÃO 51 ABC ********************

// função para mostrar o valor de corrente calculada 51 ABC
function mostrarCorrente51ABC(valor){
	var caixaValor = document.getElementById("input_corrente_calculada_51ABC");
	caixaValor.value = parseFloat((valor*1.15).toFixed(4));
    console.log(valor);
    return caixaValor.value;
}

// função para capturar o valor de curva da 51 ABC
function getCurva51ABC(){
	valor = document.getElementById("input_curva_51ABC").value;
	console.log(valor);
	return valor;
}

// função para capturar o valor de tempo da 51 ABC
function getTempo51ABC(){
	valor = document.getElementById("input_time_dial_51ABC").value;
	console.log(valor);
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
    	console.log(`Não foi cadastrado a curva.`);
	}

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


// ******************** FUNÇÃO JS PROTEÇÃO 51 G ********************

// função para mostrar o valor de corrente calculada 51 G
function mostrarCorrente51G(valor){
	var caixaValor = document.getElementById("input_corrente_calculada_51G");
	caixaValor.value = parseFloat((valor*1.15).toFixed(4));
    console.log(valor);
    return caixaValor.value;
}

// função para capturar o valor de curva da 51 G
function getCurva51G(){
	valor = document.getElementById("input_curva_51G").value;
	console.log(valor);
	return valor;
}

// função para capturar o valor de tempo da 51 G
function getTempo51G(){
	valor = document.getElementById("input_time_dial_51G").value;
	console.log(valor);
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



