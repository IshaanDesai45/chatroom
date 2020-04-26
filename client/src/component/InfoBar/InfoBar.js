import React from 'react';

// import onlineIcon from '../../icons/onlineIcon';
// import closeIcon from '../icons/closeIcon';

import './InfoBar.css';

const InfoBar = ({ room }) => (
  <div className="infoBar">
  <div className="leftInnerContainer">
    
    <h3>{room}</h3>
  </div>
  <div className="rightInnerContainer">
    {/* <button></button> */}
  </div>
</div>
);

export default InfoBar;