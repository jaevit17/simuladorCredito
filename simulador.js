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
    
}