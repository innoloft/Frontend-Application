import React, { useEffect, useState } from 'react'
import db from '../firebase';
import './Tab.css'
import Tab1 from './Tab1'
import { BsPencilSquare } from "react-icons/bs";
import { AiFillDelete } from "react-icons/ai";

function Tab() {

    var [currentId, setCurrentId] = useState('');
    var [contactObjects, setContactObjects] = useState({})
    const [formShow, setFormShow] = useState(false)

    
  

  useEffect(() => {
    db.child('contacts').on('value', snapshot => {
        if (snapshot.val() != null) {
            setContactObjects({
                ...snapshot.val()
            });
        }
      })
    }, [])


    const addOrEdit = (obj) => {
        if (currentId == '')
            db.child('contacts').push(
                obj,
                err => {
                    if (err)
                        console.log(err)
                    else
                        setCurrentId('')
                })
        else
            setFormShow(!formShow)
            db.child(`contacts/${currentId}`).set(
                obj,
                err => {
                    if (err)
                        console.log(err)
                    else
                        setCurrentId('')
                })
    }

    const onDelete = id => {
        if (window.confirm('Are you sure to delete this record?')) {
            db.child(`contacts/${id}`).remove(
                err => {
                    if (err)
                        console.log(err)
                    else
                        setCurrentId('')
                })
        }
    }

    const [on, setOn] = useState(false);

    const takli = () => {
        setFormShow(!formShow);
    }

    return (
        <>
            {
                !formShow ? 
                    <div>
                        
                        <div className="body">
                            <Tab1 {...({ currentId, contactObjects, addOrEdit, takli})} /> 
                        </div>
                    </div>
                 : <div className="dashboard">
                     <h1 className="dash__had">
                        User Details
                     </h1>
                {
                    Object.keys(contactObjects).map((key) => (
                        <ul key={key} className="dash">
                            <li className="dash__itm">{contactObjects[key]}</li>
                            {console.log(contactObjects)}
                            <div className="bg-light">
                                <a className="btn text-primary" onClick={() => { setCurrentId(key) }}>
                                    <BsPencilSquare onClick={takli}/>
                                </a>
                                <a className="btn text-danger" onClick={() => { onDelete(key) }}>
                                    <AiFillDelete />
                                </a>
                            </div>
                        </ul>
                    ))
                }
                </div>
            }
            
            
        </>
    )
}

export default Tab
