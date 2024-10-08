import React, { useContext, useState } from "react";
import { PiImageSquare } from "react-icons/pi";
import { Tweet } from "./tweet";
import { PopupContext } from "../contextStates/popupState";
import { handleImageUpload, handlePaste } from "../utils/handlePage";
import karanImage from "../assets/karan.png";

const QuotePopup = ({ tweet }) => {
  const {
    setIsPopupOpen,
    setQuoteReply,
    quoteReply,
    setIsQuoteOpen,
  } = useContext(PopupContext);
  const [image, setImage] = useState();
  const [quoteText, setQuoteText] = useState("");

  const postQuoteTweet = () => {
    if (quoteText.trim() === "") return;
    setQuoteReply([...quoteReply, { text: quoteText, image: image }]);
    setQuoteText("");
    setIsPopupOpen(false);
    setIsQuoteOpen(true);
  };

  console.log('quoteReply', quoteReply)

  return (
    <div className="relative">
      <div className="fixed inset-0 bg-[#15202b] bg-opacity-50 flex items-center justify-center z-50">
        <div
          className="bg-[#000000] p-6 rounded-lg w-3/6 max-w-lg shadow-lg relative text-white"
          onClick={(e) => e.stopPropagation()}
        >
          <button
            onClick={() => setIsPopupOpen(false)}
            className="absolute top-3 right-3 text-white hover:text-gray-400"
          >
            X
          </button>

          <div className="flex items-center mb-4">
            <img
              src={karanImage}
              alt="User"
              className="rounded-full w-10 h-10 mr-3"
            />
            <div>
              <p className="font-bold">Karan bedi</p>
              <p className="text-gray-500">@karan_b</p>
            </div>
          </div>

          <div className="w-full overflow-auto flex-grow h-screen max-h-96 min-h-32">
            <input
              type="text"
              placeholder="Add a comment"
              value={quoteText}
              onPaste={(e) => handlePaste(e, setImage)}
              onChange={(e) => setQuoteText(e.target.value)}
              className="bg-black rounded-full px-3 py-2 w-full focus:outline-none focus:border-blue-400"
            />

            <input
              type="file"
              id="quoteImageUploader"
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
            <div className="border border-gray-500 mt-5 overflow-hidden h-96 rounded-lg p-3">
              <Tweet tweet={tweet} />
            </div>
          </div>

          <div className="flex justify-between items-center">
            <button className="text-blue-500 flex items-center space-x-2 hover:underline">
              <PiImageSquare
                size={18}
                onClick={() =>
                  document.getElementById("quoteImageUploader").click()
                }
              />
              <span>Everyone can reply</span>
            </button>

            <button
              onClick={postQuoteTweet}
              className="bg-blue-500 mt-4 text-white px-4 py-2 rounded-full hover:bg-blue-600"
            >
              Post
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuotePopup;
