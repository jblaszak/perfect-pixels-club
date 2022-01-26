import React, { useRef, useEffect } from "react";
import ReactDOM from "react-dom";
import * as CONSTANTS from "../constants";
import classes from "./Pixels.module.css";

class Pixel {
  constructor(color, width, height) {
    this.color = color;
    this.size =
      CONSTANTS.MIN_PIXEL_SIZE +
      Math.floor(Math.random() * CONSTANTS.MAX_PIXEL_SIZE);
    this.x = Math.random() * width;
    this.y = Math.random() * height;
    this.xVel =
      CONSTANTS.MAX_VELOCITY - Math.random() * CONSTANTS.MAX_VELOCITY * 2;
    this.yVel =
      CONSTANTS.MAX_VELOCITY - Math.random() * CONSTANTS.MAX_VELOCITY * 2;
  }
}

class PixelField {
  constructor(ctx, width, height) {
    this.ctx = ctx;
    this.width = width;
    this.height = height;
    this.colors = CONSTANTS.PIXEL_COLORS;
    this.background =
      CONSTANTS.BG_COLORS[
        Math.floor(Math.random() * CONSTANTS.BG_COLORS.length)
      ];
    this.pixels = [...Array(CONSTANTS.NUM_PIXELS)].map((val) => {
      return new Pixel(
        this.colors[Math.floor(Math.random() * this.colors.length)],
        this.width,
        this.height
      );
    });
    this.animation = null;
  }
  drawPixel = (color, x, y, size) => {
    const xSize = x + size;
    const ySize = y + size;
    const borderRadius = size * 0.2;
    this.ctx.fillStyle = color;
    this.ctx.beginPath();
    this.ctx.moveTo(xSize, ySize);
    this.ctx.arcTo(x, ySize, x, y, borderRadius);
    this.ctx.arcTo(x, y, xSize, y, borderRadius);
    this.ctx.arcTo(xSize, y, xSize, ySize, borderRadius);
    this.ctx.arcTo(xSize, ySize, x, ySize, borderRadius);
    this.ctx.fill();
  };
  animate = () => {
    cancelAnimationFrame(this.animation);

    // clear background
    this.ctx.fillStyle = this.background;
    this.ctx.fillRect(0, 0, this.width, this.height);

    for (const pixel of this.pixels) {
      // move pixel
      pixel.x += pixel.xVel;
      pixel.y += pixel.yVel;
      if (pixel.x < -CONSTANTS.MAX_PIXEL_SIZE)
        pixel.x = this.width + CONSTANTS.MAX_PIXEL_SIZE;
      if (pixel.x > this.width + CONSTANTS.MAX_PIXEL_SIZE)
        pixel.x = -CONSTANTS.MAX_PIXEL_SIZE;
      if (pixel.y < -CONSTANTS.MAX_PIXEL_SIZE)
        pixel.y = this.height + CONSTANTS.MAX_PIXEL_SIZE;
      if (pixel.y > this.height + CONSTANTS.MAX_PIXEL_SIZE)
        pixel.y = -CONSTANTS.MAX_PIXEL_SIZE;
      // draw pixel
      this.drawPixel(pixel.color, pixel.x, pixel.y, pixel.size);
    }

    this.animation = requestAnimationFrame(this.animate.bind(this));
  };
}

const useCanvas = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    canvas.width = document.documentElement.clientWidth;
    canvas.height = document.documentElement.clientHeight;

    const pixelField = new PixelField(ctx, canvas.width, canvas.height);

    pixelField.animation = requestAnimationFrame(pixelField.animate);

    const handleResize = (e) => {
      cancelAnimationFrame(pixelField.animation);
      canvas.width = document.documentElement.clientWidth;
      canvas.height = document.documentElement.clientHeight;
      pixelField.width = canvas.width;
      pixelField.height = canvas.height;

      pixelField.animation = requestAnimationFrame(pixelField.animate);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return canvasRef;
};

const PixelMap = () => {
  const canvasRef = useCanvas();

  return (
    <React.Fragment>
      {ReactDOM.createPortal(
        <div className={classes.container}>
          <canvas className={classes.canvas} ref={canvasRef} />
        </div>,
        document.getElementById("background-animation")
      )}
    </React.Fragment>
  );
};

export default PixelMap;
