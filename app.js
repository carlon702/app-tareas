let archivoTareas = require('./funcionesDeTareas');

//Si desea investigar un poco más sobre este módulo nativo de NodeJs
//https://nodejs-es.github.io/api/process.html#process_es_process 
let accion = process.argv[2];

switch(accion) {
    case 'listar':{
        archivoTareas.listar()
        break;}

    case undefined:{
        console.log();    
        console.log('Atención - Tienes que pasarme una acción');
        console.log('Las acciones disponibles son: listar');
        console.log('----------------------------------------');
        break;}

    case 'crear':{
        let nuevaTarea = {  
            titulo : process.argv[3],
            estado : 'pendiente' }
        
        archivoTareas.guardarTarea(nuevaTarea);
        console.log('Nueva tarea -' + process.argv[3] + '- creada')
        break;}

    case 'filtrar':{
        let clave = process.argv[3]
        let filtro = archivoTareas.filtrarPorEstado(clave);
        console.log('Las actividades ' + process.argv[3] + ' son:')
        filtro.forEach(function(tarea, index){
            console.log(index+1 + ' - ' + tarea.titulo)
        });
        break;} 
       

    default:{
        console.log('------------------------------------');
        console.log('No entiendo qué quieres hacer');
        console.log('Las acciones disponibles son: listar');
        console.log('------------------------------------');
        break;}
}
