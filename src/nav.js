import React from 'react';
import styled from 'styled-components';

const NavBlock = styled.div`
  height:100%;
  width:80px;
  background-color:#C6C6C6;
  position:fixed;
  left:0;
  top:0;
  z-index:99;
  ul{
    
    li{
      display: flex;
      align-items:center;
      flex-direction:column;
      padding-top:20px;
      &:first-child{
        padding:25px 5px;
        font-size:16px;
        display: flex;
        flex-direction:column;
        background-color:#B5E0FF;
      }
      img{
        padding-bottom:5px;
      }
    }
  }
`

function Nav(){
  return(
    <NavBlock>
      <ul>
        <li><p>구석구석</p>  <strong> 순천탐방</strong></li>
        <li>
          <img src="https://source.unsplash.com/random/50x51" />
          <p>둘러보기</p>
        </li>
        <li>
          <img src="https://source.unsplash.com/random/50x51" />
          <p>맛집</p>
        </li>
        <li>
          <img src="https://source.unsplash.com/random/50x51" />
          <p>행사</p>
        </li>
      </ul>
    </NavBlock>
  )
}

export default Nav;