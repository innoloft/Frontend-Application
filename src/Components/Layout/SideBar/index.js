import { useCallback, useState } from 'react';
import { useHistory } from 'react-router-dom';

import { Side, Row } from './styles';
import { NavList } from '../../../Routes/RoutesList';


export default function SideBar() {

    const history = useHistory();
    const [active, setActive] = useState('0');

    const handleChange = useCallback(
        (key) => {
            history.push(NavList[key].path);
            setActive(key);
        },
        [history, setActive],
    )
    return (
        <Side>
            {Object.keys(NavList).map((key, index) => {
                return (
                    <Row onClick={() => handleChange(key)} active={active === key}>
                        {NavList[key].title}
                    </Row>
                );
            })}
        </Side>
    )
}
