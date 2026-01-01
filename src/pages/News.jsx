import { Calendar, Clock, ArrowRight } from 'lucide-react';

function News() {
  const newsItems = [
    {
      date: 'December 28, 2024',
      category: 'Policy Update',
      title: 'New Healthcare Initiative Announced',
      excerpt:
        'Comprehensive healthcare program to provide free medical services in 100 additional rural health centers, benefiting over 500,000 families.',
      readTime: '3 min read',
    },
    {
      date: 'December 25, 2024',
      category: 'Community Event',
      title: 'Town Hall Meeting Series Launched',
      excerpt:
        'Interactive public forums scheduled across 20 cities to discuss education reform and gather citizen feedback on policy priorities.',
      readTime: '4 min read',
    },
    {
      date: 'December 20, 2024',
      category: 'Economic Development',
      title: 'Small Business Support Package Unveiled',
      excerpt:
        'New financial assistance program offering low-interest loans and tax benefits to help local entrepreneurs grow their businesses.',
      readTime: '5 min read',
    },
    {
      date: 'December 15, 2024',
      category: 'Infrastructure',
      title: 'Metro Expansion Project Begins',
      excerpt:
        'Construction commences on 50 km metro rail extension, connecting suburban areas and reducing commute times for thousands of daily travelers.',
      readTime: '4 min read',
    },
    {
      date: 'December 10, 2024',
      category: 'Education',
      title: 'Digital Learning Centers Inaugurated',
      excerpt:
        'State-of-the-art computer labs opened in 200 schools, providing students with access to online learning resources and technology training.',
      readTime: '3 min read',
    },
    {
      date: 'December 5, 2024',
      category: 'Environment',
      title: 'Green City Initiative Progress Report',
      excerpt:
        'Successfully planted 100,000 trees and established 15 urban parks as part of ongoing environmental conservation efforts.',
      readTime: '4 min read',
    },
    {
      date: 'November 28, 2024',
      category: 'Public Safety',
      title: 'Community Policing Program Expansion',
      excerpt:
        'Enhanced neighborhood watch programs and citizen engagement initiatives launched in 30 districts to improve public safety.',
      readTime: '3 min read',
    },
    {
      date: 'November 22, 2024',
      category: 'Social Welfare',
      title: 'Senior Citizen Support Services Enhanced',
      excerpt:
        'New healthcare benefits and community centers for elderly citizens, ensuring dignity and quality of life for seniors.',
      readTime: '4 min read',
    },
  ];

  return (
    <div className="min-h-screen">
      <section className="bg-gradient-to-r from-blue-700 to-blue-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl font-bold mb-6">News & Updates</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Stay informed about our latest initiatives, announcements, and community events
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {newsItems.map((item, index) => (
              <article
                key={index}
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow"
              >
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <span className="inline-block px-3 py-1 bg-blue-100 text-blue-600 text-sm font-semibold rounded-full">
                      {item.category}
                    </span>
                    <div className="flex items-center text-gray-500 text-sm">
                      <Clock className="h-4 w-4 mr-1" />
                      {item.readTime}
                    </div>
                  </div>

                  <h2 className="text-xl font-bold text-gray-900 mb-3 leading-tight">
                    {item.title}
                  </h2>

                  <p className="text-gray-600 mb-4 leading-relaxed">{item.excerpt}</p>

                  <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                    <div className="flex items-center text-gray-500 text-sm">
                      <Calendar className="h-4 w-4 mr-2" />
                      {item.date}
                    </div>
                    <button className="flex items-center text-blue-600 font-semibold hover:text-blue-700 transition-colors">
                      Read More
                      <ArrowRight className="h-4 w-4 ml-1" />
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Stay Connected</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8 leading-relaxed">
            Follow us on social media to get real-time updates on our activities,
            policy announcements, and community engagement events.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors">
              Subscribe to Updates
            </button>
            <button className="px-6 py-3 border-2 border-blue-600 text-blue-600 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
              View Archive
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default News;
