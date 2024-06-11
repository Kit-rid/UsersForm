import React from 'react'
import styled from 'styled-components';
import ListMain from '../components/ListMain';

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
        min-height: 1060px;
        background: linear-gradient(to bottom right, #d170ff, #ffaa83); 
    }
`


const ListPage = () => {
  return (
    <Main>
        <div className='body'>
            <ListMain/>
        </div>
    </Main>
  )
}

export default ListPage
