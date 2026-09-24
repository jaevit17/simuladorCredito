//AQUI EL JAVASCRIPT PARA MANIPULAR EL HTML
function calcular(){
    //Recupera Ingresos y muestra en Float
    let cmpIngresos=document.getElementById("txtIngresos");
    let ingresosText=cmpIngresos.value;
    let ingresos=parseFloat(ingresosText);
    //Recupera Egresos y muestra en Float
    let cmpEgresos=document.getElementById("txtEgresos");
    let egresosText=cmpEgresos.value;
    let egresos=parseFloat(egresosText);


    //LLamar a calcularDisponible
    let resultDisponible=calcularDisponible(ingresos,egresos);
    /*Mostrar en pantalla valor Disponible
      Redondeo a 2 decimales cumpliendo el Caso de Prueba 3 */
    let cmpDisponible=document.getElementById("spnDisponible");
    cmpDisponible.textContent=resultDisponible.toFixed(2);


    //Lamar a calcularCapacidadPago
    let resultCapacidPago=calcularCapacidadPago(resultDisponible);
    /*Mostrar en pantalla valor Capacidad de pago 
      Redondeo a 2 decimales cumpliendo el Caso de Prueba 3 */
    let cmpCapacidadPago=document.getElementById("spnCapacidadPago");
    cmpCapacidadPago.textContent=resultCapacidPago.toFixed(2);

    
    //Recupera Monto y muestra en Entero
    let cmpMonto=document.getElementById("txtMonto");
    let montoText=cmpMonto.value;
    let monto=parseInt(montoText);
    //Recupera Plazo en años y muestra en Entero
    let cmpPlazo=document.getElementById("txtPlazo");
    let plazoText=cmpPlazo.value;
    let plazo=parseInt(plazoText);
    //Recupera Tasa de Interes anual y muestra en Entero
    let cmpTasa=document.getElementById("txtTasaInteres");
    let tasaText=cmpTasa.value;
    let tasa=parseInt(tasaText);


    //Llamar a calcularInteresSimple
    let resultInteres=calcularInteresSimple(monto,tasa,plazo);
    //Mostrar en pantalla valor Interes a pagar
    let cmpInteresAPagar=document.getElementById("spnInteresPagar");
    cmpInteresAPagar.textContent=resultInteres;


    //Llamar a calcularTotalPagar
    let resultTotalAPagar=calcularTotalPagar(monto,resultInteres);
    //Mostrar en pantalla valor Total prestamo
    let cmpTotalPrestamo=document.getElementById("spnTotalPrestamo");
    cmpTotalPrestamo.textContent=resultTotalAPagar;


    //Llamar a calcularCuotaMensual
    let resultCuotaMensual=calcularCuotaMensual(resultTotalAPagar,plazo);
    /*Mostrar en pantalla valor Cuota mensual
      Redondeo a 2 decimales cumpliendo el Caso de Prueba 1,2 */
    let cmpCuotaMensual=document.getElementById("spnCuotaMensual");
    cmpCuotaMensual.textContent=resultCuotaMensual.toFixed(2);
    
}