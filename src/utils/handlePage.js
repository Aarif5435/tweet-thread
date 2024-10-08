export const handlePaste = (event, setImage)=> {
  const clipboardItems = event.clipboardData.items;
  console.log('eventsss',event)
  for (let item of clipboardItems) {
    if (item.type.startsWith("image/")) {
      const file = item.getAsFile();
      if (file) {
        setImage(URL.createObjectURL(file));
      }
    }
  }
};

export const handleImageUpload = (event, setImage) => {
    const file = event.target.files[0];
    if (file && file.type.startsWith("image/")) {
      setImage(URL.createObjectURL(file));
    }
  };


  export const parseTextWithMentions = (text) => {
    const mentionRegex = /@(\w+)/g;
    const parts = text.split(mentionRegex);
  
    return parts.map((part, index) => {
      if (index % 2 === 1) {
        return (
          <span key={index} className="text-blue-500 font-semibold">
            @{part}
          </span>
        );
      }
      return part;
    });
  };