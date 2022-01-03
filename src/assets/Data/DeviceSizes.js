const size = {
  mobileS: '320px',
  mobileL: '425px',
  tablet: '768px',
  laptop: '1024px',
  desktop: '1440px',
};

const device = {
  mobileS: `(max-width: ${size.mobileS})`,
  mobileL: `(max-width: ${size.mobileL})`,
  tablet: `(max-width: ${size.tablet})`,
  laptop: `(max-width: ${size.laptop})`,
  desktop: `(max-width: ${size.desktop})`,
};

export default device;
