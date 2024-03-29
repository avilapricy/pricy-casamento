import styled from "styled-components"

export const ContainerList = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 20px;
    padding: 100px;
    gap: 35px;
    overflow: hidden;
    @media (max-width: 480px) {
        grid-template-columns: 1fr;
        gap: 30px;
        padding: 35px;
    }

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
    background: #909470;
    border-radius: 17px;
    width: 1206px;
    height: 603px;
    padding: 80px;
    @media (max-width: 480px) {
        width: 390px;
        height: 282px;
        padding: 45px;
    }
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
    @media (max-width: 480px) {
        width:188px;
        height:188px;
    }
`

export const Modal = styled.div`
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
    @media (max-width: 480px) {
        width: 345px;
        height: 231px;
        position: fixed;
        margin: -5%;
    }
`