export const handlePaste = (event : any, setImage: (image: any)=> void)=> {
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

export const handleImageUpload = (event : any, setImage: (image: any)=> void) => {
    const file = event.target.files[0];
    if (file && file.type.startsWith("image/")) {
      setImage(URL.createObjectURL(file));
    }
  };
