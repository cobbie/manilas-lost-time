import React from 'react';

interface SolutionsPageProps {
    navigateTo: (page: 'home') => void;
}

const solutions = [
    {
        icon: '🚌',
        title: 'Reform Public Transport',
        description: 'Modernize and regulate the jeepney system, or phase it out in favor of a more efficient, standardized bus rapid transit (BRT) system. A system with fixed stops, predictable schedules, and fair wages for drivers is essential.',
        link: 'https://mb.com.ph/2023/3/10/the-jeepney-phase-out-explained'
    },
    {
        icon: '🚇',
        title: 'Massive Subway & Metro Expansion',
        description: 'Aggressively fund and build a comprehensive, reliable, and interconnected subway network. Current ongoing projects like the Metro Manila Subway and the North-South Commuter Railway are a start, but must be expanded to serve as the true backbone of the city\'s transport.',
        link: 'https://gulfnews.com/world/asia/philippines/9-mega-projects-in-manila-subway-airports-rail-bay-bridge-reclamation-1.500092565'
    },
    {
        icon: '💸',
        title: 'Curb Infrastructure Corruption',
        description: 'Implement radical transparency and strict accountability for all infrastructure projects. Ensure that the full budget is utilized effectively for high-quality construction, preventing delays and substandard output.',
        link: 'https://www.philstar.com/headlines/2025/10/15/2479972/octa-60-pinoys-outraged-over-infrastructure-corruption'
    },
    {
        icon: '🏙️',
        title: 'Decentralize Economic Hubs',
        description: 'Create policies that incentivize large businesses and industries to establish major hubs in other regions outside Metro Manila. Developing provinces reduces the need for people to flock to the capital for opportunities.',
        link: 'https://opinion.inquirer.net/174891/decentralizing-development-in-the-philippines'
    },
    {
        icon: '🚗',
        title: 'Disincentivize Private Car Use',
        description: 'Implement measures like congestion pricing, higher registration fees for second or third cars, and significantly improved pedestrian infrastructure to make driving a private car a less attractive daily option.',
        link: 'https://fulcrum.sg/philippines-car-centric-society-time-to-switch-lanes/'
    },
    {
        icon: '🏠',
        title: 'Promote Remote Work Culture',
        description: 'Legislate and encourage work-from-home (WFH) arrangements for roles that do not require a physical presence. This directly reduces the number of commuters on the road during peak hours.',
        link: 'https://www.officialgazette.gov.ph/2018/12/20/republic-act-no-11165/'
    }
];

export const SolutionsPage: React.FC<SolutionsPageProps> = ({ navigateTo }) => {
    return (
        <section className="animate-fade-in">
            <div className="text-center mb-12 max-w-3xl mx-auto">
                <h2 className="text-4xl md:text-5xl font-bold font-poppins mb-4">How Can the Philippines Solve This?</h2>
                <p className="text-gray-400 text-lg">
                    As an individual, forcing major change feels harrowing and unlikely. The key is collective action: demanding and voting for leaders who will champion the following long-term, systemic reforms.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
                {solutions.map((solution, index) => (
                    <a 
                        key={solution.title}
                        href={solution.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex flex-col bg-gray-800/50 p-6 rounded-2xl border border-gray-700 backdrop-blur-sm transform hover:-translate-y-2 transition-transform duration-300 animate-fade-in-up group"
                        style={{ animationDelay: `${index * 100}ms` }}
                    >
                        <div className="flex-grow">
                            <div className="text-4xl mb-4">{solution.icon}</div>
                            <h3 className="text-xl font-bold text-yellow-400 font-poppins mb-2">{solution.title}</h3>
                            <p className="text-gray-300 text-sm">{solution.description}</p>
                        </div>
                        <p className="text-xs font-semibold text-yellow-500 group-hover:underline mt-4">
                            Read More &rarr;
                        </p>
                    </a>
                ))}
            </div>

            <div className="text-center mt-16">
                 <button 
                    onClick={() => navigateTo('home')} 
                    className="bg-gray-800 text-gray-300 font-bold py-3 px-8 rounded-lg text-lg hover:bg-gray-700 transition-colors"
                >
                    &larr; Back to the Data
                </button>
            </div>

            <style>{`
                @keyframes fade-in {
                    from { opacity: 0; }
                    to { opacity: 1; }
                }
                .animate-fade-in {
                    animation: fade-in 0.5s ease-in-out;
                }
                @keyframes fade-in-up {
                    from { opacity: 0; transform: translateY(20px); }
                    to { opacity: 1; transform: translateY(0); }
                }
                .animate-fade-in-up {
                    animation-name: fade-in-up;
                    animation-duration: 0.5s;
                    animation-fill-mode: both;
                    animation-timing-function: ease-out;
                }
            `}</style>
        </section>
    );
};
