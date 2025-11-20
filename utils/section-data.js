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
            content: (
              <div>
                <ul className="list-disc list-inside mb-2 space-y-1 text-sm">
                  <li>React Native with Expo (TypeScript), NativeWind (Tailwind CSS), Zustand state management</li>
                  <li>Expo Router file-based navigation, Apollo Client with GraphQL code generation</li>
                  <li>Firebase Auth with Apple, Google, LinkedIn OAuth integration</li>
                  <li>RevenueCat for in-app purchases and subscription management</li>
                  <li>React Native Track Player for audio playbook functionality with background playback</li>
                  <li>Multi-translation Bible reader (NASB, GNT) with chapter/verse navigation</li>
                  <li>AI-powered chat integration with proprietary LLM for business insights</li>
                  <li>Daily content aggregation (principles, market minutes, business news)</li>
                  <li>Real-time financial news with AI-generated insights</li>
                  <li>Firebase Cloud Messaging for push notifications, AsyncStorage for offline support</li>
                  <li>Internationalization (i18n) support with localization</li>
                  <li>Testing: Jest, React Native Testing Library, Maestro (E2E)</li>
                </ul>
              </div>
            ),
          },
          {
            id: 'backend-graphql',
            title: 'Backend (GraphQL API) - Node.js, TypeScript, GraphQL Yoga, Fastify',
            summary: 'Node.js 20 with TypeScript, GraphQL Yoga on Fastify, PostgreSQL with Prisma, Firebase Admin SDK, Sentry, and Vercel serverless functions.',
            content: (
              <div>
                <ul className="list-disc list-inside mb-2 space-y-1 text-sm">
                  <li>Node.js 20 with TypeScript, GraphQL Yoga on Fastify framework</li>
                  <li>PostgreSQL (Neon) database with Prisma ORM and migrations</li>
                  <li>Firebase Admin SDK and LinkedIn OIDC for authentication</li>
                  <li>Sentry integration for error tracking, performance monitoring, and profiling</li>
                  <li>Vercel serverless functions for deployment</li>
                  <li>Built scalable GraphQL API with 100% coverage on core modules (Bible, Articles, Chat, Daily, News, Appendix)</li>
                  <li>Comprehensive test suite: Jest with 75.69% code coverage (143 tests)</li>
                  <li>Type-safe full-stack application with shared types between frontend and backend</li>
                </ul>
              </div>
            ),
          },
          {
            id: 'data-import',
            title: 'Data Import & Management',
            summary: 'TypeScript-based data import utilities for Bible content, business principles, articles, and comprehensive data import pipeline.',
            content: (
              <div>
                <ul className="list-disc list-inside mb-2 space-y-1 text-sm">
                  <li>Multiple TypeScript-based data import utilities for Bible content from external APIs (Grace Intelligence, Bible API)</li>
                  <li>Business principles and placements from CSV, book introductions from Markdown</li>
                  <li>Appendix data from text files, articles from JSON/CSV</li>
                  <li>Chapter rendering components generation</li>
                  <li>Comprehensive data import pipeline for multiple content sources</li>
                </ul>
              </div>
            ),
          },
          {
            id: 'infrastructure-devops',
            title: 'Infrastructure & DevOps',
            summary: 'CI/CD with GitHub Actions and EAS Build, AWS KMS with SOPS encryption, comprehensive monitoring, and monorepo structure.',
            content: (
              <div>
                <ul className="list-disc list-inside mb-2 space-y-1 text-sm">
                  <li>CI/CD: GitHub Actions, EAS Build (Expo Application Services)</li>
                  <li>Secrets Management: AWS KMS with SOPS encryption</li>
                  <li>Code Quality: Prettier, ESLint, TypeScript, Husky pre-commit hooks</li>
                  <li>Monitoring: Sentry, Firebase Analytics, Crashlytics</li>
                  <li>Multi-environment support (dev, preview, staging, production)</li>
                  <li>Monorepo structure with organized workspace, multiple apps and shared packages</li>
                </ul>
              </div>
            ),
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
            content: (
              <div>
                <ul className="list-disc list-inside mb-2 space-y-1 text-sm">
                  <li>Next.js 14 (App Router) with React 18, shadcn/ui component library with Tailwind CSS</li>
                  <li>React Query (TanStack Query) for data fetching, React Hook Form with Yup validation</li>
                  <li>End-to-end TypeScript type safety with generated types from database to frontend</li>
                  <li>Dynamic form generation system with 15+ specialized input types from declarative configuration</li>
                  <li>Multi-role user system (Administrators, Supervisors, Coordinators, Advocates, Moms)</li>
                  <li>Case management with advocate-mom pairing, session scheduling, and documentation</li>
                  <li>Group advocacy program management with curriculum integration and attendance tracking</li>
                  <li>Assessment system with automated scoring, well-being assessments, and progress tracking</li>
                  <li>Comprehensive analytics and export functionality with CSV export capabilities</li>
                </ul>
              </div>
            ),
          },
          {
            id: 'backend-nestjs',
            title: 'Backend - NestJS 10, PostgreSQL, Prisma ORM, ZenStack',
            summary: 'NestJS 10 REST API, PostgreSQL with Prisma, ZenStack for schema-first development, JWT authentication, AWS S3, SES/SNS, and Moodle LMS integration.',
            content: (
              <div>
                <ul className="list-disc list-inside mb-2 space-y-1 text-sm">
                  <li>NestJS 10 REST API with modular architecture, PostgreSQL database with Prisma ORM</li>
                  <li>ZenStack for schema-first development with built-in authorization and row-level security</li>
                  <li>JWT authentication with magic link support, multi-tenant authorization with affiliate-based data isolation</li>
                  <li>AWS S3 for document storage, AWS SES/SNS for email and SMS notifications</li>
                  <li>Template-based messaging with Handlebars, background notification processor service</li>
                  <li>Moodle LMS integration for training and certification</li>
                  <li>Automated type generation: ZenStack generates Prisma client, OpenAPI specs, and React Query hooks from single source of truth</li>
                </ul>
              </div>
            ),
          },
          {
            id: 'infrastructure-railway',
            title: 'Infrastructure & DevOps',
            summary: 'Railway for cloud hosting and CI/CD, Docker, Turbo monorepo, pnpm workspace, and multi-environment deployment.',
            content: (
              <div>
                <ul className="list-disc list-inside mb-2 space-y-1 text-sm">
                  <li>Railway for cloud hosting and CI/CD, Docker containerization</li>
                  <li>Turbo monorepo build system, pnpm workspace management</li>
                  <li>Monorepo architecture with shared packages for models, API client, and utilities</li>
                  <li>Code generation: Automated type generation and API client creation</li>
                  <li>Database migrations: Prisma migrations with seed data management</li>
                  <li>Multi-environment deployment (dev, staging, UAT, production)</li>
                  <li>Testing & Quality: ESLint, Prettier, and comprehensive type checking</li>
                </ul>
              </div>
            ),
          },
          {
            id: 'legacy-migration',
            title: 'Legacy System Migration & ETL',
            summary: 'Migrated 2,207+ moms, 4,695+ children, and 3,912+ service records from PromiseServes legacy system with comprehensive Python ETL scripts.',
            content: (
              <div>
                <ul className="list-disc list-inside mb-2 space-y-1 text-sm">
                  <li>Migrated 2,207+ moms, 4,695+ children, and 3,912+ service records from PromiseServes legacy system</li>
                  <li>Comprehensive Python ETL scripts for data transformation and migration</li>
                  <li>Data validation and integrity checks throughout migration process</li>
                </ul>
              </div>
            ),
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
        description: 'Cross-Platform iOS, Android, Web App - TypeScript, Ionic, Capacitor',
        subSubsections: [
          {
            id: 'digital-one',
            title: 'Digital One Banking App',
            summary: 'Developed components for the new Digital One Banking app with responsive cross-platform core UI components and dynamic lists.',
            content: (
              <div>
                <ul className="list-disc list-inside space-y-1 text-sm">
                  <li>Developed components for the new Digital One Banking app</li>
                  <li>Responsive cross-platform core UI components</li>
                  <li>Screens with dynamic lists based on device</li>
                  <li>Critical transaction list item views</li>
                </ul>
              </div>
            ),
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
        description: 'UI/UX design and architecture for pickleball.com app',
        subSubsections: [
          {
            id: 'react-native-app',
            title: 'React Native Mobile App - TypeScript, JavaScript, react-query',
            summary: 'UI/UX design and architecture, deep link handling, and Detox integration for end-to-end automated testing.',
            content: (
              <div>
                <ul className="list-disc list-inside mb-2 space-y-1 text-sm">
                  <li>Contributed UI/UX design and architecture for the new pickleball.com app</li>
                  <li>Developed deep link handling via React Native and React Navigation</li>
                  <li>Integrated Detox for end-to-end automated testing and CI/CD</li>
                </ul>
              </div>
            ),
          },
          {
            id: 'aws-appsync',
            title: 'AWS AppSync API - TypeScript, GraphQL',
            summary: 'Developed mobile API layer between existing services and mobile app using GraphQL, AppSync, and Lambdas.',
            content: (
              <div>
                <ul className="list-disc list-inside space-y-1 text-sm">
                  <li>Developed mobile API layer between existing services and mobile app</li>
                  <li>GraphQL, AppSync, and Lambdas</li>
                </ul>
              </div>
            ),
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
            content: (
              <div>
                <ul className="list-disc list-inside mb-2 space-y-1 text-sm">
                  <li>Lead an agile team to grow the Black Diamond Wealth Portfolio mobile app for iOS and Android</li>
                  <li>Communicated with product and team members regarding development status, client support requests, changing Apple and Google store requirements, app features, design, long-term and short-term vision, etc.</li>
                  <li>Released and managed hundreds of custom apps through dynamic customization layers and feature flags. App resold to over 100 financial advisory firms, used by over 100,000 financial advisors and investors</li>
                  <li>Developed app features such as: biometric login, MFA, infinite lists, interactive charts, animations, notifications, direct messaging, camera and photo permissions, document sharing, etc.</li>
                </ul>
              </div>
            ),
          },
          {
            id: 'mobile-app-management',
            title: 'Mobile App Management Web Application - TypeScript, React, Redux, Node, Express, GraphQL, GRPC',
            summary: 'Scalable solution for managing mobile apps with micro services interfacing with AWS, AppCenter, Apple, Google, BitRise, and internal APIs.',
            content: (
              <div>
                <ul className="list-disc list-inside mb-2 space-y-1 text-sm">
                  <li>Developed a scalable solution for managing mobile apps, composed of micro services each responsible for interfacing with service providers such as: Amazon Web Services, Microsoft AppCenter, Apple, Google, BitRise, and internal APIs</li>
                  <li>Developed web forms and RPA tools to create new mobile apps from client input, automating account setup within Apple AppConnect, Google Play Console and other services</li>
                  <li>Developed views to track the app setup steps and data within the app stores such as the currently released app versions, certificate & membership expirations, etc.</li>
                </ul>
              </div>
            ),
          },
          {
            id: 'api-server',
            title: 'API Server - C#, .NET, SQL, AWS, Azure',
            summary: 'Dual purpose MVC API .NET server for mobile web experience and mobile app API. Architected transition from monolithic to micro-service architecture.',
            content: (
              <div>
                <ul className="list-disc list-inside mb-2 space-y-1 text-sm">
                  <li>Maintained dual purpose MVC API .NET server for hosting a mobile web experience and serving as a singular mobile app API to interface with company backend data services, databases and broader platform</li>
                  <li>Architected mobile team support of the company&apos;s transition from monolithic to micro-service architecture</li>
                  <li>Developed restful apis, services, and database queries with EntityFramework and Dapper</li>
                  <li>Performed .NET framework upgrades, NuGet package upgrades, features enhancements, etc.</li>
                </ul>
              </div>
            ),
          },
          {
            id: 'devops-bitrise',
            title: 'DevOps - Ruby, Groovy, Shell, YAML, Jenkins, BitRise, AWS, Google Cloud Platform (GCP)',
            summary: 'CI/CD pipelines, automated testing and builds, automated submission of 1000s of apps per year, BitRise integration for 233+ customized apps.',
            content: (
              <div>
                <ul className="list-disc list-inside space-y-1 text-sm">
                  <li>Developed and maintained CI/CD pipelines</li>
                  <li>Automated testing, nightly builds, staging builds, production release builds, and automated submission of 1000&apos;s of apps per year to Apple/Google stores</li>
                  <li>Configured Jenkins jobs with an agent on a mac mini to run automated end-to-end tests on iOS simulators</li>
                  <li>Developed BitRise integration to produce nightly builds, automated icon generation, automated app store screenshot generation, build and submission of over 233 customized iOS and Android apps on a 6-week release cadence. Tools and Services include: BitRise, AWS, Fastlane, Spaceship, Starship, Jenkins, ERB, EJS, ImageMagik, Jest, Detox, Storybook, OsaScript, Reactotron</li>
                </ul>
              </div>
            ),
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
            content: (
              <div>
                <ul className="list-disc list-inside mb-2 space-y-1 text-sm">
                  <li>Maintained real-time systems and applications for ABC Plumbing Heating & Electric service technicians, dispatchers, administrators, managers and executives to perform their jobs</li>
                  <li>Implemented and maintained Firebase database integrations as adaptive layers between ABC&apos;s internal Java-based backend systems (Basis & Pro5) and their suite of dynamic real-time custom applications</li>
                  <li>Developed React Native iOS iPad app for technicians, electron desktop app for dispatchers, administrative web application for administration, and a dashboard for executives</li>
                  <li>Maintained Google Maps views and geolocation features across apps to enable visibility of technicians location and assist in communication, routing, and scheduling for dispatchers, administration, and executives</li>
                </ul>
              </div>
            ),
          },
          {
            id: 'expo-apps',
            title: 'Expo Apps with APIs - Expo, React Native, TypeScript, JavaScript, GraphQL, Ruby on Rails',
            summary: 'Consulted with multiple clients to develop event management, pool maintenance, and print matrix applications using Expo, React Native, and GraphQL.',
            content: (
              <div>
                <ul className="list-disc list-inside space-y-1 text-sm">
                  <li>Consulted with Haskell in Jacksonville, FL - developed an event management and news communication app for iOS & Android using Expo, React Native, GraphQL, Ruby on Rails, and PostgresDB</li>
                  <li>Consulted with APi Water in Jupiter, FL - developed a pool maintenance and consumer marketing app with advanced PH calculations and options for pool owners</li>
                  <li>Consulted with ThomasARTS, Farmington, UT - maintained and enhanced print matrix web application to support customization of outgoing printed letters</li>
                </ul>
              </div>
            ),
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
            content: (
              <div>
                <ul className="list-disc list-inside mb-2 space-y-1 text-sm">
                  <li>Partnered with senior architect to design and develop process automation tools within a real-time web application for document validation and verification solutions for Medtronic&apos;s Neuroscience Research and Therapy Division</li>
                </ul>
              </div>
            ),
          },
          {
            id: 'word-addin',
            title: 'Microsoft Word Add-In Application - TypeScript, JavaScript, React, HTML, CSS',
            summary: 'Developed "DocChecker" Microsoft Word add-in application to automate document validation for researchers. Saves the company one quarter million per year.',
            content: (
              <div>
                <ul className="list-disc list-inside space-y-1 text-sm">
                  <li>Developed &quot;DocChecker&quot; Microsoft Word add-in application to automate document validation for researchers. Saves the company one quarter million per year</li>
                </ul>
              </div>
            ),
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
            content: (
              <div>
                <ul className="list-disc list-inside mb-2 space-y-1 text-sm">
                  <li>Contributed to major software upgrade for El Paso Electric by converting over 30,000 lines of Cobol to Java, writing new integrations in Java and testing / debugging batch billing processing jobs</li>
                </ul>
              </div>
            ),
          },
          {
            id: 'consultation',
            title: 'Consultation with Santee Cooper Electric - Cobol, Java',
            summary: 'Advised on right-sized solutions by evaluating code and production logs to prevent significant spending on development alternatives.',
            content: (
              <div>
                <ul className="list-disc list-inside mb-2 space-y-1 text-sm">
                  <li>Advised on right-sized solutions by evaluating code and production logs to prevent significant spending on development alternatives</li>
                </ul>
              </div>
            ),
          },
          {
            id: 'internal-tool',
            title: 'Internal Tool Application - JavaScript, HTML, CSS, React, Java',
            summary: 'Designed and developed a tool to automate documentation for Java source code by generating Word documents from configurable templates.',
            content: (
              <div>
                <ul className="list-disc list-inside space-y-1 text-sm">
                  <li>Designed and developed a tool to automate documentation for Java source code by generating Word documents from configurable templates</li>
                </ul>
              </div>
            ),
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
        description: 'Studied Software Development at ITT Technical Institute',
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
      },
      {
        id: 'bitrise',
        title: 'BitRise Mobile DevOps Summit Speaker',
        summary: 'Speaker at BitRise Mobile DevOps Summit 2023.',
        period: '2023',
      },
      {
        id: 'reactjax',
        title: 'ReactJAX Meetup Co-organizer',
        summary: 'Co-organizing ReactJAX meetup for approximately 5 years.',
        period: '~5 years',
      },
      {
        id: 'av-production',
        title: 'Audio and Video Production',
        summary: 'Audio and video production experience for approximately 10 years.',
        period: '~10 years',
      },
      {
        id: 'drums',
        title: 'Drums on Sundays',
        summary: 'Playing drums on Sundays for approximately 15 years.',
        period: '~15 years',
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
        description: 'A 3D web game using React, R3F, and ThreeJS',
        link: 'https://stickrpg4d.com',
      },
    ],
  },
};
