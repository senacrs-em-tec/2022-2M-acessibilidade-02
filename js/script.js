//função para aumentar o texto
function funcao(){
   var x = document.getElementsByClassName("n1"); //pega os elementos de classe n1
   for (var i = 0; i < x.length; i++) { //loop
      x[i].style.fontSize="1.5rem"; //aumenta a fonte em 1.5rem
   } //fim do loop
}; //fim da função

//função para diminuir o texto
function funcao2(){ //função
   var x = document.getElementsByClassName("n1"); //pega os elementos de classe n1
   for (var i = 0; i < x.length; i++) { //loop
      x[i].style.fontSize=""; //diminui a fonte, no caso vazio, diminuindo
   } //fim do loop
}; //fim da função