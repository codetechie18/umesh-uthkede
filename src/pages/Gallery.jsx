import { Image } from 'lucide-react';

function Gallery() {
  const galleryImages = [
  {
    category: 'Community Events',
    title: 'Town Hall Meeting',
    description: 'Engaging with citizens to discuss local issues and policy priorities',
    image: '/hero/bg2.jpeg',
  },
  {
    category: 'Infrastructure',
   title: 'Jan Morcha',
description: 'Citizens coming together to raise voices on key public issues.',

    image: '/gallery/img2.jpeg',
  },
  {
   category: 'Public Welfare',
title: 'Citizen Facilities',
description: 'Strengthening basic facilities to support quality living for all.',

    image: '/gallery/img3.jpeg',
  },
  {
    category: 'Identity & Trust Gap',
    title: 'Public Identity',
    description: 'Lack of a clear and consistent visual identity has created confusion among citizens, making it harder to recognize initiatives and trust official communications.',
    image: '/gallery/img1.jpeg',
  },
  {
    category: 'Public Service',
    title: 'Relief Distribution',
    description: 'Providing assistance to families affected by natural disaster',
    image: '/hero/bg5.jpeg',
  },
  {
    category: 'Youth Programs',
    title: 'Skill Training Workshop',
    description: 'Young professionals learning new technologies and industry skills',
    image: '/gallery/img4.jpeg',
  },
  // {
  //   category: 'Agriculture',
  //   title: 'Farmer Support Program',
  //   description: 'Meeting with farmers to discuss agricultural policies and support',
  //   image: '/gallery/agriculture.jpg',
  // },
]


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
                <div className="relative aspect-video overflow-hidden">
  <img
    src={item.image}
    alt={item.title}
    className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-500"
  />
  <div className="absolute inset-0 bg-blue-900/20 opacity-0 group-hover:opacity-100 transition-opacity" />
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
