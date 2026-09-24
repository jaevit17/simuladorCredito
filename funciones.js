//AQUI TODA LA LOGICA DE LAS FUNCIONES DEL NEGOCIO

/*Calculo del sobrante disponible despues 
  de restar Egresos de los Ingresos*/
function calcularDisponible(ingresos,egresos){
    let disponible=ingresos-egresos;
    if(disponible<0){
        return 0;
    }
    return disponible;
}


//Calculo capacidad de pago: 50% del disponible
function calcularCapacidadPago(montoDisponible){
let capacidPago=montoDisponible/2;
return capacidPago;
}


//Calculo interes simple de acuerdo al: monto-tasa-plazos
function calcularInteresSimple(monto,tasa,plazoAnios){
    let interes=plazoAnios*monto*(tasa/100);
    return interes;
} 


//Calculo valor total a pagar: monto solicitado + interes
function calcularTotalPagar(monto,interes){
    const IMPUESTOS_SOLCA=100;
    let valorTotal=monto+interes+IMPUESTOS_SOLCA;
    return valorTotal;
}