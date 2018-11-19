import React from "react";

export function TextInput(props) {
    return (
        <div key={props.id}>
            <label htmlFor={props.name}>{props.label}</label>
            <input name={props.name} placeholder={props.placeholder} />
        </div>
    )
}