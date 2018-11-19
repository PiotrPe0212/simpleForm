import React from "react";

export function SelectInput(props) {
    const options = props.option.map((op) => <option key={op} value={op}>{op}</option>)
    return (
        <div key={props.id}>
            <label htmlFor={props.name}>{props.label}</label>
            <select name={props.name} multiple={props.multi}>
                {options}
            </select>
        </div>
    )
}