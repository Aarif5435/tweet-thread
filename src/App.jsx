import logo from "./logo.svg";
import Thread from "./component/thread";
import { tweetData } from "./data";
import QuotePopup from "./component/quotePop";
import { PopupProvider } from "./contextStates/popupState";
import { TwitterThread } from "./component/twitterThread";

function App() {
  return (
    <PopupProvider>
      <TwitterThread/>
    </PopupProvider>
  );
}

export default App;
