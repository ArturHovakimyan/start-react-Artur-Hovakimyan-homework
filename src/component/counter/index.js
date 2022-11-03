import React from "react";
import './index.css'

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: Number(localStorage.getItem("count")) ,
      isDisabledMin: true,
      isDisabledMax: false,
      max: 10,
      min: 0,
      step: 1,
    };
  }
  componentDidUpdate(prevProps, prevState) {
    const { state: { count, max, min, step } } = this;
    localStorage.setItem("count", count)

    if (prevState.count !== count) {
      if (count + step > max) {
        this.setState({
          isDisabledMax: true,
        });
      }
      if (count === min) {
        this.setState({
          isDisabledMin: true,
        });
      }
      if (count === max) {
        this.setState({
          isDisabledMax: true,
        });
      }
    }
    if (count + step + step < min) {
      this.setState({
        count: min,

      });
    }
  }
  handleAdd = () => {
    const { state: { count, step } } = this;
    this.setState({
      count: count + step,
      isDisabledMin: false,
    });
  };
  handleSub = () => {
    const { state: { count, step } } = this;
    this.setState({
      count: count - step,
      isDisabledMax: false,
    });
  };
  resetCount = () => {
    localStorage.setItem("count", 0)
    this.setState({
      max: 10,
      min: 0,
      step: 1,
      count: Number(localStorage.getItem("count")),
      isDisabledMin: true,
      isDisabledMax: false,
    });
  }; 
  handleInputChange = (event) => {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    this.setState({
      [name]: Number(value),
    });
  };
  render() {
    const { state: { count, isDisabledMin, isDisabledMax } } = this;
    return (
      <div className="box">
        <button className="buttonReset" onClick={this.resetCount}>
          Reset Count
        </button>
        <button
          onClick={this.handleAdd}
          disabled={isDisabledMax}
          className={`button ${isDisabledMax ? "disabled" : ""} `}
        >
          +
        </button>
        <h1>Count: {count}</h1>
        <button
          onClick={this.handleSub}
          disabled={isDisabledMin}
          className={`button ${isDisabledMin ? "disabled" : ""} `}
        >
          -
        </button>
        <form  id={'form'} action={""}>
          <input type={'number'} name={"step"} placeholder={"Step Count: 1"}
                onChange={ this.handleInputChange }
                />
         <input type={'number'} name={"max"} placeholder={"Maximum Count: 10"}
                onChange={ this.handleInputChange }
                />
         <input type={'number'} name={"min"} placeholder={"Minimum Count: 0"}
                onChange={ this.handleInputChange } id={'form'} action={""}
                />
        </form>
      </div>
    );
  }
}
export default Counter;
