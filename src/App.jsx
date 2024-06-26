/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/no-unknown-property */
import { FaShoppingCart } from "react-icons/fa";
// import Swiper styles
// Import Swiper React components
import { FaCheckCircle } from "react-icons/fa";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { useEffect, useState } from "react";
import From from "./components/From";

function App() {
  const [borkha, setData] = useState();

  // const loginUrl = 'http://127.0.0.1:8000/api/method/login/';
  // const options = {
  //      usr: 'someuser@gmail.com',
  //      pwd: 'some_password'
  //   };
  //   const config = {
  //     headers: {
  //       'Content-Type': 'application/x-www-form-urlencoded'
  //      }
  //   }
  //   axios.post(loginUrl, options, config)
  //   .then((response) => {
  //     console.log(response);
  //   })
  //   .catch((error) => {
  //     console.log(error);
  //   });

  // https://ecommerce.ionicerp.xyz/app/item

  // const url = "https://ecommerce.ionicerp.xyz/api/method/item";

  useEffect(() => {
    fetch("https://ecommerce.ionicerp.xyz/api/method/item")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  // fetch(url)
  // .then(response => {
  //   if (!response.ok) {
  //     throw new Error('Network response was not ok ' + response.statusText);
  //   }
  //   return response.json();
  // })
  // .then(data => {
  //   console.log(data);
  // })
  // .catch(error => {
  //   console.error('There has been a problem with your fetch operation:', error);
  // })

  // /frappe.auth.get\_logged\_user

  // const [formData, setFormData] = useState();

  // useEffect(() => {
  //   fetchData();
  // }, []);

  // const fetchData = async () => {
  //   try {
  //     const response = await axios.get(
  //       "https://ecommerce.ionicerp.xyz/api/method/item"
  //     );
  //     setFormData(response.data);
  //   } catch (error) {
  //     console.error("Error fetching form data:", error);
  //   }
  // };

  // console.log(formData);

  return (
    <section className="bg-[#F4F3EA] mt-3 lg:h-[600px] h-[380px]">
      {/* <div>
        {borkha?.data?.map((item) => {
          console.log(item);
          return <h1>
            {item.description}
            <img src="" alt="" />
          </h1>;
        })}
      </div> */}
      <div className="text-center">
        <img
          className="inline"
          src="https://nazatfashion.com/wp-content/uploads/2023/11/Nazat-Fashion.png.webp"
          alt=""
          width="200"
        />
      </div>
      {/* Top Bar Section */}
      <div className="mt-8 mx-auto max-w-screen-xl px-3">
        <h2 className="font-extrabold text-center text-2xl leading-8	">
          আপনি কি জানেন! <br />
          আপনার প্রিয়জন সামাজিক অনুষ্ঠান এড়িয়ে চলে কেননা <br />
          সে সামাজিকভাবে হীনমন্যতায় ভূগে থাকে। নজড়কাঁড়া এই
          <span className="text-[#d3ac2b] ml-2">সাবিহা আবায়াটি</span> <br />
          আপনার প্রিয়জনের পোশাকে ফুটিয়ে তুলবে রুচিশীল এক নাজাতীয় আভিজাত্য।
        </h2>
        <div className="mt-8 text-center">
          {/* <iframe
            className="lg:w-[900px] w-full h-[400px] lg:h-[600px] mx-auto"
            src="https://www.youtube.com/embed/eHOyie4ma_A?si=oI9anDYSjUQpXahK"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe> */}
        </div>

        <div className="text-center mt-6 border-4 rounded-full w-96 mx-auto border-[#d3ac2b] hover:border-gray-800 p-2 hover:scale-110 duration-300	">
          <button className="font-extrabold py-4 px-[85px] bg-[#d3ac2b] rounded-full flex items-center justify-center gap-1 text-xl text-white hover:bg-gray-800">
            <FaShoppingCart />
            অর্ডার করতে চাই
          </button>
        </div>
        <h1 className="text-red-500 font-extrabold text-2xl text-center mt-8 ">
          “আবায়া-ই সাবিহা” এই মুহূর্তের সর্বাধিক চাহিদার একটি বোরখা। আমাদের
          আপুরা খুবই পছন্দ করেছেন এই বোরখাটি। আপনিও সংগ্রহ করে নিন এখনই!
        </h1>
      </div>

      {/* আবায়া-ই সাবিহা Section */}
      <section className="my-8 bg-[#F4F3EA]  px-3 py-12">
        <div className="max-w-screen-xl mx-auto grid md:grid-cols-2 lg:grid-cols-4  gap-4 pt-12">
          <div className="border-2 border-[#d3ac2b]">
            <img
              src="https://nazatfashion.com/wp-content/uploads/2024/01/Sabiha-0106.png.webp"
              alt=""
            />
            <p className="text-center font-extrabold p-2">ডিপ সি-গ্রীন কালার</p>
          </div>
          <div className="border-2 border-[#d3ac2b]">
            <img
              className="border-2 border-[#d3ac2b]"
              src="https://nazatfashion.com/wp-content/uploads/2024/01/Sabiha-0102.png.webp"
              alt=""
            />
            <p className="text-center font-extrabold p-2">রোজ পিংক কালার</p>
          </div>
          <div className="border-2 border-[#d3ac2b]">
            <img
              className="border-2 border-[#d3ac2b]"
              src="https://nazatfashion.com/wp-content/uploads/2024/01/Sabiha-0110.png.webp"
              alt=""
            />
            <p className="text-center font-extrabold p-2">ব্ল্যাক কালার</p>
          </div>
          <div className="border-2 border-[#d3ac2b]">
            <img
              className="border-2 border-[#d3ac2b]"
              src="https://nazatfashion.com/wp-content/uploads/2024/01/Sabiha-0108.png.webp"
              alt=""
            />
            <p className="text-center font-extrabold p-2">অলিভ কালার</p>
          </div>
        </div>
        <div></div>
      </section>
      {/* Order now section  */}
      <div className="max-w-screen-xl mx-auto p-3 text-center">
        <h1 className="font-extrabold text-3xl">
          জনপ্রিয় এই সাবিহা আবায়ার পূর্বের মূল্য{" "}
          <span className="relative">
            ২৫০০/-
            <svg
              className="w-28 absolute -left-6 top-1 text-red-500"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 500 150"
              preserveAspectRatio="none"
            >
              <path
                fill="red"
                d="M497.4,23.9C301.6,40,155.9,80.6,4,144.4"
              ></path>
              <path
                fill="red"
                d="M14.1,27.6c204.5,20.3,393.8,74,467.3,111.7"
              ></path>
            </svg>
          </span>{" "}
          টাকা
        </h1>
        <h1 className="font-extrabold text-4xl mt-4 text-[#D3AC2B]">
          আজকের অফার মূল্য মাত্র{" "}
          <span className="relative ml-2 mr-2 text-[#38b000]">
            {" "}
            ১৯৪০/-
            <svg
              className="w-44 absolute -left-8 -top-[68px] "
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 150 150"
              preserveAspectRatio="none"
            >
              {/* <ellipse
                cx="80"
                cy="80"
                rx="60"
                ry="30"
                fill="none"
                stroke="#38b000"
                stroke-width="5"
              /> */}
            </svg>
          </span>{" "}
          টাকা
        </h1>
        <h2 className="mt-5 text-red-500 text-2xl font-extrabold">
          অফারটি লুফে নিতে এখনি “অর্ডার করতে চাই” বাটনে ক্লিক করুন
        </h2>
        <div className="text-center mt-8 border-4 rounded-full w-96 mx-auto border-[#d3ac2b] hover:border-gray-800 p-2 hover:scale-110 duration-300	">
          <button className="font-extrabold py-4 px-[85px] bg-[#d3ac2b] rounded-full flex items-center justify-center gap-1 text-xl text-white hover:bg-gray-800">
            <FaShoppingCart />
            অর্ডার করতে চাই
          </button>
        </div>
      </div>
      {/* card Section */}
      {/* <section className="bg-[#F4F3EA] mt-8 p-5">
        <div className="border-4 border-[#d3ac2b] max-w-screen-xl rounded-lg mx-auto p-3">
          <div className="md:flex items-center gap-4">
            <div className="flex-1 space-y-3 font-bold p-2">
              <p>
                আমরা অনেকেই কম দাম খুঁজি। একটি আবায়া তৈরির পিছনে অনেক গল্প থাকে,
                আসুন এই আবায়া নিয়ে একটু গল্প শুনি।
              </p>
              <p>
                এই আবায়াটি তৈরী করতে কমপক্ষে ৪.৫ গজ কাপড় দরকার হয়। আমরা নিজস্ব
                ইম্পোরটেড অরিজিনাল সফট ও মুলায়েম দুবাই চেরী ফেব্রিক্স ব্যবহার
                করি যার খুচরা বাজার মূল্য ২৮০-৩২০ টাকা পর্যন্ত উঠানামা করে।
                এরপরে উন্নতমাণের সেলাই করাতে দক্ষ ও অভিজ্ঞ কারিগর এছাড়াও
                ইম্পোরটেড ম্যাটারিয়ালসসহ দাম সঠিক আছে কিনা আপনি যাচাই করে দেখুন!
                কম দামে যারা দেয় তারা প্রতারণা করতেছে সেটা আর আমরা আর নাই বলি!
                হাতেনাতে ধরে আমরা প্রমাণও করেছি।
              </p>
              <p>
                তবে হ্যাঁ, অবশ্যই আপনি অর্ডার করে হোম ডেলিভারির সময়ে আমাদের
                বোরখাও ট্রায়াল দিয়ে নিবেন চেক করে নিবেন আর কোন সমস্যা হলে ৭
                দিনের রিটার্ন পলিসি-তো রয়েছেই।
              </p>
            </div>
            <div className="flex-1 md:w-[50px]">
              <Swiper
                spaceBetween={0}
                slidesPerView={1}
                navigation={true}
                pagination={true}
                className="mySwiper  md:w-[50%]"
              >
                <SwiperSlide data-history="1">
                  <img
                    src="https://nazatfashion.com/wp-content/uploads/2024/01/Sabiha-0103.png.webp"
                    alt=""
                  />
                </SwiperSlide>
                <SwiperSlide data-history="Slide 2">
                  <img
                    src="https://nazatfashion.com/wp-content/uploads/2024/01/Sabiha-0103.png.webp"
                    alt=""
                  />
                </SwiperSlide>
                <SwiperSlide data-history="3">
                  {" "}
                  <img
                    src="https://nazatfashion.com/wp-content/uploads/2024/01/Sabiha-0103.png.webp"
                    alt=""
                  />
                </SwiperSlide>
                <SwiperSlide data-history="Slide 4">
                  {" "}
                  <img
                    src="https://nazatfashion.com/wp-content/uploads/2024/01/Sabiha-0103.png.webp"
                    alt=""
                  />
                </SwiperSlide>
                <SwiperSlide data-history="5">
                  {" "}
                  <img
                    src="https://nazatfashion.com/wp-content/uploads/2024/01/Sabiha-0103.png.webp"
                    alt=""
                  />
                </SwiperSlide>
                <SwiperSlide data-history="Slide 6">
                  {" "}
                  <img
                    src="https://nazatfashion.com/wp-content/uploads/2024/01/Sabiha-0103.png.webp"
                    alt=""
                  />
                </SwiperSlide>
                <SwiperSlide data-history="7">
                  {" "}
                  <img
                    src="https://nazatfashion.com/wp-content/uploads/2024/01/Sabiha-0103.png.webp"
                    alt=""
                  />
                </SwiperSlide>
                <SwiperSlide data-history="Slide 8">
                  {" "}
                  <img
                    src="https://nazatfashion.com/wp-content/uploads/2024/01/Sabiha-0103.png.webp"
                    alt=""
                  />
                </SwiperSlide>
                <SwiperSlide data-history="9">
                  {" "}
                  <img
                    src="https://nazatfashion.com/wp-content/uploads/2024/01/Sabiha-0103.png.webp"
                    alt=""
                  />
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </div>
      </section> */}
      {/* ---------------------- */}
      <section className="max-w-screen-xl mt-8 mx-auto p-5">
        <div>
          <div className="md:ml-44">
            <h1 className="font-extrabold text-3xl text-[#d3ac2b]">
              কি কি কারণে "সাবিহা" বোরকা কিনা উচিৎ!
            </h1>
            <div className="flex items-center gap-2 mt-6">
              <p className="h-3 w-6 bg-[#38B000]"></p>
              <p className="h-3 w-6 bg-[#38B000]"></p>
              <p className="h-3 w-6 bg-[#38B000]"></p>
              <p className="h-3 w-6 bg-[#38B000]"></p>
            </div>
            <div className="mt-6 flex items-center gap-3 font-bold">
              <FaCheckCircle className="text-2xl text-[#38B000]" />
              <p>
                একদিকে পর্দা পালন অন্যদিকে চমৎকার ডিজাইনের চমৎকার মডেস্ট হিজাবী।
              </p>
            </div>
            <div className="mt-6 flex items-center gap-3 font-bold">
              <FaCheckCircle className="text-2xl text-[#38B000]" />
              <p>
                কাপড় হাতে নেবার পরে সারা জীবনের অভিজ্ঞতা পরিবর্তন হয়ে যেতে হবে।
              </p>
            </div>
            <div className="mt-6 flex items-center gap-3 font-bold">
              <FaCheckCircle className="text-2xl text-[#38B000]" />
              <p>পরিধেয় মসৃণ, চোখের শীতলতার কালার, ইম্পোরটেড।</p>
            </div>
            <div className="mt-6 flex items-center gap-3 font-bold">
              <FaCheckCircle className="text-2xl text-[#38B000]" />
              <p>
                প্রথম অর্ডারে আপনি পেয়ে যাচ্ছেন নাজাত লাইফ টাইম মেম্বারশিপ
                কার্ড।
              </p>
            </div>
          </div>
          <div className="text-center mt-8 border-4 rounded-full w-96 mx-auto border-[#d3ac2b] hover:border-gray-800 p-2 hover:scale-110 duration-300	">
            <button className="font-extrabold py-4 px-[85px] bg-[#d3ac2b] rounded-full flex items-center justify-center gap-1 text-xl text-white hover:bg-gray-800">
              <FaShoppingCart />
              অর্ডার করতে চাই
            </button>
          </div>
        </div>
      </section>
      {/* --------------------- */}
      <section className="bg-[#F4F3EA] text-center mt-8 p-8">
        <div className="max-w-screen-xl mx-auto">
          <h1 className="text-3xl font-extrabold text-[#d3ac2b]">
            প্রয়োজনে হোয়াটসআপ করুনঃ 01928 22 77 88
          </h1>
          <div className="text-center mt-8 border-4 rounded-full w-96 mx-auto border-[#d3ac2b] hover:border-gray-800 p-2 hover:scale-110 duration-300	">
            <button className="font-extrabold py-4 px-[85px] bg-[#d3ac2b] rounded-full flex items-center justify-center gap-1 text-xl text-white hover:bg-gray-800">
              <FaShoppingCart />
              অর্ডার করতে চাই
            </button>
          </div>
        </div>
      </section>

      {/* React Feom used */}
      <From/>
      
    </section>
  );
}

export default App;
