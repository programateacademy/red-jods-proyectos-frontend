import React, { useState, useEffect } from 'react';

function Percentage({task}) {
    const [tasks, setTasks]=useState(
    task
    );

    const [tareasTerminadas, setTareasTerminadas]=useState(0);

    useEffect(() => {
        const completadas=tasks.filter(tarea => tarea.state);
        const porcentaje=(completadas.length/tasks.length)*100;
        setTareasTerminadas(porcentaje);
    }, [tasks]);

    // Calcula la longitud de la línea de trazo del círculo en función del porcentaje de tareas completadas
    const longitud=(2*Math.PI*50*tareasTerminadas)/100-(2*Math.PI*10*tareasTerminadas)/100;

    return (
        <div>
            <svg height="100" width="100">
                <circle
                    cx="50"
                    cy="50"
                    r="40"
                    fill="transparent"
                    stroke="lightgreen"
                    strokeWidth="20"
                    strokeDasharray={`${longitud} ${2*Math.PI*50}`}
                    transform="rotate(90 50 50)"
                />
                <text x="52%" y="53%" textAnchor="middle">
                    {tareasTerminadas.toFixed(1)}%
                </text>
            </svg>
        </div>
    );
}

export default Percentage;