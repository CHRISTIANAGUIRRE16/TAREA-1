alert('2. Crear un programa que permita ingresar números enteros del 1 al 10, y muestre su equivalente en números romanos');
let numero = Number(prompt('ingrese numero para convertir  a numero romano'));
switch (numero) {
    case 1:
        alert('El numero '+numero+' en romano es; I');
        document.getElementById('resultado').innerHTML = 'El numero '+numero+' en romano es; I';
        break;
    case 2:
        alert('El numero '+numero+' en romano es; II');
        document.getElementById('resultado').innerHTML = 'El numero '+numero+' en romano es; II';
        break;
    case 3:
        alert('El numero '+numero+' en romano es; III');
        document.getElementById('resultado').innerHTML = 'El numero '+numero+' en romano es; III';
        break;
    case 4:
        alert('El numero '+numero+' en romano es; IV');
        document.getElementById('resultado').innerHTML = 'El numero '+numero+' en romano es; IV';
        break;
    case 5:
        alert('El numero '+numero+' en romano es; V');
        document.getElementById('resultado').innerHTML = 'El numero '+numero+' en romano es; V';
        break;
    case 6:
        alert('El numero '+numero+' en romano es; VI');
        document.getElementById('resultado').innerHTML = 'El numero '+numero+' en romano es; VI';
        break;
    case 6:
        alert('El numero '+numero+' en romano es; VII');
        document.getElementById('resultado').innerHTML = 'El numero '+numero+' en romano es; VII';
        break;
    case 8:
        alert('El numero '+numero+' en romano es; VIII');
        document.getElementById('resultado').innerHTML = 'El numero '+numero+' en romano es; VIII';
        break;
    case 9:
        alert('El numero '+numero+' en romano es; IX');
        document.getElementById('resultado').innerHTML = 'El numero '+numero+' en romano es; IX';
        break;
    case 10:
        alert('El numero '+numero+' en romano es; X');
        document.getElementById('resultado').innerHTML = 'El numero '+numero+' en romano es; X';
        break;

    default:
        document.getElementById('resultado').innerHTML = 'Numero fuera de rango 10';
        break;
}

