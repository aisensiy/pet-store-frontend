import React, { PropTypes } from 'react';
import { Form, Input, Tooltip, Icon, Cascader, Select, Row, Col, Checkbox, Button, AutoComplete } from 'antd';
const FormItem = Form.Item;
const Option = Select.Option;
const AutoCompleteOption = AutoComplete.Option;

class RegistrationForm extends React.Component {
  state = {
    confirmDirty: false,
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        this.props.onSubmit(values);
      }
    });
  };

  handleConfirmBlur = (e) => {
    const value = e.target.value;
    this.setState({ confirmDirty: this.state.confirmDirty || !!value });
  };

  checkPassword = (rule, value, callback) => {
    const form = this.props.form;
    if (value && value !== form.getFieldValue('password')) {
      callback('两次密码输入不一致');
    } else {
      callback();
    }
  };

  checkConfirm = (rule, value, callback) => {
    const form = this.props.form;
    if (value && this.state.confirmDirty) {
      form.validateFields(['confirm'], { force: true });
    }
    callback();
  };

  render() {
    const { getFieldDecorator } = this.props.form;

    const formItemLayout = {
      labelCol: {
        xs: { span: 24 },
        sm: { span: 6 },
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 14 },
      },
    };
    const tailFormItemLayout = {
      wrapperCol: {
        xs: {
          span: 24,
          offset: 0,
        },
        sm: {
          span: 14,
          offset: 6,
        },
      },
    };

    return (
        <Form onSubmit={this.handleSubmit}>
          <FormItem
              {...formItemLayout}
              label="邮箱"
              hasFeedback
          >
            {getFieldDecorator('email', {
              rules: [{
                type: 'email', message: '输入不是一个合法的邮箱地址',
              }, {
                required: true, message: '请输入一个邮箱地址',
              }],
            })(
                <Input />
            )}
          </FormItem>
          <FormItem
              {...formItemLayout}
              label="用户名"
              hasFeedback
          >
            {getFieldDecorator('username', {
              rules: [{ required: true, message: '请输入用户名', whitespace: true }],
            })(
                <Input />
            )}
          </FormItem>

          <FormItem
              {...formItemLayout}
              label="密码"
              hasFeedback
          >
            {getFieldDecorator('password', {
              rules: [{
                required: true, message: '请设置一个密码',
              }, {
                validator: this.checkConfirm,
              }],
            })(
                <Input type="password" />
            )}
          </FormItem>
          <FormItem
              {...formItemLayout}
              label="确认密码"
              hasFeedback
          >
            {getFieldDecorator('confirm', {
              rules: [{
                required: true, message: '请再次输入密码',
              }, {
                validator: this.checkPassword,
              }],
            })(
                <Input type="password" onBlur={this.handleConfirmBlur} />
            )}
          </FormItem>

          <FormItem {...tailFormItemLayout} style={{ marginBottom: 8 }}>
            {getFieldDecorator('agreement', {
              valuePropName: 'checked',
            })(
                <Checkbox>我已经阅读了该 <a href="">协议</a></Checkbox>
            )}
          </FormItem>
          <FormItem {...tailFormItemLayout}>
            <Button type="primary" htmlType="submit" size="large">注册</Button>
          </FormItem>
        </Form>
    );
  }
}

RegistrationForm.propTypes = {
  onSubmit: PropTypes.func.isRequired
};

const WrappedRegistrationForm = Form.create()(RegistrationForm);

export default WrappedRegistrationForm;