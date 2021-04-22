import { useState, useEffect, useRef } from 'react';
import { useDispatch } from 'react-redux';
import fetchProduct from '../../actions/product';
import fetchTrl from '../../actions/trl';
import logo from '../../assets/logo.svg';
import Routes from '../../components/Routes';
import { GlobalStyles } from '../../global';
import { TopNav, Container, Content } from './App.styled';
import Burger from '../Burger';
import Menu from '../Menu';
import { useOnClickOutside } from '../../hooks';

function App() {
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const node = useRef();
  const menuId = "main-menu";

  useOnClickOutside(node, () => setOpen(false));

  useEffect(() => {
    dispatch(fetchProduct());
    dispatch(fetchTrl());
  }, [dispatch]);

  return (
    <div ref={node}>
      <GlobalStyles />
      <TopNav>
        <Burger open={open} setOpen={setOpen} aria-controls={menuId} />
        <img src={logo} alt="Logo" />
      </TopNav>
      <Container>
          <div>
            <Menu open={open} setOpen={setOpen} id={menuId} />
          </div>
          <Content>
            <Routes />
          </Content>
      </Container>
    </div>
  );
}

export default App;
