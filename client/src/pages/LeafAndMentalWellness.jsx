import PageHeader from "../ui/PageHeader";
import { leafAndWellnessData } from ".././utils/helperData";
function LeafAndMentalWellness() {
  const icons = [
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="#5b21b6"
          viewBox="0 0 256 256"
        >
          <path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm88,104a87.48,87.48,0,0,1-11.64,43.7L136,123.84V40.37A88.11,88.11,0,0,1,216,128ZM120,40.37v83.47L51.64,171.7A88,88,0,0,1,120,40.37ZM60.84,184.79,120,143.37v72.26A87.85,87.85,0,0,1,60.84,184.79ZM136,215.63V143.37l59.16,41.42A87.85,87.85,0,0,1,136,215.63Z"></path>
        </svg>
      ),
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="#ea580c"
          className="h-6 w-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15.182 15.182a4.5 4.5 0 0 1-6.364 0M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0ZM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75Zm-.375 0h.008v.015h-.008V9.75Zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75Zm-.375 0h.008v.015h-.008V9.75Z"
          />
        </svg>
      ),
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="#3b82f6"
          className="h-6 w-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15.59 14.37a6 6 0 0 1-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 0 0 6.16-12.12A14.98 14.98 0 0 0 9.631 8.41m5.96 5.96a14.926 14.926 0 0 1-5.841 2.58m-.119-8.54a6 6 0 0 0-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 0 0-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 0 1-2.448-2.448 14.9 14.9 0 0 1 .06-.312m-2.24 2.39a4.493 4.493 0 0 0-1.757 4.306 4.493 4.493 0 0 0 4.306-1.758M16.5 9a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z"
          />
        </svg>
      ),
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="#db2777"
          viewBox="0 0 256 256"
        >
          <path d="M230.33,141.06a24.34,24.34,0,0,0-18.61-4.77C230.5,117.33,240,98.48,240,80c0-26.47-21.29-48-47.46-48A47.58,47.58,0,0,0,156,48.75,47.58,47.58,0,0,0,119.46,32C93.29,32,72,53.53,72,80c0,11,3.24,21.69,10.06,33a31.87,31.87,0,0,0-14.75,8.4L44.69,144H16A16,16,0,0,0,0,160v40a16,16,0,0,0,16,16H120a7.93,7.93,0,0,0,1.94-.24l64-16a6.94,6.94,0,0,0,1.19-.4L226,182.82l.44-.2a24.6,24.6,0,0,0,3.93-41.56ZM119.46,48A31.15,31.15,0,0,1,148.6,67a8,8,0,0,0,14.8,0,31.15,31.15,0,0,1,29.14-19C209.59,48,224,62.65,224,80c0,19.51-15.79,41.58-45.66,63.9l-11.09,2.55A28,28,0,0,0,140,112H100.68C92.05,100.36,88,90.12,88,80,88,62.65,102.41,48,119.46,48ZM16,160H40v40H16Zm203.43,8.21-38,16.18L119,200H56V155.31l22.63-22.62A15.86,15.86,0,0,1,89.94,128H140a12,12,0,0,1,0,24H112a8,8,0,0,0,0,16h32a8.32,8.32,0,0,0,1.79-.2l67-15.41.31-.08a8.6,8.6,0,0,1,6.3,15.9Z"></path>
        </svg>
      ),
    },
  ];

  return (
    <>
      <PageHeader
        src="./jazmin-quaynor-QnGqi8Rd-DA-unsplash.jpg"
        title="Leaf + Mental Wellness"
        className="mb-[1rem] rounded-sm bg-[#fff]/55 px-6 py-2 font-serif text-6xl font-semibold text-neutral-950 shadow-xl"
      />

      <div className="ml-auto mr-auto min-h-dvh w-11/12 pb-56 pt-16">
        <header className="mb-12 flex justify-center pt-10 font-serif text-2xl font-bold">
          Leaf + Mental Wellness
        </header>
        <p className="my-2 pl-8 font-serif text-lg leading-8 tracking-wide md:mt-6 md:text-xl md:leading-9 lg:ml-20 lg:mr-20">
          Studies have shown that simply being in the presence of plants can
          have a calming effect on our minds, reducing stress levels and
          promoting a sense of peace and tranquility. Whether it&apos;s the
          soothing greenery of a fern or the delicate petals of a flowering
          succulent, the presence of plants in our environment can evoke a deep
          sense of connection to the natural world, grounding us in the present
          moment and offering respite from the demands of daily life.
        </p>
        <p className="my-2 pl-8 font-serif text-lg leading-8 tracking-wide md:mt-6 md:text-xl md:leading-9 lg:ml-20 lg:mr-20">
          But the benefits of plants extend beyond their aesthetic appeal. They
          also serve as powerful symbols of growth, resilience, and
          renewal—reminding us of our own capacity for growth and
          transformation, even in the face of adversity. As we care for and
          nurture our plants, we are reminded of the importance of self-care and
          the need to cultivate a nurturing environment for our own well-being.
        </p>
        <p className="my-2 mb-16 pl-8 font-serif text-lg leading-8 tracking-wide md:mt-6 md:text-xl md:leading-9 lg:ml-20 lg:mr-20">
          In this space, we invite you to join us as we explore the ways in
          which plants can serve as allies in our journey towards mental
          wellness. We hope to inspire and empower you to cultivate a deeper
          connection with nature and nurture your mental health in the process.
          Welcome to Petite + Mental Wellness—where the simple act of caring for
          a plant can become a powerful tool for self-discovery and healing.
        </p>
        <img src="./feey-thh6mopEZ8s-unsplash.jpg" className="border" />
        <div className="mt-28 font-serif">
          <h2 className="border-b-2 pb-3 text-2xl lg:text-3xl">
            Four Plant-Powered Mental Wellness Perks
          </h2>
          <div className="mt-12 flex w-full flex-col lg:mt-20 lg:flex-row">
            <div className="card grid h-32 flex-grow place-items-center rounded-box bg-base-300">
              {leafAndWellnessData.slice(0, 1).map((curr, i) => (
                <div key={curr.id}>
                  <div className="flex gap-2 pb-2">
                    <span className="hover:rotate-12">{icons[i].icon}</span>
                    <h4 className="text-lg">{curr.title}</h4>
                  </div>
                  <p>{curr.text}</p>
                </div>
              ))}
            </div>
            <div className="divider lg:divider-horizontal"></div>
            <div className="card grid h-32 flex-grow place-items-center rounded-box bg-base-300">
              {leafAndWellnessData.slice(1, 2).map((curr, i) => (
                <div key={curr.id}>
                  <div className="flex gap-2 pb-2">
                    <span className="hover:rotate-12">{icons[i + 1].icon}</span>
                    <h4 className="text-lg">{curr.title}</h4>
                  </div>
                  <p>{curr.text}</p>
                </div>
              ))}
            </div>
            <div className="divider lg:divider-horizontal"></div>
            <div className="card grid h-32 flex-grow place-items-center rounded-box bg-base-300">
              {leafAndWellnessData.slice(2, 3).map((curr, i) => (
                <div key={curr.id}>
                  <div className="flex gap-2 pb-2">
                    <span className="hover:rotate-12">{icons[i + 2].icon}</span>
                    <h4 className="text-lg">{curr.title}</h4>
                  </div>
                  <p>{curr.text}</p>
                </div>
              ))}
            </div>
            <div className="divider lg:divider-horizontal"></div>
            <div className="card grid h-32 flex-grow place-items-center rounded-box bg-base-300">
              {leafAndWellnessData.slice(3).map((curr, i) => (
                <div key={curr.id}>
                  <div className="flex gap-2 pb-2">
                    <span className="hover:rotate-12">{icons[i + 3].icon}</span>
                    <h4 className="text-lg">{curr.title}</h4>
                  </div>
                  <p>{curr.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <img src="./jackie-tsang-ygqrqAbWUoc-unsplash.jpg" />
    </>
  );
}

export default LeafAndMentalWellness;
