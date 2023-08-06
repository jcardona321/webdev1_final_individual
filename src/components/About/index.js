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
            Hello, my name is Jose Cardona. I'm currently a Project Engineer at Xcel Energy, where I leverage my Mechanical Engineering background to deliver innovative solutions and drive project success.

I graduated from the New Jersey Institute of Technology (NJIT) with a degree in Mechanical Engineering, a discipline that has honed my problem-solving skills and attention to detail. I’m now pursuing my Master’s degree in Computer Science from NJIT, embracing a new world of coding, algorithms, and data structures.

The cross-disciplinary nature of my background, blending Mechanical Engineering with Computer Science, gives me a unique perspective. I understand both the physical and the digital aspects of problems, allowing me to create solutions that are both practical and efficient.

I am now looking forward to transitioning to the Computer Science field, with a particular interest in DevOps. This role marries the logical, problem-solving mindset of an engineer with the dynamic, fast-paced world of software development. I’m excited by the possibilities of automating software processes and integrating various parts of the software lifecycle, and I'm looking forward to bringing my unique perspective to this field.

Feel free to explore my portfolio to see the projects I've been working on, or contact me if you have any questions or opportunities.
          </p>
          <p
            className="text-justify leading-7 text-slate-900"
            data-aos={"fade-right"}
          >
           I am currently on the lookout for new opportunities in software development,
            keen to bring my diverse expertise in technologies such as ReactJs, NextJs,
             TypeScript, and Java to the fore. Aside from my professional pursuits, 
             I hold a deep passion for contributing to open-source projects, 
             cherishing the collaboration and mutual learning these platforms provide. 
             If you have information on job openings or would like to discuss potential open-source collaborations, please don't hesitate to get in touch.
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
