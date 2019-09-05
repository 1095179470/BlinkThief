import React, { Component } from "react";

class Mystate extends Component {
  constructor(props) {
    super(props);
    //状态管理器
    this.state = {
      msg: "message",
      arr: [1, 2, 3, 4, 5],
      obj: {
        name: "zhangsan",
        age: 12
      },
      isLogin: false
    };
  }

  render() {
    const { isLogin, msg, arr } = this.state;
    // const isLogin = this.state.isLogin;
    // let temp = null;
    return (
      <div>
        hello{msg}
        {/*条件渲染 */}
        {isLogin ? <div>欢迎您</div> : <div>请登录</div>}
        {/*列表渲染 */}
        {arr.map((item, index) => {
          return <div key={index}>{item}</div>;
        })}
      </div>
    );
  }
}

export default Mystate;
