import {buscarHeroe, buscarHeroeAsincrona} from './promesas'

const heroresIds = ['capi', 'iron', 'spider']
const heroesPromesas = heroresIds.map(buscarHeroe)

export const obtenerheroesArr = async () =>
  Promise.all(heroresIds.map((id) => buscarHeroe(id)))

export const obtenerheroesAwait = async (id = 'capi') => {
  try {
    return await buscarHeroeAsincrona(id)
  } catch (error) {
    console.error('CATCH!!')
    return {
      nombre: 'Sin nombre',
      poder: 'Sin poder',
    }
  }
}

export const heroesCiclo = async () => {
  console.time('HeroesCiclo')
//   const heroes = await Promise.all(heroesPromesas)
// heroes.forEach(console.log)

for await (const heroe of heroesPromesas) {
    console.log(heroe)
}
console.timeEnd('HeroesCiclo')
}

export const heroeIfAwait = async(id)=>{
    if((await buscarHeroeAsincrona(id)).nombre === 'Ironman'){
        console.log('Es el mejor de todos')
    } else {
        console.log('Nhaa')
    }
}
