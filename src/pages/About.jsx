import { Target, Eye, Award, Users } from 'lucide-react';

function About() {
  const values = [
    {
      icon: <Target className="h-10 w-10 text-blue-600" />,
      title: 'Integrity',
      description: 'Upholding the highest standards of honesty and ethical conduct in all our actions.',
    },
    {
      icon: <Eye className="h-10 w-10 text-blue-600" />,
      title: 'Transparency',
      description: 'Open and accountable governance that keeps citizens informed and engaged.',
    },
    {
      icon: <Award className="h-10 w-10 text-blue-600" />,
      title: 'Excellence',
      description: 'Committed to delivering quality service and results that exceed expectations.',
    },
    {
      icon: <Users className="h-10 w-10 text-blue-600" />,
      title: 'Inclusivity',
      description: 'Ensuring every voice is heard and every citizen has equal opportunities.',
    },
  ];

  return (
    <div className="min-h-screen">
      <section className="bg-gradient-to-r from-blue-700 to-blue-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl font-bold mb-6">About Us</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Dedicated to serving the people with integrity, transparency, and unwavering commitment
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="rounded-lg p-4 h-auto overflow-hidden">
  <img
    src="/umeshbhau.jpeg"
    alt="Leader"
    className="w-full h-96 object-cover rounded-lg"
  />
</div>

            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Leadership</h2>
              <p className="text-lg text-gray-600 mb-4 leading-relaxed">
                Our leadership is built on decades of public service, community engagement,
                and a deep understanding of the challenges facing our society. We believe
                in servant leadership that puts people first.
              </p>
              <p className="text-lg text-gray-600 mb-4 leading-relaxed">
                With a proven track record of delivering results, our team combines
                experience, vision, and dedication to create meaningful change in the
                lives of citizens.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                We are committed to building bridges across communities, fostering dialogue,
                and working collaboratively to address the issues that matter most.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Mission</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              To create a just, prosperous, and inclusive society where every citizen has
              the opportunity to thrive, supported by transparent and responsive governance.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4 text-center">Our Vision</h3>
            <p className="text-lg text-gray-600 text-center max-w-4xl mx-auto leading-relaxed">
              A nation where quality education, healthcare, and economic opportunities are
              accessible to all. Where sustainable development and environmental protection
              go hand in hand. Where security and freedom coexist, and where every voice
              matters in shaping our collective future.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Values</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              The principles that guide our actions and decisions every day
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-gray-50 p-6 rounded-lg text-center hover:shadow-lg transition-shadow"
              >
                <div className="flex justify-center mb-4">{value.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-4xl font-bold mb-6">Our Commitment</h2>
            <div className="max-w-4xl mx-auto space-y-6 text-lg text-blue-100">
              <p className="leading-relaxed">
                We are committed to serving with honesty, accountability, and a genuine
                concern for the welfare of all citizens. Our doors are always open, and
                we welcome dialogue with people from all walks of life.
              </p>
              <p className="leading-relaxed">
                Together, we can build a society that reflects our shared values of
                justice, equality, and opportunity for all.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
