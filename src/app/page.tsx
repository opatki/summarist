"use client"

import React from 'react'
import { AiFillFileText, AiFillBulb, AiFillAudio } from 'react-icons/ai';
import { BsStarFill, BsStarHalf } from 'react-icons/bs';
import { BiCrown } from 'react-icons/bi';
import { RiLeafLine } from 'react-icons/ri';
import { useModal } from '../ModalProvider';
import Nav from '../components/Nav';
import Footer from '../components/Footer';

export default function LandingPage(): React.ReactNode {
  const { openModal } = useModal();
  const [activeHeaderIndex, setActiveHeaderIndex] = React.useState<number>(0);

  const features1 = [
    "Enhance your knowledge",
    "Achieve greater success",
    "Improve your health",
    "Develop better parenting skills",
    "Increase happiness",
    "Be the best version of yourself!"
  ];

  const features2 = [
    "Expand your learning",
    "Accomplish your goals",
    "Strengthen your vitality",
    "Become a better caregiver",
    "Improve your mood",
    "Maximize your abilities"
  ];

  React.useEffect(() => {
    const intervalId = setInterval(() => {
      setActiveHeaderIndex((prevIndex) => 
        (prevIndex + 1) % features2.length
      );
    }, 2000); 

    return () => clearInterval(intervalId);
  }, []);

  return (
    <>
    <Nav open={openModal} />
    <section id="landing">
      <div className="py-10 w-full">
        <div className="max-w-[1070px] w-full mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center">
            <div className="w-full flex flex-col items-center text-center md:items-start md:text-left md:max-w-none max-w-[540px] mx-auto">
              <div className="text-[#032b41] text-2xl md:text-[40px] font-bold mb-6">
                Gain more knowledge <br className="hidden md:block" />
                in less time
              </div>
              <div className="text-[#394547] text-xl font-light mb-6 leading-normal">
                Great summaries for busy people,
                <br className="hidden md:block" />
                individuals who barely have time to read,
                <br className="hidden md:block" />
                and even people who don’t like to read.
              </div>
              <button className="btn home__cta--btn bg-[#2bd97c] text-[#032b41] w-full h-10 rounded text-base transition-colors duration-200 flex items-center justify-center min-w-[180px] max-w-[300px] hover:bg-[#20ba68] active:translate-y-[1px]"
              onClick={openModal}>
                Login
              </button>
            </div>
            <figure className="w-full hidden md:flex justify-end">
              <img className="w-full h-full max-w-[400px]" src="landing.png" alt="landing" />
            </figure>
          </div>
        </div>
      </div>
    </section>

    <section id="features">
      <div className="py-10 w-full">
        <div className="max-w-[1070px] w-full mx-auto px-6">
          <div className="text-2xl md:text-[32px] text-[#032b41] text-center mb-8 font-bold">
            Understand books in few minutes
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-24">
            <div className="flex flex-col items-center text-center">
              <div className="flex justify-center mb-2 text-[#032b41]">
                <div className="text-6xl w-[60px] h-[60px]">
                  <AiFillFileText />
                </div>
              </div>
              <div className="text-xl md:text-2xl text-[#032b41] mb-4 font-medium">
                Read or listen
              </div>
              <div className="text-sm md:text-lg text-[#394547] font-light">
                Save time by getting the core ideas from the best books.
              </div>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="flex justify-center mb-2 text-[#032b41]">
                <div className="text-6xl w-[60px] h-[60px]">
                 <AiFillBulb />
                </div>
              </div>
              <div className="text-xl md:text-2xl text-[#032b41] mb-4 font-medium">
                Find your next read
              </div>
              <div className="text-sm md:text-lg text-[#394547] font-light">
                Explore book lists and personalized recommendations.
              </div>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="flex justify-center mb-2 text-[#032b41]">
                <div className="text-6xl w-[60px] h-[60px]">
                  <AiFillAudio />
                </div>
              </div>
              <div className="text-xl md:text-2xl text-[#032b41] mb-4 font-medium">
                Briefcasts
              </div>
              <div className="text-sm md:text-lg text-[#394547] font-light">
                Gain valuable insights from briefcasts
              </div>
            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-8 md:gap-20 mb-8 md:mb-24">
            <div className="w-full flex flex-col justify-center">
              <div>
                {features1.map((text, index) => (
                  <div
                    key={index}
                    className={`
                      text-2xl md:text-[32px] font-medium 
                      transition-colors duration-500 ease-in-out 
                      ${index === features2.length - 1 ? "mb-0" : "mb-4"}
                      ${index === activeHeaderIndex ? "text-[#2bd97c]" : "text-[#6b757b]"}
                    `}
                  >
                    {text}
                  </div>
                ))}
              </div>
            </div>
            <div className="w-full flex flex-col justify-center gap-6 bg-[#f1f6f4] p-10 px-6">
              <div className="flex gap-4">
                <div className="text-[#0365f2] text-xl font-semibold mt-1">93%</div>
                <div className="text-base md:text-xl font-light text-[#394547]">
                  of Summarist members <b>significantly increase</b> reading
                  frequency.
                </div>
              </div>
              <div className="flex gap-4">
                <div className="text-[#0365f2] text-xl font-semibold mt-1">96%</div>
                <div className="text-base md:text-xl font-light text-[#394547]">
                  of Summarist members <b>establish better</b> habits.
                </div>
              </div>
              <div className="flex gap-4">
                <div className="text-[#0365f2] text-xl font-semibold mt-1">90%</div>
                <div className="text-base md:text-xl font-light text-[#394547]">
                  have made <b>significant positive</b> change to their lives.
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-8 md:gap-20 mb-24">
            <div className="w-full flex flex-col justify-center gap-6 bg-[#f1f6f4] p-10 px-6 order-2 md:order-1">
              <div className="flex gap-4">
                <div className="text-[#0365f2] text-xl font-semibold mt-1">91%</div>
                <div className="text-base md:text-xl font-light text-[#394547]">
                  of Summarist members <b>report feeling more productive</b>
                  after incorporating the service into their daily routine.
                </div>
              </div>
              <div className="flex gap-4">
                <div className="text-[#0365f2] text-xl font-semibold mt-1">94%</div>
                <div className="text-base md:text-xl font-light text-[#394547]">
                  of Summarist members have <b>noticed an improvement</b> in
                  their overall comprehension and retention of information.
                </div>
              </div>
              <div className="flex gap-4">
                <div className="text-[#0365f2] text-xl font-semibold mt-1">88%</div>
                <div className="text-base md:text-xl font-light text-[#394547]">
                  of Summarist members <b>feel more informed</b> about current
                  events and industry trends since using the platform.
                </div>
              </div>
            </div>
            <div className="w-full flex flex-col justify-center text-right md:items-end order-1 md:order-2">
              <div>
                {features2.map((text, index) => (
                  <div
                    key={index}
                    className={`
                      text-2xl md:text-[32px] font-medium 
                      transition-colors duration-500 ease-in-out 
                      ${index === features2.length - 1 ? "mb-0" : "mb-4"}
                      ${index === activeHeaderIndex ? "text-[#2bd97c]" : "text-[#6b757b]"}
                    `}
                  >
                    {text}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section id="reviews">
      <div className="max-w-[1070px] w-full mx-auto px-6">
        <div className="py-10 w-full">
          <div className="text-2xl md:text-[32px] text-[#032b41] text-center mb-8 font-bold">
            What our members say
          </div>
          <div className="max-w-[600px] mx-auto">
            <div className="bg-[#fff3d7] p-4 mb-8 rounded font-light">
              <div className="text-[#032b41] flex gap-2 mb-2">
                <div className="font-bold">Hanna M.</div>
                <div className="flex text-[#0564f1]">
                  <BsStarFill />
                </div>
              </div>
              <div className="text-[#394547] tracking-wide leading-[1.4] text-sm md:text-base">
                This app has been a <b>game-changer</b> for me! It's saved me so
                much time and effort in reading and comprehending books. Highly
                recommend it to all book lovers.
              </div>
            </div>
            <div className="bg-[#fff3d7] p-4 mb-8 rounded font-light">
              <div className="text-[#032b41] flex gap-2 mb-2">
                <div className="font-bold">David B.</div>
                <div className="flex text-[#0564f1]">
                  <BsStarFill />
                </div>
              </div>
              <div className="text-[#394547] tracking-wide leading-[1.4] text-sm md:text-base">
                I love this app! It provides
                <b>concise and accurate summaries</b> of books in a way that is
                easy to understand. It's also very user-friendly and intuitive.
              </div>
            </div>
            <div className="bg-[#fff3d7] p-4 mb-8 rounded font-light">
              <div className="text-[#032b41] flex gap-2 mb-2">
                <div className="font-bold">Nathan S.</div>
                <div className="flex text-[#0564f1]">
                  <BsStarFill />
                </div>
              </div>
              <div className="text-[#394547] tracking-wide leading-[1.4] text-sm md:text-base">
                This app is a great way to get the main takeaways from a book
                without having to read the entire thing.
                <b>The summaries are well-written and informative.</b>
                Definitely worth downloading.
              </div>
            </div>
            <div className="bg-[#fff3d7] p-4 mb-8 rounded font-light">
              <div className="text-[#032b41] flex gap-2 mb-2">
                <div className="font-bold">Ryan R.</div>
                <div className="flex text-[#0564f1]">
                  <BsStarFill />
                </div>
              </div>
              <div className="text-[#394547] tracking-wide leading-[1.4] text-sm md:text-base">
                If you're a busy person who
                <b>loves reading but doesn't have the time</b> to read every
                book in full, this app is for you! The summaries are thorough
                and provide a great overview of the book's content.
              </div>
            </div>
          </div>
          <div className="flex justify-center">
            <button className="btn home__cta--btn bg-[#2bd97c] text-[#032b41] w-full h-10 rounded text-base transition-colors duration-200 flex items-center justify-center min-w-[180px] max-w-[300px] hover:bg-[#20ba68] active:translate-y-[1px]"
            onClick={openModal}>
              Login
            </button>
          </div>
        </div>
      </div>
    </section>

    <section id="numbers">
      <div className="py-10 w-full">
        <div className="max-w-[1070px] w-full mx-auto px-6">
          <div className="text-2xl md:text-[32px] text-[#032b41] text-center mb-8 font-bold">
            Start growing with Summarist now
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-10">
            <div className="bg-[#d7e9ff] flex flex-col items-center text-center p-6 pb-10 rounded-xl">
              <div className="flex items-center h-[60px] gap-1 text-[#0365f2]">
                <div className="w-12 h-12 text-5xl flex items-center">
                  <BiCrown />
                </div>
              </div>
              <div className="text-[32px] md:text-[40px] text-[#032b41] font-semibold mb-4">
                3 Million
              </div>
              <div className="text-[#394547] font-light text-sm md:text-base">
                Downloads on all platforms
              </div>
            </div>
            <div className="bg-[#d7e9ff] flex flex-col items-center text-center p-6 pb-10 rounded-xl">
              <div className="flex items-center h-[60px] gap-1 text-[#0365f2]">
                <div className="w-12 h-12 flex items-center justify-center gap-1">
                  <BsStarFill />
                  <BsStarHalf />
                </div>
              </div>
              <div className="text-[32px] md:text-[40px] text-[#032b41] font-semibold mb-4">
                4.5 Stars
              </div>
              <div className="text-[#394547] font-light text-sm md:text-base">
                Average ratings on iOS and Google Play
              </div>
            </div>
            <div className="bg-[#d7e9ff] flex flex-col items-center text-center p-6 pb-10 rounded-xl">
              <div className="flex items-center h-[60px] gap-1 text-[#0365f2]">
                <div className="w-12 h-12 text-5xl flex items-center">
                  <RiLeafLine />
                </div>
              </div>
              <div className="text-[32px] md:text-[40px] text-[#032b41] font-semibold mb-4">
                97%
              </div>
              <div className="text-[#394547] font-light text-sm md:text-base">
                Of Summarist members create a better reading habit
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <Footer />
    </>
  );
}