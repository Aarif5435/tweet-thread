import React, { useContext, useState } from "react";
import { PiPencilSimple } from "react-icons/pi";
import { TfiViewList } from "react-icons/tfi";
import { PopupContext } from "../contextStates/popupState";

export const Tweet = ({ tweet }:any) => {
  const { user, content, media, stats } = tweet;
  const [quotes, setQuotes] = useState(false);
  const { setIsPopupOpen, setIsQuoteOpen } = useContext(PopupContext) || {
    isPopupOpen: false,
    setIsPopupOpen: () => {},
    quoteReply: [],
    setQuoteReply: () => {},
    isQuoteOpen: false,
    setIsQuoteOpen: () => {},
};;

  return (
    <div>
      <div className="flex items-center mb-3">
        <img
          src="/assets/tim.png"
          alt={`${user.display_name}`}
          className="w-12 h-12 rounded-full mr-3"
        />
        <div>
          <div className="font-bold">{user.display_name}</div>
          <div className="text-gray-500 text-sm">
            @{user.username} {user.verified && "✔️"}
          </div>
        </div>
      </div>

      <p className="text-white whitespace-pre-wrap">{content}</p>

      {media &&
        media.map((item: any, index: number) => (
          <img
            key={index}
            src="/assets/tweetImage.jpeg"
            alt="Tweet Media"
            className="rounded-lg mt-3 w-full"
          />
        ))}

      <div className="flex justify-around p-2 border-t border-b border-b-[#302b2b] border-t-[#302b2b] text-gray-500 text-sm mt-3">
        <div className="flex cursor-pointer  items-center space-x-1">
          <span>👁</span>
          <span>{stats.views}</span>
        </div>
        <div className="flex cursor-pointer  items-center space-x-1">
          <span>💬</span>
          <span>{stats.replies}</span>
        </div>
        <div  className="flex relative cursor-pointer items-center space-x-1">
          <div className="flex gap-1" onClick={()=>setQuotes(!quotes)}>
          <span>🔄</span>
          <span>{stats.retweets}</span>
          </div>
          {quotes && <div className="w-36 h-20 absolute top-9  border border-[#302b2b] rounded-lg ">
         <ul className="p-2">
            <li onClick={()=>setIsPopupOpen(true)} className="flex mb-2 cursor-pointer"><PiPencilSimple className="mt-1 mr-2" />Quotes</li>
            <li onClick={()=> setIsQuoteOpen(true)} className="flex cursor-pointer"><TfiViewList className="mt-1 mr-2"/>View Quote</li>
         </ul>
      </div>}
        </div>
        <div className="flex cursor-pointer  items-center space-x-1">
          <span>❤️</span>
          <span>{stats.likes}</span>
        </div>
        <div className="flex cursor-pointer  items-center space-x-1">
          <span>🔖</span>
          <span>{stats.bookmarks}</span>
        </div>
      </div>
      
    </div>
  );
};
