import { Form, Input, InputNumber, Button } from 'antd';

const { isOpen, onOpen, onClose } = useDisclosure()

const OverlayOne = () => (
  <ModalOverlay
      bg='blackAlpha.300'
      backdropFilter='blur(50px) hue-rotate(90deg)'
  />
)
const [overlay, setOverlay] = React.useState(<OverlayOne />)

useEffect(() => {
  function close(e) {
      if (!e.path.find(target => {
          if(target.id == "modal-AddItemList") {
              return true;
          }
          return false
      }))
          onClose()
  }
  if (isOpen) {
      setTimeout(() => {
          document.body.addEventListener("click", close)
      }, 500);
  }
  return () => {
      document.body.removeEventListener("click", close)
  }
}, [isOpen])

function AddItemList() {
    return(
      
    <form action="/send-data-here" method="post">
      <label for="Titulo">Titulo:</label>
      <input type="text" id="titulo" name="titulo" />
      <label for="Info">Info:</label>
      <input type="info" id="info" name="info" />
      <label for="Link">Link Imagem:</label>
      <input type="link" id="link" name="link"></input>
      <button type="submit">Submit</button>
  </form>
    )
      

export default AddItemList;