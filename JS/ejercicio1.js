
alert('En un almacén  se están ofreciendo las siguientes ofertas  de descuento en compras  ver tabla Calcular el valor de descuento y valor a pagar por la compra de cierta cantidad de un articulo ,\n si se conoce el precio unitario;\n \n  TABLA DE DESCUENT0   \n \nUNIDADES - DESCUENTO\n0 - 100             2%,\n100.01 - 250     5%,\n250.01-800       8%,\n8001.01-inf       12%');
document.getElementById('tabla').innerHTML = 'En un almacén  se están ofreciendo las siguientes ofertas  de descuento en compras  ver tabla Calcular el valor de descuento y valor a pagar por la compra de cierta cantidad de un articulo ,<br> si se conoce el precio unitario;<br><br>  TABLA DE DESCUENT0   <br><br>UNIDADES - DESCUENTO<br>0 - 100__________2%,<br>100.01 - 250_____5%,<br>250.01-800______8%,<br>8001.01-inf______12%';
let nombre = prompt('ingrese nombre del producto');
let unidades = Number(prompt('ingrese las unidades del producto: ' + nombre));
let precio = Number(prompt('ingrese precio unitario del producto: ' + nombre));
let subTotal = unidades*precio;
let descuento;

if (unidades<101) {
    descuento = subTotal*0.02;
}

if (unidades>100&&unidades<251) {
    descuento = subTotal*0.05;
}
if (unidades>250&&unidades<801) {
    descuento = subTotal*0.08;
}

if (unidades>800) {
    descuento = subTotal*0.12;
}


let total = subTotal-descuento;
alert('Producto: ' + nombre + '\nCantidad: ' + unidades + '\nPrecio por unidad: ' + precio + '\nSubtotal: ' + subTotal + '\nDescuento' + descuento + '\nTOTAL con descuento: '+ total);

document.getElementById('titulo').innerHTML = 'TABLA DE DESCUENT0';
document.getElementById('parrafo').innerHTML = 'Producto:_______ ' + nombre + '<br>Cantidad:_______ ' + unidades + '<br>Precio por unidad: $ ' + precio + '<br>Subtotal:_______ $ ' + subTotal + '<br>Descuento;_____ $ ' + descuento + '<br>TOTAL con descuento: $ '+ total;
