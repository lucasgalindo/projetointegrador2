import React, { useState } from 'react'
import { Container } from './style'
import { FaBars } from 'react-icons/fa'
import Sidebar from '../Sidebar'



const Header = ({title}) => {
  const [sidebar, setSidebar] = useState(false)

  const showSiderbar = () => setSidebar(!sidebar)

  return (
    
      <Container>
      <FaBars onClick={showSiderbar} />
      {sidebar && <Sidebar active={setSidebar} />}
      <h1 className='title'>{title}</h1>

     
    </Container>
    
    
    
    
  )
}

export default Header