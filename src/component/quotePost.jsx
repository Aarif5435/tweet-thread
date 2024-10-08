import { useContext } from "react";
import { MdArrowBack } from "react-icons/md";
import { PopupContext } from "../contextStates/popupState";
import karanImage from "../assets/karan.png";
import { parseTextWithMentions } from "../utils/handlePage";
import { Tweet } from "./tweet";

export const QuotePost = ({tweet}) => {
  const { quoteReply, setIsQuoteOpen } = useContext(PopupContext);


  return (
    <>
      <div onClick={()=>setIsQuoteOpen(false)} className="flex text-[20px] cursor-pointer border-t border-t-[#302b2b] border-b border-b-[#302b2b] p-2">
        <MdArrowBack className="mt-[5px] mr-2" /> <h2>Post</h2>
      </div>

      {quoteReply &&
        quoteReply.map((item, index) => (
          <div className="mt-4" key={index}>
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
                  {parseTextWithMentions(item?.text)}
                </div>
                {item?.image && (
                  <img
                    src={item.image}
                    alt="Reply Image"
                    className="w-80 h-80 object-cover rounded-lg mt-2"
                  />
                )}
              </div>
            </div>
            <div className="border ml-10 border-gray-500 mt-5 overflow-hidden h-fit rounded-lg p-3">
              <Tweet tweet={tweet} />
            </div>
          </div>
        ))}
    </>
  );
};
