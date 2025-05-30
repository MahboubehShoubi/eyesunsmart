"use client";

import { useState } from "react";
import Slider from "../Slider"

function MainBannerSlider() {
  
    const [isShow, setIsShow] = useState(false);
  
  return (
    <div className="h-[80vh] w-full mt-20 sm:mt-40" onClick={() => setIsShow(false)}>
              <Slider
                silderInfo={{
                  imageList: [
                    "/image/slider/slider-2.jpg",
                    "/image/slider/slider-3.jpg",
                    "/image/slider/slider-4.jpg",
                    "/image/slider/slider-5.jpg",
                  ],
                }}
    
                //   {
                //     sliderName: "تیتر دوم",
                //     // text: "یک متن کوتاه برای تیتر دوم",
                //     src: "/image/slider/slider-2.jpg",
                //     // link: "/project",
                //   },
                //   {
                //     sliderName: "تیتر سوم",
                //     // text: "یک متن کوتاه برای تیتر سوم",
                //     src: "/image/slider/slider-3.jpg",
                //     // link: "/",
                //   },
                //   {
                //     sliderName: "تیتر سوم",
                //     // text: "یک متن کوتاه برای تیتر سوم",
                //     src: "/image/slider/slider-4.jpg",
                //     // link: "/",
                //   },
                //   {
                //     sliderName: "تیتر سوم",
                //     // text: "یک متن کوتاه برای تیتر سوم",
                //     src: "/image/slider/slider-5.jpg",
                //     // link: "/",
                //   },
                // ]}
              />
            </div>
  )
}

export default MainBannerSlider
