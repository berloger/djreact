import React from 'react';
import { Form, Input, Button } from 'antd';


// const CustomForm = () => {
// }

class CustomForm extends React.Component {

  handleFormSubmit = (event) => {
    event.preventDefault();
    const username = event.target.elements.username.value;
    const text = event.target.elements.text.value;

    console.log(username, text);
  }

  render() {
    return (
      <div>
        <Form 
          onSubmit={this.handleFormSubmit}
          labelCol={{ span: 4 }}
          wrapperCol={{ span: 12 }}
          layout="horizontal"
          initialValues="small"
          size="small"
        >
          <Form.Item label="Ваше имя:">
            <Input name="username" />
          </Form.Item>
          <Form.Item label="Ваш комментарий:">
            <Input name="text" />
            {/* .TextArea  */}
          </Form.Item>
          <Form.Item
            labelCol = {{ span: 4 }}
            wrapperCol = {{ span: 8, offset: 4 }}
          >
            <Button type="primary" htmlType="submit" >Submit</Button>
          </Form.Item>
        </Form>
      </div>
    );
  }
};

export default CustomForm;
