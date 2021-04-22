import React from 'react'; 

export default function HeaderComponent() {
    return (
        <header>
            <div className="page_container header_container">
                <h1 className="page_heading logo">
                    <a href="https://innoloft.com/public/en">
                        <img src="https://img.innoloft.de/logo.svg" alt="Innoloft's logo"/>
                    </a>    
                </h1>
            </div>
        </header>
    )
}