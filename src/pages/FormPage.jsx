import React from 'react'
import FormMain from '../components/FormMain'
import styled from 'styled-components';

const Main = styled.div`
 
    .body {
        margin: -8px;
        padding: 0;
        box-sizing: border-box;
        font-family: "Roboto", sans-serif;
        font-weight: 400;
        display: block;
        justify-content: center;
        align-self: center;
        min-height: 1080px;
        background: linear-gradient(to bottom right, #d170ff, #ffaa83); 
    }
`


const FormPage = () => {
  return (
    <Main>
        <div className='body'>
            <FormMain/>
        </div>
    </Main>
  )
}

export default FormPage
