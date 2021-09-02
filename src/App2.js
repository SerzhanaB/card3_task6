import logo from "./logo.svg";
import "./App.css";
import React from "react";
//import { Popover, Menu, Checkbox, Button, MenuItem } from "@blueprintjs/core";
/*
const massiveData = [
  { desc: "Поздравляем! Вы выбрали 1 пункт. Очень хороший выбор" },
  { desc: "Второй пункт тож не плох, Будьте счастливы" },
  { desc: "Третий пункт вообще сказка! " },
];

*/

class App2 extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: "Ears" };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  render() {
    return (
      <div>
        <h1>С выпадающим списком</h1>

        <select value={this.state.value} onChange={this.handleChange}>
          <option value="Ears">Уши</option>
          <option value="Eyes">Глаза</option>
          <option selected value="default">
            По умолчанию
          </option>
          <option value="hairs">Волосы</option>
        </select>
      </div>

handleSubmit(event) {
  alert('Ваш любимый вкус: ' + this.state.value);
  event.preventDefault();
}
    );
  }
}

export default App2;
