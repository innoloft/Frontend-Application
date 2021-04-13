import styled from 'styled-components'
import {useQuery} from 'react-query'
import {User} from '.'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import {Map} from '.'

/**
 * this renders the product page
 * @returns the product page
 */
export const Product=()=>{
    const { isLoading, error, data } = useQuery('product', () =>
    fetch('https://api-test.innoloft.com/product/6781/').then(res =>
      res.json()
    )
  )

  if (isLoading) return 'Loading...'

  if (error) return 'An error has occurred: ' + error.message

  console.log(data)

    return (<Container>
        <SubContainer>
            <Column grow>
                <Img src={data.picture} alt='img' />
                <ProductInfo>
                    <Text bold>{data.name}</Text>
                    <Text>{data.type.name}</Text>
                </ProductInfo>
                <Tabs>
                    <TabList>
                    <Tab>Description</Tab>
                    <Tab>Attributes</Tab>
                    </TabList>
                    <TabPanel>
                        {data.description}
                    </TabPanel>
                    <TabPanel>
                        <Text bold>Categories</Text>
                        <ul>
                        {data.categories.map(category=><li key={category.id}>{category.name}</li>)}
                        </ul>
                        <Text bold>Business models</Text>
                        <ul>
                            {data.businessModels.map(bm=><li key={bm.id}>{bm.name}</li>)}
                        </ul>
                        <Text bold>{data.trl.name}</Text>
                    </TabPanel>
                </Tabs>
            </Column>
            <Column>
                <User data={data.user} company={data.company} />
                <Map address={data.company.address} width={300} height={300} />
            </Column>
        </SubContainer>
    </Container>)
}

const Container=styled.div`
flex-grow:1;
`

const SubContainer=styled.div`
display:flex;
flex-direction:row;
`

const Column=styled.div`
display:flex;
flex-direction:column;
${({grow})=>`${grow?'flex-grow:1;':''}`}
padding:10px;
`

const Img=styled.img`
width:200px;
margin:5px;
`

const Text=styled.div`
${({bold})=>`${bold?'font-weight:bold;':''}`}
margin:5px;
`

const ProductInfo=styled.div`
display:flex;
`