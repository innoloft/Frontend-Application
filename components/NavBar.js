import React from 'react';
import Link from "next/link";
import {FaBoxes, FaHome} from 'react-icons/fa'
import {useRouter} from 'next/router'

const Navigation = (props) => {
   // const activeUrl = window.location.pathname.split('/')
    const {pathname} = useRouter()
    const activeUrl = pathname

    return (
        <div className='navigation'>
            <ul>

                <Link href='/'>

                    <li className={`${activeUrl === '/' && 'active'}`}>
                        <FaHome/>  Main Page
                    </li>
                </Link>
                <Link href='/products'>


                    <li className={`${activeUrl === '/products' && 'active'}`}>
                    <FaBoxes/>    Products
                    </li>
                </Link>
            </ul>
        </div>
    );
};

export default Navigation;
