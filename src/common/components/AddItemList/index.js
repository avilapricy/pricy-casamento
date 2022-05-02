import React, { useState } from 'react';
import { Button, Modal, Form, Input, Radio } from 'antd';

const FormAddItemList = ({ visible, onCreate, onCancel }) => {
  const [form] = Form.useForm();
  return (
    <Modal
      visible={visible}
      title="Adicionar novo Item"
      okText="Criar"
      cancelText="Cancelar"
      onCancel={onCancel}
      onOk={() => {
        form
          .validateFields()
          .then((values) => {
            form.resetFields();
            onCreate(values);
          })
          
      }}
    >
      <Form
        form={form}
        layout="vertical"
        name="AddItemList"
        initialValues={{
          modifier: 'public',
        }}
      >
        <Form.Item
          name="titulo"
          label="Titulo"
          rules={[
            {
              required: true,
              message: 'Por favor, insita o Titulo aqui!',
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item name="Descrição" label="Descrição">
          <Input type="textarea" />
        </Form.Item>
        <Form.Item name="modifier" className="create-form_addItemList">
        </Form.Item>
      </Form>
    </Modal>
  );
};

const AddItemList = () => {
  const [visible, setVisible] = useState(false);
  
//   const onCreate = (setVisible) => {
//     setVisible(false);
//   };

  return (
    <div>
      <Button
        type="primary"
        // onClick={onOpen}
        // visible={visible}
        onClick={(e) => {
          // FormAddItemList('')
          setVisible(true)
        }}
      >
        + Adicionar
      </Button>
      <FormAddItemList
        visible={visible}
        // onCreate={onCreate}
        onCancel={() => {
          setVisible(false);
        }}
      />
    </div>
  );
};

export default () => <AddItemList />;













































// import React, { useEffect } from 'react';
// import theme from "../../theme";
// import Typography from "../Typography";
// import { motion } from 'framer-motion';

// const { isOpen, onOpen, onClose } = useDisclosure()

// const OverlayOne = () => (
//   <ModalOverlay
//       bg='blackAlpha.300'
//       backdropFilter='blur(50px) hue-rotate(90deg)'
//   />
// )
// const [overlay, setOverlay] = React.useState(<OverlayOne />)

// useEffect(() => {
//   function close(e) {
//       if (!e.path.find(target => {
//           if(target.id == "modal-ModalAddItem") {
//               return true;
//           }
//           return false
//       }))
//           onClose()
//   }
//   if (isOpen) {
//       setTimeout(() => {
//           document.body.addEventListener("click", close)
//       }, 500);
//   }
//   return () => {
//       document.body.removeEventListener("click", close)
//   }
// }, [isOpen])

// function AddItemList() {
//     return(
//         <Modal isOpen={isOpen} id="modal-ModalAdd">
//             {
//                 isOpen && <>
//                   <motion.div initial="hidden" animate="visible" variants={{
//                       hidden: {
//                           scale: .8,
//                           opacity: 0
//                       },
//                       visible: {
//                           scale: 1,
//                           opacity: 1,
//                           transition: {
//                               delay: .13
//                           }
//                       },
//                  }}>

        
//         <ModalAddItem>
//             <ContainerAddItem>
//             <form type="button" onClick={onOpen} value="+">
//                 <label for="Titulo">Titulo:</label>
//                 <input type="text" id="titulo" name="titulo" />
//                 <label for="Info">Info:</label>
//                 <input type="info" id="info" name="info" />
//                 <label for="Link">Link Imagem:</label>
//                 <input type="link" id="link" name="link"></input>
//                 <button type="submit">Submit</button>
//             </form>
//             </ContainerAddItem>
//         </ModalAddItem>
//     </motion.div>

//     </>  
// }    
//       </ Modal>
     
//     )}

      

// export default AddItemList;