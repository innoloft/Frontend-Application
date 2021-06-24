import React from 'react';
import './App.css';
import { connect } from 'react-redux';
import { Grid } from 'styled-css-grid';
import styled from 'styled-components';
import Components from './components';
import useWindowDimensions from './hooks/useWindowDimentions';
import { NotificationSupervisor } from './components/NotificationSupervisor';
import { LoaderSupervisor } from './components/LoaderSupervisor';
import { device } from './const';

const { Footer, Header, Menu, Content } = Components

function App(props) {
  const [ isDesktop ] = useWindowDimensions()
  const columns = isDesktop ? "280px 1fr" : ""
  const rows = isDesktop ? "1fr minmax(45px,auto)" : ""
  return (
    <>
      <Header />
      <NotificationSupervisor _notifications={props.notifications} />
      <LoaderSupervisor />
      {!isDesktop && <Menu />}
      <MainContainer>
        <StyledMainGrid
          columns={columns}
          rows={rows}>
          {isDesktop && <Menu />}
          <Content {...props} />
          <Footer />
        </StyledMainGrid>
      </MainContainer>
    </>
  );
}

const MainContainer = styled.div`
  background-color: #f6f6f6;
  height: 100vh;
  min-height: 640px;
`

const StyledMainGrid = styled(Grid)`
  height: calc(100vh - 55px);
  width: 80vw;
  padding: 0 2rem;
  margin: 0 auto;
  padding-top: 55px;
  @media ${device.tabletL} {
    display: block;
    width: 95vw;
    padding: 0 0.5rem;
    padding-top: 40px;
  }
`

const mapStateToProps = state => ({
  notifications: state.notifications
})

export default connect(mapStateToProps)(App);
