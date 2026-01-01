import { CheckCircle, Calendar } from 'lucide-react';

function Achievements() {
  const achievements = [
    {
      year: '2024',
      title: 'Digital Infrastructure Expansion',
      description:
        'Successfully launched high-speed internet connectivity to 500 rural villages, bridging the digital divide and enabling access to education and economic opportunities.',
    },
    {
      year: '2024',
      title: 'Healthcare Accessibility Program',
      description:
        'Opened 50 new primary health centers in underserved areas, providing free basic healthcare services to over 2 million citizens.',
    },
    {
      year: '2023',
      title: 'Education Reform Initiative',
      description:
        'Implemented modernized curriculum in 1,000 public schools, with focus on STEM education, critical thinking, and digital literacy.',
    },
    {
      year: '2023',
      title: 'Clean Energy Transition',
      description:
        'Launched solar power projects generating 500 MW of renewable energy, reducing carbon emissions and creating 5,000 green jobs.',
    },
    {
      year: '2022',
      title: 'Women Empowerment Campaign',
      description:
        'Provided skill training and microfinance support to 50,000 women entrepreneurs, fostering economic independence and community development.',
    },
    {
      year: '2022',
      title: 'Infrastructure Development',
      description:
        'Completed construction of 200 km of highways and 15 bridges, improving connectivity and reducing travel time for millions.',
    },
    {
      year: '2021',
      title: 'Agricultural Support Program',
      description:
        'Introduced direct financial assistance and modern farming technology to 100,000 farmers, increasing crop yields by 30%.',
    },
    {
      year: '2021',
      title: 'Youth Employment Initiative',
      description:
        'Created job training programs that placed 25,000 young professionals in technology, healthcare, and service sectors.',
    },
  ];

  const milestones = [
    { number: '2M+', label: 'Citizens Served' },
    { number: '50+', label: 'Health Centers' },
    { number: '1000+', label: 'Schools Modernized' },
    { number: '500', label: 'Villages Connected' },
  ];

  return (
    <div className="min-h-screen">
      <section className="bg-gradient-to-r from-blue-700 to-blue-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl font-bold mb-6">Our Achievements</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Delivering on promises and creating tangible impact in the lives of citizens
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {milestones.map((milestone, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-blue-600 mb-2">
                  {milestone.number}
                </div>
                <div className="text-gray-600 font-medium">{milestone.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Timeline of Progress</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Key milestones and initiatives that have made a difference
            </p>
          </div>

          <div className="space-y-8">
            {achievements.map((achievement, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow"
              >
                <div className="p-6 md:p-8">
                  <div className="flex flex-col md:flex-row md:items-start gap-6">
                    <div className="flex items-center gap-3 md:gap-4">
                      <div className="flex-shrink-0">
                        <Calendar className="h-6 w-6 text-blue-600" />
                      </div>
                      <div className="text-2xl font-bold text-blue-600 min-w-[80px]">
                        {achievement.year}
                      </div>
                    </div>
                    <div className="flex-grow">
                      <div className="flex items-start gap-3 mb-3">
                        <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0 mt-1" />
                        <h3 className="text-2xl font-bold text-gray-900">
                          {achievement.title}
                        </h3>
                      </div>
                      <p className="text-gray-600 leading-relaxed ml-9">
                        {achievement.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Commitment to Continuous Progress
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              These achievements represent our ongoing commitment to improving lives and
              building a better future. We remain dedicated to transparency, accountability,
              and delivering results that matter to citizens.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Achievements;
