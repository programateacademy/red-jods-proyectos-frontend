const ObjetoPrueba = {
    title: String,
    responsable: String,
    description: String,
    indicators: String,
    objectives: String,
    axes: String,
    ods: [{
        nameOds: String,
        url: String
    }], 
    doc: [{
        url: String
    }],
    task: [{
        name: String,
        complete: Boolean
    }]

}