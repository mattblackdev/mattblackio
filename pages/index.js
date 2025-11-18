import Link from 'next/link';
import { getPosts } from '../utils/mdx-utils';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

import Image from 'next/image';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Layout from '../components/Layout';
import SEO from '../components/SEO';
import { getGlobalData } from '../utils/global-data';

const description =
  'Highly skilled and results driven senior software engineer with 10 years of experience in full stack web, mobile, and cross-platform application development. Proficient in React and React Native, cloud, enterprise, and micro-service architectures. Skilled in CI/CD, end-to-end automated testing, and process automation. Experienced in IT leadership, mentorship, feature estimation, development & debugging, dependency upgrades, and tech migrations. Passionate about learning and contributing to the tech community through speaking and attending conferences, local meetups, and contributing to open source. Values collaboration with cross-functional teams to create applications that meet user needs, provide business value, and deliver great experiences. Team player and servant leader. Proficient with Cursor AI IDE.';

const SectionWrapper = ({ children, delay = 0 }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.6, delay }}
    >
      {children}
    </motion.div>
  );
};

const ExperienceCard = ({ children, delay = 0 }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  return (
    <motion.div
      ref={ref}
      className="mb-10 p-6 rounded-lg transition-all duration-300 hover:bg-gray-50 dark:hover:bg-gray-800/50"
      initial={{ opacity: 0, x: -30 }}
      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
    >
      {children}
    </motion.div>
  );
};

