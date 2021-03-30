import React from "react";

class ImgCache {
  private cache: Map<String, any> = new Map<String, any>();

  public read(src: string) {
    console.debug("Storing image: " + src);
    const currentValue = this.cache.get(src);

    if (!currentValue) {
      console.debug("Cache miss: " + src);
      return new Promise((resolve, reject) => {
        const img = new Image();
        img.src = src;
        img.onload = () => {
          this.cache.set(src, img);
          resolve(img);
        };
        img.onerror = reject;
      });
    } else {
      console.debug("Cache hit: " + src);
      return Promise.resolve(currentValue);
    }
  }
}

interface ImgProps {
  src: string;
  alt: string;
}

export const ImageCacheInstance = new ImgCache();

export const Img: React.FC<any & ImgProps> = ({ src, alt, ...rest }) => {
  console.debug("Rendering image" + src);
  ImageCacheInstance.read(src);

  return <img src={src} alt={alt} {...rest} />;
};
