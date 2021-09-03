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
    this.state = { value: "default" };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
    console.log(this.state.value);
    return ()
  }

  render() {
    return (
      <div>
        <select onChange={this.handleChange}>
          <option value="Ears">Уши</option>
          <option value="Eyes">Глаза</option>
          <option selected value="default">
            По умолчанию
          </option>
          <option value="hairs">Волосы</option>
          {
            (this.state = "Eyes" && (
              <p> вы выбрали программу для ушей</p>
            ))
          }
        </select>
      </div>
    );
  }
}




export default App2;
