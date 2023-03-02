import React, { useState } from 'react';
import firebase from 'firebase/compat/app';
import 'firebase/compat/storage';
import './Upload.css';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyByrVU4vIpVmiCbKyKE6jztrdCQJoPD-NM",
    authDomain: "happy-457cb.firebaseapp.com",
    projectId: "happy-457cb",
    storageBucket: "happy-457cb.appspot.com",
    messagingSenderId: "678252432810",
    appId: "1:678252432810:web:83f52d8c4d55912044efd3",
    measurementId: "G-ZDSXZLDW70"
  };
firebase.initializeApp(firebaseConfig);
const storage = firebase.storage();
//const firestore = firebase.firestore();
const UploadPhoto = () => {
  const [image, setImage] = useState(null);
  const [url, setUrl] = useState(null);

  const handleUpload = () => {
  console.log("handleUpload called with image:", image);
  const storageRef = firebase.storage().ref(`images/${image.name}`);
  const uploadTask = storageRef.put(image);
  uploadTask.on(
    "state_changed",
    (snapshot) => {},
    (error) => {
        console.log("Error uploading image:", error);
    },
    () => {
      storageRef.getDownloadURL().then((url) => {
        console.log("Image uploaded. URL:", url);
        setUrl(url);
      });
    }
  );
};

  

  const handleImageChange = (e) => {
    if (e.target.files[0]) {
        const selectedImage = e.target.files[0];
        setImage(selectedImage);
      console.log("Selected image:", selectedImage);
    }
  };

  return (
    <div className="uploadPhoto">
      <div ><h1>Upload Image</h1></div>
      <div >
        <input type="file" onChange={handleImageChange} />
        <button  onClick={()=>
        {console.log("Upload button clicked");
        handleUpload();
        }}>
          Upload
        </button>
      </div>
      {url && <img  src={url} alt="Uploaded image" />}
    </div>
  );
  
};

export default UploadPhoto;
