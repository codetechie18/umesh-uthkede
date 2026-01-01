import { Link } from 'react-router-dom';
import { ArrowRight, Users, Heart, TrendingUp, Shield } from 'lucide-react';

function Home() {
  const features = [
    {
      icon: <Users className="h-12 w-12 text-blue-600" />,
      title: 'For the People',
      description: 'Every decision we make is centered on improving the lives of citizens and building stronger communities.',
    },
    {
      icon: <Heart className="h-12 w-12 text-red-500" />,
      title: 'Compassionate Governance',
      description: 'Prioritizing healthcare, education, and social welfare to ensure no one is left behind.',
    },
    {
      icon: <TrendingUp className="h-12 w-12 text-green-600" />,
      title: 'Economic Growth',
      description: 'Creating opportunities, supporting businesses, and building a prosperous economy for all.',
    },
    {
      icon: <Shield className="h-12 w-12 text-gray-700" />,
      title: 'Security & Stability',
      description: 'Maintaining law and order while protecting the rights and freedoms of every citizen.',
    },
  ];

  return (
    <div className="min-h-screen">
      <section className="relative h-screen overflow-hidden text-white">
      
      {/* Background Images */}
      <div className="absolute inset-0">
        <div className="hero-bg bg-[url('/hero/mns.png')]" />
        <div className="hero-bg bg-[url('/hero/bg2.jpeg')] animation-delay-5" />
        <div className="hero-bg bg-[url('/hero/bg3.jpeg')] animation-delay-10" />
        <div className="hero-bg bg-[url('/hero/bg4.jpeg')] animation-delay-15" />
        <div className="hero-bg bg-[url('/hero/bg5.jpeg')] animation-delay-20" />

      </div>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Content */}
      <div className="relative z-10 flex items-center justify-center h-full">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            Building a Better Tomorrow
          </h1>

          <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-3xl mx-auto">
            A vision for inclusive growth, transparent governance, and a prosperous future for every citizen
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/about"
              className="inline-flex items-center justify-center bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition"
            >
              View More
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>

            <Link
              to="/gallery"
              className="inline-flex items-center justify-center border-2 border-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition"
            >
               Gallery
            </Link>
          </div>
        </div>
      </div>
    </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Core Values</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Guided by principles of integrity, service, and commitment to the public good
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow"
              >
                <div className="mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Our Vision for the Future
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                We believe in a nation where every citizen has access to quality education,
                affordable healthcare, and economic opportunities. Our policies are designed
                to create sustainable growth, protect the environment, and ensure social justice.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Through transparent governance and inclusive decision-making, we are committed
                to building a society that reflects the aspirations of all its people.
              </p>
              {/* <Link
                to="/achievements"
                className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-700"
              >
                View Our Achievements
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link> */}
            </div>
           <div className=" rounded-lg p-4 h-96 overflow-hidden">
  <img
    src="/hero/vision.jpeg"
    alt="Our Vision"
    className="w-full h-full object-cover rounded-lg"
  />
</div>

          </div>
        </div>
      </section>

      {/* <section className="py-20 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Stay Informed</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Get the latest updates on our initiatives, policies, and public engagements
          </p>
          <Link
            to="/news"
            className="inline-flex items-center bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
          >
            Latest News & Updates
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </section> */}
    </div>
  );
}

export default Home;
