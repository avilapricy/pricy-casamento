import styled from "styled-components"

export const ContainerList = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 20px;
    padding: 100px;
    gap: 35px;
    overflow: hidden;

`

export const ContainerItemList = styled.div`
    display: flex;
    gap: 20px;
`

export const Image = styled.img`
    object-fit: cover;
    width:188px;
    height:188px;
    border-radius: 10px;
        
`

export const Info = styled.div`
    
` 

export const ModalConteudo = styled.div`
    background: #D7D3CF;
    border-radius: 10px;
    width: 1206px;
    height: 603px;
    padding: 80px;
}
`

export const ModalRodape = styled.div`
    background: #D7D3CF;
    border-radius: 10px;
    
`
export const ImageModal = styled.img`
    width: 392.13px;
    height: 456.41px; 
    border-radius: 10px;
`
// export const ModalBox = styled.div`
//     margin-left: auto;
//     margin-right: auto;
// `

export const Modal = styled.div`
border: 1px solid red;
    background: transparent;
    width: 1206px;
    height: 603px;
    position: fixed;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    ${(props) => {
        if(!props.isOpen) {
            return "display: none;" 
        }
    }}
`