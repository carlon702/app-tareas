const fs = require('fs');

let archivoTareas = {
    archivo: './tareas.json',
    leerArchivo: function() {
        return JSON.parse(fs.readFileSync(this.archivo, 'utf-8'));
    },
    listar: function(){
        const tareas = this.leerArchivo();
        tareas.forEach(function(tarea, index){
            console.log(index+1 + '-' + tarea.titulo)
        });
    },
    escribirJSON: function(nuevoArray) {
     let arrayString = JSON.stringify(nuevoArray);
     fs.writeFileSync('./tareas.json', arrayString);

    },
    guardarTarea: function(obj) {
        let infoTareas = this.leerArchivo();
        infoTareas.push(obj);
        return this.escribirJSON(infoTareas);
       
    },
    filtrarPorEstado: function(estado){
        let tareas = this.leerArchivo();
        return tareas.filter(tareas => tareas.estado == estado);
    }       
    }
module.exports = archivoTareas;



