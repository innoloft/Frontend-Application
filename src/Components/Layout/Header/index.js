import { useSelector } from 'react-redux';
import { AppBar, Logo } from './styles';

const Header = () => {
    const configuration = useSelector(state => state.account.configuration)
    return (
        <AppBar>
            <Logo src={`${configuration?.logo}`} alt="innoloft logo" />
        </AppBar>
    )
}
export default Header;
