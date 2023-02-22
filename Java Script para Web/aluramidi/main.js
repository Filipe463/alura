function tocaSom(seletorAudio){
	const elemento = document.querySelector(seletorAudio);


	if(elemento != null && elemento.localName === 'audio'){
	
			elemento.play();
		}
	else{
		alert('Elemento não encotrado ou seletor não encotrado');
	}
	
}

const listaDeTeclas = document.querySelectorAll('.tecla');


/* Alura mid feito While
let contador =  0;

while(contador < listaDeTeclas.length){

	const tecla = listaDeTeclas[contador];
	const instrumento = tecla.classList[1];
	const  idAudio = `#som_${instrumento}`;

	tecla.onclick = function(){
		tocaSom(idAudio);
	}
	contador = contador + 1;
	
}

*/
//Alura Midi feito com FOR


for(let contador = 0; contador < listaDeTeclas.length; contador++){

	const tecla = listaDeTeclas[contador];
	const instrumento = tecla.classList[1];
	const  idAudio = `#som_${instrumento}`;

	tecla.onclick = function(){
		tocaSom(idAudio);
	}
 
 
	tecla.onkeydown = function(evento){
		
		if (evento.code === 'Space' || evento.code === 'Enter' || evento.code === "NumpadEnter")
			{tecla.classList.add('ativa')
			};
		}
	

	tecla.onkeyup = function (){
		tecla.classList.remove('ativa');
	}
	}

		



