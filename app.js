const argv = require('./config/yargs').argv;
const porHacer = require('./por-hacer/por-hacer');
const colors = require('colors');

console.log(argv);

let comando = argv._[0];

switch (comando) {

    case 'crear':
        let tarea = porHacer.crear(argv.descripcion);
        console.log(tarea);
        break;

    case 'listar':

        const listado = porHacer.getListado();


        for (let tarea of listado) {
            console.log('============= POR HACER ============'.green);

            console.log(`Tarea: ${tarea.descripcion}`);
            console.log(`Completado: ${tarea.completado}`);

            console.log('====================================\n'.green);
        }


        break;

    case 'actualizar':
        porHacer.actualizar(argv.descripcion, argv.completado);
        break;

    case 'borrar':
        porHacer.borrar(argv.descripcion);
        break;

    default:
        console.log('Comando no reconocido');
}