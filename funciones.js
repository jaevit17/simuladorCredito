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
