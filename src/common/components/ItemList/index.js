import React, { useEffect } from 'react';
import { Button, useDisclosure } from "@chakra-ui/react";
import theme from "../../theme";
import Typography from "../Typography";
import { useMediaQuery } from '@chakra-ui/react'
import { ContainerItemList, Info, Image, ModalConteudo, ModalRodape, ImageModal, Modal } from "./style";
import { motion } from 'framer-motion';
import AddItemList from '../AddItemList';


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

    useEffect(() => {
        function close(e) {
            if (!e.path.find(target => {
                if(target.id == "modal-ItemList") {
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

    const [isMobile] = useMediaQuery('(max-width: 1000px)')


    return (
        <>
            <ContainerItemList
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
            </ContainerItemList>

            <Modal isOpen={isOpen} id="modal-ItemList">
                {
                    isOpen && <>
                        <motion.div initial="hidden" animate="visible" variants={{
                            hidden: {
                                scale: .8,
                                opacity: 0
                            },
                            visible: {
                                scale: 1,
                                opacity: 1,
                                transition: {
                                    delay: .13
                                }
                            },
                        }}>

                            <ModalConteudo>
                                <ContainerItemList onClick={onOpen}>
                                    <ImageModal src={img} />
                                    <Info>
                                        <Typography bold={true} color={theme.colors.primary.primary1} variant="primary" type={isMobile ? "subtitle2" : "h2"}>{title}</Typography>
                                        <Typography color={theme.colors.primary.primary1} variant="primary" type={isMobile ? "paragraphy1" : "subtitle1"}>{info}</Typography>
                                    </Info>
                                </ContainerItemList>
                            </ModalConteudo>
                        </motion.div>

                    </>
                }
            </Modal>
        </>
    )
}

export default ItemList;

// import {
//     Modal,
//     ModalOverlay,
//     ModalContent,
//     ModalHeader,
//     ModalFooter,
//     ModalBody,
// } from '@chakra-ui/react'
// <Modal isOpen={isOpen} onClose={onClose} isCentered size="lg" >
//                 {overlay}
//                 <ModalOverlay />
//                 <ModalContent>
//                     {/* <ButtonClose /> */}
//                     <ModalBody>
                        // <ModalConteudo>
                        //     <ContainerVestido onClick={onOpen}>
                        //         <ImageModal src={img} />
                        //         <Info>
                        //             <Typography color={theme.colors.primary.primary3} variant="primary" type="h2">{title}</Typography>
                        //             <Typography color={theme.colors.primary.primary3} variant="primary" type="paragraphy1">{info}</Typography>
                        //         </Info>
                        //     </ContainerVestido>
                        // </ModalConteudo>
//                     </ModalBody>

//                     {/* <ModalRodape />  */}
//                 </ModalContent>
//             </Modal>