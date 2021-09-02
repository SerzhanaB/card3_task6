import logo from "./logo.svg";
import "./App.css";
import React from "react";
import { Popover, Menu, Checkbox, Button, MenuItem } from "@blueprintjs/core";

const massiveData = [
  { desc: "Поздравляем! Вы выбрали 1 пункт. Очень хороший выбор" },
  { desc: "Второй пункт тож не плох, Будьте счастливы" },
  { desc: "Третий пункт вообще сказка! " },
];

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      visibleInput: false,
      parText: "Отображаемый текст",
    };
    //this.onChangeParText = this.onChangeParText.bind(this);
    this.onChangeVisiability = this.onChangeVisiability.bind(this);
  }

  onChangeVisiability(event) {
    console.log(event.target.checked);
    this.setState({ visibleInput: event.target.checked });
  }

  /* onChangeParText(event) {
    this.setState({ parText: event.target.value });
  }*/

  render() {
    return (
      <div>
        <h1>Выбор с чек-боксами</h1>
        <div>
          <Checkbox
            checked={this.state.isEnabled}
            label="Опция 1"
            onChange={this.onChangeVisiability}
          />
          {this.state.visibleInput && (
            //  <input onChange={this.onChangeParText} ref="My input" type="text" value={this.state.parText} />
            <p>какой-то текст1</p>
          )}
          <Checkbox
            checked={this.state.isEnabled}
            label="Опция 2"
            onChange={this.onChangeVisiability}
          />
          {this.state.visibleInput && (
            //  <input onChange={this.onChangeParText} ref="My input" type="text" value={this.state.parText} />
            <p>какой-то текст2</p>
          )}
          <Checkbox
            checked={this.state.isEnabled}
            label="Опция 3"
            onChange={this.onChangeVisiability}
          />

          {this.state.visibleInput && (
            //  <input onChange={this.onChangeParText} ref="My input" type="text" value={this.state.parText} />
            <p>какой-то текст3</p>
          )}
        </div>
      </div>
    );
  }
}

export default App;
