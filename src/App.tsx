import React from "react";
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
