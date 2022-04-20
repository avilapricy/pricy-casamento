import React from 'react';
import { Button, useDisclosure } from "@chakra-ui/react";
import theme from "../../theme";
import Typography from "../Typography";
import { ContainerVestido, Info, Image, ModalConteudo, ModalRodape, ImageModal } from "./style";
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
} from '@chakra-ui/react'

function ItemList({
    title = "",
    info = "",
    img = "",

}) {
    const { isOpen, onOpen, onClose } = useDisclosure()

    const OverlayOne = () => (
        <ModalOverlay
          bg='blackAlpha.300'
          backdropFilter='blur(50px) hue-rotate(90deg)'
        />
      )

    const [overlay, setOverlay] = React.useState(<OverlayOne />)


    return (
        <>
              <ContainerVestido 
                ml='4'
                onClick={() => {
                setOverlay(<OverlayOne />)
                onOpen()
            }}>
                <Image src={img} />
                <Info>
                    <Typography bold={true} color={theme.colors.primary.primary3} variant="primary" type="paragraphy1">{title}</Typography>
                    <Typography color={theme.colors.primary.primary3} variant="primary" type="paragraphy1">{info}</Typography>
                </Info>
            </ContainerVestido>

            <Modal isOpen={isOpen} isCentered onClose={onClose} size="xl" >
                {overlay}
                <ModalOverlay />
                <ModalContent>
                    {/* <ButtonClose /> */}
                    <ModalConteudo>
                        <ContainerVestido onClick={onOpen}>
                            <ImageModal src={img} />
                            <Info>
                                <Typography color={theme.colors.primary.primary3} variant="primary" type="h2">{title}</Typography>
                                <Typography color={theme.colors.primary.primary3} variant="primary" type="paragraphy1">{info}</Typography>
                            </Info>
                        </ContainerVestido>
                    </ModalConteudo>

                    <ModalRodape /> 
                </ModalContent>
            </Modal>
        </>
    )
}

export default ItemList;