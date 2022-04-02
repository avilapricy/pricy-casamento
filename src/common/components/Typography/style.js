import styled from "styled-components";

export const Container = styled.div`

    ${(props) => {
        const {
            variant
        } = props;

        if(variant == "secondary") {
            return `font-family: Honey Florist;` 
        }
    }}

    ${(props) => {
        const {
            variant,
            type
        } = props;

        switch (variant) {
            case "primary":
                if (type == "h1") {
                    return `
                        font-size: ${props.theme.typography.primary.h1};
                    `
                } else

                if (type == "h2") {
                        return `
                        font-size: ${props.theme.typography.primary.h2};
                    `
                    } else

                if (type == "subtitle1") {
                    return `
                    font-size: ${props.theme.typography.primary.subtitle1};
                    `
                } else

                    if (type == "subtitle2") {
                        return `
                    font-size: ${props.theme.typography.primary.subtitle2};
                    `
                    } else 

                if (type == "paragraphy1") {
                    return `
                    font-size: ${props.theme.typography.primary.paragraphy1};
                    `
                } else

                if (type == "paragraphy2") {
                    return `
                    font-size: ${props.theme.typography.primary.paragraphy2};
                    `
                } else

                if (type == "paragraphy2") {
                    return `
                    font-size: ${props.theme.typography.primary.paragraphy2};
                    `
                } else

                if (type == "paragraphy3") {
                    return `
                    font-size: ${props.theme.typography.primary.paragraphy3};
                    `
                }
                
            case "secondary":
                if (type == "h1") {
                    return `
                    font-size: ${props.theme.typography.secondary.h1};
                    `
                } else
                
                if (type == "h2") {
                    return `
                    font-size: ${props.theme.typography.secondary.h2};
                    `
                } else

                if (type == "subtitle1") {
                    return `
                    font-size: ${props.theme.typography.secondary.subtitle1};
                    `
                } else

                if (type == "subtitle2") {
                    return `
                    font-size: ${props.theme.typography.secondary.subtitle2}
                    `
                } else

                if (type == "subtitle2") {
                    return `
                    font-size: ${props.theme.typography.secondary.subtitle2}
                    `
                } else

                if (type == "paragraphy1") {
                    return `
                    font-size: ${props.theme.typography.secondary.paragraphy1}
                    `
                } else

                if (type == "paragraphy2") {
                    return `
                    font-size: ${props.theme.typography.secondary.paragraphy2}
                    `
                } else

                if (type == "paragraphy3") {
                    return `
                    font-size: ${props.theme.typography.secondary.paragraphy3}
                    `
                } 

        }

    }}
` 