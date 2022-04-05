import { useRouter } from "next/router";
import Typography from "../Typography";
import { Item, List } from "./style";


function Menu() {
    const router = useRouter();

    const onNavigation = (path) => {
        router.push(path);
    }

    const asPath = router.asPath;


    return (
        <List>
            {
                [
                    {
                        label: "Home",
                        path: "/"
                    },
                    {
                        label: "Vestido",
                        path: "/vestido"
                    },
                    {
                        label: "Terno",
                        path: "/terno"
                    },
                    {
                        label: "Bolo",
                        path: "/bolo"
                    },
                    {
                        label: "Convite",
                        path: "/convite"
                    },
                ].map((menuItem, index) => {
                    const { label, path } = menuItem
                    return (
                        <Item key={index} onClick={() => onNavigation(path)}>
                            <Typography variant="primary" type="paragraphy1" bold={asPath == path}>
                                {label}
                            </Typography>
                        </Item>
                    )
                })
            }

            {/* <Item onClick={() => onNavigation("/vestido")}>
                <Typography variant="primary" type="paragraphy1" bold={path.includes("/vestido")}>
                    Vestido
                </Typography>
            </Item>
            <Item onClick={() => onNavigation("/terno")}>
                <Typography variant="primary" type="paragraphy1" bold={path.includes("/terno")}>
                    Terno
                </Typography>
            </Item>
            <Item onClick={() => onNavigation("/bolo")}>
                <Typography variant="primary" type="paragraphy1" bold={path.includes("/bolo")}>
                    Bolo
                </Typography>
            </Item>
            <Item onClick={() => onNavigation("/convite")}>
                <Typography variant="primary" type="paragraphy1" bold={path.includes("/convite")}>
                    Convite
                </Typography>
            </Item> */}
        </List>
    )
}

export default Menu;