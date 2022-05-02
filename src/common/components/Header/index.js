import { useMediaQuery } from "@chakra-ui/react";
import AddItemList from "../AddItemList";
import Banner from "../Banner";
import Countdown from "../Countdown";
import Footer from "../Footer";
import Logo from "../Logo";
import Mariah from "../Mariah";
import Menu from "../Menu";

function Header() {
    const [isMobile] = useMediaQuery('(max-width: 1000px)')

    const style = { display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center', gap: '6px', paddingBottom: '24px' };
    if (isMobile)
        delete style.alignItems
    return (
        <div>
            <Countdown />
            <div style={style}>
                <br />
                <Logo />
                <Menu />
                <AddItemList />




            </div>
        </div>
    )
}

export default Header;