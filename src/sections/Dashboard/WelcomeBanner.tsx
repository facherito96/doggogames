import React from 'react'
import styled from 'styled-components'
import backgroundImg from 'https://github.com/facherito96/doggogames/blob/main/src/sections/Dashboard/try.png'



const Welcome = styled.div`
  
  background: url(${backgroundImg});

 


  & > div {
    padding: 0px;
  }
  @media (min-width: 800px) {
    display: grid;
    grid-template-columns: 2fr 1fr;
    padding: 0;
    & > div {
      padding: 40px;
    }
  }
`

export function WelcomeBanner() {
  return (
    <Welcome>
    </Welcome>
  )
}
