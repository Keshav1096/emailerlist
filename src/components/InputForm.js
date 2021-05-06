import { Form, Input, Button, message } from "antd";

const axios = require("axios");
const backend_url = process.env.backend_url || "http://localhost:8080";

const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};
const tailLayout = {
  wrapperCol: {
    offset: 8,
    span: 16,
  },
};

const InputForm = () => {
  const onFinish = (values) => {
    const email = values.email;

    let config = {
      method: "post",
      url: `${backend_url}/api/user/${email}`,
      headers: {},
    };

    axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
        if (response.data.success) {
          message.success("email sent successfully");
        } else {
          console.log(response.data.message);
          message.error(response.data.data.message);
        }
      })
      .catch(function (error) {
        console.log(error);
        message.error("email error");
      });
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <Form
      {...layout}
      name="basic"
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
    >
      <Form.Item
        label="Email"
        name="email"
        rules={[
          {
            required: true,
            message: "Please input your email!",
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item {...tailLayout}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};

export default InputForm;
