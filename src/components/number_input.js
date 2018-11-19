import React from "react";

export function NumberInput(props) {
    return (
        <div key={props.id}>
            <label htmlFor={props.name}>{props.label}</label>
            <input type="number" name={props.name} placeholder={props.placeholder} min={props.minValue} />
        </div>
    )
}