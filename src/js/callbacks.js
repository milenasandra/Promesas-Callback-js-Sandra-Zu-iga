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

// Callback retorna un héroe
 export const buscarHeroe = (heroeId, Callback) => {
    const heroe = heroes[heroeId]
    if(heroe) {
        Callback(null, heroe)
    }else {
        Callback(`No existe el héroe con el id ${heroeId}`)
    }
}