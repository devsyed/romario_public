import React, { useRef } from "react";



const Topbar = () => {
    return (
       <>
      
      <div id="hellobar-bar" className="regular closable">
  <div className="hb-content-wrapper">
    <div className="hb-text-wrapper">
      <div className="hb-headline-text">
        {/* <p>
          <span>
          


        Free Delivery On Orders Above AED 99
          </span> 
          <span>
          Cash On Delivery
          </span> 

        </p> */}
<ul style={{ display: "flex" }}>
  <li style={{ display: "flex", alignItems: "center" }}>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 640 512"
      height={17}
      width={17}
      style={{ marginRight: 5 }}
    >
      {/* Font Awesome Pro 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. */}
      <path
        d="M48 0C21.5 0 0 21.5 0 48V368c0 26.5 21.5 48 48 48H64c0 53 43 96 96 96s96-43 96-96H384c0 53 43 96 96 96s96-43 96-96h32c17.7 0 32-14.3 32-32s-14.3-32-32-32V288 256 237.3c0-17-6.7-33.3-18.7-45.3L512 114.7c-12-12-28.3-18.7-45.3-18.7H416V48c0-26.5-21.5-48-48-48H48zM416 160h50.7L544 237.3V256H416V160zM112 416a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm368-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z"
        fill="#ffffff"
      />
    </svg>
    <span>Free Delivery On Orders Above AED 99</span>
  </li>
  <li style={{ display: "flex", alignItems: "center" }}>
  <svg
  xmlns="http://www.w3.org/2000/svg"
  viewBox="0 0 576 512"
  height={17}
  width={17}
>
  {/* Font Awesome Pro 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. */}
  <path
    d="M0 112.5V422.3c0 18 10.1 35 27 41.3c87 32.5 174 10.3 261-11.9c79.8-20.3 159.6-40.7 239.3-18.9c23 6.3 48.7-9.5 48.7-33.4V89.7c0-18-10.1-35-27-41.3C462 15.9 375 38.1 288 60.3C208.2 80.6 128.4 100.9 48.7 79.1C25.6 72.8 0 88.6 0 112.5zM288 352c-44.2 0-80-43-80-96s35.8-96 80-96s80 43 80 96s-35.8 96-80 96zM64 352c35.3 0 64 28.7 64 64H64V352zm64-208c0 35.3-28.7 64-64 64V144h64zM512 304v64H448c0-35.3 28.7-64 64-64zM448 96h64v64c-35.3 0-64-28.7-64-64z"
    fill="#ffffff"
  />
</svg>
        <span>
          Cash On Delivery
          </span> 
  </li>
</ul>


      </div>
    </div>
  
     

  </div>
 
</div>


      </>
    


       );
    }

export default Topbar;