export default function Index({ posts, globalData }) {
  return (
    <Layout>
      <SEO title={globalData.name} description={description} />
      <Header />
      <main className="w-full">
        <motion.div
          className="w-full flex justify-center items-center mt-16"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, type: 'spring', stiffness: 100 }}
        >
          <motion.div
            whileHover={{ scale: 1.1, rotate: 5 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: 'spring', stiffness: 400, damping: 17 }}
            className="relative"
          >
            <motion.div
              className="absolute inset-0 rounded-full bg-primary/20 blur-xl"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.5, 0.8, 0.5],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            />
            <Image
              alt="profile headshot of a handsome man stading in front of glass windows"
              className="rounded-full relative z-10"
              src="/profile_pic.png"
              width="174"
              height="174"
              priority
              unoptimized
            />
          </motion.div>
        </motion.div>
        <div className="px-10 w-full mx-auto mt-16">
          <SectionWrapper delay={0.2}>
            <motion.p
              className="text-justify"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              {description}
            </motion.p>
          </SectionWrapper>

          <SectionWrapper delay={0.3}>
            <motion.h2
              id="experience"
              className="text-4xl mt-20 mb-7"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              Work Experience
            </motion.h2>
          </SectionWrapper>

          <ExperienceCard delay={0.1}>
            <h3 className="font-bold text-xl mb-1">
              Sr. Full Stack Mobile Developer
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-3">
              Servant.io | Remote Contract | 2025
            </p>
            <p className="mb-4 text-justify">
              <strong>Business Bible</strong> - Full-stack mobile application
              (iOS/Android) combining Bible study with AI-powered business
              principles, daily devotionals, and financial market insights.
              Integrated platform for spiritual growth and professional
              development.
            </p>
            <div className="mb-4">
              <h4 className="font-semibold mb-2">
                Frontend (Mobile App) - React Native, Expo, TypeScript
              </h4>
              <ul className="list-disc list-inside mb-2 space-y-1">
                <li>
                  React Native with Expo (TypeScript), NativeWind (Tailwind
                  CSS), Zustand state management
                </li>
                <li>
                  Expo Router file-based navigation, Apollo Client with GraphQL
                  code generation
                </li>
                <li>
                  Firebase Auth with Apple, Google, LinkedIn OAuth integration
                </li>
                <li>
                  RevenueCat for in-app purchases and subscription management
                </li>
                <li>
                  React Native Track Player for audio playbook functionality
                  with background playback
                </li>
                <li>
                  Multi-translation Bible reader (NASB, GNT) with chapter/verse
                  navigation
                </li>
                <li>
                  AI-powered chat integration with proprietary LLM for business
                  insights
                </li>
                <li>
                  Daily content aggregation (principles, market minutes,
                  business news)
                </li>
                <li>Real-time financial news with AI-generated insights</li>
                <li>
                  Firebase Cloud Messaging for push notifications, AsyncStorage
                  for offline support
                </li>
                <li>Internationalization (i18n) support with localization</li>
                <li>
                  Testing: Jest, React Native Testing Library, Maestro (E2E)
                </li>
              </ul>
            </div>
            <div className="mb-4">
              <h4 className="font-semibold mb-2">
                Backend (GraphQL API) - Node.js, TypeScript, GraphQL Yoga,
                Fastify
              </h4>
              <ul className="list-disc list-inside mb-2 space-y-1">
                <li>
                  Node.js 20 with TypeScript, GraphQL Yoga on Fastify framework
                </li>
                <li>
                  PostgreSQL (Neon) database with Prisma ORM and migrations
                </li>
                <li>Firebase Admin SDK and LinkedIn OIDC for authentication</li>
                <li>
                  Sentry integration for error tracking, performance monitoring,
                  and profiling
                </li>
                <li>Vercel serverless functions for deployment</li>
                <li>
                  Built scalable GraphQL API with 100% coverage on core modules
                  (Bible, Articles, Chat, Daily, News, Appendix)
                </li>
                <li>
                  Comprehensive test suite: Jest with 75.69% code coverage (143
                  tests)
                </li>
                <li>
                  Type-safe full-stack application with shared types between
                  frontend and backend
                </li>
              </ul>
            </div>
            <div className="mb-4">
              <h4 className="font-semibold mb-2">Data Import & Management</h4>
              <ul className="list-disc list-inside mb-2 space-y-1">
                <li>
                  Multiple TypeScript-based data import utilities for Bible
                  content from external APIs (Grace Intelligence, Bible API)
                </li>
                <li>
                  Business principles and placements from CSV, book
                  introductions from Markdown
                </li>
                <li>Appendix data from text files, articles from JSON/CSV</li>
                <li>Chapter rendering components generation</li>
                <li>
                  Comprehensive data import pipeline for multiple content
                  sources
                </li>
              </ul>
            </div>
            <div className="mb-4">
              <h4 className="font-semibold mb-2">Infrastructure & DevOps</h4>
              <ul className="list-disc list-inside mb-2 space-y-1">
                <li>
                  CI/CD: GitHub Actions, EAS Build (Expo Application Services)
                </li>
                <li>Secrets Management: AWS KMS with SOPS encryption</li>
                <li>
                  Code Quality: Prettier, ESLint, TypeScript, Husky pre-commit
                  hooks
                </li>
                <li>Monitoring: Sentry, Firebase Analytics, Crashlytics</li>
                <li>
                  Multi-environment support (dev, preview, staging, production)
                </li>
                <li>
                  Monorepo structure with organized workspace, multiple apps and
                  shared packages
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Technical Highlights</h4>
              <ul className="list-disc list-inside space-y-1">
                <li>
                  Integrated multiple third-party services (Firebase,
                  RevenueCat, Grace Intelligence APIs)
                </li>
                <li>
                  Established robust CI/CD pipeline with automated testing and
                  deployment
                </li>
                <li>
                  Designed and implemented secure authentication flows with
                  multiple OAuth providers
                </li>
                <li>
                  Created modular architecture with separated concerns and
                  specialized importers
                </li>
                <li>
                  Database schema-driven development with Prisma migrations
                </li>
              </ul>
            </div>
          </ExperienceCard>

          <ExperienceCard delay={0.15}>
            <h3 className="font-bold text-xl mb-1">Sr. Full Stack Developer</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-3">
              Servant.io | Remote Contract | 2025
            </p>
            <p className="mb-4 text-justify">
              <strong>ĒMA (Trellis)</strong> - Comprehensive case management and
              advocacy platform connecting advocates, coordinators, and mothers
              to resources and support systems for child welfare. Facilitates
              structured advocacy programs, tracks progress through curricula,
              and provides comprehensive reporting and communication tools.
            </p>
            <div className="mb-4">
              <h4 className="font-semibold mb-2">
                Frontend - Next.js 14, React 18, TypeScript
              </h4>
              <ul className="list-disc list-inside mb-2 space-y-1">
                <li>
                  Next.js 14 (App Router) with React 18, shadcn/ui component
                  library with Tailwind CSS
                </li>
                <li>
                  React Query (TanStack Query) for data fetching, React Hook
                  Form with Yup validation
                </li>
                <li>
                  End-to-end TypeScript type safety with generated types from
                  database to frontend
                </li>
                <li>
                  Dynamic form generation system with 15+ specialized input
                  types from declarative configuration
                </li>
                <li>
                  Multi-role user system (Administrators, Supervisors,
                  Coordinators, Advocates, Moms)
                </li>
                <li>
                  Case management with advocate-mom pairing, session scheduling,
                  and documentation
                </li>
                <li>
                  Group advocacy program management with curriculum integration
                  and attendance tracking
                </li>
                <li>
                  Assessment system with automated scoring, well-being
                  assessments, and progress tracking
                </li>
                <li>
                  Comprehensive analytics and export functionality with CSV
                  export capabilities
                </li>
              </ul>
            </div>
            <div className="mb-4">
              <h4 className="font-semibold mb-2">
                Backend - NestJS 10, PostgreSQL, Prisma ORM, ZenStack
              </h4>
              <ul className="list-disc list-inside mb-2 space-y-1">
                <li>
                  NestJS 10 REST API with modular architecture, PostgreSQL
                  database with Prisma ORM
                </li>
                <li>
                  ZenStack for schema-first development with built-in
                  authorization and row-level security
                </li>
                <li>
                  JWT authentication with magic link support, multi-tenant
                  authorization with affiliate-based data isolation
                </li>
                <li>
                  AWS S3 for document storage, AWS SES/SNS for email and SMS
                  notifications
                </li>
                <li>
                  Template-based messaging with Handlebars, background
                  notification processor service
                </li>
                <li>Moodle LMS integration for training and certification</li>
                <li>
                  Automated type generation: ZenStack generates Prisma client,
                  OpenAPI specs, and React Query hooks from single source of
                  truth
                </li>
              </ul>
            </div>
            <div className="mb-4">
              <h4 className="font-semibold mb-2">Infrastructure & DevOps</h4>
              <ul className="list-disc list-inside mb-2 space-y-1">
                <li>
                  Railway for cloud hosting and CI/CD, Docker containerization
                </li>
                <li>Turbo monorepo build system, pnpm workspace management</li>
                <li>
                  Monorepo architecture with shared packages for models, API
                  client, and utilities
                </li>
                <li>
                  Code generation: Automated type generation and API client
                  creation
                </li>
                <li>
                  Database migrations: Prisma migrations with seed data
                  management
                </li>
                <li>
                  Multi-environment deployment (dev, staging, UAT, production)
                </li>
                <li>
                  Testing & Quality: ESLint, Prettier, and comprehensive type
                  checking
                </li>
              </ul>
            </div>
            <div className="mb-4">
              <h4 className="font-semibold mb-2">
                Legacy System Migration & ETL
              </h4>
              <ul className="list-disc list-inside mb-2 space-y-1">
                <li>
                  Migrated 2,207+ moms, 4,695+ children, and 3,912+ service
                  records from PromiseServes legacy system
                </li>
                <li>
                  Comprehensive Python ETL scripts for data transformation and
                  migration
                </li>
                <li>
                  Data validation and integrity checks throughout migration
                  process
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Technical Achievements</h4>
              <ul className="list-disc list-inside space-y-1">
                <li>
                  Schema-first development with ZenStack generating Prisma
                  client, OpenAPI specs, and React Query hooks
                </li>
                <li>
                  Row-level security with multi-tenant authorization and
                  affiliate-based data isolation
                </li>
                <li>
                  End-to-end TypeScript with generated types from database to
                  frontend
                </li>
                <li>
                  Form Factory System: Dynamic form generation from declarative
                  configuration with Yup schema-based validation
                </li>
                <li>
                  Background processing service for reliable email/SMS delivery
                </li>
                <li>Cloudflare Turnstile integration for security</li>
              </ul>
            </div>
          </ExperienceCard>

          <ExperienceCard delay={0.3}>
            <h3 className="font-bold text-xl mb-1">Sr. Mobile Developer</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-3">
              FIS | Remote Contract | 2024
            </p>
            <p className="mb-2">
              Cross-Platform iOS, Android, Web App - TypeScript, Ionic,
              Capacitor
            </p>
            <ul className="list-disc list-inside space-y-1">
              <li>Developed components for the new Digital One Banking app</li>
              <li>Responsive cross-platform core UI components</li>
              <li>Screens with dynamic lists based on device</li>
              <li>Critical transaction list item views</li>
            </ul>
          </ExperienceCard>

          <ExperienceCard delay={0.4}>
            <h3 className="font-bold text-xl mb-1">Sr. Mobile Developer</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-3">
              Pickleball.com | Remote Contract | 2024
            </p>
            <div className="mb-4">
              <h4 className="font-semibold mb-2">
                React Native Mobile App - TypeScript, JavaScript, react-query
              </h4>
              <ul className="list-disc list-inside mb-2 space-y-1">
                <li>
                  Contributed UI/UX design and architecture for the new
                  pickleball.com app
                </li>
                <li>
                  Developed deep link handling via React Native and React
                  Navigation
                </li>
                <li>
                  Integrated Detox for end-to-end automated testing and CI/CD
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-2">
                AWS AppSync API - TypeScript, GraphQL
              </h4>
              <ul className="list-disc list-inside space-y-1">
                <li>
                  Developed mobile API layer between existing services and
                  mobile app
                </li>
                <li>GraphQL, AppSync, and Lambdas</li>
              </ul>
            </div>
          </ExperienceCard>

          <ExperienceCard delay={0.5}>
            <h3 className="font-bold text-xl mb-1">Senior Software Engineer</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-3">
              SS&C Advent | Jacksonville, FL | 2021 - 2023
            </p>
            <div className="mb-4">
              <h4 className="font-semibold mb-2">
                React Native Mobile App - TypeScript, JavaScript, Objective-C,
                Swift, Java, Kotlin, C++
              </h4>
              <ul className="list-disc list-inside mb-2 space-y-1">
                <li>
                  Lead an agile team to grow the Black Diamond Wealth Portfolio
                  mobile app for iOS and Android
                </li>
                <li>
                  Communicated with product and team members regarding
                  development status, client support requests, changing Apple
                  and Google store requirements, app features, design, long-term
                  and short-term vision, etc.
                </li>
                <li>
                  Released and managed hundreds of custom apps through dynamic
                  customization layers and feature flags. App resold to over 100
                  financial advisory firms, used by over 100,000 financial
                  advisors and investors
                </li>
                <li>
                  Developed app features such as: biometric login, MFA, infinite
                  lists, interactive charts, animations, notifications, direct
                  messaging, camera and photo permissions, document sharing,
                  etc.
                </li>
              </ul>
            </div>
            <div className="mb-4">
              <h4 className="font-semibold mb-2">
                Mobile App Management Web Application - TypeScript, React,
                Redux, Node, Express, GraphQL, GRPC
              </h4>
              <ul className="list-disc list-inside mb-2 space-y-1">
                <li>
                  Developed a scalable solution for managing mobile apps,
                  composed of micro services each responsible for interfacing
                  with service providers such as: Amazon Web Services, Microsoft
                  AppCenter, Apple, Google, BitRise, and internal APIs
                </li>
                <li>
                  Developed web forms and RPA tools to create new mobile apps
                  from client input, automating account setup within Apple
                  AppConnect, Google Play Console and other services
                </li>
                <li>
                  Developed views to track the app setup steps and data within
                  the app stores such as the currently released app versions,
                  certificate & membership expirations, etc.
                </li>
              </ul>
            </div>
            <div className="mb-4">
              <h4 className="font-semibold mb-2">
                API Server - C#, .NET, SQL, AWS, Azure
              </h4>
              <ul className="list-disc list-inside mb-2 space-y-1">
                <li>
                  Maintained dual purpose MVC API .NET server for hosting a
                  mobile web experience and serving as a singular mobile app API
                  to interface with company backend data services, databases and
                  broader platform
                </li>
                <li>
                  Architected mobile team support of the company&apos;s
                  transition from monolithic to micro-service architecture
                </li>
                <li>
                  Developed restful apis, services, and database queries with
                  EntityFramework and Dapper
                </li>
                <li>
                  Performed .NET framework upgrades, NuGet package upgrades,
                  features enhancements, etc.
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-2">
                DevOps - Ruby, Groovy, Shell, YAML, Jenkins, BitRise, AWS,
                Google Cloud Platform (GCP)
              </h4>
              <ul className="list-disc list-inside space-y-1">
                <li>Developed and maintained CI/CD pipelines</li>
                <li>
                  Automated testing, nightly builds, staging builds, production
                  release builds, and automated submission of 1000&apos;s of
                  apps per year to Apple/Google stores
                </li>
                <li>
                  Configured Jenkins jobs with an agent on a mac mini to run
                  automated end-to-end tests on iOS simulators
                </li>
                <li>
                  Developed BitRise integration to produce nightly builds,
                  automated icon generation, automated app store screenshot
                  generation, build and submission of over 233 customized iOS
                  and Android apps on a 6-week release cadence. Tools and
                  Services include: BitRise, AWS, Fastlane, Spaceship, Starship,
                  Jenkins, ERB, EJS, ImageMagik, Jest, Detox, Storybook,
                  OsaScript, Reactotron
                </li>
              </ul>
            </div>
          </ExperienceCard>

          <ExperienceCard delay={0.6}>
            <h3 className="font-bold text-xl mb-1">Software Consultant</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-3">
              Hashrocket | Jacksonville, FL | 2019 - 2020
            </p>
            <div className="mb-4">
              <h4 className="font-semibold mb-2">
                React Native Mobile, Web, & Desktop GIS Applications -
                TypeScript, Expo, Electron, GCP, Firebase
              </h4>
              <ul className="list-disc list-inside mb-2 space-y-1">
                <li>
                  Maintained real-time systems and applications for ABC Plumbing
                  Heating & Electric service technicians, dispatchers,
                  administrators, managers and executives to perform their jobs
                </li>
                <li>
                  Implemented and maintained Firebase database integrations as
                  adaptive layers between ABC&apos;s internal Java-based backend
                  systems (Basis & Pro5) and their suite of dynamic real-time
                  custom applications
                </li>
                <li>
                  Developed React Native iOS iPad app for technicians, electron
                  desktop app for dispatchers, administrative web application
                  for administration, and a dashboard for executives
                </li>
                <li>
                  Maintained Google Maps views and geolocation features across
                  apps to enable visibility of technicians location and assist
                  in communication, routing, and scheduling for dispatchers,
                  administration, and executives
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-2">
                Expo Apps with APIs - Expo, React Native, TypeScript,
                JavaScript, GraphQL, Ruby on Rails
              </h4>
              <ul className="list-disc list-inside space-y-1">
                <li>
                  Consulted with Haskell in Jacksonville, FL - developed an
                  event management and news communication app for iOS & Android
                  using Expo, React Native, GraphQL, Ruby on Rails, and
                  PostgresDB
                </li>
                <li>
                  Consulted with APi Water in Jupiter, FL - developed a pool
                  maintenance and consumer marketing app with advanced PH
                  calculations and options for pool owners
                </li>
                <li>
                  Consulted with ThomasARTS, Farmington, UT - maintained and
                  enhanced print matrix web application to support customization
                  of outgoing printed letters
                </li>
              </ul>
            </div>
          </ExperienceCard>

          <ExperienceCard delay={0.7}>
            <h3 className="font-bold text-xl mb-1">Software Developer</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-3">
              Medtronic | Remote | 2017 - 2019
            </p>
            <div className="mb-4">
              <h4 className="font-semibold mb-2">
                Internal Web Application - TypeScript, JavaScript, React,
                GraphQL, Node, MeteorJS, MongoDB
              </h4>
              <ul className="list-disc list-inside mb-2 space-y-1">
                <li>
                  Partnered with senior architect to design and develop process
                  automation tools within a real-time web application for
                  document validation and verification solutions for
                  Medtronic&apos;s Neuroscience Research and Therapy Division
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-2">
                Microsoft Word Add-In Application - TypeScript, JavaScript,
                React, HTML, CSS
              </h4>
              <ul className="list-disc list-inside space-y-1">
                <li>
                  Developed &quot;DocChecker&quot; Microsoft Word add-in
                  application to automate document validation for researchers.
                  Saves the company one quarter million per year
                </li>
              </ul>
            </div>
          </ExperienceCard>

          <ExperienceCard delay={0.8}>
            <h3 className="font-bold text-xl mb-1">Software Developer</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-3">
              Meridian Integration | Jacksonville, FL | 2016 - 2017
            </p>
            <div className="mb-4">
              <h4 className="font-semibold mb-2">
                Oracle Billing System Upgrade - Cobol, Java, PL/SQL
              </h4>
              <ul className="list-disc list-inside mb-2 space-y-1">
                <li>
                  Contributed to major software upgrade for El Paso Electric by
                  converting over 30,000 lines of Cobol to Java, writing new
                  integrations in Java and testing / debugging batch billing
                  processing jobs
                </li>
              </ul>
            </div>
            <div className="mb-4">
              <h4 className="font-semibold mb-2">
                Consultation with Santee Cooper Electric - Cobol, Java
              </h4>
              <ul className="list-disc list-inside mb-2 space-y-1">
                <li>
                  Advised on right-sized solutions by evaluating code and
                  production logs to prevent significant spending on development
                  alternatives
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-2">
                Internal Tool Application - JavaScript, HTML, CSS, React, Java
              </h4>
              <ul className="list-disc list-inside space-y-1">
                <li>
                  Designed and developed a tool to automate documentation for
                  Java source code by generating Word documents from
                  configurable templates
                </li>
              </ul>
            </div>
          </ExperienceCard>

          <SectionWrapper delay={0.3}>
            <motion.h2
              id="education"
              className="text-4xl mt-20 mb-7"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              Education
            </motion.h2>
            <div className="mb-10">
              <p className="mb-2">
                Studied Software Development at ITT Technical Institute, 2014 -
                2016
              </p>
            </div>
          </SectionWrapper>

          <SectionWrapper delay={0.3}>
            <motion.h2
              id="volunteer"
              className="text-4xl mt-20 mb-7"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              Volunteer Experience
            </motion.h2>
            <motion.ul
              className="list-disc list-inside space-y-1 mb-10"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <li>Teaching Middle School Robotics Program 2023 - 2024</li>
              <li>Speaker at BitRise Mobile DevOps Summit 2023</li>
              <li>Co-organizer ReactJAX Meetup ~ 5 years</li>
              <li>Audio and video production ~ 10 years</li>
              <li>Drums on Sundays ~ 15 years</li>
            </motion.ul>
          </SectionWrapper>

          <SectionWrapper delay={0.3}>
            <motion.h2
              id="skills"
              className="text-4xl mt-20 mb-7"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              Skills
            </motion.h2>
            <div className="mb-10">
              <p className="mb-4">
                Software Engineering, System Debugging, Software Updating,
                Quality Assurance, Code Development, Team Management, Web
                Development, Policy & Procedure Compliance, Problem Solving, and
                Verbal & Written Communication.
              </p>

              <h3 className="font-bold text-xl mb-3 mt-6">
                Software Development Life Cycle / Methodologies:
              </h3>
              <p className="mb-4">
                Design Patterns, SOLID Principles, Test Driven Development,
                Object Oriented Programming, Functional Programming, Pair
                Programming, Agile & Waterfall, Schema-First Development,
                Monorepo Architecture
              </p>

              <h3 className="font-bold text-xl mb-3 mt-6">
                Frontend Web / Mobile:
              </h3>
              <p className="mb-4">
                TypeScript, JavaScript, React, React Native, Next.js 14 (App
                Router), React 18, Expo, Expo Router, NativeWind (Tailwind CSS),
                TailwindCSS, shadcn/ui, Redux, Zustand, React Query (TanStack
                Query), React Hook Form, Yup, Reactotron, Electron, Ionic,
                Capacitor, Cordova, HTML 5, CSS, Sass, Styled Components,
                MaterialUI, JSS, Bootstrap, Yarn, pnpm, Babel, ESLint,
                Office.js, Formik, Reanimated, React Spring, React Native Track
                Player, Visual Studio Code, Xcode, Android Studio, Objective-C,
                Swift, Java, Kotlin, C++
              </p>

              <h3 className="font-bold text-xl mb-3 mt-6">API & Data Layer:</h3>
              <p className="mb-4">
                HTTP, REST, SOAP, Ajax, GraphQL, GraphQL Yoga, Apollo Client,
                AWS AppSync, Prisma ORM, ZenStack, WebSockets, WebRTC, GRPC,
                React Query (TanStack Query), Code Generation
              </p>

              <h3 className="font-bold text-xl mb-3 mt-6">
                Backend Development:
              </h3>
              <p className="mb-4">
                Node.js, NestJS 10, Fastify, Express, MeteorJS, Java, Ruby on
                Rails, .NET, C#, EntityFramework, Dapper, Python, Postman,
                Visual Studio, IntelliJ, Vercel Serverless Functions
              </p>

              <h3 className="font-bold text-xl mb-3 mt-6">
                Authentication & Security:
              </h3>
              <p className="mb-4">
                Firebase Auth, OAuth (Apple, Google, LinkedIn), JWT, Magic
                Links, LinkedIn OIDC, Firebase Admin SDK, Multi-tenant
                Authorization, Row-level Security, Cloudflare Turnstile,
                Biometric Login, MFA
              </p>

              <h3 className="font-bold text-xl mb-3 mt-6">
                Testing & Quality Assurance:
              </h3>
              <p className="mb-4">
                Jest, React Native Testing Library, Maestro (E2E), Detox, Code
                Coverage, Test Driven Development, Automated Testing, End-to-End
                Testing
              </p>

              <h3 className="font-bold text-xl mb-3 mt-6">
                Build/Package/DevOps Tools:
              </h3>
              <p className="mb-4">
                Shell, Bash, Zsh, Docker, Fastlane, BitRise, EAS Build (Expo
                Application Services), ImageMagick, Jenkins, GitHub Actions,
                Webpack, Turbo Monorepo, Husky, Prettier, ESLint, TypeScript,
                Railway, AWS KMS, SOPS, Spaceship, Starship, ERB, EJS,
                Storybook, OsaScript
              </p>

              <h3 className="font-bold text-xl mb-3 mt-6">
                Databases & Data Management:
              </h3>
              <p className="mb-4">
                PostgreSQL (Neon), Microsoft SQL Server, MongoDB, Firebase,
                Oracle DB, MySQL, Prisma ORM, ZenStack, Database Migrations, ETL
                Scripts, Data Import Pipelines
              </p>

              <h3 className="font-bold text-xl mb-3 mt-6">
                Cloud Services & Infrastructure:
              </h3>
              <p className="mb-4">
                AWS (S3, SES, SNS, KMS, AppSync), Azure, Google Cloud Platform
                (GCP), Vercel, Railway, Firebase (Auth, Cloud Messaging,
                Analytics, Crashlytics), Sentry, RevenueCat, Moodle LMS
              </p>

              <h3 className="font-bold text-xl mb-3 mt-6">
                Mobile App Services:
              </h3>
              <p className="mb-4">
                RevenueCat (In-App Purchases, Subscriptions), Firebase Cloud
                Messaging, AsyncStorage, Apple App Store, Google Play Console,
                App Store Management, Certificate Management
              </p>

              <h3 className="font-bold text-xl mb-3 mt-6">
                Internationalization & Localization:
              </h3>
              <p className="mb-4">
                i18n, Multi-translation Support, Localization
              </p>

              <h3 className="font-bold text-xl mb-3 mt-6">3D:</h3>
              <p className="mb-4">
                WebGL, Blender, Unity 3D, Three JS, React 360, React Three Fiber
              </p>

              <h3 className="font-bold text-xl mb-3 mt-6">GIS:</h3>
              <p className="mb-4">Google Maps, Leaflet, Node Geocoder</p>

              <h3 className="font-bold text-xl mb-3 mt-6">
                Legacy Technologies:
              </h3>
              <p className="mb-4">Cobol, PL/SQL</p>
            </div>
          </SectionWrapper>

          <SectionWrapper delay={0.3}>
            <motion.h2
              id="projects"
              className="text-4xl mt-20 mb-7"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              Projects
            </motion.h2>
            <h3 className="font-bold mb-2">StickRPG 4D</h3>
            <Link href="https://stickrpg4d.com">
              <motion.a
                className="underline text-blue-300 hover:text-primary inline-block"
                whileHover={{ scale: 1.05, x: 5 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: 'spring', stiffness: 400, damping: 17 }}
              >
                www.stickrpg4d.com
              </motion.a>
            </Link>
            <p className="text-justify mb-7">
              Launched a 3D web game using React, R3F, and ThreeJS. Designed and
              developed custom interactive environments, third-person character
              controls, dynamic physics, real-time lighting and shadows,
              animations, independent game systems, NPC dialog, branching
              storyline, and visual and audio effects.
            </p>
          </SectionWrapper>

          <SectionWrapper delay={0.3}>
            <motion.h2
              id="contact"
              className="text-4xl mt-20 mb-7"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              Contact
            </motion.h2>
            <div>
              <Link href="mailto:matt@mattblack.dev">
                <motion.a
                  className="font-extrabold mx-2 leading-loose hover:text-primary inline-block"
                  whileHover={{ scale: 1.1, x: 5 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: 'spring', stiffness: 400, damping: 17 }}
                >
                  matt@mattblack.dev
                </motion.a>
              </Link>
            </div>
            <div>
              <Link href="tel:+19042489051">
                <motion.a
                  className="font-extrabold mx-2 leading-loose hover:text-primary inline-block"
                  whileHover={{ scale: 1.1, x: 5 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: 'spring', stiffness: 400, damping: 17 }}
                >
                  +1-904-248-9051
                </motion.a>
              </Link>
              <div>
                <Link href="https://www.linkedin.com/in/matt-black-software">
                  <motion.a
                    className="font-extrabold mx-2 leading-loose hover:text-primary inline-block"
                    whileHover={{ scale: 1.1, x: 5 }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ type: 'spring', stiffness: 400, damping: 17 }}
                  >
                    LinkedIn
                  </motion.a>
                </Link>
              </div>
            </div>
          </SectionWrapper>
        </div>
      </main>
      <Footer copyrightText={globalData.footerText} />
    </Layout>
  );
}

export function getStaticProps() {
  const posts = getPosts();
  const globalData = getGlobalData();

  return { props: { posts, globalData } };
}
