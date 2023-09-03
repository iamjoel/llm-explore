/*
* 用 react 实现轮播放组件
* 功能:
* 1. 传入图片数组，轮播图片
* 2. 支持自动播放
* 3. 支持手动播放
* 4. 支持点击图片跳转
* 5. 支持点击左右按钮切换图片
* 6. 支持点击下方小圆点切换图片
* 7. 支持循环播放
*/

import React, { useState, useEffect } from 'react';
// import './index.less';

interface Props {
  images: string[];
  autoPlay?: boolean;
  interval?: number;
}

const Carousel: React.FC<Props> = ({ images, autoPlay = true, interval = 3000 }) => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (autoPlay) {
      const timer = setInterval(() => {
        setCurrent((current + 1) % images.length);
      }, interval);
      return () => {
        clearInterval(timer);
      };
    }
  }, [autoPlay, current, images.length, interval]);

  return (
    <div className="carousel">
      <div className="carousel__images">
        {images.map((image, index) => (
          <img
            key={index}
            className="carousel__image"
            src={image}
            alt=""
            style={{ display: current === index ? 'block' : 'none' }}
          />
        ))}
      </div>
      <div className="carousel__buttons">
        <button
          className="carousel__button carousel__button--left"
          onClick={() => setCurrent((current - 1 + images.length) % images.length)}
        >
          &lt;
        </button>
        <button
          className="carousel__button carousel__button--right"
          onClick={() => setCurrent((current + 1) % images.length)}
        >
          &gt;
        </button>
      </div>
      <div className="carousel__indicators">
        {images.map((_, index) => (
          <span
            key={index}
            className="carousel__indicator"
            style={{ backgroundColor: current === index ? '#333' : '#ccc' }}
            onClick={() => setCurrent(index)}
          ></span>
        ))}
      </div>
    </div>
  );
}
