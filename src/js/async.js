import './styles.css'
import {promesaLenta, promesaMedia, promesaRapida, buscarHeroe, buscarHeroeAsincrona } from './js/promesas'


Promise.race([promesaLenta, promesaMedia, promesaRapida]).then(console.log)

buscarHeroe('capi')
.then(console.log)
.catch(console.warn)


console.log('Fin del programa')
