import React,{useRef} from "react"


const App = () => {
    const uploadedImage = React.useRef(null);
    const imageUploader = React.useRef(null);
  
    const handleImageUpload = e => {
      const [file] = e.target.files;
      if (file) {
        const reader = new FileReader();
        const { current } = uploadedImage;
        current.file = file;
        reader.onload = e => {
          current.src = e.target.result;
        };
        reader.readAsDataURL(file);
      }
    };
    return (
        <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "left",
          justifyContent: "left"
        }}
      >
        <input
          type="file"
          accept="image/*"
          onChange={handleImageUpload}
          ref={imageUploader}
          placeholder = "selectFile"
          style={{
            display: "none"
          }}
        />
        <div
      
          style={{
            borderRadius: "50%",
            height: "140px",
            width: "150px",
            
            border: "1px dashed black"
          }}
          onClick={() => imageUploader.current.click()}
        >
          <img
          
            ref={uploadedImage}
            style={{
            borderRadius: "50%",
              width: "100%",
              height: "100%",
              
            
              
            }}
          />
        </div>
       
      </div>
    )
}

export default App

