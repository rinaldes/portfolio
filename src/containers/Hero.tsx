import Spline from "@splinetool/react-spline/next";

const Hero = () => (
  <section className="relative h-screen w-screen">
    <Spline scene="https://prod.spline.design/o49OuvQI7lrhTfgu/scene.splinecode" />
    <div className="absolute flex justify-center items-center bottom-0 w-full h-20 z-50 bg-black" />
  </section>
);

export default Hero;
