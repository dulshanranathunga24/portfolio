export interface Project {
  id: string;
  title: string;
  subtitle: string;
  category: "Microservices" | "Full-Stack" | "Backend / System";
  description: string;
  highlights: string[];
  technologies: string[];
  metrics?: string;
  githubUrl?: string;
  liveUrl?: string;
}

export interface EducationItem {
  degree: string;
  institution: string;
  period: string;
  status: string;
  description: string;
  achievements?: string[];
}

export interface ReferenceItem {
  name: string;
  role: string;
  company: string;
  phone: string;
  email: string;
}

export const portfolioData = {
  personal: {
    name: "Dulshan Ranathunga",
    tagline: "Software Engineering Intern",
    headline:
      "Crafting Scalable Full-Stack Solutions with Modern Web & Enterprise Backend Architectures",
    summary:
      "3rd-year IT undergraduate at SLIIT specializing in full-stack web development using React, Next.js, Java, and Spring Boot. Experienced in designing responsive user interfaces, developing RESTful APIs, and managing MySQL and MongoDB databases. Seeking a Full-Stack Software Engineering Internship to build and ship scalable end-to-end applications.",
    location: "Divulapitiya, Sri Lanka",
    phone: "+94 74 1391072",
    email: "dulshanranathunga24@gmail.com",
    githubUrl: "https://github.com/dulshanranathunga24",
    githubUsername: "dulshanranathunga24",
    linkedinUrl: "https://linkedin.com/in/dulshan-ranathunga",
    linkedinUsername: "dulshan-ranathunga",
    portfolioUrl: "https://dulshanranathunga.vercel.app",
    avatarUrl: "/avatar.jpg",
    cvDownloadUrl: "/dulshan-cv.jpg",
    availability: "Available for Software Engineering Internships",
  },

  stats: [
    { label: "SLIIT Undergraduate", value: "3rd Year", detail: "Specializing in IT" },
    { label: "Core Projects", value: "4+", detail: "Microservices & Full-Stack" },
    { label: "Backend Core", value: "Java & Spring", detail: "Spring Boot, REST, JWT" },
    { label: "Frontend Core", value: "React & Next.js", detail: "Tailwind CSS & Modern UI" },
  ],

  softSkills: [
    {
      title: "Agile & Team Collaboration",
      description: "Effective teamwork in sprint cycles, code reviews, and continuous communication.",
    },
    {
      title: "Problem-Solving & Debugging",
      description: "Analytical mindset for root-cause diagnosis, bug fixing, and algorithmic optimization.",
    },
    {
      title: "Technical Communication",
      description: "Clear architectural documentation, Swagger API contracts, and team collaboration.",
    },
    {
      title: "Time Management",
      description: "Prioritizing milestones, organizing tasks, and delivering functional deliverables on time.",
    },
    {
      title: "Accountability & Ownership",
      description: "Dedicated to code quality, testing reliability, and taking full ownership of features.",
    },
  ],

  languages: [
    { name: "English", level: "Fluent", note: "Professional communication & technical writing" },
    { name: "Sinhala", level: "Fluent", note: "Native proficiency" },
  ],

  skillCategories: [
    {
      name: "Programming Languages",
      icon: "Code",
      skills: [
        { name: "Java", level: "Advanced", note: "Java 17, OOP, Collections, Multithreading" },
        { name: "JavaScript", level: "Advanced", note: "ES6+, Async/Await, DOM, Modern JS" },
        { name: "SQL", level: "Proficient", note: "Complex Queries, Joins, Indexing, Schema Design" },
        { name: "HTML5 / CSS3", level: "Expert", note: "Semantic Markup, Modern Flex/Grid Layouts" },
      ],
    },
    {
      name: "Frontend Development",
      icon: "Globe",
      skills: [
        { name: "React.js", level: "Advanced", note: "Hooks, Component Architecture, State Management" },
        { name: "Next.js", level: "Advanced", note: "App Router, Server Components, SSR & Static Generation" },
        { name: "Tailwind CSS", level: "Expert", note: "Utility-first CSS, Responsive UI, Dark Themes" },
        { name: "Responsive UI/UX", level: "Advanced", note: "Mobile-First Design, Accessibility, Interactive UX" },
      ],
    },
    {
      name: "Backend & Architecture",
      icon: "Server",
      skills: [
        { name: "Spring Boot", level: "Advanced", note: "REST Controllers, Dependency Injection, Spring Security" },
        { name: "Node.js", level: "Proficient", note: "Server Runtimes, Event-driven architecture" },
        { name: "RESTful APIs", level: "Advanced", note: "Resource modeling, HTTP status codes, Swagger / OpenAPI" },
        { name: "JWT Authentication", level: "Advanced", note: "Stateless Token Auth, Role-based Access Control" },
        { name: "Microservices", level: "Proficient", note: "Distributed services, service isolation, inter-service calls" },
      ],
    },
    {
      name: "Databases & Storage",
      icon: "Database",
      skills: [
        { name: "MySQL", level: "Proficient", note: "Relational Schema Design, Foreign Keys, Stored Logic" },
        { name: "MongoDB & Atlas", level: "Advanced", note: "NoSQL document stores, Aggregation Pipelines, Cloud Atlas" },
      ],
    },
    {
      name: "DevOps, Tools & Workflow",
      icon: "Wrench",
      skills: [
        { name: "Git & GitHub", level: "Advanced", note: "Branching strategies, PRs, merge workflows" },
        { name: "GitHub Actions", level: "Proficient", note: "Automated CI/CD pipelines & test workflows" },
        { name: "Postman", level: "Advanced", note: "API testing, automated request collections, mocking" },
        { name: "Swagger / OpenAPI", level: "Advanced", note: "Interactive API documentation & schema validation" },
        { name: "Linux (CLI Basics)", level: "Proficient", note: "Bash shell, file system commands, server scripting" },
      ],
    },
  ],

  projects: [
    {
      id: "ridelink",
      title: "RideLink - Ride-Hailing Application",
      subtitle: "Four-Service Distributed Microservices Backend",
      category: "Microservices",
      description:
        "Developed a robust four-service ride-sharing backend using Java 17, Spring Boot, and MongoDB Atlas. The system decouples business domains into autonomous microservices handling user authentication, driver management, real-time ride booking, and fare processing.",
      highlights: [
        "Architected 4 independent Spring Boot microservices with discrete data boundaries",
        "Configured secure authentication and authorization utilizing JSON Web Tokens (JWT)",
        "Integrated MongoDB Atlas for scalable cloud document storage and geospatial ride logging",
        "Automated continuous integration and build checks with GitHub Actions CI workflows",
        "Authored interactive Swagger / OpenAPI contracts for clean developer consumption",
      ],
      technologies: [
        "Java 17",
        "Spring Boot",
        "MongoDB Atlas",
        "Microservices",
        "JWT Security",
        "Swagger / OpenAPI",
        "GitHub Actions",
        "REST APIs",
      ],
      metrics: "4 Microservices | Automated CI/CD",
      githubUrl: "https://github.com/dulshanranathunga24",
      liveUrl: "https://dulshanranathunga.vercel.app",
    },
    {
      id: "online-shopping",
      title: "Online Shopping System (E-Commerce)",
      subtitle: "Full-Stack Web Store with Dynamic Cart & Order Workflows",
      category: "Full-Stack",
      description:
        "Engineered a full-stack e-commerce web platform utilizing Java (Spring Boot) backend and MongoDB database. Features end-to-end shopping journeys including user registration, catalog search, reactive cart management, and secure order processing workflows.",
      highlights: [
        "Implemented stateless JWT user authentication and role-based access for shoppers and admins",
        "Constructed dynamic cart management with live inventory checks and price recalculations",
        "Designed structured order processing state machine from checkout to fulfillment",
        "Connected to MongoDB for rapid product catalog querying and flexible order documents",
      ],
      technologies: [
        "Java",
        "Spring Boot",
        "MongoDB",
        "JWT Auth",
        "React",
        "RESTful API",
        "Dynamic Cart",
        "Order Workflows",
      ],
      metrics: "End-to-End Cart & Order Workflows",
      githubUrl: "https://github.com/dulshanranathunga24",
      liveUrl: "https://dulshanranathunga.vercel.app",
    },
    {
      id: "taxi-booking",
      title: "Taxi Booking Application",
      subtitle: "Object-Oriented Fleet Dispatch & Fare Calculation System",
      category: "Backend / System",
      description:
        "Built a modular Java-based taxi booking engine engineered with object-oriented design patterns. Handles seamless ride dispatching, dynamic driver allocation, and automated distance-based fare calculations.",
      highlights: [
        "Engineered clean OOP design patterns ensuring separation of concerns and maintainability",
        "Developed dynamic ride request and nearest-available driver allocation algorithm",
        "Implemented automated fare calculation module based on journey distance and vehicle category",
        "Created comprehensive unit testing suites to validate dispatch consistency",
      ],
      technologies: [
        "Java",
        "Object-Oriented Programming (OOP)",
        "Dispatch Algorithms",
        "Fare Calculation",
        "Driver Allocation",
        "Clean Code",
      ],
      metrics: "Dynamic Allocation & Dynamic Fare Engine",
      githubUrl: "https://github.com/dulshanranathunga24",
      liveUrl: "https://dulshanranathunga.vercel.app",
    },
    {
      id: "student-management",
      title: "Student Management System",
      subtitle: "Full-Stack CRUD Academic Portal with Relational Database",
      category: "Full-Stack",
      description:
        "Engineered a full-stack CRUD web application utilizing HTML, CSS, JavaScript, and Java backend services connected to a relational MySQL database for student admissions and course tracking.",
      highlights: [
        "Developed comprehensive CRUD operations for student profiles, enrollments, and course records",
        "Designed normalized MySQL database schema with foreign key constraints for data integrity",
        "Built intuitive and responsive user interfaces with vanilla JavaScript, modern HTML5, and CSS",
        "Implemented server-side validation to prevent duplicate entries and corrupted data input",
      ],
      technologies: [
        "Java",
        "MySQL",
        "JavaScript",
        "HTML5",
        "CSS3",
        "CRUD Architecture",
        "Database Schema Design",
      ],
      metrics: "Full Relational CRUD & Course Tracking",
      githubUrl: "https://github.com/dulshanranathunga24",
      liveUrl: "https://dulshanranathunga.vercel.app",
    },
  ] as Project[],

  education: [
    {
      degree: "BSc (Hons) in IT Specializing in Information Technology",
      institution: "Sri Lanka Institute of Information Technology (SLIIT)",
      period: "2024 - 2028",
      status: "Currently 3rd Year Undergraduate",
      description:
        "Undergraduate degree focusing on software engineering principles, enterprise Java, web development, data structures, algorithm design, cloud computing, and database management systems.",
      achievements: [
        "Specialization in Information Technology & Full-Stack Development",
        "Active contributor to software engineering projects and technical assignments",
        "Practical implementation of Spring Boot, React, and database microservices",
      ],
    },
    {
      degree: "G.C.E. Advanced Level - Technology Stream",
      institution: "President's College, Minuwangoda",
      period: "2023",
      status: "Completed",
      description:
        "Completed Advanced Level examinations with a specialization in the Technology stream, establishing core foundations in science, technology, mathematics, and logic.",
    },
    {
      degree: "G.C.E. Ordinary Level",
      institution: "President's College, Minuwangoda",
      period: "2021",
      status: "Completed",
      description:
        "Successfully completed Ordinary Level education with distinction in mathematics, science, and English.",
    },
  ] as EducationItem[],

  references: [
    {
      name: "Kasun Nirmal",
      role: "Chief Technology Officer (CTO)",
      company: "Wardiere Inc.",
      phone: "123-456-7890",
      email: "hello@reallygreatsite.com",
    },
    {
      name: "Harper Richard",
      role: "Chief Executive Officer (CEO)",
      company: "Wardiere Inc.",
      phone: "123-456-7890",
      email: "hello@reallygreatsite.com",
    },
  ] as ReferenceItem[],
};
