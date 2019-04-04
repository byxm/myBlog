import React,{Component} from 'react';
import FormCreate from './HOC';



@FormCreate
class Login extends Component {
  render() {
    return (
      <div>
        <div>
          <label id="username">
            账户
          </label>
          <input name="username" />
        </div>
        <div>
          <label id="password">
            密码
          </label>
          <input name="password" />
        </div>
        <div>提交</div>
        <div>other content</div>
      </div>
    )
  }
}

export default Login;



