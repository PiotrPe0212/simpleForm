import React from "react";
import ReactDOM from "react-dom";
import style from "./main.css";
import { jsonDatas } from "./json_datas"
import { TextInput } from "./components/text_input"
import { NumberInput } from "./components/number_input"
import { SelectInput } from "./components/select_input"

const App = () => {

  const chosingElement = (data, id) => {
    if (data.filedType == "SelectList") {
      return (<SelectInput key={data.filedType + id} id={id} label={data.label} name={data.name}
        option={data.options} />)
    }
    else if (data.filedType == "TextInput") {
      return (<TextInput key={data.filedType + id} id={id} label={data.label} name={data.name}
        placeholder={data.placeholder} multi={data.multi} />)
    }
    else if (data.filedType == "NumberInput") {
      return (<NumberInput key={data.filedType + id} id={id} label={data.label} name={data.name}
        placeholder={data.placeholder} minValue={data.minValue} />)
    }
  }
  const addingComponents = jsonDatas.map((component, id) => chosingElement(component, id))

  return (
    <div>
    <form key="form">
      {addingComponents}
      </form>
    </div>
  );
};
export default App;
ReactDOM.render(<App />, document.getElementById("app"));