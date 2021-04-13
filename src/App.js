
import styled from 'styled-components'
import logo from './logo.svg'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import {Header,Navigation,Product,Main} from './components'
import { QueryClient, QueryClientProvider } from 'react-query'

const queryClient = new QueryClient()

/**
 * this renders the app
 * @returns the app
 */
export const App=()=> {
  return (
    <Router>
      <QueryClientProvider client={queryClient}>
      <Page>
        <Header logo={logo} />
        <SubPage>
          <Navigation />
          <Switch>
            <Route path='/' exact component={Main} />
            <Route path='/Product' component={Product} />
          </Switch>
        </SubPage>
      </Page>
      </QueryClientProvider>
    </Router>
  );
}

const Page=styled.div`
display:flex;
flex-direction:column;
font-family:sans-serif;
`
const SubPage=styled.div`
display:flex;
flex-direction:row;
justify-content:flex-start;
`

