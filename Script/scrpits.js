function calcularIMC(peso,altura)
{
    if(isNaN(parseFloat(peso))){alert("Peso no es número"); return NaN;}
    if(parseFloat(peso) < 2 || parseFloat(peso) > 544){alert("Peso no permitido"); return NaN;}
    if(isNaN(parseFloat(altura))){alert("Altura no es número");  return NaN;}
    if(parseFloat(altura) < 10 || parseFloat(altura) > 272){alert("Altura no permitida"); return NaN;}
    let alt = (parseInt(altura)/100);
    let resultado = (parseFloat(peso)/(alt*alt));
    return resultado; 
}
/*
function mostrarOcultarTablas(id){
    let ident = id;
    let elemento = document.getElementById(ident);
    
    if(elemento.style.display == "block"){
        elemento.style.display="none";
    }
    else{elemento.style.display="block";}
    }
    */
   
    function miTabla()
    {
        let tablaIMC = [
            {
                composicionCorporal: "Peso inferior al normal",
                indiceCorporal: "Menos de 18.5"
            },
            {
                composicionCorporal: "Normal",
                indiceCorporal: "18.5 - 24.9"
            },
            {
                composicionCorporal: "Peson superior al Normal",
                indiceCorporal: "25.0 - 29.9"
            },
            {
                composicionCorporal: "Obesidad",
                indiceCorporal: "Más que 30"
            }
        ]

        return tablaIMC;
    }

    function generarTablaHTML()
    {
        let scriptTabla ="";
        let tablaIMC = miTabla();
        
        if(!isNaN(document.getElementById("inputResultado").value))
        {
            let indice = 0;
            let imc = document.getElementById("inputResultado").value;
            
            scriptTabla = scriptTabla.concat(
                '<table class="table">',
                "<thead>",
                '<tr class=" table-primary">',
                  '<th scope="col">Composición Corporal</th>',
                  '<th scope="col">Indice de masa Corporal</th>',
                "</tr>","</tbody>"
              );
              
            if((imc <= 18.5) ){indice = 0}
            if((imc > 18.5) && (imc <=24.9) ){indice = 1}
            if((imc > 24.9) && (imc <=29.9) ){indice = 2}
            if(imc > 29.9 ){indice = 3}
            
            scriptTabla = scriptTabla.concat(
            
                '<tr class=" table-light">',
                "<td>", tablaIMC[indice].composicionCorporal, "</td>",
                "<td>", tablaIMC[indice].indiceCorporal, "</td>",
                "</tr>"
              );
            
            scriptTabla = scriptTabla.concat(
                "</tbody>",
                "</table>"
              );
              return scriptTabla;
         }
    }
    
    function actualizarTabla()
    {
        let scriptTabla = generarTablaHTML();
        
        document.getElementById("tabla").innerHTML= scriptTabla;   
    }
