import React from 'react';
import { connect } from 'react-redux';
import AddMoreList from '../addMoreList/addMoreList';
import EditList from '../editList/editList';
import TextEditor from '../textEditor/textEditor';
import './listTable.css';


const ListTable = (props) => {
    let { product, trl } = props



    return (
        <div className="list_wrapper">
            <div className="list_col">
                <ul>
                    <li className="list_header">TRX</li>
                    {
                        trl.map((x,i)=>(
                            <li key={i}>
                                <input type="radio" name="trl" value={x.name}/>
                                <span className="ml-5">{x.name}</span>
                            </li>
                        ))
                    }
                </ul>
            </div>
            <div className="list_col">
                <ul>
                    <li className="list_header">Business Model</li>
                    {
                        product.businessModels.map((x, i) => (
                            <li key={i} title="double click to edit">
                                <EditList content={x.name}/>
                            </li>
                        ))
                    }
                    <li>
                        <AddMoreList name="Add Business model"/>
                    </li>
                </ul>
            </div>
            <div className="list_col">
                <ul>
                    <li className="list_header">Categories</li>
                    {
                        product.categories.map((x, i) => (
                            <li  title="double click to edit">
                                <EditList content={x.name} />
                            </li>
                        ))
                    }
                    <li>
                        <AddMoreList name="Add Categories"/>
                    </li>
                </ul>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        product: state.productReducer.result,
        trl: state.productReducer.trl
    }
}

export default connect(mapStateToProps, {})(ListTable)