const ObjetoPrueba = {
    title: String,
    responsable: String,
    description: String,
    indicators: String,
    objectives: String,
    axis: String,
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