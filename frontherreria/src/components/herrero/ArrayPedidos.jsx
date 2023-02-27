
const ListaPedidos = [
    {
        idTarea: '1',
        objeto: 'Cota de mallas de Gundaremo',
        especialidad: 'Armaduras',
        tipo_artefacto: 'Cota de mallas',
        categoriaObjeto: 'm',
        realizar: [
            { trabajo: 'Reposicion de anillas', estado: 'Finalizado' },
            { trabajo: 'Agregado de placas', estado: 'En proceso' },
            { trabajo: 'Pulido', estado: 'En espera' }],
        herrero: 'Relian',
        tiempoEstimado: '48',
        estado: 'pendiente',
        observaciones: 'Hola que tal, estoy probando el text area y su default'

    },
    {
        idTarea: '2',
        objeto: 'Espada larga de Gundaremo',
        especialidad: 'Armas',
        tipo_artefacto: 'Espada larga',
        categoriaObjeto: 'f',
        realizar: [{ trabajo: 'Cambio de empuñadura', estado: 'Finalizado' },
        { trabajo: 'Tallado de hoja', estado: 'Finalizado' },
        { trabajo: 'Limpieza general', estado: 'En espera' }],
        herrero: 'Relian',
        tiempoEstimado: '72',
        estado: 'pendiente',
        observaciones: 'Hola que tal, estoy probando el text area del numero 2 y su default'
    },
    {
        idTarea: '3',
        objeto: 'Espada larga de Gundaremo',
        especialidad: 'Armas',
        tipo_artefacto: 'Espada larga',
        categoriaObjeto: 'f',
        realizar: [{ trabajo: 'Cambio de empuñadura', estado: 'Finalizado' },
        { trabajo: 'Tallado de hoja', estado: 'Finalizado' },
        { trabajo: 'Limpieza general', estado: 'En espera' }],
        herrero: 'Relian',
        tiempoEstimado: '72',
        estado: 'finalizado',
        observaciones: 'Hola que tal, estoy probando el text area del numero 3 y su default'
    },
]

export default ListaPedidos;