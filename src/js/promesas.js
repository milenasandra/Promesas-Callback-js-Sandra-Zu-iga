const heroes = {
    capi:{
        nombre: 'Capitán América',
        poder: 'Aguantar inyecciones sin morir',
    },
    iron: {
        nombre: 'Ironman',
        poder: 'Absurda cantidad de dinero',
    },
    spider: {
        nombre: 'Spider',
        poder: 'La mejor reacción alérgica a la picadura de araña'
    },
}

export const buscarHeroe = (heroeId) => {
    const heroe = heroes[heroeId]

return new Promise((resolve, reject) => {
        if (heroe) {
            resolve(heroe)
            setTimeout(() => {resolve(heroe)}, 1000)
    }else {
        throw`No existe héroe con el id ${heroeId}`
    }
 })
}

export const buscarHeroeAsincrona = async (heroeId) => {
    const heroe = heroes[heroeId]

    if(heroe){
        return heroe
    } else {
        throw`No existe un héroe con el id ${heroeId}`
    }
}

const promesaLenta = new Promise((resolve) => {
    setTimeout(() => resolve('Promesa lenta'), 2000)
})

const promesaMedia = new Promise((resolve) => {
    setTimeout(() => resolve('Promesa media'), 1500)
})

const promesaRapida = new Promise((resolve) => {
    setTimeout(() => resolve('Promesa rapida'), 1000)
})

export { promesaLenta, promesaMedia, promesaRapida }