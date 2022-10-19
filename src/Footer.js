import React from 'react';

function Footer(){
    return(
        <div className='text-center p-3' style={{ position: 'absolute',
            bottom: '0', width: "100%", backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
        &copy; {new Date().getFullYear()} Copyright:{' '}
        <a className='text-dark' href='https://mdbootstrap.com/'>
          NikhilGupta.com
        </a>
      </div>
    )
}
export default Footer;