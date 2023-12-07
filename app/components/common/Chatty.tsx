import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMessage } from '@fortawesome/free-solid-svg-icons/faMessage';
import { faInstagram } from '@fortawesome/free-brands-svg-icons/faInstagram';
import { faCommentSms } from '@fortawesome/free-solid-svg-icons/faCommentSms';
import { faTimes } from "@fortawesome/free-solid-svg-icons/faTimes";

const Chatty = () => {
  return (
    <div className="fixed left-8 bottom-8 group">
      <div className="absolute flex group-focus-within:-mt-48 w-14 h-14 bg-black rounded-full group-focus-within:opacity-0 z-30" title='Instagram'>
        <a href={'https://www.instagram.com/'} className="m-auto">
          <FontAwesomeIcon icon={faMessage} color="white" className="m-auto" size="2x" />
        </a>
      </div>
      <div className="absolute flex group-focus-within:-mt-32 w-14 h-14 rounded-full instagramBg transition-all z-20" title='Instagram'>
        <a href={'https://www.instagram.com/'} className="m-auto">
          <FontAwesomeIcon icon={faInstagram} color="white" size="2x" />
        </a>
      </div>
      <div className="absolute flex group-focus-within:-mt-16 w-14 h-14 bg-pink-400 rounded-full transition-all z-10" title='SMS'>
        <a href={'sms:+17167757931'} className="m-auto">
          <FontAwesomeIcon icon={faCommentSms} color="white" size="2x" />
        </a>
      </div>
      <div className="flex w-14 h-14 bg-black rounded-full">
        <FontAwesomeIcon icon={faMessage} color="white" className="m-auto group-focus-within:hidden transition-all" size="2x" />
        <FontAwesomeIcon icon={faTimes} color="white" className="m-auto" size="2x" />
      </div>
    </div>
  )
}

export default Chatty;
