import { Button, useDisclosure } from "@chakra-ui/react";
import theme from "../../theme";
import Typography from "../Typography";
import { ContainerVestido, Info, Image } from "./style";
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
} from '@chakra-ui/react'

function ItemList({
    title = "",
    info = "",
    img = "",

}) {
    const { isOpen, onOpen, onClose } = useDisclosure()

    return (
        <>
            <ContainerVestido onClick={onOpen}>
                <Image src={img} />
                <Info>
                    <Typography bold={true} color={theme.colors.primary.primary3} variant="primary" type="paragraphy1">{title}</Typography>
                    <Typography color={theme.colors.primary.primary3} variant="primary" type="paragraphy1">{info}</Typography>
                </Info>
            </ContainerVestido>

            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Modal Title</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <ContainerVestido onClick={onOpen}>
                            <Image src={img} />
                            <Info>
                                <Typography bold={true} color={theme.colors.primary.primary3} variant="primary" type="paragraphy1">{title}</Typography>
                                <Typography color={theme.colors.primary.primary3} variant="primary" type="paragraphy1">{info}</Typography>
                            </Info>
                        </ContainerVestido>
                    </ModalBody>

                    <ModalFooter>
                        <Button colorScheme='blsue' mr={3} onClick={onClose}>
                            Close
                        </Button>
                        <Button variant='ghost'>Secondary Action</Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    )
}

export default ItemList;