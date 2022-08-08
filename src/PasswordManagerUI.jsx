import React from "react";

export default function PasswordManagerUI() {
  return (
    //     <section id="contactme" className={` body-font bg-red-600 `}>
    //       <div className="container mx-auto flex px-5 py-5 md:py-24 lg:py-24 md:flex-row flex-col items-center">
    //         <div className="lg:flex-grow mt-10 md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
    //           <img
    //             src="https://assets.ccbp.in/frontend/react-js/password-manager-lg-img.png"
    //             className=""
    //             alt="password manager"
    //           />
    //         </div>
    //         <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
    //           <form method="">
    //             <div className="lg:w-[100%] md:w-1/2 bg-gray-100 rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0">
    //               <h2 className="text-gray-800 text-lg font-bold text-center font-Ubuntu title-font mb-5">
    //                 Add New Password
    //               </h2>
    //               <div className="mb-4">
    //                 <input
    //                   type="text"
    //                   id="full-name"
    //                   name="name"
    //                   placeholder="Enter Website Name"
    //                   className="w-full placeholder-gray-800 bg-white rounded border border-gray-300 focus:border-red-500 focus:ring-2 focus:ring-red-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
    //                 />
    //               </div>
    //               <div className="mb-4">
    //                 <input
    //                   type="email"
    //                   id="email"
    //                   name="email"
    //                   placeholder="Enter Website Password"
    //                   className="w-full placeholder-gray-800 bg-white rounded border border-gray-300 focus:border-red-500 focus:ring-2 focus:ring-red-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
    //                 />
    //               </div>
    //               {/* <div className="text-white w-fit"> */}
    //               <button
    //                 type="submit"
    //                 id="Sendmessage"
    //                 // onClick={clickme}
    //                 // style={{ color: "#eee" }}
    //                 className="bg-red-700 text-red-50 hover:text-red-600 border-4 border-red-600 py-2 px-6 focus:outline-none hover:bg-white font-Ubuntu rounded-xl"
    //               >
    //                 Add
    //               </button>
    //               {/* </div> */}
    //             </div>
    //           </form>
    //         </div>
    //       </div>
    //     </section>

    // New Try
    <div class="flex">
      {/* <!-- To open on mobile, remove -translate-x-full lg:translate-x-0 and add translate-x-0 --> */}
      <div class="w-72 max-w-full bg-red-800 h-screen flex flex-col text-white fixed lg:absolute lg:sticky top-0 transition-transform transform duration-500 ease -translate-x-full lg:translate-x-0">
        <svg
          aria-hidden="true"
          focusable="false"
          data-prefix="fas"
          data-icon="bars"
          class="svg-inline--fa fa-bars fa-w-14 absolute right-0 transform translate-x-double top-0 mt-8 text-3xl text-red-800 cursor-pointer lg:hidden"
          role="img"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 448 512"
        >
          <path
            fill="currentColor"
            d="M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z"
          ></path>
        </svg>
        <a href="#" class="no-underline block mt-6">
          <img
            // src="https://gustui.s3.amazonaws.com/Gust+Logo+White.png"
            class="w-40 mx-auto"
          />
        </a>
        <div class="flex-1 mt-8">
          <div class="px-8">
            <div
              class="inline-block rounded-sm font-medium border border-solid cursor-pointer text-center text-sm py-2 px-4 text-white bg-green-400 border-green-400 hover:bg-green-600 hover:border-green-600 w-full"
              type=""
            >
              Add Password
            </div>
          </div>
          <div class="mt-6">
            <a
              href="#"
              class="flex justify-between no-underline w-full px-8 py-3 border-l-4 text-sm transition-colors duration-200 ease-in-out hover:text-red-400 bg-red-800 border-red-400"
            >
              <div>
                <svg
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="fas"
                  data-icon="home"
                  class="svg-inline--fa fa-home fa-w-18 mr-4"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 576 512"
                >
                  <path
                    fill="currentColor"
                    d="M280.37 148.26L96 300.11V464a16 16 0 0 0 16 16l112.06-.29a16 16 0 0 0 15.92-16V368a16 16 0 0 1 16-16h64a16 16 0 0 1 16 16v95.64a16 16 0 0 0 16 16.05L464 480a16 16 0 0 0 16-16V300L295.67 148.26a12.19 12.19 0 0 0-15.3 0zM571.6 251.47L488 182.56V44.05a12 12 0 0 0-12-12h-56a12 12 0 0 0-12 12v72.61L318.47 43a48 48 0 0 0-61 0L4.34 251.47a12 12 0 0 0-1.6 16.9l25.5 31A12 12 0 0 0 45.15 301l235.22-193.74a12.19 12.19 0 0 1 15.3 0L530.9 301a12 12 0 0 0 16.9-1.6l25.5-31a12 12 0 0 0-1.7-16.93z"
                  ></path>
                </svg>
                Home
              </div>
            </a>
            <a
              href="#"
              class="flex justify-between no-underline w-full px-8 py-3 border-l-2 border-transparent text-sm transition-colors duration-200 ease-in-out hover:text-red-400"
            >
              <div>
                <svg
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="fas"
                  data-icon="dog"
                  class="svg-inline--fa fa-dog fa-w-18 mr-4"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 576 512"
                >
                  <path
                    fill="currentColor"
                    d="M298.06,224,448,277.55V496a16,16,0,0,1-16,16H368a16,16,0,0,1-16-16V384H192V496a16,16,0,0,1-16,16H112a16,16,0,0,1-16-16V282.09C58.84,268.84,32,233.66,32,192a32,32,0,0,1,64,0,32.06,32.06,0,0,0,32,32ZM544,112v32a64,64,0,0,1-64,64H448v35.58L320,197.87V48c0-14.25,17.22-21.39,27.31-11.31L374.59,64h53.63c10.91,0,23.75,7.92,28.62,17.69L464,96h64A16,16,0,0,1,544,112Zm-112,0a16,16,0,1,0-16,16A16,16,0,0,0,432,112Z"
                  ></path>
                </svg>
                Passwords
              </div>
              <span class="rounded-sm py-1 px-2 text-xs font-medium text-white bg-gray-800">
                3
              </span>
            </a>
            <a
              href="#"
              class="flex justify-between no-underline w-full px-8 py-3 border-l-2 border-transparent text-sm transition-colors duration-200 ease-in-out hover:text-red-400"
            >
              <div>
                <svg
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="fas"
                  data-icon="bone"
                  class="svg-inline--fa fa-bone fa-w-20 mr-4"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 640 512"
                >
                  <path
                    fill="currentColor"
                    d="M598.88 244.56c25.2-12.6 41.12-38.36 41.12-66.53v-7.64C640 129.3 606.7 96 565.61 96c-32.02 0-60.44 20.49-70.57 50.86-7.68 23.03-11.6 45.14-38.11 45.14H183.06c-27.38 0-31.58-25.54-38.11-45.14C134.83 116.49 106.4 96 74.39 96 33.3 96 0 129.3 0 170.39v7.64c0 28.17 15.92 53.93 41.12 66.53 9.43 4.71 9.43 18.17 0 22.88C15.92 280.04 0 305.8 0 333.97v7.64C0 382.7 33.3 416 74.38 416c32.02 0 60.44-20.49 70.57-50.86 7.68-23.03 11.6-45.14 38.11-45.14h273.87c27.38 0 31.58 25.54 38.11 45.14C505.17 395.51 533.6 416 565.61 416c41.08 0 74.38-33.3 74.38-74.39v-7.64c0-28.18-15.92-53.93-41.12-66.53-9.42-4.71-9.42-18.17.01-22.88z"
                  ></path>
                </svg>
                Generate New Password
              </div>
            </a>
            <a
              href="#"
              class="flex justify-between no-underline w-full px-8 py-3 border-l-2 border-transparent text-sm transition-colors duration-200 ease-in-out hover:text-red-400"
            >
              <div>
                <svg
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="fas"
                  data-icon="cog"
                  class="svg-inline--fa fa-cog fa-w-16 mr-4"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                >
                  <path
                    fill="currentColor"
                    d="M487.4 315.7l-42.6-24.6c4.3-23.2 4.3-47 0-70.2l42.6-24.6c4.9-2.8 7.1-8.6 5.5-14-11.1-35.6-30-67.8-54.7-94.6-3.8-4.1-10-5.1-14.8-2.3L380.8 110c-17.9-15.4-38.5-27.3-60.8-35.1V25.8c0-5.6-3.9-10.5-9.4-11.7-36.7-8.2-74.3-7.8-109.2 0-5.5 1.2-9.4 6.1-9.4 11.7V75c-22.2 7.9-42.8 19.8-60.8 35.1L88.7 85.5c-4.9-2.8-11-1.9-14.8 2.3-24.7 26.7-43.6 58.9-54.7 94.6-1.7 5.4.6 11.2 5.5 14L67.3 221c-4.3 23.2-4.3 47 0 70.2l-42.6 24.6c-4.9 2.8-7.1 8.6-5.5 14 11.1 35.6 30 67.8 54.7 94.6 3.8 4.1 10 5.1 14.8 2.3l42.6-24.6c17.9 15.4 38.5 27.3 60.8 35.1v49.2c0 5.6 3.9 10.5 9.4 11.7 36.7 8.2 74.3 7.8 109.2 0 5.5-1.2 9.4-6.1 9.4-11.7v-49.2c22.2-7.9 42.8-19.8 60.8-35.1l42.6 24.6c4.9 2.8 11 1.9 14.8-2.3 24.7-26.7 43.6-58.9 54.7-94.6 1.5-5.5-.7-11.3-5.6-14.1zM256 336c-44.1 0-80-35.9-80-80s35.9-80 80-80 80 35.9 80 80-35.9 80-80 80z"
                  ></path>
                </svg>
                Settings
              </div>
            </a>
          </div>
          {/* <div class="mt-6 px-8">
            <h5 class="text-gray-300 text-sm font-medium">Foods</h5>
            <div class="mt-2">
              <a
                href="#"
                class="block no-underline text-sm py-1 transition-colors duration-200 ease-in-out hover:text-red-400"
              >
                Peanut Butter
              </a>
              <a
                href="#"
                class="block no-underline text-sm py-1 transition-colors duration-200 ease-in-out hover:text-red-400"
              >
                Pepperoni Pizza
              </a>
              <a
                href="#"
                class="block no-underline text-sm py-1 transition-colors duration-200 ease-in-out hover:text-red-400"
              >
                Spaghetti &amp; Meatballs
              </a>
              <a
                href="#"
                class="block no-underline text-sm py-1 transition-colors duration-200 ease-in-out hover:text-red-400"
              >
                Bacon Bits
              </a>
            </div>
          </div> */}
        </div>
        <div class="flex px-8 py-6 items-center">
          <div class="relative rounded-full w-12 h-12">
            <img
            //   src="https://gustui.s3.amazonaws.com/avatar.png"
              class="absolute left-0 top-0 w-full h-full rounded-full object-cover"
            />
          </div>
          <div class="flex-1 ml-4">
            <p class="font-medium leading-none">Rishab Mandal</p>
            <a href="#" class="no-underline text-xs text-gray-300 leading-none">
              Edit Profile
            </a>
          </div>
        </div>
      </div>
      <div class="flex-1 min-h-screen bg-gray-200">
        <div class="w-full py-6 px-6 bg-white border-b border-gray-300 flex justify-between items-center">
          <h2 class="text-lg font-bold text-red-800 pl-12 lg:pl-0">Home</h2>
          <div class="flex items-center">
            <svg
              aria-hidden="true"
              focusable="false"
              data-prefix="fas"
              data-icon="question-circle"
              class="svg-inline--fa fa-question-circle fa-w-16 text-xl cursor-pointer ml-4"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              <path
                fill="currentColor"
                d="M504 256c0 136.997-111.043 248-248 248S8 392.997 8 256C8 119.083 119.043 8 256 8s248 111.083 248 248zM262.655 90c-54.497 0-89.255 22.957-116.549 63.758-3.536 5.286-2.353 12.415 2.715 16.258l34.699 26.31c5.205 3.947 12.621 3.008 16.665-2.122 17.864-22.658 30.113-35.797 57.303-35.797 20.429 0 45.698 13.148 45.698 32.958 0 14.976-12.363 22.667-32.534 33.976C247.128 238.528 216 254.941 216 296v4c0 6.627 5.373 12 12 12h56c6.627 0 12-5.373 12-12v-1.333c0-28.462 83.186-29.647 83.186-106.667 0-58.002-60.165-102-116.531-102zM256 338c-25.365 0-46 20.635-46 46 0 25.364 20.635 46 46 46s46-20.636 46-46c0-25.365-20.635-46-46-46z"
              ></path>
            </svg>
            <svg
              aria-hidden="true"
              focusable="false"
              data-prefix="fas"
              data-icon="bell"
              class="svg-inline--fa fa-bell fa-w-14 text-xl cursor-pointer ml-4"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
            >
              <path
                fill="currentColor"
                d="M224 512c35.32 0 63.97-28.65 63.97-64H160.03c0 35.35 28.65 64 63.97 64zm215.39-149.71c-19.32-20.76-55.47-51.99-55.47-154.29 0-77.7-54.48-139.9-127.94-155.16V32c0-17.67-14.32-32-31.98-32s-31.98 14.33-31.98 32v20.84C118.56 68.1 64.08 130.3 64.08 208c0 102.3-36.15 133.53-55.47 154.29-6 6.45-8.66 14.16-8.61 21.71.11 16.4 12.98 32 32.1 32h383.8c19.12 0 32-15.6 32.1-32 .05-7.55-2.61-15.27-8.61-21.71z"
              ></path>
            </svg>
            <div class="relative ml-4">
              <div class="cursor-pointer relative rounded-full w-12 h-12">
                <img
                  src="https://picsum.photos/id/237/200/200.jpg"
                  class="absolute left-0 top-0 w-full h-full rounded-full object-cover"
                />
                <div class="absolute rounded-full right-0 top-0 w-4 h-4 bg-green-400"></div>
              </div>
            </div>
          </div>
        </div>
        <div class="w-full max-w-screen-xl py-12 px-6">
          <div class="mb-12">
            <h2 class="text-3xl font-bold mb-4">Overview</h2>
            <div class="flex flex-wrap justify-between">
              <div class="mb-6 xl:mb-0 w-96 sm:w-full max-w-full sm:max-w-xs flex flex-col-reverse sm:flex-row items-center justify-between border border-gray-300 rounded-sm bg-white p-6">
                <div class="">
                  <span class="text-6xl font-bold block leading-none text-center sm:text-left">
                    24
                  </span>
                  <span class="mt-2 block text-center sm:text-left">
                    Subscribers
                  </span>
                </div>
                <svg
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="fas"
                  data-icon="users"
                  class="svg-inline--fa fa-users fa-w-20 mb-2 sm:mb-0 sm:mr-2 text-5xl sm:text-6xl text-red-800"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 640 512"
                >
                  <path
                    fill="currentColor"
                    d="M96 224c35.3 0 64-28.7 64-64s-28.7-64-64-64-64 28.7-64 64 28.7 64 64 64zm448 0c35.3 0 64-28.7 64-64s-28.7-64-64-64-64 28.7-64 64 28.7 64 64 64zm32 32h-64c-17.6 0-33.5 7.1-45.1 18.6 40.3 22.1 68.9 62 75.1 109.4h66c17.7 0 32-14.3 32-32v-32c0-35.3-28.7-64-64-64zm-256 0c61.9 0 112-50.1 112-112S381.9 32 320 32 208 82.1 208 144s50.1 112 112 112zm76.8 32h-8.3c-20.8 10-43.9 16-68.5 16s-47.6-6-68.5-16h-8.3C179.6 288 128 339.6 128 403.2V432c0 26.5 21.5 48 48 48h288c26.5 0 48-21.5 48-48v-28.8c0-63.6-51.6-115.2-115.2-115.2zm-223.7-13.4C161.5 263.1 145.6 256 128 256H64c-35.3 0-64 28.7-64 64v32c0 17.7 14.3 32 32 32h65.9c6.3-47.4 34.9-87.3 75.2-109.4z"
                  ></path>
                </svg>
              </div>
              <div class="mb-6 xl:mb-0 w-96 sm:w-full max-w-full sm:max-w-xs flex flex-col-reverse sm:flex-row items-center justify-between border border-gray-300 rounded-sm bg-white p-6">
                <div class="">
                  <span class="text-4xl font-bold block leading-none text-center sm:text-left">
                    328,743
                  </span>
                  <span class="mt-2 block text-center sm:text-left">
                    Total Views
                  </span>
                </div>
                <svg
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="fas"
                  data-icon="eye"
                  class="svg-inline--fa fa-eye fa-w-18 mb-2 sm:mb-0 sm:mr-2 text-5xl sm:text-6xl text-red-800"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 576 512"
                >
                  <path
                    fill="currentColor"
                    d="M572.52 241.4C518.29 135.59 410.93 64 288 64S57.68 135.64 3.48 241.41a32.35 32.35 0 0 0 0 29.19C57.71 376.41 165.07 448 288 448s230.32-71.64 284.52-177.41a32.35 32.35 0 0 0 0-29.19zM288 400a144 144 0 1 1 144-144 143.93 143.93 0 0 1-144 144zm0-240a95.31 95.31 0 0 0-25.31 3.79 47.85 47.85 0 0 1-66.9 66.9A95.78 95.78 0 1 0 288 160z"
                  ></path>
                </svg>
              </div>
              <div class="mb-6 xl:mb-0 w-96 sm:w-full max-w-full sm:max-w-xs flex flex-col-reverse sm:flex-row items-center justify-between border border-gray-300 rounded-sm bg-white p-6">
                <div class="">
                  <span class="text-6xl font-bold block leading-none text-center sm:text-left">
                    2
                  </span>
                  <span class="mt-2 block text-center sm:text-left">
                    Unread Messages
                  </span>
                </div>
                <svg
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="fas"
                  data-icon="envelope"
                  class="svg-inline--fa fa-envelope fa-w-16 mb-2 sm:mb-0 sm:mr-2 text-5xl sm:text-6xl text-red-800"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                >
                  <path
                    fill="currentColor"
                    d="M502.3 190.8c3.9-3.1 9.7-.2 9.7 4.7V400c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V195.6c0-5 5.7-7.8 9.7-4.7 22.4 17.4 52.1 39.5 154.1 113.6 21.1 15.4 56.7 47.8 92.2 47.6 35.7.3 72-32.8 92.3-47.6 102-74.1 131.6-96.3 154-113.7zM256 320c23.2.4 56.6-29.2 73.4-41.4 132.7-96.3 142.8-104.7 173.4-128.7 5.8-4.5 9.2-11.5 9.2-18.9v-19c0-26.5-21.5-48-48-48H48C21.5 64 0 85.5 0 112v19c0 7.4 3.4 14.3 9.2 18.9 30.6 23.9 40.7 32.4 173.4 128.7 16.8 12.2 50.2 41.8 73.4 41.4z"
                  ></path>
                </svg>
              </div>
            </div>
          </div>
          <div class="mb-12">
            <h2 class="text-3xl font-bold mb-4">Recent Passwords</h2>
            <table class="w-full table-auto rounded-sm">
              <thead>
                <tr>
                  <th class="px-4 py-4 text-left bg-red-800 text-white text-sm font-medium">
                    Website Name
                  </th>
                  <th class="px-4 py-4 text-left bg-red-800 text-white text-sm font-medium">
                    Password
                  </th>
                  <th class="px-4 py-4 text-left bg-red-800 text-white text-sm font-medium">
                    Date
                  </th>
                  <th class="px-4 py-4 text-left bg-red-800 text-white text-sm font-medium">
                    Password Strength
                  </th>
                  <th class="px-4 py-4 text-left bg-red-800 text-white text-sm font-medium">
                    Price
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr class="border-gray-300 even:bg-gray-300">
                  <td class="px-4 py-8 border-t border-b border-gray-300 text-sm">
                    <img
                      src="https://www.brandingmag.com/wp-content/uploads/2012/08/D-FINAL.png"
                      class="h-8"
                    />
                  </td>
                  <td class="px-4 py-8 border-t border-b border-gray-300 text-sm">
                    Pizza
                  </td>
                  <td class="px-4 py-8 border-t border-b border-gray-300 text-sm">
                    March 1st
                  </td>
                  <td class="px-4 py-8 border-t border-b border-gray-300 text-sm">
                    9
                  </td>
                  <td class="px-4 py-8 border-t border-b border-gray-300 text-sm">
                    $10
                  </td>
                </tr>
                <tr class="border-gray-300 even:bg-gray-300">
                  <td class="px-4 py-8 border-t border-b border-gray-300 text-sm">
                    <img
                      src="https://i.pinimg.com/originals/58/d7/9a/58d79a969ace9ba5c35fc12dd73cedb2.jpg"
                      class="h-8"
                    />
                  </td>
                  <td class="px-4 py-8 border-t border-b border-gray-300 text-sm">
                    Hot Dog
                  </td>
                  <td class="px-4 py-8 border-t border-b border-gray-300 text-sm">
                    March 5th
                  </td>
                  <td class="px-4 py-8 border-t border-b border-gray-300 text-sm">
                    10
                  </td>
                  <td class="px-4 py-8 border-t border-b border-gray-300 text-sm">
                    5
                  </td>
                </tr>
                <tr class="border-gray-300 even:bg-gray-300">
                  <td class="px-4 py-8 border-t border-b border-gray-300 text-sm">
                    <img
                      src="https://cdn.worldvectorlogo.com/logos/hanes-4.svg"
                      class="h-8"
                    />
                  </td>
                  <td class="px-4 py-8 border-t border-b border-gray-300 text-sm">
                    Sock
                  </td>
                  <td class="px-4 py-8 border-t border-b border-gray-300 text-sm">
                    March 12th
                  </td>
                  <td class="px-4 py-8 border-t border-b border-gray-300 text-sm">
                    4
                  </td>
                  <td class="px-4 py-8 border-t border-b border-gray-300 text-sm">
                    Free
                  </td>
                </tr>
                <tr class="border-gray-300 even:bg-gray-300">
                  <td class="px-4 py-8 border-t border-b border-gray-300 text-sm">
                    <img
                      src="https://logos-download.com/wp-content/uploads/2016/04/Five_Guys_logo_logotype_burgers_and_fries.png"
                      class="h-8"
                    />
                  </td>
                  <td class="px-4 py-8 border-t border-b border-gray-300 text-sm">
                    Burger
                  </td>
                  <td class="px-4 py-8 border-t border-b border-gray-300 text-sm">
                    March 31st
                  </td>
                  <td class="px-4 py-8 border-t border-b border-gray-300 text-sm">
                    10
                  </td>
                  <td class="px-4 py-8 border-t border-b border-gray-300 text-sm">
                    $7
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

<div class="flex">
  {/* <!-- To open on mobile, remove -translate-x-full lg:translate-x-0 and add translate-x-0 --> */}
  <div class="w-72 max-w-full bg-red-800 h-screen flex flex-col text-white fixed lg:absolute lg:sticky top-0 transition-transform transform duration-500 ease -translate-x-full lg:translate-x-0">
    <svg
      aria-hidden="true"
      focusable="false"
      data-prefix="fas"
      data-icon="bars"
      class="svg-inline--fa fa-bars fa-w-14 absolute right-0 transform translate-x-double top-0 mt-8 text-3xl text-red-800 cursor-pointer lg:hidden"
      role="img"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 448 512"
    >
      <path
        fill="currentColor"
        d="M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z"
      ></path>
    </svg>
    <a href="#" class="no-underline block mt-6">
      {/* <img
        src="https://gustui.s3.amazonaws.com/Gust+Logo+White.png"
        class="w-40 mx-auto"
      /> */}
    </a>
    <div class="flex-1 mt-8">
      <div class="px-8">
        <div
          class="inline-block rounded-sm font-medium border border-solid cursor-pointer text-center text-sm py-2 px-4 text-white bg-green-400 border-green-400 hover:bg-green-600 hover:border-green-600 w-full"
          type=""
        >
          Add Password
        </div>
      </div>
      <div class="mt-6">
        <a
          href="#"
          class="flex justify-between no-underline w-full px-8 py-3 border-l-4 text-sm transition-colors duration-200 ease-in-out hover:text-red-400 bg-red-800 border-red-400"
        >
          <div>
            <svg
              aria-hidden="true"
              focusable="false"
              data-prefix="fas"
              data-icon="home"
              class="svg-inline--fa fa-home fa-w-18 mr-4"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 576 512"
            >
              <path
                fill="currentColor"
                d="M280.37 148.26L96 300.11V464a16 16 0 0 0 16 16l112.06-.29a16 16 0 0 0 15.92-16V368a16 16 0 0 1 16-16h64a16 16 0 0 1 16 16v95.64a16 16 0 0 0 16 16.05L464 480a16 16 0 0 0 16-16V300L295.67 148.26a12.19 12.19 0 0 0-15.3 0zM571.6 251.47L488 182.56V44.05a12 12 0 0 0-12-12h-56a12 12 0 0 0-12 12v72.61L318.47 43a48 48 0 0 0-61 0L4.34 251.47a12 12 0 0 0-1.6 16.9l25.5 31A12 12 0 0 0 45.15 301l235.22-193.74a12.19 12.19 0 0 1 15.3 0L530.9 301a12 12 0 0 0 16.9-1.6l25.5-31a12 12 0 0 0-1.7-16.93z"
              ></path>
            </svg>
            Home
          </div>
        </a>
        <a
          href="#"
          class="flex justify-between no-underline w-full px-8 py-3 border-l-2 border-transparent text-sm transition-colors duration-200 ease-in-out hover:text-red-400"
        >
          <div>
            <svg
              aria-hidden="true"
              focusable="false"
              data-prefix="fas"
              data-icon="dog"
              class="svg-inline--fa fa-dog fa-w-18 mr-4"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 576 512"
            >
              <path
                fill="currentColor"
                d="M298.06,224,448,277.55V496a16,16,0,0,1-16,16H368a16,16,0,0,1-16-16V384H192V496a16,16,0,0,1-16,16H112a16,16,0,0,1-16-16V282.09C58.84,268.84,32,233.66,32,192a32,32,0,0,1,64,0,32.06,32.06,0,0,0,32,32ZM544,112v32a64,64,0,0,1-64,64H448v35.58L320,197.87V48c0-14.25,17.22-21.39,27.31-11.31L374.59,64h53.63c10.91,0,23.75,7.92,28.62,17.69L464,96h64A16,16,0,0,1,544,112Zm-112,0a16,16,0,1,0-16,16A16,16,0,0,0,432,112Z"
              ></path>
            </svg>
            Passwords
          </div>
          <span class="rounded-sm py-1 px-2 text-xs font-medium text-white bg-gray-800">
            3
          </span>
        </a>
        <a
          href="#"
          class="flex justify-between no-underline w-full px-8 py-3 border-l-2 border-transparent text-sm transition-colors duration-200 ease-in-out hover:text-red-400"
        >
          <div>
            <svg
              aria-hidden="true"
              focusable="false"
              data-prefix="fas"
              data-icon="bone"
              class="svg-inline--fa fa-bone fa-w-20 mr-4"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 640 512"
            >
              <path
                fill="currentColor"
                d="M598.88 244.56c25.2-12.6 41.12-38.36 41.12-66.53v-7.64C640 129.3 606.7 96 565.61 96c-32.02 0-60.44 20.49-70.57 50.86-7.68 23.03-11.6 45.14-38.11 45.14H183.06c-27.38 0-31.58-25.54-38.11-45.14C134.83 116.49 106.4 96 74.39 96 33.3 96 0 129.3 0 170.39v7.64c0 28.17 15.92 53.93 41.12 66.53 9.43 4.71 9.43 18.17 0 22.88C15.92 280.04 0 305.8 0 333.97v7.64C0 382.7 33.3 416 74.38 416c32.02 0 60.44-20.49 70.57-50.86 7.68-23.03 11.6-45.14 38.11-45.14h273.87c27.38 0 31.58 25.54 38.11 45.14C505.17 395.51 533.6 416 565.61 416c41.08 0 74.38-33.3 74.38-74.39v-7.64c0-28.18-15.92-53.93-41.12-66.53-9.42-4.71-9.42-18.17.01-22.88z"
              ></path>
            </svg>
            Generate New Password
          </div>
        </a>
        <a
          href="#"
          class="flex justify-between no-underline w-full px-8 py-3 border-l-2 border-transparent text-sm transition-colors duration-200 ease-in-out hover:text-red-400"
        >
          <div>
            <svg
              aria-hidden="true"
              focusable="false"
              data-prefix="fas"
              data-icon="cog"
              class="svg-inline--fa fa-cog fa-w-16 mr-4"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              <path
                fill="currentColor"
                d="M487.4 315.7l-42.6-24.6c4.3-23.2 4.3-47 0-70.2l42.6-24.6c4.9-2.8 7.1-8.6 5.5-14-11.1-35.6-30-67.8-54.7-94.6-3.8-4.1-10-5.1-14.8-2.3L380.8 110c-17.9-15.4-38.5-27.3-60.8-35.1V25.8c0-5.6-3.9-10.5-9.4-11.7-36.7-8.2-74.3-7.8-109.2 0-5.5 1.2-9.4 6.1-9.4 11.7V75c-22.2 7.9-42.8 19.8-60.8 35.1L88.7 85.5c-4.9-2.8-11-1.9-14.8 2.3-24.7 26.7-43.6 58.9-54.7 94.6-1.7 5.4.6 11.2 5.5 14L67.3 221c-4.3 23.2-4.3 47 0 70.2l-42.6 24.6c-4.9 2.8-7.1 8.6-5.5 14 11.1 35.6 30 67.8 54.7 94.6 3.8 4.1 10 5.1 14.8 2.3l42.6-24.6c17.9 15.4 38.5 27.3 60.8 35.1v49.2c0 5.6 3.9 10.5 9.4 11.7 36.7 8.2 74.3 7.8 109.2 0 5.5-1.2 9.4-6.1 9.4-11.7v-49.2c22.2-7.9 42.8-19.8 60.8-35.1l42.6 24.6c4.9 2.8 11 1.9 14.8-2.3 24.7-26.7 43.6-58.9 54.7-94.6 1.5-5.5-.7-11.3-5.6-14.1zM256 336c-44.1 0-80-35.9-80-80s35.9-80 80-80 80 35.9 80 80-35.9 80-80 80z"
              ></path>
            </svg>
            Settings
          </div>
        </a>
      </div>
      {/* <div class="mt-6 px-8">
        <h5 class="text-gray-300 text-sm font-medium">Foods</h5>
        <div class="mt-2">
          <a
            href="#"
            class="block no-underline text-sm py-1 transition-colors duration-200 ease-in-out hover:text-red-400"
          >
            Peanut Butter
          </a>
          <a
            href="#"
            class="block no-underline text-sm py-1 transition-colors duration-200 ease-in-out hover:text-red-400"
          >
            Pepperoni Pizza
          </a>
          <a
            href="#"
            class="block no-underline text-sm py-1 transition-colors duration-200 ease-in-out hover:text-red-400"
          >
            Spaghetti &amp; Meatballs
          </a>
          <a
            href="#"
            class="block no-underline text-sm py-1 transition-colors duration-200 ease-in-out hover:text-red-400"
          >
            Bacon Bits
          </a>
        </div>
      </div> */}
    </div>
    <div class="flex px-8 py-6 items-center">
      <div class="relative rounded-full w-12 h-12">
        <img
        //   src="https://gustui.s3.amazonaws.com/avatar.png"
          class="absolute left-0 top-0 w-full h-full rounded-full object-cover"
        />
      </div>
      <div class="flex-1 ml-4">
        <p class="font-medium leading-none">Rishab Mandal</p>
        <a href="#" class="no-underline text-xs text-gray-300 leading-none">
          Edit Profile
        </a>
      </div>
    </div>
  </div>
  <div class="flex-1 min-h-screen bg-gray-200">
    <div class="w-full py-6 px-6 bg-white border-b border-gray-300 flex justify-between items-center">
      <h2 class="text-lg font-bold text-red-800 pl-12 lg:pl-0">Home</h2>
      <div class="flex items-center">
        <svg
          aria-hidden="true"
          focusable="false"
          data-prefix="fas"
          data-icon="question-circle"
          class="svg-inline--fa fa-question-circle fa-w-16 text-xl cursor-pointer ml-4"
          role="img"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
        >
          <path
            fill="currentColor"
            d="M504 256c0 136.997-111.043 248-248 248S8 392.997 8 256C8 119.083 119.043 8 256 8s248 111.083 248 248zM262.655 90c-54.497 0-89.255 22.957-116.549 63.758-3.536 5.286-2.353 12.415 2.715 16.258l34.699 26.31c5.205 3.947 12.621 3.008 16.665-2.122 17.864-22.658 30.113-35.797 57.303-35.797 20.429 0 45.698 13.148 45.698 32.958 0 14.976-12.363 22.667-32.534 33.976C247.128 238.528 216 254.941 216 296v4c0 6.627 5.373 12 12 12h56c6.627 0 12-5.373 12-12v-1.333c0-28.462 83.186-29.647 83.186-106.667 0-58.002-60.165-102-116.531-102zM256 338c-25.365 0-46 20.635-46 46 0 25.364 20.635 46 46 46s46-20.636 46-46c0-25.365-20.635-46-46-46z"
          ></path>
        </svg>
        <svg
          aria-hidden="true"
          focusable="false"
          data-prefix="fas"
          data-icon="bell"
          class="svg-inline--fa fa-bell fa-w-14 text-xl cursor-pointer ml-4"
          role="img"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 448 512"
        >
          <path
            fill="currentColor"
            d="M224 512c35.32 0 63.97-28.65 63.97-64H160.03c0 35.35 28.65 64 63.97 64zm215.39-149.71c-19.32-20.76-55.47-51.99-55.47-154.29 0-77.7-54.48-139.9-127.94-155.16V32c0-17.67-14.32-32-31.98-32s-31.98 14.33-31.98 32v20.84C118.56 68.1 64.08 130.3 64.08 208c0 102.3-36.15 133.53-55.47 154.29-6 6.45-8.66 14.16-8.61 21.71.11 16.4 12.98 32 32.1 32h383.8c19.12 0 32-15.6 32.1-32 .05-7.55-2.61-15.27-8.61-21.71z"
          ></path>
        </svg>
        <div class="relative ml-4">
          <div class="cursor-pointer relative rounded-full w-12 h-12">
            <img
              src="https://picsum.photos/id/237/200/200.jpg"
              class="absolute left-0 top-0 w-full h-full rounded-full object-cover"
            />
            <div class="absolute rounded-full right-0 top-0 w-4 h-4 bg-green-400"></div>
          </div>
        </div>
      </div>
    </div>
    <div class="w-full max-w-screen-xl py-12 px-6">
      <div class="mb-12">
        <h2 class="text-3xl font-bold mb-4">Overview</h2>
        <div class="flex flex-wrap justify-between">
          <div class="mb-6 xl:mb-0 w-96 sm:w-full max-w-full sm:max-w-xs flex flex-col-reverse sm:flex-row items-center justify-between border border-gray-300 rounded-sm bg-white p-6">
            <div class="">
              <span class="text-6xl font-bold block leading-none text-center sm:text-left">
                24
              </span>
              <span class="mt-2 block text-center sm:text-left">
                Subscribers
              </span>
            </div>
            <svg
              aria-hidden="true"
              focusable="false"
              data-prefix="fas"
              data-icon="users"
              class="svg-inline--fa fa-users fa-w-20 mb-2 sm:mb-0 sm:mr-2 text-5xl sm:text-6xl text-red-800"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 640 512"
            >
              <path
                fill="currentColor"
                d="M96 224c35.3 0 64-28.7 64-64s-28.7-64-64-64-64 28.7-64 64 28.7 64 64 64zm448 0c35.3 0 64-28.7 64-64s-28.7-64-64-64-64 28.7-64 64 28.7 64 64 64zm32 32h-64c-17.6 0-33.5 7.1-45.1 18.6 40.3 22.1 68.9 62 75.1 109.4h66c17.7 0 32-14.3 32-32v-32c0-35.3-28.7-64-64-64zm-256 0c61.9 0 112-50.1 112-112S381.9 32 320 32 208 82.1 208 144s50.1 112 112 112zm76.8 32h-8.3c-20.8 10-43.9 16-68.5 16s-47.6-6-68.5-16h-8.3C179.6 288 128 339.6 128 403.2V432c0 26.5 21.5 48 48 48h288c26.5 0 48-21.5 48-48v-28.8c0-63.6-51.6-115.2-115.2-115.2zm-223.7-13.4C161.5 263.1 145.6 256 128 256H64c-35.3 0-64 28.7-64 64v32c0 17.7 14.3 32 32 32h65.9c6.3-47.4 34.9-87.3 75.2-109.4z"
              ></path>
            </svg>
          </div>
          <div class="mb-6 xl:mb-0 w-96 sm:w-full max-w-full sm:max-w-xs flex flex-col-reverse sm:flex-row items-center justify-between border border-gray-300 rounded-sm bg-white p-6">
            <div class="">
              <span class="text-4xl font-bold block leading-none text-center sm:text-left">
                328,743
              </span>
              <span class="mt-2 block text-center sm:text-left">
                Total Views
              </span>
            </div>
            <svg
              aria-hidden="true"
              focusable="false"
              data-prefix="fas"
              data-icon="eye"
              class="svg-inline--fa fa-eye fa-w-18 mb-2 sm:mb-0 sm:mr-2 text-5xl sm:text-6xl text-red-800"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 576 512"
            >
              <path
                fill="currentColor"
                d="M572.52 241.4C518.29 135.59 410.93 64 288 64S57.68 135.64 3.48 241.41a32.35 32.35 0 0 0 0 29.19C57.71 376.41 165.07 448 288 448s230.32-71.64 284.52-177.41a32.35 32.35 0 0 0 0-29.19zM288 400a144 144 0 1 1 144-144 143.93 143.93 0 0 1-144 144zm0-240a95.31 95.31 0 0 0-25.31 3.79 47.85 47.85 0 0 1-66.9 66.9A95.78 95.78 0 1 0 288 160z"
              ></path>
            </svg>
          </div>
          <div class="mb-6 xl:mb-0 w-96 sm:w-full max-w-full sm:max-w-xs flex flex-col-reverse sm:flex-row items-center justify-between border border-gray-300 rounded-sm bg-white p-6">
            <div class="">
              <span class="text-6xl font-bold block leading-none text-center sm:text-left">
                2
              </span>
              <span class="mt-2 block text-center sm:text-left">
                Unread Messages
              </span>
            </div>
            <svg
              aria-hidden="true"
              focusable="false"
              data-prefix="fas"
              data-icon="envelope"
              class="svg-inline--fa fa-envelope fa-w-16 mb-2 sm:mb-0 sm:mr-2 text-5xl sm:text-6xl text-red-800"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              <path
                fill="currentColor"
                d="M502.3 190.8c3.9-3.1 9.7-.2 9.7 4.7V400c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V195.6c0-5 5.7-7.8 9.7-4.7 22.4 17.4 52.1 39.5 154.1 113.6 21.1 15.4 56.7 47.8 92.2 47.6 35.7.3 72-32.8 92.3-47.6 102-74.1 131.6-96.3 154-113.7zM256 320c23.2.4 56.6-29.2 73.4-41.4 132.7-96.3 142.8-104.7 173.4-128.7 5.8-4.5 9.2-11.5 9.2-18.9v-19c0-26.5-21.5-48-48-48H48C21.5 64 0 85.5 0 112v19c0 7.4 3.4 14.3 9.2 18.9 30.6 23.9 40.7 32.4 173.4 128.7 16.8 12.2 50.2 41.8 73.4 41.4z"
              ></path>
            </svg>
          </div>
        </div>
      </div>
      <div class="mb-12">
        <h2 class="text-3xl font-bold mb-4">Recent Subscribers</h2>
        <table class="w-full table-auto rounded-sm">
          <thead>
            <tr>
              <th class="px-4 py-4 text-left bg-red-800 text-white text-sm font-medium">
                Restaurant
              </th>
              <th class="px-4 py-4 text-left bg-red-800 text-white text-sm font-medium">
                Food
              </th>
              <th class="px-4 py-4 text-left bg-red-800 text-white text-sm font-medium">
                Date Eaten
              </th>
              <th class="px-4 py-4 text-left bg-red-800 text-white text-sm font-medium">
                Rating
              </th>
              <th class="px-4 py-4 text-left bg-red-800 text-white text-sm font-medium">
                Price
              </th>
            </tr>
          </thead>
          <tbody>
            <tr class="border-gray-300 even:bg-gray-300">
              <td class="px-4 py-8 border-t border-b border-gray-300 text-sm">
                <img
                  src="https://www.brandingmag.com/wp-content/uploads/2012/08/D-FINAL.png"
                  class="h-8"
                />
              </td>
              <td class="px-4 py-8 border-t border-b border-gray-300 text-sm">
                Pizza
              </td>
              <td class="px-4 py-8 border-t border-b border-gray-300 text-sm">
                March 1st
              </td>
              <td class="px-4 py-8 border-t border-b border-gray-300 text-sm">
                9
              </td>
              <td class="px-4 py-8 border-t border-b border-gray-300 text-sm">
                $10
              </td>
            </tr>
            <tr class="border-gray-300 even:bg-gray-300">
              <td class="px-4 py-8 border-t border-b border-gray-300 text-sm">
                <img
                  src="https://i.pinimg.com/originals/58/d7/9a/58d79a969ace9ba5c35fc12dd73cedb2.jpg"
                  class="h-8"
                />
              </td>
              <td class="px-4 py-8 border-t border-b border-gray-300 text-sm">
                Hot Dog
              </td>
              <td class="px-4 py-8 border-t border-b border-gray-300 text-sm">
                March 5th
              </td>
              <td class="px-4 py-8 border-t border-b border-gray-300 text-sm">
                10
              </td>
              <td class="px-4 py-8 border-t border-b border-gray-300 text-sm">
                5
              </td>
            </tr>
            <tr class="border-gray-300 even:bg-gray-300">
              <td class="px-4 py-8 border-t border-b border-gray-300 text-sm">
                <img
                  src="https://cdn.worldvectorlogo.com/logos/hanes-4.svg"
                  class="h-8"
                />
              </td>
              <td class="px-4 py-8 border-t border-b border-gray-300 text-sm">
                Sock
              </td>
              <td class="px-4 py-8 border-t border-b border-gray-300 text-sm">
                March 12th
              </td>
              <td class="px-4 py-8 border-t border-b border-gray-300 text-sm">
                4
              </td>
              <td class="px-4 py-8 border-t border-b border-gray-300 text-sm">
                Free
              </td>
            </tr>
            <tr class="border-gray-300 even:bg-gray-300">
              <td class="px-4 py-8 border-t border-b border-gray-300 text-sm">
                <img
                  src="https://logos-download.com/wp-content/uploads/2016/04/Five_Guys_logo_logotype_burgers_and_fries.png"
                  class="h-8"
                />
              </td>
              <td class="px-4 py-8 border-t border-b border-gray-300 text-sm">
                Burger
              </td>
              <td class="px-4 py-8 border-t border-b border-gray-300 text-sm">
                March 31st
              </td>
              <td class="px-4 py-8 border-t border-b border-gray-300 text-sm">
                10
              </td>
              <td class="px-4 py-8 border-t border-b border-gray-300 text-sm">
                $7
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</div>;
