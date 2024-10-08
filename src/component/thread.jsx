import React, { useContext, useState } from "react";
import karanImage from "../assets/karan.png";
import { PiImageSquare } from "react-icons/pi";
import { Tweet } from "./tweet";
import QuotePopup from "./quotePop";
import { PopupContext } from "../contextStates/popupState";
import { handleImageUpload, handlePaste, parseTextWithMentions } from "../utils/handlePage";
import { QuotePost } from "./quotePost";


const Thread = ({ tweet }) => {

  const [replyText, setReplyText] = useState("");
  const [replies, setReplies] = useState([]);
  const [image, setImage] = useState(null);
  const { isPopupOpen, isQuoteOpen } = useContext(PopupContext);

  const handleReplyChange = (event) => {
    setReplyText(event.target.value);
  };

  const postReply = () => {
    if (replyText.trim() === "" && !image) return;
    setReplies([...replies, { text: replyText, image: image }]);
    setReplyText("");
    setImage(null);
  };

  return (
    <div className="max-w-xl border-l overflow-auto border-l-[#302b2b] border-r border-r-[#302b2b] pr-2 mx-auto text-white border-gray-300  p-4 mb-4 ">
      {isQuoteOpen ? (
        <QuotePost tweet={tweet} />
      ) : (
        <div>
          {isPopupOpen && <QuotePopup tweet={tweet} />}

          <Tweet tweet={tweet} />

          <div className="mt-3 p-2 border-b border-b-[#302b2b]">
            <div className="flex items-center mb-3">
              <img
                src={karanImage}
                alt="Karan"
                className="w-12 h-12 rounded-full mr-3"
              />
              <input
                type="text"
                placeholder="Post your reply"
                value={replyText}
                onPaste={(e) => handlePaste(e, setImage)}
                onChange={handleReplyChange}
                className="bg-black rounded-full px-3 py-2 w-full focus:outline-none focus:border-blue-400"
              />
            </div>
            <div className="flex justify-end">
              <button
                onClick={postReply}
                className="bg-blue-500 text-white px-4 py-2 rounded-full mt-2 hover:bg-blue-600"
              >
                Reply
              </button>
            </div>
            <span
              onClick={() => document.getElementById("imageUploader").click()}
              className="text-blue-500 cursor-pointer"
            >
              <PiImageSquare size={15} />
            </span>
            <input
              type="file"
              id="imageUploader"
              accept="image/*"
              className="hidden"
              onChange={(e) => handleImageUpload(e, setImage)}
            />
            {image && (
              <div className="mb-3 mt-5">
                <img
                  src={image}
                  alt="Preview"
                  className="w-96 h-96 object-cover rounded-lg"
                />
              </div>
            )}
          </div>

          {replies.length > 0 && (
            <div className="mt-4">
              <h3 className="text-gray-600 mb-2 font-semibold">Replies</h3>
              {replies.map((reply, index) => (
                <div className="mb-3" key={index}>
                  <div className="flex items-start mb-3 relative">
                    <img
                      src={karanImage}
                      alt="Karan"
                      className="w-12 h-12 rounded-full mr-3"
                    />
                    <div className="flex-grow">
                      <div className="flex items-center">
                        <div className="font-bold">Karan Bedi</div>
                        <div className="text-gray-500 text-sm mt-1 ml-2">
                          @karan_b
                        </div>
                      </div>
                      <div className="w-full">
                        {parseTextWithMentions(reply?.text)}
                      </div>
                      {reply?.image && (
                        <img
                          src={reply.image}
                          alt="Reply Image"
                          className="w-80 h-80 object-cover rounded-lg mt-2"
                        />
                      )}
                    </div>

                    {index < replies.length - 1 && (
                      <div className="absolute left-5 top-14 bottom-0 border-l-2 border-gray-400"></div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Thread;
