import "../../App.css";
import DownloadIcon from "@mui/icons-material/Download";
// import LearningCode from "../../assets/images/learn-coding-clipart.svg";
import * as LottiePlayer from "@lottiefiles/lottie-player";
import resume from '../../assets/files/joseacardona.pdf';

export default function About() {
  const getDate = () => {
    var dob = new Date("08/25/1997");
    var month_diff = Date.now() - dob.getTime();
    var age_dt = new Date(month_diff);
    var year = age_dt.getUTCFullYear();
    var age = Math.abs(year - 1970);
    return age;
  };
  return (
    <div
      id="about"
      className="min-h-screen bg-white flex flex-col text-center gap-5 text-black text-lg  font-normal"
    >
      <div className="head text-5xl mt-12 font-bold" data-aos={"slide-down"}>
        About Me
      </div>
      <div className="flex flex-row  gap-6 ml-8">
        <div className="flex-col mt-14 flex flex-auto w-64 gap-6">
          <h3 className="text-3xl font-medium" data-aos={"fade-left"}>
            I'm <span className="text-yellow-600">Jose Cardona,</span> a Computer Science 
            Enthusiast
          </h3>
          <p
            className="pt-5 leading-7 text-slate-900 text-justify"
            data-aos={"fade-left"}
          >
            Hi, I'm Jose Cardona. At Xcel Energy, I use my Mechanical Engineering prowess to craft innovative solutions that propel projects forward. An alumnus of the New Jersey Institute of Technology (NJIT) with a degree in Mechanical Engineering, I've sharpened my analytical edge, focusing on intricate problems and detailed solutions.

Now, I'm venturing into the realms of Computer Science at NJIT. Transitioning from mechanics to the universe of coding, algorithms, and data structures has been enlightening. This dual expertise grants me a rare lens — I see problems and solutions both in their physical and digital dimensions.

I'm passionate about DevOps. It's the perfect confluence of the analytical rigor of engineering and the ever-evolving realm of software development. The thrill of integrating the different facets of software development and automating processes keeps me driven.

Eager to see what I've been crafting? Dive into my portfolio. Should you wish to connect or discuss opportunities, Contact me below. Rest assured, your data is safe with me.
          </p>
          <p
            className="text-justify leading-7 text-slate-900"
            data-aos={"fade-right"}
          >
           With a deep understanding of DevOps practices and a keen interest in cybersecurity, 
           I'm poised to contribute to cutting-edge projects in these domains. Beyond my core professional pursuits, 
           I'm drawn to collaborative environments that prioritize security and efficiency. 
           If you're in the loop about relevant job opportunities or are considering partnerships in DevOps or cybersecurity projects, 
           I'd love to connect. Let's forge the future together.
          </p>
        </div>

        <div
          class="relative flex-auto w-32   sm:rounded-lg  pl-4"
          data-aos={"slide-left"}
        >
          {/* <img
            src={LearningCode}
            alt="Learning Code"
            className="motion-safe:animate-zoomy"
          /> */}
          <div className="motion-safe:animate-zoomy">
            <lottie-player
              autoplay
              loop
              mode="bounce"
              src="https://assets10.lottiefiles.com/packages/lf20_w98qte06.json"
              style={{ width: "350px" }}
            />
          </div>
          <button className="py-3 mt-5 text-white mx-auto px-9 bg-blue-600 border-2 w-fit border-blue-500 rounded-3xl  hover:-translate-y-1.5 duration-[350ms] hover:duration-[350ms] hover:bg-blue-800 hover:scale-[1.023] focus:bg-blue-800 animate-zoomy">
                    <a
              href={resume}
              download="joseacardona.pdf"
              class="inline-flex items-center px-6 py-2 mt-12 mx-auto w-fit text-sm font-medium border rounded-lg focus:z-10 focus:ring-4 focus:outline-none focus:text-blue-700 bg-gray-800 text-gray-400 border-gray-600 hover:text-white hover:bg-gray-700 focus:ring-gray-700"
          >
              Download Resume <DownloadIcon />
          </a>
                    </button>
        </div>
      </div>
    </div>
  );
}
