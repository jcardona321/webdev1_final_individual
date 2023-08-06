import BarGraph from "./BarGraph";
import DownloadIcon from "@mui/icons-material/Download";
import resume from '../../assets/files/joseacardona.pdf';


export default function Resume() {
  return (
    <div id="resume" className="min-h-screen flex-col text-center">
      <div className="text-5xl font-bold py-8" data-aos={"slide-down"}>
        Resume
      </div>
      <div className="grid grid-cols-2 gap-7 mt-7">
        <ol class="relative border-l  border-gray-700 ml-9 mb-6">
          <li class="mb-10" data-aos="zoom-in">
            <span class="absolute flex items-center justify-center w-6 h-6   rounded-full -left-3 ring-8  ring-gray-900 bg-blue-900">
              <svg
                aria-hidden="true"
                class="w-3 h-3  text-blue-300"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </span>
            <div class="flex flex-col items-center text-white"></div>
            <h3 class="mb-1 text-lg font-semibold">
            Project Engineer
            </h3>
          <h3 class="mb-1 text-lg font-semibold">
            Xcel Energy
          </h3>
            <time class="block pt-1 pb-3  text-sm font-normal leading-none  text-gray-500 self-center">
            Denver, CO · December 2022 - Present
            </time>
            <p class="mb-4 text-base font-normal  text-gray-400">
            Throughout my professional journey, 
            I have demonstrated expertise in leading capital projects exceeding $3M, 
            achieving increased efficiency and timeline reductions. 
            This was accomplished by steering cross-functional teams using Agile methodologies, 
            managing budgets, and diligently forecasting costs. With a focus on clear 
            communication and collaboration, I employed advanced CAD, SAP, 
            and Microsoft Project skills to enhance project tracking and resource allocation
             by 20%. I have introduced innovative solutions to boost productivity, 
             while also serving as a key link between project teams and senior management. 
             This comprehensive approach also includes my dedication to safety compliance and
              team skill enhancement through regular training sessions.
            </p>
           
          </li>
          <li class="mb-10" data-aos="zoom-out" data-aos-delay="700">
            <span class="absolute flex items-center justify-center w-6 h-6 rounded-full -left-3 ring-8 ring-gray-900 bg-blue-900">
              <svg
                aria-hidden="true"
                class="w-3 h-3 text-blue-300"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                  clip-rule="evenodd"
                ></path>
              </svg>
              </span>
              <div class="flex flex-col items-center text-white"></div>
            <h3 class="mb-1 text-lg font-semibold">
            Engineer I
            </h3>
          <h3 class="mb-1 text-lg font-semibold">
          Kleinfelder- GTS
          </h3>
            <time class="block mb-2 text-sm font-normal leading-none text-gray-500">
            Denver, CO · January 2022 - January 2023
            </time>
            <p class="text-base font-normal text-gray-400">
            In my role as Engineer I at Kleinfelder- GTS, I optimized pipeline design through comprehensive feasibility studies and site surveys,
             leveraging data analytics. I formulated technical standards to enhance pipeline longevity and performance, 
             managed pipeline integrity programs in line with industry norms, and supervised construction activities to ensure quality.
              Regular data-driven inspections allowed me to identify and rectify pipeline issues proactively.
               I utilized MySQL to manage Pipeline and Station Feature Lists (PFL/SFL) 
               and effectively improved operational efficiency by implementing automated corrective actions.
            </p>
            
          </li>
          <li data-aos="zoom-in" data-aos-offset={"-15"} data-aos-delay="1300">
            <span class="absolute flex items-center justify-center w-6 h-6 rounded-full -left-3 ring-8 ring-gray-900 bg-blue-900">
              <svg
                aria-hidden="true"
                class="w-3 h-3 text-blue-300"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </span>
            <h3 class="mb-1 text-lg font-semibold text-white">
              Frontend Development Libraries
            </h3>
            <time class="block mb-2 text-sm font-normal leading-none text-gray-500">
              Completed on 1/1/23
            </time>
            <p class="text-base font-normal text-gray-400">
            Throughout my journey in frontend development, I dived into the world of powerful tools and libraries, uncovering the potential they hold for website creation. Mastering Bootstrap, I harnessed its capabilities to swiftly style my sites, providing a visually captivating experience to visitors.

Expanding my skill set, I delved into the realm of CSS logic and leveraged Sass to extend its capabilities. The newfound flexibility allowed me to craft intricate and elegant styles, breathing life into my web projects.

As my knowledge deepened, I ventured into the realm of application development. Building a feature-rich shopping cart was just the beginning, as I soon embraced the challenge of Single Page Applications (SPAs). Embracing React and Redux, I harnessed their prowess to create highly interactive and responsive web applications, elevating the user experience to new heights.

This journey of exploration has empowered me with a versatile toolkit to create dynamic and engaging websites, and I am eager to continue pushing the boundaries of frontend development, armed with the latest and most innovative technologies.
            </p>
          
          </li>
        </ol>

        <div className="flex flex-col text-center" data-aos="slide-up">
          <div className="text-3xl font-bold py-3">My Skills</div>
          <div className="ml-16 flex flex-col gap-8 mt-6">
           
            <BarGraph name={"React"} percent={75} />
            <BarGraph name={"Cloud Security"} percent={75} />
            <BarGraph name={"Java"} percent={80} />
            <BarGraph name={"HTML/CSS"} percent={85} />
            <BarGraph name={"SQL"} percent={85} />
            <BarGraph name={"AWS"} percent={85} />
            <BarGraph name={"C/C++"} percent={50} />
            <BarGraph name={"Linux"} percent={80} />
        <BarGraph name={"Agile/Scrum"} percent={75} />
        <BarGraph name={"Python"} percent={70} />
        <BarGraph name={"Network Security"} percent={70} />
        
        
        
          </div>

          <a
    href={resume}
    download="joseacardona.pdf"
    class="inline-flex items-center px-6 py-2 mt-12 mx-auto w-fit text-sm font-medium border rounded-lg focus:z-10 focus:ring-4 focus:outline-none focus:text-blue-700 bg-gray-800 text-gray-400 border-gray-600 hover:text-white hover:bg-gray-700 focus:ring-gray-700"
>
    Download Resume <DownloadIcon />
</a>
        </div>
      </div>
    </div>
  );
}
