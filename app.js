const argv = require('./config/yargs').argv;
const colors = require('colors/safe');

const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar');


let comando = argv._[0];

switch (comando) {
    case 'crear':
        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log(`Archivo creado:`, colors.green(archivo)))
            .catch(err => console.log(err));
        break;
    case 'listar':
        listarTabla(argv.base, argv.limite);
        break;
    default:
        console.log('comando no reconocido');
        break;
}

//let argv = process.argv;
//let argv2 = process.argv;
// let parametro = argv[2];
// let base = parametro.split('=')[1];

//console.log(argv.base);
//console.log('Limite', argv.limite);