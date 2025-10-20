import React from 'react';
import { FaArrowLeft, FaBus, FaTrain, FaCar, FaCity, FaTrafficLight, FaBriefcase, FaArrowRight, FaMoneyBillWave, FaUserShield } from 'react-icons/fa';

interface SolutionsPageProps {
  navigateTo: (page: 'home' | 'solutions') => void;
}

const solutions = [
  {
    icon: <FaBus className="text-3xl text-red-500 mb-4" />,
    title: 'Modernize Public Transport',
    description: 'Aggressively expand and upgrade the MRT and LRT lines. Implement a rationalized Bus Rapid Transit (BRT) system with dedicated lanes to make commuting efficient, predictable, and comfortable.',
    url: 'https://mb.com.ph/2023/3/10/the-jeepney-phase-out-explained',
  },
   {
    icon: <FaTrain className="text-3xl text-red-500 mb-4" />,
    title: 'Massive Subway & Metro Expansion',
    description: "Aggressively fund and build a comprehensive, reliable, and interconnected subway network. Current ongoing projects like the Metro Manila Subway and the North-South Commuter Railway are a start, but must be expanded to serve as the true backbone of the city's transport.",
    url: 'https://gulfnews.com/world/asia/philippines/9-mega-projects-in-manila-subway-airports-rail-bay-bridge-reclamation-1.500092565',
  },
  {
    icon: <FaCar className="text-3xl text-red-500 mb-4" />,
    title: 'Disincentivize Private Car Use',
    description: "Implement measures like congestion pricing, higher registration fees for second or third cars, and significantly improved pedestrian infrastructure to make driving a private car a less attractive daily option.",
    url: 'https://fulcrum.sg/philippines-car-centric-society-time-to-switch-lanes/',
  },
  {
    icon: <FaTrafficLight className="text-3xl text-red-500 mb-4" />,
    title: 'Smart Traffic Management',
    description: 'Deploy an intelligent, centralized traffic signal system that adapts to real-time conditions. Utilize data analytics to identify bottlenecks and optimize traffic flow across the metropolis.',
    url: '#',
  },
   {
    icon: <FaMoneyBillWave className="text-3xl text-red-500 mb-4" />,
    title: 'Curb Infrastructure Corruption',
    description: "Implement radical transparency and strict accountability for all infrastructure projects. Ensure that the full budget is utilized effectively for high-quality construction, preventing delays and substandard output.",
    url: 'https://www.philstar.com/headlines/2025/10/15/2479972/octa-60-pinoys-outraged-over-infrastructure-corruption',
  },
  {
    icon: <FaCity className="text-3xl text-red-500 mb-4" />,
    title: 'Decentralization & Development',
    description: 'Promote economic growth and create job centers in provinces surrounding Metro Manila. This long-term strategy reduces the need for millions to commute into the city center daily.',
    url: 'https://opinion.inquirer.net/174891/decentralizing-development-in-the-philippines',
  },
  {
    icon: <FaBriefcase className="text-3xl text-red-500 mb-4" />,
    title: 'Embrace Flexible Work',
    description: 'Incentivize companies to adopt remote work and flexible hours. Shifting a significant portion of the workforce away from the traditional 9-to-5 rush hour can immediately reduce peak congestion.',
    url: 'https://www.officialgazette.gov.ph/2018/12/20/republic-act-no-11165/',
  },
  {
    icon: <FaUserShield className="text-3xl text-red-500 mb-4" />,
    title: 'Unified & Efficient Enforcement',
    description: 'Establish a single, no-nonsense traffic authority for the entire Metro Manila. Strict, consistent, and fair enforcement of traffic laws is crucial to instill discipline and order on the roads.',
    url: '#',
  },
 
 
];

export const SolutionsPage: React.FC<SolutionsPageProps> = ({ navigateTo }) => {
  return (
    <section className="pt-16 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto">
          <button
            onClick={() => navigateTo('home')}
            className="flex items-center text-gray-400 hover:text-red-500 mb-8 transition-colors"
          >
            <FaArrowLeft className="mr-2" />
            Back to Home
          </button>
          <div className="text-center mb-12">
            <h1 className="text-5xl font-extrabold text-white sm:text-6xl font-inter tracking-tighter">
              Reclaiming Our Time
            </h1>
            <p className="mt-4 text-xl text-gray-300">
              The traffic crisis is complex, but not unsolvable. It requires a multi-pronged approach combining infrastructure, technology, and strong political will. Here are some of the key solutions.
            </p>
          </div>
        </div>

        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {solutions.map((solution, index) => (
            <div
              key={index}
              className="bg-gray-800 bg-opacity-50 rounded-lg p-6 border border-gray-700 backdrop-blur-sm transform hover:-translate-y-2 transition-transform duration-300 flex flex-col"
            >
              <div className="flex-grow">
                {solution.icon}
                <h3 className="font-bold text-xl text-white mb-2">{solution.title}</h3>
                <p className="text-gray-400">{solution.description}</p>
              </div>
              <a 
                href={solution.url}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 font-semibold text-red-500 hover:text-red-400 transition-colors inline-flex items-center self-start"
              >
                Read More <FaArrowRight className="ml-2" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};