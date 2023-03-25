import React, { useState } from "react";

export default function MyForm() {
    const [emailUser, setEmailUser]=useState("");
    const [title, setTitle]=useState("");
    const [axis, setAxis]=useState("");
    const [odsUrl, setOdsUrl]=useState("");
    const [odsName, setOdsName]=useState("");
    const [description, setDescription]=useState("");
    const [indicator, setIndicator]=useState("");
    const [objective, setObjective]=useState("");
    const [doc, setDoc]=useState("");
    const [taskName, setTaskName]=useState("");
    const [taskState, setTaskState]=useState(true);
    const [state, setState]=useState(true);

    const handleSubmit=(event) => {
        event.preventDefault();
        const formData={
            emailUser,
            title,
            axis,
            ods: [{ url: odsUrl, nameOds: odsName }],
            description,
            indicator,
            objective,
            doc,
            task: [{ name: taskName, state: taskState }],
            state
        };
        console.log(formData);
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Email User:
                <input
                    type="text"
                    value={emailUser}
                    onChange={(e) => setEmailUser(e.target.value)}
                />
            </label>
            <label>
                Title:
                <input
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
            </label>
            <label>
                Axis:
                <input
                    type="text"
                    value={axis}
                    onChange={(e) => setAxis(e.target.value)}
                />
            </label>
            <label>
                ODS Url:
                <input
                    type="text"
                    value={odsUrl}
                    onChange={(e) => setOdsUrl(e.target.value)}
                />
            </label>
            <label>
                ODS Name:
                <input
                    type="text"
                    value={odsName}
                    onChange={(e) => setOdsName(e.target.value)}
                />
            </label>
            <label>
                Description:
                <input
                    type="text"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                />
            </label>
            <label>
                Indicator:
                <input
                    type="text"
                    value={indicator}
                    onChange={(e) => setIndicator(e.target.value)}
                />
            </label>
            <label>
                Objective:
                <input
                    type="text"
                    value={objective}
                    onChange={(e) => setObjective(e.target.value)}
                />
            </label>
            <label>
                Doc:
                <input
                    type="text"
                    value={doc}
                    onChange={(e) => setDoc(e.target.value)}
                />
            </label>
            <label>
                Task Name:
                <input
                    type="text"
                    value={taskName}
                    onChange={(e) => setTaskName(e.target.value)}
                />
            </label>
            <label>
                Task State:
                <input
                    type="checkbox"
                    checked={taskState}
                    onChange={(e) => setTaskState(e.target.checked)}
                />
            </label>
            <label>
                State:
                <input
                    type="checkbox"
                    checked={state}
                    onChange={(e) => setState(e.target.checked)}
                />
            </label>
            <button type="submit">Submit</button>
        </form>
    );
}