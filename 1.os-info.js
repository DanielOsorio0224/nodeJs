const os = require('node:os')

console.log('Informacion del sistema operatiovo: ')
console.log('Nombre del sistema operativo: ', os.platform())
console.log('Version delsistema operstivo: ', os.release())
console.log('Arquitectura: ', os.arch())
console.log('CPUS', os.cpus())
console.log('uptime: ', os.uptime() /60 /60) 