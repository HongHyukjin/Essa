import React from 'react';

export default function Section1Component () {
  return (
    <div id="section1">
      <div className="container">
        <div className="gap">
          <div className="title"></div>
          <div className="content">
            <div className="slide-container">
              <div className="slide-view">
                <ul className='slide-wrap'>
                  <li className='slide slide1'>
                    <div className="text">
                      <p className='t01'>Premium Sofa Brand</p>
                      <div className="logo">
                        <img src="./img/essa.svg" alt="" />
                      </div>
                    </div>
                    <video muted autoplay loop playsinline controls>
                      <source src='https://essasvr.kr/video/live/cf2023.mp4' type='video/mp4' />
                    </video>
                  </li>
                  <li className='slide slide2'>
                    <div className="text">
                      <p className='t02'>Caribe</p>

                    </div>
                  </li>
                  <li className='slide slide3'>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

