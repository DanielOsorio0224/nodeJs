// argumentos de entrada
console.log(process.argv)

// controlar el proceso y su salida
process.exit(1)

// prodemos controlar eventos del proceso
process.on('exit', () =>{
    // limpiar los recursos
})

// current working directory
console.log(process.cwd())

// platform variables de entorno
console.log(process.env.Peito)