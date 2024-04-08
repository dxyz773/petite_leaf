import PageHeader from "../ui/PageHeader";
import { getAllUIData } from "../services/plantsAPI";
import { useQuery } from "@tanstack/react-query";
function OurStory() {
  const { data: ui_data, isLoading } = useQuery({
    queryKey: ["ui_data"],
    queryFn: getAllUIData,
  });

  return (
    <>
      <PageHeader
        src="annie-spratt-hS46bsAASwQ-unsplash.jpg"
        title="Our Story"
        className="mb-[7rem] mr-12 font-serif text-6xl font-semibold text-neutral-50 "
      />
      <div className="ml-auto mr-auto min-h-dvh w-[28rem] pb-24 pl-5 pr-5 pt-24 sm:w-[36rem] md:w-[48rem] lg:w-[60rem] lg:pr-0 xl:w-[75rem]">
        <div className="font-serif text-xl tracking-wide lg:text-2xl">
          <p className="mb-4 pt-12 text-center text-3xl font-semibold italic text-neutral-600 lg:text-left">
            &quot;Together, we bloom through adversity.&quot;
          </p>
          {isLoading ? (
            <p>Loading</p>
          ) : (
            <img
              className="float-right mb-8  pt-10 lg:w-[20rem] lg:pl-7 lg:pt-20 xl:pt-0"
              src={ui_data?.find((curr) => curr.id === 4).img_1}
              alt="photo of a young, Black woman smiling at the camera at a coffee shop"
            />
          )}
          <br />
          <p className="font-serif text-xl">
            To our amazing Petite Leaf Community,
          </p>
          <br />
          <p className="font-serif text-xl leading-8">
            During a time of intense struggle with depression, I found myself
            searching desperately for moments of light amidst the darkness. It
            was during this tumultuous period that I discovered the
            transformative power of plants.
          </p>
          <br />
          <p className="font-serif text-xl leading-8">
            Surrounding myself with greenery became a lifeline—a source of
            solace, joy, and routine in a world that often felt overwhelming.
            The simple act of caring for my plants brought a sense of purpose
            and calm to my days, providing a much-needed anchor in the storm.
          </p>
          <br />
          <p className="font-serif text-xl leading-8">
            As I watched these resilient beings thrive under my care, I couldn't
            help but be inspired by their beauty and resilience. Their presence
            became a constant reminder of the healing power of nature and the
            potential for growth and renewal, even in the darkest of times.
          </p>
          <br />
          <p className="font-serif text-xl leading-8">
            It was this profound experience that planted the seed for our
            company—a desire to share the incredible benefits of plants with
            others who may be navigating their own struggles. I envisioned
            creating a space where the simple act of surrounding oneself with
            greenery could bring light, joy, and healing into people's lives.
          </p>
          <br />
          <p className="font-serif text-xl leading-8">
            Today, as I look back on the journey that led us here, I am filled
            with gratitude for the opportunity to share this passion with you.
            Our company is not just about selling plants—it's about spreading
            hope, fostering connection, and nurturing well-being through the
            beauty of nature.
          </p>
          <br />
          <p className="font-serif text-xl leading-8">
            Thank you for joining us on this journey. Together, let us continue
            to cultivate beauty, resilience, and joy—in our lives and in the
            world around us. Together, we bloom through adversity.
          </p>
          <br />
          <p className="font-serif text-xl">With heartfelt gratitude,</p>

          <p className="mt-2 text-lg font-thin italic">
            Demitry Edwards
            <span className="text-base not-italic text-neutral-600">
              {` - [Founder & CEO]`}
            </span>
          </p>
          <br />
          <p className="mt-12 max-w-[490px] border border-neutral-300 py-3 pl-5 pr-2 font-serif text-base">
            If you or someone you know is in crisis, you can speak to somemone
            27/7 by calling or texting the National Suicide Hotline:
            <span className="font-semibold"> 988</span>
          </p>
        </div>
      </div>

      <div
        style={{
          backgroundImage: `url('./annie-spratt-hS46bsAASwQ-unsplash.jpg')`,
        }}
        className="h-[22rem] w-full bg-cover lg:h-[24rem]"
      ></div>
    </>
  );
}

export default OurStory;
