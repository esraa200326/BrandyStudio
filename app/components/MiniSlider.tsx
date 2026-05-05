import React from 'react';

export default function ScrollingBanner() {
  const services = [
    'Brand Strategy',
    'Market Research',
    'Visual Identity',
    'Logo Design',
    'Content Strategy',
    'Social Media Branding',
    'Website Creation',
    'UI/UX DESIGN',
    'Landing Pages',
    'Product Photography',
    'Videography',
    'Video Editing',
    'MOTION GRAPHIC',
    'Social Media Management',
    'Campaign Planning',
    'Organic Marketing',
    'Digital Marketing',
    'Email Marketing',
    'Reporting & Analytics',
    'Business Consulting'
  ];

  return (
    <div className="w-full overflow-hidden relative" style={{ transform: 'skewY(-2deg)', transformOrigin: 'center' }}>
      <div className="bg-[#dcc1ff] py-4">
        <style>{`
          @keyframes scroll {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(-50%);
            }
          }

          .scrolling-banner {
            display: flex;
            animation: scroll 30s linear infinite;
            width: 200%;
          }

          .scrolling-banner:hover {
            animation-play-state: paused;
          }

          .banner-item {
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 0 20px;
            white-space: nowrap;
            font-weight: 700;
            font-size: 30px;
            color: black;
            letter-spacing: 1px;
          }

          .banner-separator {
            color: #fe3715;
            margin: 0 15px;
            font-size: 30px;
          }
        `}</style>

        <div className="scrolling-banner">
          {[...services, ...services].map((service, index) => (
            <React.Fragment key={index}>
              <div className="banner-item">{service}</div>
              <div className="banner-separator">✱</div>
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
}