import { Image } from 'lucide-react';

function Gallery() {
  const galleryImages = [
    {
      category: 'Community Events',
      title: 'Town Hall Meeting',
      description: 'Engaging with citizens to discuss local issues and policy priorities',
    },
    {
      category: 'Infrastructure',
      title: 'Bridge Inauguration',
      description: 'Opening ceremony of new infrastructure connecting rural communities',
    },
    {
      category: 'Education',
      title: 'School Visit',
      description: 'Interacting with students and teachers at modernized public school',
    },
    {
      category: 'Healthcare',
      title: 'Health Center Launch',
      description: 'Inauguration of new primary healthcare facility in rural area',
    },
    {
      category: 'Environment',
      title: 'Tree Plantation Drive',
      description: 'Community participation in green city initiative',
    },
    {
      category: 'Public Service',
      title: 'Relief Distribution',
      description: 'Providing assistance to families affected by natural disaster',
    },
    {
      category: 'Youth Programs',
      title: 'Skill Training Workshop',
      description: 'Young professionals learning new technologies and industry skills',
    },
    {
      category: 'Agriculture',
      title: 'Farmer Support Program',
      description: 'Meeting with farmers to discuss agricultural policies and support',
    },
    {
      category: 'Women Empowerment',
      title: 'Entrepreneurship Program',
      description: 'Women business owners receiving training and financial support',
    },
    {
      category: 'Cultural Events',
      title: 'Festival Celebration',
      description: 'Participating in local cultural celebrations with community',
    },
    {
      category: 'Technology',
      title: 'Digital Literacy Program',
      description: 'Launching computer training centers in underserved areas',
    },
    {
      category: 'Sports',
      title: 'Youth Sports Initiative',
      description: 'Inaugurating new sports facilities for young athletes',
    },
  ];

  return (
    <div className="min-h-screen">
      <section className="bg-gradient-to-r from-blue-700 to-blue-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl font-bold mb-6">Gallery</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Visual documentation of our work, initiatives, and community engagement
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {galleryImages.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow group"
              >
                <div className="relative aspect-video bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center overflow-hidden">
                  <Image className="h-16 w-16 text-blue-400 group-hover:scale-110 transition-transform" />
                  <div className="absolute inset-0 bg-blue-600 bg-opacity-0 group-hover:bg-opacity-10 transition-all"></div>
                </div>
                <div className="p-6">
                  <span className="inline-block px-3 py-1 bg-blue-100 text-blue-600 text-xs font-semibold rounded-full mb-3">
                    {item.category}
                  </span>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Transparency Through Visuals</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Our gallery showcases the real work being done in communities across the region.
            Every photo tells a story of progress, engagement, and commitment to public service.
          </p>
        </div>
      </section>
    </div>
  );
}

export default Gallery;
