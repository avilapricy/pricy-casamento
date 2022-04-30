import { Form, Input, InputNumber, Button } from 'antd';

const layout = {
    labelCol: {
      span: 8,
    },
    wrapperCol: {
      span: 16,
    },
  };
  const validateMessages = {
    required: '${label} is required!',
    types: {
      Tituo: '${label} is not a valid email!',
      Info: '${label} is not a valid number!',
    },
    Link: {
      range: '${label} must be between ${min} and ${max}',
    },
  };

function AddItemList() {
    return(
        <Button type="primary"> + </Button>
    )
}

export default AddItemList;