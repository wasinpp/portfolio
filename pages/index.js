import Head from "next/head";

export default function Home() {
  return (
    <>
      <Cover />
      <SectionSpace />
      <Hero />
    </>
  );
}

const Cover = () => {
  return (
    <div className="relative flex items-center bg-gray-200 h-screen w-screen bg-gray-700">
      <div className="flex-1 content-center items-center">
        <span className="text-4xl font-bold text-center text-white">
          <p>Hi, I'm Name</p>
          <p>Role</p>
        </span>
        <div className="py-8" />
        <div className="flex justify-center">
          <button
            className="
            text-sm
            font-bold
            transition 
            duration-500 
            ease-in-out 
            py-3 px-6
            border 
            border-blue-500
            rounded-full
            text-white                
            bg-transparent
            transform 
            hover:text-white 
            hover:bg-blue-600 
            hover:-translate-x-1 
            hover:scale-110 
            "
          >
            BUTTON
          </button>
        </div>
      </div>

      <a
        className="
        transition
        duration-300
        ease-in-out 
        absolute bottom-0 w-screen text-white flex-col text-gray-500 
        transform 
        hover:text-white
        hover:-translate-y-1  
        pb-8        
        "
        href="#"
      >
        <div className="text-center">Learn more about what I do</div>
        <div className="flex justify-center">
          <ArrowDown />
        </div>
      </a>
    </div>
  );
};

const ArrowDown = () => {
  return (
    <svg className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
      <path
        fill-rule="evenodd"
        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
        clip-rule="evenodd"
      />
    </svg>
  );
};

const Hero = () => {
  return (
    <section class="text-gray-700 body-font overflow-hidden">
      <div class="container px-5 py-24 mx-auto">
        <div class="lg:w-4/5 mx-auto flex flex-wrap">
          <img
            alt="ecommerce"
            class="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded"
            src="https://dummyimage.com/400x400"
          />
          <div class="lg:w-1/2 w-full lg:pr-10 lg:py-6 mb-6 lg:mb-0">
            <h2 class="text-sm title-font text-gray-500 tracking-widest">
              BRAND NAME
            </h2>
            <h1 class="text-gray-900 text-3xl title-font font-medium mb-4">
              Name
            </h1>
            <div class="flex mb-4">
              <a class="flex-grow text-teal-500 border-b-2 border-teal-500 py-2 text-lg px-1">
                Company
              </a>
              <a class="flex-grow border-b-2 border-gray-300 py-2 text-lg px-1">
                Overall responsibilities
              </a>
            </div>
            <p class="leading-relaxed mb-4">
              sdfksdfjskdlfjsldkf
            </p>
            <div class="flex border-t border-gray-300 py-2">
              <span class="text-gray-500">Color</span>
              <span class="ml-auto text-gray-900">Blue</span>
            </div>
            <div class="flex border-t border-gray-300 py-2">
              <span class="text-gray-500">Size</span>
              <span class="ml-auto text-gray-900">Medium</span>
            </div>
            <div class="flex border-t border-b mb-6 border-gray-300 py-2">
              <span class="text-gray-500">Quantity</span>
              <span class="ml-auto text-gray-900">4</span>
            </div>
            <div class="flex">
              <span class="title-font font-medium text-2xl text-gray-900">
                $58.00
              </span>
              <button class="flex ml-auto text-white bg-teal-500 border-0 py-2 px-6 focus:outline-none hover:bg-teal-600 rounded">
                Button
              </button>
              <button class="rounded-full w-10 h-10 bg-gray-200 p-0 border-0 inline-flex items-center justify-center text-gray-500 ml-4">
                <svg
                  fill="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  class="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const SectionSpace = () => {
  return <div className="py-8"></div>;
};
