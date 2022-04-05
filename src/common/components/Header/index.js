import Banner from "../Banner";
import Countdown from "../Countdown";
import Footer from "../Footer";
import Logo from "../Logo";
import Mariah from "../Mariah";
import Menu from "../Menu";

function Header() {

    return (
        <div>
            <Countdown />
            <div style={{ display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center', gap: '6px' }}>
                <br />
                <Logo />
                <Menu />

                
            
            </div>
        </div>
    )
}

export default Header;