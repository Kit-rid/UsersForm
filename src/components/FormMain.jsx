import React, { Component } from 'react';
import styled from 'styled-components';


const Inputs = styled.div`
    @import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap');
    
    .upper-text h1 {
        text-align: center;
        font-size: 42px;
        text-shadow: rgba(0, 0, 0, 0.100) 1px 3px 5px;
        color: #FFCF88;
    }

    .main {
        padding-top: 12%;
    }

    .wrapper {
        display: flex;
        margin-left: 43%;
        padding-top: 10px;
        width: 260px;
        height: 455px;
        background-color: rgba(255, 255, 255, 0.250);
        border-radius: 15px;
        color: white;
        box-shadow: 2px 4px 10px 2px rgba(0, 0, 0, 0.055);
    }

    .wrapper h1 {
        font-size: 22px;
        text-align: center;
    }

    .input-box #one {
        width: 120px;
        height: 20px;
        margin-left: 58px;
    }
    .input-box #two {
        width: 150px;
        height: 20px;
        margin-left: 42px;
    }

    .input-box #email {
        width: 200px;
        height: 20px;
        margin-left: 20px;
    }   

    .input-box input {
        background: rgba(0, 0, 0, 0.075);
        width: 50%;
        height: 50%;
        border: none;
        outline: none;
        border-radius: 4px;
        font-size: 16px;
        padding-left: 20px;
        padding-top: 10px;
        padding-bottom: 10px;
        color: white;
        transition: all 0.2s ease-in-out;
    }

    .input-box :hover {
        box-shadow: #FFCF88 1px 1px 30px;
    }

    .input-box :focus {
        border-radius: 24px;
    }

    .input-box ::placeholder {
        color: rgba(255, 255, 255, 0.205);
    }

    .wrapper button {
        width: 115px;
        height: 60px;
        background: rgba(0, 0, 0, 0.123);
        border: none;
        outline: none;
        cursor: pointer;
        border-radius: 10px;
        font-size: 24px;
        color: #00FF57;
        margin-left: 70px;
        margin-top: 30px;
        transition: all 0.2s ease-in-out;
    }

    .button-accept :hover {
        color: white;
        background-color: #00FF57;
        transition: all 0.3s ease-out;
        transition: all 0.3s ease-out;
        box-shadow: #00FF57 1px 1px 40px;
    }

    .button-accept :active{
        font-size: 42px ;
        background-color: #FFCF88;
        transition: color 0.1s;
        transition: 0.1s;
        box-shadow: #FFCF88 1px 1px 40px;
    }

    .wrapper .avatar {
        text-align: center;
        padding-top: 10px;
        text-shadow: rgba(0, 0, 0, 0.100) 1px 3px 5px;
    }

    .switch {
        display: inline-block;
        height: 34px;
        position: relative;
        width: 60px;
    }
    
    .switch input {
        display:none;
    }
    
    .slider {
        background-color: #ccc;
        bottom: 0;
        cursor: pointer;
        left: 0;
        position: absolute;
        right: 0;
        top: 2px;
        transition: .4s;
    }
    
    .slider:before {
        background-color: #fff;
        bottom: 4px;
        content: "";
        height: 26px;
        left: 4px;
        position: absolute;
        transition: .4s;
        width: 26px;
        border-radius: 50%;
    }
    
    input:checked + .slider{
        background-color: #66bb6a;
        color: #00FF57;
    }

    
    input:checked + .slider:before {
        transform: translateX(26px);
    }
    
    .slider.round {
        border-radius: 34px;
    }  

    .avatar {
        display: grid;
        grid-template-columns: 30px 1px;
        margin-left: 35px;
    }

    .slider h2 {
        font-size: 15px;
        width: 200px;
        margin-left: 30px;
        margin-top: 7px;
    }

`

const Redirect = styled.div `
    .footer {
        text-align: center;
        margin-left: 45.5%;
        margin-top: 50px;
        padding-top: 10px;
        width: 160px;
        height: 55px;
        background-color: rgba(255, 255, 255, 0.250);
        border-radius: 15px;
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
    }
`

class FormMain extends Component {
    state ={
        name:'',
        surname:'',
        email:'',
        showData: {
            name: '',
            surname: '',
            email: '',
        }
    }

    handleNameChange = ({ target: { value } }) => {
        this.setState ({
            name: value,
        })
    }

    handleSurnameChange = ({ target: { value } }) => {
        this.setState ({
            surname: value,
        })
    }

    handleEmailtChange = ({ target: { value } }) => {
        this.setState ({
            email: value,
        })
    }

    handleShow = (e) => {
        e.preventDefault();
        const { name, surname, email } = this.state;
        this.setState({
            name: '',
            surname: '',
            email: '',
            showData: {
                info: name,
                info_sur: surname,
            }
        })
    }


render() {
  const { name, surname, email, showData } = this.state
  const { info, info_sur } = showData;
  return (
    <div>
      <Inputs>
        <div className='main'>
            <div className="wrapper">
                <form id='form_hx' action="">
                    <h1 className="animate__animated animate__backInRight">Имя</h1>
                    <div className="input-box">
                        <input 
                        className="animate__animated animate__backInLeft" 
                        type="text"
                        value={name}
                        onChange={this.handleNameChange} 
                        id="one" placeholder="Пиздон" 
                        required></input>
                    </div>
                    <h1 className="animate__animated animate__backInLeft">Фамилия</h1>
                    <div className="input-box">
                        <input 
                        className="animate__animated animate__backInRight" 
                        type="text"
                        value={surname}
                        onChange={this.handleSurnameChange}  
                        id="two" placeholder="Пиздоныч" 
                        required></input>
                    </div>
                    <h1 className="animate__animated animate__backInRight">Электронная почта</h1>
                    <div className="input-box">
                        <input 
                        className="animate__animated animate__backInLeft" 
                        type="text"
                        value={email}
                        onChange={this.handleEmailtChange} 
                        id="email" placeholder="pizdon666@mail.git" 
                        required></input>
                    </div>
                    <div className="avatar"> 
                        <label className="switch" for="checkbox">
                        <input type="checkbox" id="checkbox"/>
                        <div className="slider round"><h2 className="animate__animated animate__fadeIn" >Добавить аватар</h2></div> 
                        </label>
                    </div>
                    <div className="button-accept">
                        <button onClick={this.handleShow} type="submit">OK</button>
                    </div>
                </form>
            </div>
            <h1>{info}</h1>
            <h2>{info_sur}</h2>
        </div>
    </Inputs>
        <Redirect>
            <div className="footer">
                <a href="/list">Вернуться к списку</a>
            </div>
        </Redirect>
    </div>
  )
 }
}

export default FormMain
