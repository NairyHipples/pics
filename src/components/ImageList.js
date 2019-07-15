import './ImageList.css';
import React from "react";
import ImageCard from './ImageCard';

const ImageList = props => {
  const images = props.images.map((image, i) => {
    return <ImageCard key={i} image={image} />;
  });

  return <div className={'imageList'}>{images}</div>;
};

export default ImageList;
