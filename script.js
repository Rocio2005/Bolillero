function ingresarTemas (num) {
    var lis=[];
    var tema;
    for(i=0;i<num;i++) {
        tema=prompt("Ingrese tema");
        lis.push(tema);
    }
    return lis;

}


function alAzar(lista){
    var n=Math.floor(Math.random()*lista.length);
    document.write("Tema Sorteado: ")
    document.write("*"+lista[n]+"*");
}

var canTemas=prompt("Ingrese la cantidad de temas del programa académico");
lista=ingresarTemas(canTemas);
alAzar(lista);


/*function mostrarMensaje(evento){
    evento.preventDefault();
    var nombre=document.getElementById("nombre").value;//tomo el nombre de la persona que quiere contactarme
    var mensaje="Gracias "+nombre+" por contactarme, muy pronto te responderé, para continuar haz click en el botón HOME ";
    document.querySelector("h4").textContent=mensaje;//tomo la etiqueta h4, y la relleno con el input que recibo

    
}
function ejecutar(){
    var formulario = document.querySelector("#contactoForm")
    formulario.addEventListener("submit",mostrarMensaje)
}

ejecutar()*/