// Section and subsection data structure with sub-subsections
export const sectionData = {
  experience: {
    title: 'Work Experience',
    subsections: [
      {
        id: 'servant-business-bible',
        title: 'Sr. Full Stack Mobile Developer - Business Bible',
        summary: 'Full-stack mobile application (iOS/Android) combining Bible study with AI-powered business principles, daily devotionals, and financial market insights. React Native, GraphQL, PostgreSQL.',
        company: 'Servant.io',
        location: 'Remote Contract',
        period: '2025',
        description: 'Full-stack mobile application (iOS/Android) combining Bible study with AI-powered business principles, daily devotionals, and financial market insights. Integrated platform for spiritual growth and professional development.',
        subSubsections: [
          {
            id: 'frontend-mobile',
            title: 'Frontend (Mobile App) - React Native, Expo, TypeScript',
            summary: 'React Native with Expo, NativeWind, Zustand, Expo Router, Apollo Client, Firebase Auth, RevenueCat, React Native Track Player, and comprehensive testing.',
            bullets: [
              'React Native with Expo (TypeScript), NativeWind (Tailwind CSS), Zustand state management',
              'Expo Router file-based navigation, Apollo Client with GraphQL code generation',
              'Firebase Auth with Apple, Google, LinkedIn OAuth integration',
              'RevenueCat for in-app purchases and subscription management',
              'React Native Track Player for audio playbook functionality with background playback',
              'Multi-translation Bible reader (NASB, GNT) with chapter/verse navigation',
              'AI-powered chat integration with proprietary LLM for business insights',
              'Daily content aggregation (principles, market minutes, business news)',
              'Real-time financial news with AI-generated insights',
              'Firebase Cloud Messaging for push notifications, AsyncStorage for offline support',
              'Internationalization (i18n) support with localization',
              'Testing: Jest, React Native Testing Library, Maestro (E2E)',
            ],
          },
          {
            id: 'backend-graphql',
            title: 'Backend (GraphQL API) - Node.js, TypeScript, GraphQL Yoga, Fastify',
            summary: 'Node.js 20 with TypeScript, GraphQL Yoga on Fastify, PostgreSQL with Prisma, Firebase Admin SDK, Sentry, and Vercel serverless functions.',
            bullets: [
              'Node.js 20 with TypeScript, GraphQL Yoga on Fastify framework',
              'PostgreSQL (Neon) database with Prisma ORM and migrations',
              'Firebase Admin SDK and LinkedIn OIDC for authentication',
              'Sentry integration for error tracking, performance monitoring, and profiling',
              'Vercel serverless functions for deployment',
              'Built scalable GraphQL API with 100% coverage on core modules (Bible, Articles, Chat, Daily, News, Appendix)',
              'Comprehensive test suite: Jest with 75.69% code coverage (143 tests)',
              'Type-safe full-stack application with shared types between frontend and backend',
            ],
          },
          {
            id: 'data-import',
            title: 'Data Import & Management',
            summary: 'TypeScript-based data import utilities for Bible content, business principles, articles, and comprehensive data import pipeline.',
            bullets: [
              'Multiple TypeScript-based data import utilities for Bible content from external APIs (Grace Intelligence, Bible API)',
              'Business principles and placements from CSV, book introductions from Markdown',
              'Appendix data from text files, articles from JSON/CSV',
              'Chapter rendering components generation',
              'Comprehensive data import pipeline for multiple content sources',
            ],
          },
          {
            id: 'infrastructure-devops',
            title: 'Infrastructure & DevOps',
            summary: 'CI/CD with GitHub Actions and EAS Build, AWS KMS with SOPS encryption, comprehensive monitoring, and monorepo structure.',
            bullets: [
              'CI/CD: GitHub Actions, EAS Build (Expo Application Services)',
              'Secrets Management: AWS KMS with SOPS encryption',
              'Code Quality: Prettier, ESLint, TypeScript, Husky pre-commit hooks',
              'Monitoring: Sentry, Firebase Analytics, Crashlytics',
              'Multi-environment support (dev, preview, staging, production)',
              'Monorepo structure with organized workspace, multiple apps and shared packages',
            ],
          },
        ],
      },
      {
        id: 'servant-ema',
        title: 'Sr. Full Stack Developer - ĒMA (Trellis)',
        summary: 'Comprehensive case management and advocacy platform connecting advocates, coordinators, and mothers to resources. Next.js 14, NestJS, PostgreSQL, ZenStack.',
        company: 'Servant.io',
        location: 'Remote Contract',
        period: '2025',
        description: 'Comprehensive case management and advocacy platform connecting advocates, coordinators, and mothers to resources and support systems for child welfare. Facilitates structured advocacy programs, tracks progress through curricula, and provides comprehensive reporting and communication tools.',
        subSubsections: [
          {
            id: 'frontend-nextjs',
            title: 'Frontend - Next.js 14, React 18, TypeScript',
            summary: 'Next.js 14 App Router, shadcn/ui, React Query, React Hook Form, dynamic form generation, multi-role user system, and comprehensive analytics.',
            bullets: [
              'Next.js 14 (App Router) with React 18, shadcn/ui component library with Tailwind CSS',
              'React Query (TanStack Query) for data fetching, React Hook Form with Yup validation',
              'End-to-end TypeScript type safety with generated types from database to frontend',
              'Dynamic form generation system with 15+ specialized input types from declarative configuration',
              'Multi-role user system (Administrators, Supervisors, Coordinators, Advocates, Moms)',
              'Case management with advocate-mom pairing, session scheduling, and documentation',
              'Group advocacy program management with curriculum integration and attendance tracking',
              'Assessment system with automated scoring, well-being assessments, and progress tracking',
              'Comprehensive analytics and export functionality with CSV export capabilities',
            ],
          },
          {
            id: 'backend-nestjs',
            title: 'Backend - NestJS 10, PostgreSQL, Prisma ORM, ZenStack',
            summary: 'NestJS 10 REST API, PostgreSQL with Prisma, ZenStack for schema-first development, JWT authentication, AWS S3, SES/SNS, and Moodle LMS integration.',
            bullets: [
              'NestJS 10 REST API with modular architecture, PostgreSQL database with Prisma ORM',
              'ZenStack for schema-first development with built-in authorization and row-level security',
              'JWT authentication with magic link support, multi-tenant authorization with affiliate-based data isolation',
              'AWS S3 for document storage, AWS SES/SNS for email and SMS notifications',
              'Template-based messaging with Handlebars, background notification processor service',
              'Moodle LMS integration for training and certification',
              'Automated type generation: ZenStack generates Prisma client, OpenAPI specs, and React Query hooks from single source of truth',
            ],
          },
          {
            id: 'infrastructure-railway',
            title: 'Infrastructure & DevOps',
            summary: 'Railway for cloud hosting and CI/CD, Docker, Turbo monorepo, pnpm workspace, and multi-environment deployment.',
            bullets: [
              'Railway for cloud hosting and CI/CD, Docker containerization',
              'Turbo monorepo build system, pnpm workspace management',
              'Monorepo architecture with shared packages for models, API client, and utilities',
              'Code generation: Automated type generation and API client creation',
              'Database migrations: Prisma migrations with seed data management',
              'Multi-environment deployment (dev, staging, UAT, production)',
              'Testing & Quality: ESLint, Prettier, and comprehensive type checking',
            ],
          },
          {
            id: 'legacy-migration',
            title: 'Legacy System Migration & ETL',
            summary: 'Migrated 2,207+ moms, 4,695+ children, and 3,912+ service records from PromiseServes legacy system with comprehensive Python ETL scripts.',
            bullets: [
              'Migrated 2,207+ moms, 4,695+ children, and 3,912+ service records from PromiseServes legacy system',
              'Comprehensive Python ETL scripts for data transformation and migration',
              'Data validation and integrity checks throughout migration process',
            ],
          },
        ],
      },
      {
        id: 'fis',
        title: 'Sr. Mobile Developer - FIS',
        summary: 'Cross-platform iOS, Android, Web App development for Digital One Banking app. TypeScript, Ionic, Capacitor.',
        company: 'FIS',
        location: 'Remote Contract',
        period: '2024',
        description: 'Developed cross-platform mobile and web applications for FIS Digital One Banking using TypeScript, Ionic, and Capacitor. Focused on building responsive core UI components and critical transaction interfaces that work seamlessly across iOS, Android, and web platforms. Created dynamic list views that adapt to different device types and screen sizes, ensuring a consistent user experience across all platforms.',
        subSubsections: [
          {
            id: 'digital-one',
            title: 'Digital One Banking App',
            summary: 'Developed components for the new Digital One Banking app with responsive cross-platform core UI components and dynamic lists.',
            bullets: [
              'Developed components for the new Digital One Banking app',
              'Responsive cross-platform core UI components',
              'Screens with dynamic lists based on device',
              'Critical transaction list item views',
            ],
          },
        ],
      },
      {
        id: 'pickleball',
        title: 'Sr. Mobile Developer - Pickleball.com',
        summary: 'UI/UX design and architecture for pickleball.com app. React Native, AWS AppSync, GraphQL.',
        company: 'Pickleball.com',
        location: 'Remote Contract',
        period: '2024',
        description: 'Contributed to the design and architecture of the pickleball.com mobile application, focusing on creating an intuitive user experience for pickleball enthusiasts. Developed the React Native mobile app using TypeScript and JavaScript, implementing deep link handling through React Native and React Navigation to enable seamless navigation and content sharing. Built a robust mobile API layer using AWS AppSync, GraphQL, and Lambda functions to connect the mobile app with existing backend services. Integrated Detox for comprehensive end-to-end automated testing, ensuring high quality and reliability throughout the CI/CD pipeline.',
        subSubsections: [
          {
            id: 'react-native-app',
            title: 'React Native Mobile App - TypeScript, JavaScript, react-query',
            summary: 'UI/UX design and architecture, deep link handling, and Detox integration for end-to-end automated testing.',
            bullets: [
              'Contributed UI/UX design and architecture for the new pickleball.com app',
              'Developed deep link handling via React Native and React Navigation',
              'Integrated Detox for end-to-end automated testing and CI/CD',
            ],
          },
          {
            id: 'aws-appsync',
            title: 'AWS AppSync API - TypeScript, GraphQL',
            summary: 'Developed mobile API layer between existing services and mobile app using GraphQL, AppSync, and Lambdas.',
            bullets: [
              'Developed mobile API layer between existing services and mobile app',
              'GraphQL, AppSync, and Lambdas',
            ],
          },
        ],
      },
      {
        id: 'ssc-advent',
        title: 'Senior Software Engineer - SS&C Advent',
        summary: 'Led agile team for Black Diamond Wealth Portfolio mobile app. Managed hundreds of custom apps used by 100,000+ users. React Native, .NET, DevOps.',
        company: 'SS&C Advent',
        location: 'Jacksonville, FL',
        period: '2021 - 2023',
        description: 'Led agile team to grow the Black Diamond Wealth Portfolio mobile app for iOS and Android. Released and managed hundreds of custom apps through dynamic customization layers and feature flags.',
        subSubsections: [
          {
            id: 'react-native-mobile',
            title: 'React Native Mobile App - TypeScript, JavaScript, Objective-C, Swift, Java, Kotlin, C++',
            summary: 'Led agile team, managed hundreds of custom apps, developed features including biometric login, MFA, infinite lists, interactive charts, and more.',
            bullets: [
              'Lead an agile team to grow the Black Diamond Wealth Portfolio mobile app for iOS and Android',
              'Communicated with product and team members regarding development status, client support requests, changing Apple and Google store requirements, app features, design, long-term and short-term vision, etc.',
              'Released and managed hundreds of custom apps through dynamic customization layers and feature flags. App resold to over 100 financial advisory firms, used by over 100,000 financial advisors and investors',
              'Developed app features such as: biometric login, MFA, infinite lists, interactive charts, animations, notifications, direct messaging, camera and photo permissions, document sharing, etc.',
            ],
          },
          {
            id: 'mobile-app-management',
            title: 'Mobile App Management Web Application - TypeScript, React, Redux, Node, Express, GraphQL, GRPC',
            summary: 'Scalable solution for managing mobile apps with micro services interfacing with AWS, AppCenter, Apple, Google, BitRise, and internal APIs.',
            bullets: [
              'Developed a scalable solution for managing mobile apps, composed of micro services each responsible for interfacing with service providers such as: Amazon Web Services, Microsoft AppCenter, Apple, Google, BitRise, and internal APIs',
              'Developed web forms and RPA tools to create new mobile apps from client input, automating account setup within Apple AppConnect, Google Play Console and other services',
              'Developed views to track the app setup steps and data within the app stores such as the currently released app versions, certificate & membership expirations, etc.',
            ],
          },
          {
            id: 'api-server',
            title: 'API Server - C#, .NET, SQL, AWS, Azure',
            summary: 'Dual purpose MVC API .NET server for mobile web experience and mobile app API. Architected transition from monolithic to micro-service architecture.',
            bullets: [
              'Maintained dual purpose MVC API .NET server for hosting a mobile web experience and serving as a singular mobile app API to interface with company backend data services, databases and broader platform',
              'Architected mobile team support of the company\'s transition from monolithic to micro-service architecture',
              'Developed restful apis, services, and database queries with EntityFramework and Dapper',
              'Performed .NET framework upgrades, NuGet package upgrades, features enhancements, etc.',
            ],
          },
          {
            id: 'devops-bitrise',
            title: 'DevOps - Ruby, Groovy, Shell, YAML, Jenkins, BitRise, AWS, Google Cloud Platform (GCP)',
            summary: 'CI/CD pipelines, automated testing and builds, automated submission of 1000s of apps per year, BitRise integration for 233+ customized apps.',
            bullets: [
              'Developed and maintained CI/CD pipelines',
              'Automated testing, nightly builds, staging builds, production release builds, and automated submission of 1000\'s of apps per year to Apple/Google stores',
              'Configured Jenkins jobs with an agent on a mac mini to run automated end-to-end tests on iOS simulators',
              'Developed BitRise integration to produce nightly builds, automated icon generation, automated app store screenshot generation, build and submission of over 233 customized iOS and Android apps on a 6-week release cadence. Tools and Services include: BitRise, AWS, Fastlane, Spaceship, Starship, Jenkins, ERB, EJS, ImageMagik, Jest, Detox, Storybook, OsaScript, Reactotron',
            ],
          },
        ],
      },
      {
        id: 'hashrocket',
        title: 'Software Consultant - Hashrocket',
        summary: 'React Native mobile, web, and desktop GIS applications. Real-time systems for service technicians and dispatchers. Expo apps with GraphQL APIs.',
        company: 'Hashrocket',
        location: 'Jacksonville, FL',
        period: '2019 - 2020',
        description: 'React Native mobile, web, and desktop GIS applications for service technicians, dispatchers, and executives.',
        subSubsections: [
          {
            id: 'gis-applications',
            title: 'React Native Mobile, Web, & Desktop GIS Applications - TypeScript, Expo, Electron, GCP, Firebase',
            summary: 'Real-time systems for ABC Plumbing Heating & Electric. React Native iOS iPad app, Electron desktop app, administrative web application, and executive dashboard.',
            bullets: [
              'Maintained real-time systems and applications for ABC Plumbing Heating & Electric service technicians, dispatchers, administrators, managers and executives to perform their jobs',
              'Implemented and maintained Firebase database integrations as adaptive layers between ABC\'s internal Java-based backend systems (Basis & Pro5) and their suite of dynamic real-time custom applications',
              'Developed React Native iOS iPad app for technicians, electron desktop app for dispatchers, administrative web application for administration, and a dashboard for executives',
              'Maintained Google Maps views and geolocation features across apps to enable visibility of technicians location and assist in communication, routing, and scheduling for dispatchers, administration, and executives',
            ],
          },
          {
            id: 'expo-apps',
            title: 'Expo Apps with APIs - Expo, React Native, TypeScript, JavaScript, GraphQL, Ruby on Rails',
            summary: 'Consulted with multiple clients to develop event management, pool maintenance, and print matrix applications using Expo, React Native, and GraphQL.',
            bullets: [
              'Consulted with Haskell in Jacksonville, FL - developed an event management and news communication app for iOS & Android using Expo, React Native, GraphQL, Ruby on Rails, and PostgresDB',
              'Consulted with APi Water in Jupiter, FL - developed a pool maintenance and consumer marketing app with advanced PH calculations and options for pool owners',
              'Consulted with ThomasARTS, Farmington, UT - maintained and enhanced print matrix web application to support customization of outgoing printed letters',
            ],
          },
        ],
      },
      {
        id: 'medtronic',
        title: 'Software Developer - Medtronic',
        summary: 'Process automation tools and document validation solutions. Real-time web application and Microsoft Word add-in that saves $250k/year.',
        company: 'Medtronic',
        location: 'Remote',
        period: '2017 - 2019',
        description: 'Process automation tools and document validation solutions for Medtronic\'s Neuroscience Research and Therapy Division.',
        subSubsections: [
          {
            id: 'internal-web-app',
            title: 'Internal Web Application - TypeScript, JavaScript, React, GraphQL, Node, MeteorJS, MongoDB',
            summary: 'Partnered with senior architect to design and develop process automation tools within a real-time web application for document validation and verification.',
            bullets: [
              'Partnered with senior architect to design and develop process automation tools within a real-time web application for document validation and verification solutions for Medtronic\'s Neuroscience Research and Therapy Division',
            ],
          },
          {
            id: 'word-addin',
            title: 'Microsoft Word Add-In Application - TypeScript, JavaScript, React, HTML, CSS',
            summary: 'Developed "DocChecker" Microsoft Word add-in application to automate document validation for researchers. Saves the company one quarter million per year.',
            bullets: [
              'Developed "DocChecker" Microsoft Word add-in application to automate document validation for researchers. Saves the company one quarter million per year',
            ],
          },
        ],
      },
      {
        id: 'meridian',
        title: 'Software Developer - Meridian Integration',
        summary: 'Oracle billing system upgrade, converting 30,000+ lines of Cobol to Java. Consultation and internal tool development.',
        company: 'Meridian Integration',
        location: 'Jacksonville, FL',
        period: '2016 - 2017',
        description: 'Oracle billing system upgrade and consultation services.',
        subSubsections: [
          {
            id: 'oracle-upgrade',
            title: 'Oracle Billing System Upgrade - Cobol, Java, PL/SQL',
            summary: 'Contributed to major software upgrade for El Paso Electric by converting over 30,000 lines of Cobol to Java.',
            bullets: [
              'Contributed to major software upgrade for El Paso Electric by converting over 30,000 lines of Cobol to Java, writing new integrations in Java and testing / debugging batch billing processing jobs',
            ],
          },
          {
            id: 'consultation',
            title: 'Consultation with Santee Cooper Electric - Cobol, Java',
            summary: 'Advised on right-sized solutions by evaluating code and production logs to prevent significant spending on development alternatives.',
            bullets: [
              'Advised on right-sized solutions by evaluating code and production logs to prevent significant spending on development alternatives',
            ],
          },
          {
            id: 'internal-tool',
            title: 'Internal Tool Application - JavaScript, HTML, CSS, React, Java',
            summary: 'Designed and developed a tool to automate documentation for Java source code by generating Word documents from configurable templates.',
            bullets: [
              'Designed and developed a tool to automate documentation for Java source code by generating Word documents from configurable templates',
            ],
          },
        ],
      },
    ],
  },
  education: {
    title: 'Education',
    subsections: [
      {
        id: 'itt',
        title: 'ITT Technical Institute',
        summary: 'Studied Software Development from 2014-2016. Built a strong foundation in software engineering principles and practical development skills.',
        description: 'Studied Software Development at ITT Technical Institute from 2014 to 2016, where I built a strong foundation in software engineering principles and practical development skills. The program provided comprehensive training in programming fundamentals, software design patterns, database management, and software development lifecycle methodologies. This educational foundation has been instrumental in my career, providing the core knowledge and problem-solving skills that I continue to build upon through hands-on experience and continuous learning.',
      },
    ],
  },
  volunteer: {
    title: 'Volunteer Experience',
    subsections: [
      {
        id: 'robotics',
        title: 'Teaching Middle School Robotics',
        summary: 'Teaching robotics program to middle school students, 2023-2024.',
        period: '2023 - 2024',
        description: 'Volunteered as a robotics instructor for middle school students from 2023 to 2024, teaching fundamental programming and engineering concepts through hands-on robotics projects. Helped students develop problem-solving skills, logical thinking, and teamwork abilities while introducing them to STEM fields. Created engaging lesson plans that combined theory with practical application, allowing students to build and program robots while learning about sensors, motors, and control systems. This experience reinforced my passion for education and mentoring the next generation of technologists.',
      },
      {
        id: 'bitrise',
        title: 'BitRise Mobile DevOps Summit Speaker',
        summary: 'Speaker at BitRise Mobile DevOps Summit 2023.',
        period: '2023',
        description: 'Presented at the BitRise Mobile DevOps Summit in 2023, sharing expertise and insights on mobile development and DevOps practices. The presentation covered best practices for CI/CD pipelines, automated testing, and mobile app deployment strategies. This speaking opportunity allowed me to contribute to the developer community by sharing real-world experiences and lessons learned from managing large-scale mobile applications and complex deployment workflows.',
      },
      {
        id: 'reactjax',
        title: 'ReactJAX Meetup Co-organizer',
        summary: 'Co-organizing ReactJAX meetup for approximately 5 years.',
        period: '~5 years',
        description: 'Co-organized the ReactJAX meetup for approximately 5 years, helping build and maintain a vibrant local React and JavaScript developer community in Jacksonville, Florida. Responsibilities included coordinating monthly meetups, securing speakers and venues, managing event logistics, and fostering connections between local developers. This long-term commitment to community building has strengthened the local tech ecosystem and provided opportunities for developers to learn, network, and share knowledge about React, JavaScript, and modern web development practices.',
      },
      {
        id: 'av-production',
        title: 'Audio and Video Production',
        summary: 'Audio and video production experience for approximately 10 years.',
        period: '~10 years',
        description: 'Active in audio and video production for approximately 10 years, developing skills in recording, editing, mixing, and post-production. This experience has enhanced my technical abilities and attention to detail, while also providing creative outlets outside of software development. The production work has included various projects ranging from live event recording to post-production editing, developing a strong understanding of technical audio/video workflows and creative storytelling through multimedia.',
      },
      {
        id: 'drums',
        title: 'Drums on Sundays',
        summary: 'Playing drums on Sundays for approximately 15 years.',
        period: '~15 years',
        description: 'Played drums regularly on Sundays for approximately 15 years, contributing musical talent to weekly services and special events. This long-term commitment demonstrates dedication, consistency, and the ability to work collaboratively as part of a team. The experience has developed skills in timing, rhythm, and performance under various conditions, while also providing a meaningful way to serve the community and contribute to meaningful experiences through music.',
      },
    ],
  },
  skills: {
    title: 'Skills',
    subsections: [
      {
        id: 'general',
        title: 'General Skills',
        summary: 'Software Engineering, System Debugging, Quality Assurance, Team Management, Problem Solving, and Communication.',
        description: 'Core professional skills encompassing software engineering practices, system debugging, quality assurance, team management, problem solving, and effective communication. Experienced in software updating, code development, web development, policy & procedure compliance, and both verbal & written communication.',
      },
      {
        id: 'methodologies',
        title: 'Software Development Life Cycle / Methodologies',
        summary: 'Design Patterns, SOLID Principles, TDD, OOP, Functional Programming, Agile, Schema-First Development, Monorepo Architecture.',
        description: 'Expertise in software development methodologies and best practices. Proficient in Design Patterns, SOLID Principles, Test Driven Development (TDD), Object Oriented Programming (OOP), Functional Programming, Pair Programming, Agile & Waterfall methodologies. Experienced with schema-first development, monorepo architecture, and modern development workflows.',
      },
      {
        id: 'frontend',
        title: 'Frontend Web / Mobile',
        summary: 'TypeScript, JavaScript, React, React Native, Next.js, Expo, Tailwind CSS, Redux, Zustand, React Query, and more.',
        description: 'Comprehensive expertise in frontend web and mobile development. Proficient in TypeScript, JavaScript, React, React Native, NextJS, TailwindCSS, Redux, Reactotron, Electron, Cordova, HTML 5, CSS, Sass, Styled Components, MaterialUI, JSS, Bootstrap, Zustand, Yarn, Babel, ESLint, Office.js, Formik, Reanimated, React Spring. Development tools: Visual Studio Code, Xcode, Android Studio, Expo.',
      },
      {
        id: 'api',
        title: 'API & Data Layer',
        summary: 'HTTP, REST, GraphQL, Apollo Client, AWS AppSync, Prisma ORM, ZenStack, WebSockets, WebRTC, GRPC.',
        description: 'Extensive experience with API development and data layer technologies. Proficient in HTTP, REST, SOAP, Ajax, GraphQL, Apollo, AWS AppSync, Prisma, WebSockets, WebRTC, and GRPC. Experienced in building scalable API architectures, GraphQL schemas, and real-time communication systems.',
      },
      {
        id: 'backend',
        title: 'Backend Development',
        summary: 'Node.js, NestJS, Fastify, Express, MeteorJS, Java, Ruby on Rails, .NET, C#, Python, and more.',
        description: 'Strong backend development skills across multiple platforms and languages. Proficient in Meteor, Node.js, NestJS, Fastify, Express, Java, Ruby on Rails, .NET, C#, and Python. Experienced with development tools including Postman, Visual Studio, and IntelliJ. Skilled in building RESTful APIs, microservices, and serverless architectures.',
      },
      {
        id: 'devops',
        title: 'Build/Package/DevOps Tools',
        summary: 'Docker, Fastlane, BitRise, EAS Build, Jenkins, GitHub Actions, Turbo Monorepo, Husky, Prettier, ESLint, and more.',
        description: 'Comprehensive DevOps and build tool expertise. Proficient in Shell, Bash, Zsh, Docker, Fastlane, BitRise, ImageMagick, Jenkins, Webpack, and Maestro. Experienced in CI/CD pipeline development, automated testing, build automation, and deployment strategies. Skilled in EAS Build (Expo Application Services), GitHub Actions, Turbo Monorepo, Husky pre-commit hooks, Prettier, and ESLint.',
      },
      {
        id: 'databases',
        title: 'Databases & Data Management',
        summary: 'PostgreSQL, Microsoft SQL Server, MongoDB, Firebase, Oracle DB, MySQL, Prisma ORM, ZenStack, ETL Scripts.',
        description: 'Extensive database and data management experience. Proficient in Microsoft SQL Server, MongoDB, Firebase, Oracle DB, MySQL, and PostgreSQL. Skilled in Prisma ORM, ZenStack, database migrations, ETL scripts, and data transformation. Experienced with both SQL and NoSQL databases, database design, optimization, and data migration strategies.',
      },
      {
        id: '3d',
        title: '3D Development',
        summary: 'WebGL, Blender, Unity 3D, Three JS, React 360, React Three Fiber.',
        description: '3D development expertise for web and game applications. Proficient in WebGL, Blender, Unity 3D, Three JS, React 360, and React Three Fiber. Experienced in creating interactive 3D environments, physics simulations, real-time rendering, and 3D game development.',
      },
      {
        id: 'gis',
        title: 'GIS (Geographic Information Systems)',
        summary: 'Google Maps, Leaflet, Node Geocoder.',
        description: 'Geographic Information Systems development experience. Proficient in Google Maps integration, Leaflet mapping library, and Node Geocoder. Experienced in building location-based applications, geolocation features, mapping interfaces, and routing systems for mobile and web applications.',
      },
    ],
  },
  projects: {
    title: 'Projects',
    subsections: [
      {
        id: 'stickrpg4d',
        title: 'StickRPG 4D',
        summary: 'A 3D web game built with React, React Three Fiber, and Three.js. Features custom interactive environments, third-person controls, physics, real-time lighting, NPC dialog, and branching storylines.',
        description: 'StickRPG 4D is an immersive 3D web game built with React, React Three Fiber (R3F), and Three.js, bringing the classic StickRPG experience into a fully interactive 3D environment. The game features custom-built interactive environments with detailed 3D models and textures, smooth third-person character controls, realistic physics simulation, and dynamic real-time lighting that creates atmospheric and engaging gameplay. Players can interact with NPCs through dialog systems, make choices that affect branching storylines, and explore a rich 3D world directly in their web browser without requiring downloads or installations. This project showcases advanced web development skills, 3D graphics programming, game design principles, and the ability to create complex interactive experiences using modern web technologies.',
        link: 'https://stickrpg4d.com',
      },
    ],
  },
};

export function getSection(section) {
  return sectionData[section] || null;
}

export function getSubsection(section, subsectionId) {
  const sectionInfo = getSection(section);
  if (!sectionInfo) return null;
  return sectionInfo.subsections.find((sub) => sub.id === subsectionId) || null;
}

export function getSubSubsection(section, subsectionId, subSubsectionId) {
  const subsection = getSubsection(section, subsectionId);
  if (!subsection) return null;
  return (
    subsection.subSubsections?.find((subSub) => subSub.id === subSubsectionId) ||
    null
  );
}
