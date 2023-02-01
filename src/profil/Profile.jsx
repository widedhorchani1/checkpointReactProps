import React from 'react'
import Container from './Container'
function Profile(props, HandleName) {
  return (
    <div className="Profile">
      {props.HandleName()}
      {props.catgs.map((elt, index) => (
        <Container
          //fullName={elt.fullName}
          // bio={elt.bio}
          //profession={elt.profession}
          {...elt}
          key={index}
        >
          <img className='imgSrc'
            src="https://img.freepik.com/photos-gratuite/petit-bebe-est-dans-panier-plaid_8353-7789.jpg"
            alt=""
          />
        </Container>
     
      ))}
    </div>
  );
}

export default Profile