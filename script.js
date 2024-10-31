function MostrarELemento(value){
    document.getElementById('display').value += value;
}

function borrarPantalla(){
    document.getElementById('display').value = "";
}

function calcular(){
    const display = document.getElementById('display');
    try{
        display.value = eval(display.value);
    } catch{
        display.value = "Error";
    }
}

function vacio(){
    Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Debes colocar un número!",
        footer: '<a href="#">Why do I have this issue?</a>'
    });
}