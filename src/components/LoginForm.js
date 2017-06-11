import React, { PropTypes } from 'react';
import { Form, Icon, Input, Button, message } from 'antd';
import styled from 'styled-components';
const FormItem = Form.Item;

const StyledForm = styled(Form)`
  
  .login-form-button {
    width: 100%;
  }
`;

class LoginForm extends React.Component {
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        this.props.onSubmit(values).catch(() => {
          message.error("用户名或密码错误");
        });
      }
    });
  };

  render() {
    const { getFieldDecorator } = this.props.form;
    return (
        <StyledForm onSubmit={this.handleSubmit} className="login-form">
          <FormItem>
            {getFieldDecorator('username', {
              rules: [{ required: true, message: '请输入用户名' }],
            })(
                <Input prefix={<Icon type="user" style={{ fontSize: 13 }} />} placeholder="用户名" />
            )}
          </FormItem>
          <FormItem>
            {getFieldDecorator('password', {
              rules: [{ required: true, message: '请输入密码' }],
            })(
                <Input prefix={<Icon type="lock" style={{ fontSize: 13 }} />} type="password" placeholder="密码" />
            )}
          </FormItem>
          <FormItem>
            <Button type="primary" htmlType="submit" className="login-form-button">
              登录
            </Button>
            或 <a href="">注册</a>
          </FormItem>
        </StyledForm>
    );
  }
}

LoginForm.propTypes = {
  onSubmit: PropTypes.func.isRequired
};

LoginForm = Form.create()(LoginForm);

export default LoginForm;