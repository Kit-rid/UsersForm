import React from 'react'
import styled from 'styled-components';


const Info = styled.div `

.upper-text h1 {
        animation-duration: 0.5s;
        text-align: center;
        font-size: 42px;
        text-shadow: rgba(0, 0, 0, 0.100) 1px 3px 5px;
        color: #FFCF88;
}


.main {
            padding-top: 12%;
}


.wrapper {
    margin-left: 38%;
    padding-top: 10px;
    width: 460px;
    max-height: 555px;
    background-color: rgba(255, 255, 255, 0.250);
    border-radius: 24px;
    color: white;
    box-shadow: 2px 4px 10px 2px rgba(0, 0, 0, 0.055);
    flex-wrap: wrap;
}


.user_info li {
    font-size: 22px;
    animation-duration: 2.5s;
    padding-bottom: 15px;
    margin: 0;
    list-style-type: decimal;
    text-decoration: none;
}

.footer {
    text-align: center;
    margin-left: 45.5%;
    margin-top: 50px;
    padding-top: 10px;
    width: 160px;
    height: 55px;
    background-color: rgba(255, 255, 255, 0.250);
    border-radius: 24px;
    color: white;
    box-shadow: 2px 4px 10px 2px rgba(0, 0, 0, 0.055);
    padding-top: 18px;
}

.footer a {
    padding-bottom: 40px;
    text-transform: uppercase;
    text-decoration: none;
    color: #fff;
    font-size: 16px;
    font-weight: 400
}

.footer a:hover {
    color: #00FF57;
    transition: color 0.3s ease;
    transition: 0.3s ease;
    text-shadow: #00FF57 1px 1px 40px;
}
`




const ListMain = () => {
  return (
<div>
        <Info>
    <div className='main'>
        <div class="upper-text">
                <h1 class="animate__animated animate__backInDown">Список пользователей</h1>
        </div> 
            <div class="wrapper">
                <ul class="user_info">
                 <li></li>
                 <li></li>
                 <li></li>       
                </ul>
            </div>
            <div class="footer">
                <a href="/">Вернуться к регистрации</a>
            </div>
        </div>
        </Info>
    </div>
  )
}

export default ListMain
