import React from 'react';
import { Form, Input, Button } from 'antd';
import axios from 'axios';


// const CustomForm = () => {
// }

class CustomForm extends React.Component {

  handleFormSubmit = (event, requestType, commentID) => {
    // event.preventDefault();
    const username = event.target.elements.username.value;
    const text = event.target.elements.text.value;

    // console.log(username, text);

    switch (requestType) {
      case 'post':
        return axios.post('http://127.0.0.1:8000/api/', {
          username: username,
          text: text
        })
        .then(res => console.log(res))
        .catch(error => console.error(error));
      case 'put':
        return axios.put('http://127.0.0.1:8000/api/${commentID}/', {
          username: username,
          text: text
        })
        .then(res => console.log(res))
        .catch(error => console.error(error));
    }

  }

  render() {
    return (
      <div>
        <Form 
          onSubmit={(event) => this.handleFormSubmit(
            event,
            this.props.requestType,
            this.props.commentID )}
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
