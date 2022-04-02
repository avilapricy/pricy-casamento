import Count from 'react-countdown';
import Typography from "../Typography";
import UnitTime from "../UnitTime";
import { Container, ContainerItemCountdown, Content, ItemsItemCountdown } from "./style";

export default function Countdown() {
    function renderer({
        total = 0,
        days = 0,
        hours = 0,
        minutes = 0,
        seconds = 0,
        milliseconds = 0,
        completed = true,
    }) {
        return (
            <>
                <ItemCountdown
                    label="Days"
                    units={days}
                />
                <ItemCountdown
                    label="Hours"
                    units={hours}
                />
                <ItemCountdown
                    label="Minutes"
                    units={minutes}
                />
                <ItemCountdown
                    label="Seconds"
                    units={seconds}
                />
            </>
        )
    }

    return (
        <Container>
            <Content>
                <Count
                    date={new Date(2023, 12 , 14, 18, 0, 0)}
                    renderer={renderer}
                />
            </Content>
        </Container>
    )
}

function ItemCountdown({
    label = "",
    units = 0
}) {

    function renderUnitsTime() {
        let stringUnits = String(units);
        let is3Digits = stringUnits.length > 2;
        return (
            <>
                <UnitTime>
                    {stringUnits[0]}
                </UnitTime>
                <UnitTime>
                    {stringUnits[1]}
                </UnitTime>
                {is3Digits &&
                    <UnitTime>
                        {stringUnits[2]}
                    </UnitTime>
                }
            </>
        )
    }

    return (
        <ContainerItemCountdown>
            <Typography
                variant="secondary"
                type="paragraphy3"
            >
                {label}
            </Typography>
            <ItemsItemCountdown>
                {renderUnitsTime()}

            </ItemsItemCountdown>
        </ContainerItemCountdown>
    )
}