import React from 'react';
import './Header.css';

export default ({black}) => {
    return(
        <header className={black ? 'black' : ''}>
            <div className="header--logo">
                <a href="">
                    <img src="https://crm7.com.br/wp-content/uploads/2020/11/Netflix-Logo.png" alt="netflix" />
                </a>
            </div>
            <div className="header--user">
                <a href="">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRi-_iTrIHU1pFVb29h0jvdyJj_zzaeAFxgN-oq4-SxtLrIwetjYvPtndNAI0IqQIpCw_8&usqp=CAU" alt="User"/>
                </a>
            </div>
        </header>
    );
}