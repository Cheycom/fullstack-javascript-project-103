#!/usr/bin/env node
// Esta línea indica que el archivo debe ejecutarse con Node.js

// Importamos la clase Command desde la biblioteca commander
import { Command } from 'commander';
import parse from './src/parse.js';


// Creamos una nueva instancia del programa CLI
const program = new Command();

// Configuramos la descripción y versión del programa
program
  .description('Compares two configuration files and shows a difference.') // Descripción que aparece en la ayuda
  .version('1.0.0')
  .arguments('<filepath1> <filepath2>')
  .option('-f, --format <type>', 'output format')
  .action((filepath1, filepath2)=>{
    const data1 = parse(filepath1);
    const data2 = parse(filepath2);
    console.log('Archivo 1:', data1)
    console.log('Archivo 2:', data2);
  });

// Procesamos los argumentos de la línea de comandos
program.parse(process.argv);