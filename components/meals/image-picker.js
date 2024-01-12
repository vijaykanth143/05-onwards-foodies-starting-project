"use client";

import { useRef, useState } from "react";
import styles from "./image-picker.module.css";
import Image from "next/image";

function ImagePicker({ label, name }) {
  const [image, setImage] = useState();
  const imageInput = useRef();
  const handleClick = () => {
    imageInput.current.click();
  };
  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (!file) {
      setImage(null);
      return;
    }
    const filereader = new FileReader();
    filereader.onload = () => {
      setImage(filereader.result);
    };
    filereader.readAsDataURL(file);
  };
  return (
    <div className={styles.picker}>
      <label htmlFor={name}>{label}</label>
      <div className={styles.controls}>
        <div className={styles.preview}>
          {!image && <p>No image picked at</p>}
          {image && <Image src={image} alt="The image picked by user." fill />}
        </div>
        <input
          className={styles.input}
          type="file"
          id={name}
          name={name}
          accept="image/png,image/jpeg"
          ref={imageInput}
          onChange={handleImageChange}
          required
        />
        <button className={styles.button} type="button" onClick={handleClick}>
          Pick an image
        </button>
      </div>
    </div>
  );
}

export default ImagePicker;
