import { GraduationCap, Heart, Briefcase, TrendingUp, Shield } from 'lucide-react';

function Policies() {
  const policies = [
    {
      icon: <GraduationCap className="h-12 w-12 text-blue-600" />,
      title: 'Education',
      description:
        'Quality education is the foundation of a progressive society. We are committed to making education accessible, affordable, and relevant to the needs of the modern world.',
      points: [
        'Increase funding for public schools and universities',
        'Modernize curriculum to include digital literacy and critical thinking',
        'Provide scholarships and financial aid to underprivileged students',
        'Improve infrastructure and teacher training programs',
        'Promote vocational training and skill development',
      ],
    },
    {
      icon: <Heart className="h-12 w-12 text-red-500" />,
      title: 'Healthcare',
      description:
        'Every citizen deserves access to quality healthcare. We believe in a system that is affordable, efficient, and focused on preventive care.',
      points: [
        'Expand access to primary healthcare in rural and urban areas',
        'Subsidize essential medicines and treatments',
        'Invest in public health infrastructure and emergency services',
        'Promote mental health awareness and support programs',
        'Strengthen maternal and child healthcare services',
      ],
    },
    {
      icon: <Briefcase className="h-12 w-12 text-green-600" />,
      title: 'Employment',
      description:
        'Creating jobs and supporting entrepreneurship are key to economic prosperity. We are dedicated to building an economy that works for everyone.',
      points: [
        'Support small and medium enterprises with incentives and resources',
        'Create job training and reskilling programs for emerging industries',
        'Promote fair wages and safe working conditions',
        'Encourage innovation and startup ecosystems',
        'Invest in infrastructure projects that generate employment',
      ],
    },
    {
      icon: <TrendingUp className="h-12 w-12 text-yellow-600" />,
      title: 'Economy',
      description:
        'A strong economy benefits all citizens. Our policies focus on sustainable growth, fiscal responsibility, and equitable distribution of resources.',
      points: [
        'Implement transparent and efficient tax policies',
        'Attract foreign investment while protecting local industries',
        'Support agricultural sector with modern technology and fair pricing',
        'Promote sustainable development and green economy initiatives',
        'Strengthen financial systems and reduce corruption',
      ],
    },
    {
      icon: <Shield className="h-12 w-12 text-gray-700" />,
      title: 'Security',
      description:
        'Safety and security are fundamental rights. We are committed to protecting citizens while respecting civil liberties and human rights.',
      points: [
        'Modernize law enforcement with better training and technology',
        'Strengthen national defense and border security',
        'Enhance cyber security and data protection measures',
        'Promote community policing and citizen engagement',
        'Ensure justice system is fair, accessible, and efficient',
      ],
    },
  ];

  return (
    <div className="min-h-screen">
      <section className="bg-gradient-to-r from-blue-700 to-blue-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl font-bold mb-6">Our Policies</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Comprehensive policy framework designed to address the challenges of today
              and build a better tomorrow
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {policies.map((policy, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-lg overflow-hidden"
              >
                <div className="p-8">
                  <div className="flex items-center mb-6">
                    <div className="mr-4">{policy.icon}</div>
                    <h2 className="text-3xl font-bold text-gray-900">{policy.title}</h2>
                  </div>
                  <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                    {policy.description}
                  </p>
                  <div className="bg-gray-50 rounded-lg p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-4">Key Initiatives:</h3>
                    <ul className="space-y-3">
                      {policy.points.map((point, idx) => (
                        <li key={idx} className="flex items-start">
                          <span className="inline-block w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <span className="text-gray-700">{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Policy Implementation</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8 leading-relaxed">
            Our policies are not just promises—they are actionable plans backed by careful
            research, expert consultation, and public input. We believe in evidence-based
            policymaking and continuous evaluation to ensure our initiatives deliver
            tangible results.
          </p>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We welcome feedback from citizens, experts, and stakeholders as we work together
            to create policies that truly serve the public interest.
          </p>
        </div>
      </section>
    </div>
  );
}

export default Policies;
