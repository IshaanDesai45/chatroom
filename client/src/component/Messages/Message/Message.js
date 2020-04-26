import React from 'react';

import '../Message/Message.css'

const Message =({message:{text,user},name})=>{
    let isSentByUser = false;

    const trimmedName = name.trim().toLowerCase();

    if(user === trimmedName){
        isSentByUser =true
    }

    return (
        isSentByUser
          ? (
            <div className="messageContainer justifyEnd">
              <p className="sentText pr-10">{trimmedName}</p>
              <div className="messageBox backgroundBlue">
                  <p className="messageText ">{text}</p>
                {/* <p className="messageText colorWhite">{ReactEmoji.emojify(text)}</p> */}
              </div>
            </div>
            )
            : (
              <div className="messageContainer justifyStart">
                <div className="messageBox backgroundLight">
                <p className="messageText ">{text}</p>
                  {/* <p className="messageText colorDark">{ReactEmoji.emojify(text)}</p> */}
                </div>
                <p className="sentText pl-10 ">{user}</p>
              </div>
            )
      );

};

export default Message