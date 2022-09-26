let diaSemana = prompt("¿Que día es hoy?");

switch(diaSemana){
    case ('lunes'):
    case ('Lunes'):
    case ('LUNES'):
        alert("Hoy es lunes.");
        alert("Hoy corresponden abdominales.");
        break;

    case ('martes'):
    case ('Martes'):
    case ('MARTES'):
        alert("Hoy es martes.");
        alert("Hoy corresponde espinales.");
        break;

    case ('miercoles'):
    case ('Miercoles'):
    case ('MIERCOLES'):
        alert("Hoy es miercoles.");
        alert("Hoy corresponde flexiones.");
        break;

    case ('jueves'):
    case ('Jueves'):
    case ('JUEVES'):
        alert("Hoy es jueves.");
        alert("Hoy corresponde sentadillas.");
        break;
        
    case ('viernes'):
    case ('Viernes'):
    case ('VIERNES'):
        alert("Hoy es viernes.");
        alert("Hoy corresponde barra.");
        break;

    case ('sabado'):
    case ('Sabado'):
    case ('SABADO'):
        alert("Hoy es sabado.");
        alert("Hoy corresponde trotar.");
        break;

    case ('domingo'):
    case ('Domingo'):
    case ('DOMINGO'):
        alert("Hoy es domingo.");
        alert("Hoy corresponde descansar.");
        break;

    default:
        alert("Escribe un dia de la semana");
}