
import React from 'react'
import { propTypes } from 'prop-types'
function Container({fullName,bio,profession,children}) {
  
  return (
    <div>
      <h1>{fullName}</h1>
      <h2>{bio}</h2>
      <h2>{profession}</h2>
      {children}
    </div>
  )
}
Container.defaultProps = {
  imgSrc: "https://cdn-icons-png.flaticon.com/512/1160/1160358.png",
};
//Container.propTypes{
  //fullName:propTypes.string,
  //bio:propTypes.string,
  //profession:propTypes.string}
export default Container

