import React from "react";

const cache: Map<String, any> = new Map<String, any>();

export const ImgCache = {
  read: (src: string) => {
    console.log("Storing image: " + src);
    const currentValue = cache.get(src);

    if (!currentValue) {
      console.log("Cache miss: " + src);
      const promise = new Promise((resolve, reject) => {
        const img = new Image();
        img.src = src;
        img.onload = () => {
          cache.set(src, img);
          resolve(img);
        };
        img.onerror = reject;
      });

      cache.set(src, promise);
      return promise;
    } else {
      console.log("Cache hit: " + src);
      return Promise.resolve(currentValue);
    }
  },
};

interface ImgProps {
  src: string;
  alt: string;
}

export const Img: React.FC<ImgProps> = ({ src, alt, ...rest }) => {
  console.log("Rendering image" + src);
  ImgCache.read(src);

  return <img src={src} alt={alt} {...rest} />;
};
