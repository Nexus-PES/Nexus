import Carousel from "../components/Carousel";
import Projects from "../components/Projects";
import Activities from "../components/Activities";
import Hero from "../components/Hero";
import FromHeads from "../components/FromHeads";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <main className="pt-16 relative px-4 sm:px-14 md:px-28 gap-y-10 md:gap-y-14 flex justify-center">
        <div className="h-[500px] main -z-50 absolute top-0 left-0 right-0"></div>

        <div className="flex max-w-screen-xl flex-col">
          <Hero />
          {/* <Carousel /> */}
          <Projects />
          <Activities />
          <FromHeads />
          {/* <Footer /> */}
        </div>
      </main>
    </>
  );
}
