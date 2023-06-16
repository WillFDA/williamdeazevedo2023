import IconsHero from '@/components/IconsHero'
import Logo from '@/components/Logo'
import React from 'react'
const Footer = () => {
  return (
    <footer className='footer'>
        <h5 className='footer-title'>Interessé ? Contacter moi via mail !</h5>
        
        <a style={{textDecoration: 'none'}}  href="mailto:william.deazevedopro@gmail.com" className='footer-button'>Contactez moi</a>
        <IconsHero />
        <p className='footer-subtitle'>Designed and Developped by William Ferreira De Azevedo</p>
        <Logo />
    </footer>
  )
}

export default Footer