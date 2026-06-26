export const BIO =
  'Highly skilled and results driven senior software engineer with 10 years of experience in full stack web, mobile, and cross-platform application development. Proficient in React and React Native, cloud, enterprise, and micro-service architectures. Skilled in CI/CD, end-to-end automated testing, and process automation. Experienced in IT leadership, mentorship, feature estimation, development & debugging, dependency upgrades, and tech migrations. Passionate about learning and contributing to the tech community through speaking and attending conferences, local meetups, and contributing to open source. Values collaboration with cross-functional teams to create applications that meet user needs, provide business value, and deliver great experiences. Team player and servant leader. Proficient with Cursor AI IDE.';

export const getGlobalData = () => {
  const name = process.env.BLOG_NAME
    ? decodeURI(process.env.BLOG_NAME)
    : 'Matt Black';
  const jobTitle = process.env.BLOG_JOB_TITLE
    ? decodeURI(process.env.BLOG_JOB_TITLE)
    : 'Senior Software Engineer';
  const footerText = process.env.BLOG_FOOTER_TEXT
    ? decodeURI(process.env.BLOG_FOOTER_TEXT)
    : '❤️';
  const email = process.env.BLOG_EMAIL
    ? decodeURI(process.env.BLOG_EMAIL)
    : 'matt@mattblack.dev';
  const linkedIn = process.env.BLOG_LINKEDIN
    ? decodeURI(process.env.BLOG_LINKEDIN)
    : 'https://www.linkedin.com/in/matt-black-software';

  return {
    name,
    jobTitle,
    footerText,
    email,
    linkedIn,
    bio: BIO,
  };
};
