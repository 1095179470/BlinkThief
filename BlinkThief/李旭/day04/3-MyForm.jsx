import React, { Component } from "react";

class MyForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      form: {
        inputValue: "zhangsan",
        value: "test"
      },
      msg: "hello"
    };
    // let obj={
    //   name:'zhangsan',
    //   age:12,
    //   name:'lisi'
    // }
  }
  inputChange = e => {
    console.log(e.target.value);
    this.setState({
      form: {
        ...this.state.form,
        inputValue: e.target.value
      }
    });
  };
  render() {
    const { msg, form } = this.state;
    const test = "test";
    return (
      <div>
        {msg}
        {test}
        {/*数据驱动DOM */}
        <input
          type="text"
          value={form.inputValue}
          onChange={this.inputChange}
        />
      </div>
    );
  }
}

export default MyForm;
