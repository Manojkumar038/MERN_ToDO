import React from 'react'

export const Footer = () => {
  let footerStyle = {
      position : 'relative',
      top : '70vh',
      width : '100%'
  };
  return (
  
    <footer  className='bg-dark text-light py-3 text-center my-3' style={footerStyle}>
      copy right &copy; todolist.com
    </footer>
    
  )
}