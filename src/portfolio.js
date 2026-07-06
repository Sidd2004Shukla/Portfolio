/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: false, // Show the home page immediately.
};

//SEO Related settings
const seo = {
  title: "Siddharth Shukla Portfolio",
  description:
    "Software engineer portfolio focused on Spring Boot, Android, and full stack development.",
  og: {
    title: "Siddharth Shukla Portfolio",
    type: "website",
    url: "http://ashutoshhathidara.com/",
  },
};

//Home Page
const greeting = {
  title: "Siddharth Shukla",
  logo_name: "SiddharthShukla",
  nickname: "siddharth_shukla",
  subTitle:
    "Spring Boot and Android developer building clean, practical software products.",
  resumeLink: "",
  portfolio_repository: "",
  githubProfile: "",
};

const socialMediaLinks = [
  /* Your Social Media Link */
  // github: "https://github.com/ashutosh1919",
  // linkedin: "https://www.linkedin.com/in/ashutosh-hathidara-88710b138/",
  // gmail: "ashutoshhathidara98@gmail.com",
  // gitlab: "https://gitlab.com/ashutoshhathidara98",
  // facebook: "https://www.facebook.com/laymanbrother.19/",
  // twitter: "https://twitter.com/ashutosh_1919",
  // instagram: "https://www.instagram.com/layman_brother/"

  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/siddharth-shukla-/",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },
  {
    name: "Github",
    link: "https://github.com/Sidd2004Shukla",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
];

const skills = {
  data: [
    {
      title: "Spring Boot Development",
      fileName: "SpringBootImg",
      skills: [
        "⚡ Building REST APIs and backend services with Spring Boot",
        "⚡ Designing layered architectures with clean service and repository boundaries",
        "⚡ Working with AWS, Docker, Kubernetes, MongoDB, and Java for deployment-ready backends",
        "⚡ Implementing secure microservices using Spring Boot, Spring Security, JWT, and Gateway architectures",
        "⚡ Optimizing DB queries using JPA/Hibernate, caching with Redis, and integrating message queues like RabbitMQ/Kafka",
      ],
      softwareSkills: [
        {
          skillName: "Java",
          fontAwesomeClassname: "simple-icons:java",
          style: {
            color: "#007396",
          },
        },
        {
          skillName: "Spring Boot",
          fontAwesomeClassname: "simple-icons:springboot",
          style: {
            color: "#6DB33F",
          },
        },
        {
          skillName: "AWS",
          fontAwesomeClassname: "simple-icons:amazonaws",
          style: {
            color: "#FF9900",
          },
        },
        {
          skillName: "Docker",
          fontAwesomeClassname: "simple-icons:docker",
          style: {
            color: "#1488C6",
          },
        },
        {
          skillName: "Kubernetes",
          fontAwesomeClassname: "simple-icons:kubernetes",
          style: {
            color: "#326CE5",
          },
        },
        {
          skillName: "MongoDB",
          fontAwesomeClassname: "simple-icons:mongodb",
          style: {
            color: "#47A248",
          },
        },
        {
          skillName: "MySQL",
          fontAwesomeClassname: "simple-icons:mysql",
          style: {
            color: "#4479A1",
          },
        },
        {
          skillName: "PostgreSQL",
          fontAwesomeClassname: "simple-icons:postgresql",
          style: {
            color: "#336791",
          },
        },
      ],
    },
    {
      title: "Android Development",
      fileName: "AndroidImg",
      skills: [
        "⚡ Creating Android apps with modern UI patterns and responsive layouts",
        "⚡ Connecting mobile clients to backend services and local storage",
        "⚡ Shipping practical app features with a focus on usability and performance",
        "⚡ Building native Android applications with Kotlin, Jetpack Compose, Coroutines, and Flow",
        "⚡ Architecturing apps with clean architecture, MVVM design patterns, Room database, and Retrofit client",
        "⚡ Publishing applications on Google Play Store with automated CI/CD pipelines",
      ],
      softwareSkills: [
        {
          skillName: "Android",
          fontAwesomeClassname: "simple-icons:android",
          style: {
            color: "#3DDC84",
          },
        },
        {
          skillName: "Kotlin",
          fontAwesomeClassname: "simple-icons:kotlin",
          style: {
            color: "#7F52FF",
          },
        },
        {
          skillName: "Java",
          imageSrc: "java-logo-png.png",
        },
        {
          skillName: "Jetpack Compose",
          imageSrc: "Jetpack_Compose_logo.png",
        },
        {
          skillName: "Firebase",
          fontAwesomeClassname: "simple-icons:firebase",
          style: {
            color: "#FFCA28",
          },
        },
      ],
    },
  ],
};

// Education Page
const competitiveSites = {
  competitiveSites: [
    {
      siteName: "LeetCode",
      iconifyClassname: "simple-icons:leetcode",
      style: {
        color: "#F79F1B",
      },
      profileLink: "https://leetcode.com/u/_codesidd_",
    },
    {
      siteName: "CodeForces",
      iconifyClassname: "simple-icons:codeforces",
      style: {
        color: "#1F8ACB",
      },
      profileLink: "https://codeforces.com/profile/sidd_shukla",
    },
    {
      siteName: "CodeChef",
      iconifyClassname: "simple-icons:codechef",
      style: {
        color: "#5B4638",
      },
      profileLink: "https://www.codechef.com/users/debug_pioneer",
    },
    {
      siteName: "GeeksforGeeks",
      imageSrc: "gfg.png",
      style: {
        color: "#298D46",
      },
      profileLink: "https://www.geeksforgeeks.org/user/siddharthsovfq",
    },
    {
      siteName: "Coding Ninjas",
      imageSrc: "codingninja.png",
      style: {
        color: "#F27833",
      },
      profileLink: "https://www.naukri.com/code360/profile/starkClare",
    },
  ],
};

const degrees = {
  degrees: [
    {
      title: "Indian Institute of Information Technology, Bhagalpur",
      subtitle: "B.Tech. in Computer Science and Engineering",
      logo_path: "Indian_Institute_of_Information_Technology,_Bhagalpur_logo.png",
      alt_name: "IIIT Bhagalpur",
      duration: "Aug 2023 - May 2027",
      descriptions: [
        "⚡ CGPA: 8.5/10 | Latest SGPA (5th Sem): 8.83/10 | B.Tech. in Computer Science and Engineering.",
        "⚡ Competitive Programming: LeetCode Knight (Rating: 1873), CodeChef 3-Star (Max Rating: 1634), solving 700+ DSA problems.",
        "⚡ Hackathons: Secured 4th Position out of 47,795 nationwide participants in HirePro & MyCareernet's HackVega 2.0.",
        "⚡ Leadership: Academic & Coding Mentor (guiding 25+ juniors in DSA/Android) and Core Member of the Animation Club.",
      ],
      website_link: "https://www.iiitbh.ac.in/",
    },
    {
      title: "Heritage International School (CBSE)",
      subtitle: "Senior Secondary (Class XII) and Secondary (Class X)",
      logo_path: "school.png",
      alt_name: "Heritage International School",
      duration: "Completed: 2023",
      descriptions: [
        "⚡ Class XII: 92.4% with 98th percentile in Computer Science.",
        "⚡ Class X: 94.4% and school topper.",
        "⚡ Consistent academic performer with a strong foundation in science and mathematics.",
      ],
      website_link: "https://heritageinternationalschoolkanpur.in/",
    },
    {
      title: "Amazon ML Summer School 2026",
      subtitle: "Machine Learning Program",
      logo_path: "amazon.png",
      alt_name: "Amazon ML Summer School",
      duration: "2026",
      descriptions: [
        "⚡ Selected into the final cohort of 3,000 from 1,34,000+ applicants nationwide (~2-4% acceptance rate).",
        "⚡ Intensive machine learning program led by Amazon scientists focusing on modern ML concepts and applied problem solving.",
      ],
      website_link:
        "https://www.amazon.science/academic-engagements/summer-school-on-machine-learning",
    },
  ],
};

const certifications = {
  certifications: [
    {
      title: "Advanced DBMS",
      subtitle: "- Scaler",
      logo_path: "scaler.png",
      certificate_link:
        "https://drive.google.com/file/d/1728TAMgaayuvVK3HFs63m7908-augGMS/view?usp=sharing",
      alt_name: "Scaler",
      color_code: "#0C9D5899",
    },
    {
      title: "Operating Systems",
      subtitle: "- Scaler",
      logo_path: "scaler.png",
      certificate_link:
        "https://drive.google.com/file/d/1FgEMkgzWC9HgXnTkdh3YPlIwfzy7GLx1/view?usp=sharing",
      alt_name: "Scaler",
      color_code: "#0C9D5899",
    },
    {
      title: "JPMorgan Chase Software Engineering Virtual Experience",
      subtitle: "- Forage",
      logo_path: "jpmorgan.png",
      certificate_link:
        "https://drive.google.com/file/d/1dtw4b9bzTYSE1lGdbymD4W1XKDrtbMT-/view?usp=sharing",
      alt_name: "Forage",
      color_code: "#1F70C199",
    },
    {
      title: "Certified System Administrator (CSA)",
      subtitle: "- ServiceNow",
      logo_path: "service.png",
      certificate_link:
        "https://drive.google.com/file/d/1gDOYBMeH65Y0j3dMjBCHPKPlVXVfLfgT/view?usp=sharing",
      alt_name: "ServiceNow",
      color_code: "#05505E99",
    },
    {
      title: "Certified Application Developer (CAD)",
      subtitle: "- ServiceNow",
      logo_path: "service.png",
      certificate_link:
        "https://drive.google.com/file/d/1rkJPGB6-FqX4jJhp7nlxZzxWyOaXpKRe/view?usp=sharing",
      alt_name: "ServiceNow",
      color_code: "#05505E99",
    },
    {
      title: "Deloitte Engineering Technology Certificate",
      subtitle: "- Deloitte",
      logo_path: "deolite.png",
      certificate_link:
        "https://drive.google.com/file/d/1cXOxxkpLaRX8y5ylFP9gWS_Ipx7Ur_qq/view?usp=sharing",
      alt_name: "Deloitte",
      color_code: "#8C151599",
    },
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Work, Internship and Volunteership",
  description:
    "I have worked with many evolving startups as ML and DL Developer, Designer and Software Architect. I have also worked with some well established companies mostly as AI Developer. I love organising events and that is why I am also involved with many opensource communities as a representative.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work",
      work: true,
      experiences: [
        {
          title: "Machine Learning Engineer",
          company: "TikTok Inc.",
          company_url: "https://www.tiktok.com/en/",
          logo_path: "tiktok_logo.png",
          duration: "June 2023 - Present",
          location: "San Jose, CA, USA",
          description:
            "Improving ads ranking models on the core TikTok product. Experience working on modeling two-tower architectures like DeepFM, Wide & deep learning, etc. Working on Large Language Models (LLM) pretraining and Large Multi-modal Model (LMM) finetuning strategies.",
          color: "#000000",
        },
        {
          title: "Associate AI Engineer",
          company: "Legato Health Technology",
          company_url: "https://legatohealthtech.com/",
          logo_path: "legato_logo.png",
          duration: "June 2020 - Aug 2021",
          location: "Hyderabad, Telangana",
          description:
            "I am working on automating healthcare products. The projects involve automation for process improvements and for significantly enhancing the profits. I am currently working on Cancer Survival and Reoccurence Prediction. Our goal is to make AI system which scales and removes doctor dependency as much as possible.",
          color: "#0879bf",
        },
        {
          title: "Android and ML Developer",
          company: "Muffito Incorporation",
          company_url: "https://www.linkedin.com/company/muffito-inc/about/",
          logo_path: "muffito_logo.png",
          duration: "May 2018 - Oct 2018",
          location: "Pune, Maharashtra",
          description:
            "I have created complete Android Application for locating Pub, Bar and beverage shops around you. I have also worked on implementation of algorithms for Face Detection, Text extraction from Image. I was involved in a team for creating complete software architecure of mobile and web application as well as admin panel for company.",
          color: "#9b1578",
        },
        {
          title: "Android Developer",
          company: "FreeCopy Pvt. Ltd.",
          company_url: "https://www.linkedin.com/company/freecopy/about/",
          logo_path: "freecopy_logo.png",
          duration: "Nov 2017 - Dec 2017",
          location: "Ahmedabad, Gujarat",
          description:
            "FreeCopy is the Start up from Indian Institute of Management, Ahmedabad. I have changed the integration of the whole app from Google to Firebase. I learnt the efﬁcient ways of Data communications like Retroﬁt, Eventbus etc. I experienced the real time start up. I learnt the Design thinking of UI on perspective of People.",
          color: "#fc1f20",
        },
      ],
    },
    {
      title: "Internships",
      experiences: [
        {
          title: "Machine Learning Intern",
          company: "TikTok Inc.",
          company_url: "https://www.tiktok.com/en/",
          logo_path: "tiktok_logo.png",
          duration: "May 2022 - Aug 2022",
          location: "San Francisco, USA",
          description:
            "Building new features on the backend recommendation system, specifically ranking algorithms for Ads that touch hundreds of millions of people around the world. Improving online and offline content ranking algorithms by performing hard sample data replays for training steps.",
          color: "#000000",
        },
        {
          title: "Data Science Research Intern",
          company: "Delhivery Pvt. Ltd.",
          company_url: "https://www.delhivery.com/",
          logo_path: "delhivery_logo.png",
          duration: "May 2019 - Sept 2019",
          location: "Gurgaon, Haryana",
          description:
            "I have worked on project of predicting freight rates based on previous data. There were two objectives: (1) To build a forecasting engine to predict daily freight rates. (2) To embed feature in the model which can explain the seasonal major changes in freight rate based on regions and locations. I have closely worked with deep learning models in combination with statistical methods to create solution for this. At the end of internship, I had created model deployed on AWS EC2 with the use of Kafka stream jobs, ElasticSearch and PostgreSQL.",
          color: "#ee3c26",
        },
        {
          title: "Data Science Intern",
          company: "Intel Indexer LLC",
          company_url:
            "https://opencorporates.com/companies/us_dc/EXTUID_4170286",
          logo_path: "intel_logo.jpg",
          duration: "Nov 2018 - Dec 2018",
          location: "Work From Home",
          description:
            "This is financial Solution Company. I have made Supervised Learning model for the company which can perform time series analysis on Stock price data for 32 companies. I have built LSTM Neural Networks Model and trained the data of 32 companies for last 2 years. This model is also used for forecasting.",
          color: "#0071C5",
        },
      ],
    },
    {
      title: "Volunteerships",
      experiences: [
        {
          title: "Google Explore ML Facilitator",
          company: "Google",
          company_url: "https://about.google/",
          logo_path: "google_logo.png",
          duration: "June 2019 - April 2020",
          location: "Hyderabad, Telangana",
          description:
            "Explore Machine Learning (ML) is a Google-sponsored program for university students to get started with Machine Learning. The curriculum offers 3 tracks of ML Content (Beginner, Intermediate, Advanced) and relies on university student facilitators to train other students on campus and to build opensource projects under this program.",
          color: "#4285F4",
        },
        {
          title: "Microsoft Student Partner",
          company: "Microsoft",
          company_url: "https://www.microsoft.com/",
          logo_path: "microsoft_logo.png",
          duration: "Aug 2019 - May 2020",
          location: "Hyderabad, Telangana",
          description:
            "Microsoft Student Partner is a program for university students to lead the awareness and use of Cloud especially Azure tools in the development of their projects and startups. Under this program, I have organised hands on workshops and seminars to teach Cloud Computing concepts to students.",
          color: "#D83B01",
        },
        {
          title: "Mozilla Campus Captain",
          company: "Mozilla",
          company_url: "https://www.mozilla.org/",
          logo_path: "mozilla_logo.png",
          duration: "Oct 2019 - May 2020",
          location: "Kurnool, Andhra Pradesh",
          description:
            "My responsibility for this program was to create opensource environment in college and in the city. We have organised multiple hackathons on the problems collected by ordinary people from Kurnool city. We have build opensource community of our own college. The community is available at dsc_iiitdmk on github.",
          color: "#000000",
        },
        {
          title: "Developer Students Club Member",
          company: "DSC IIITDM Kurnool",
          company_url:
            "https://www.linkedin.com/company/developer-students-club-iiitdm-kurnool",
          logo_path: "dsc_logo.png",
          duration: "Jan 2018 - May 2020",
          location: "Kurnool, Andhra Pradesh",
          description:
            "We have well established developer club in college which is directly associated with Google Developers. We have developed many interdisciplinary projects under the membership of this club. We have organised workshops and activities on Android Application Development, Flutter and React JS.",
          color: "#0C9D58",
        },
        {
          title: "Developer Program Member",
          company: "Github",
          company_url: "https://github.com/",
          logo_path: "github_logo.png",
          duration: "July 2019 - PRESENT",
          location: "Work From Home",
          description:
            "I am actively contributing to many opensource projects. I have contributed to projects of organisations like Tensorflow, Uber, Facebook, Google, Scikit-learn, Kiwix, Sympy, Python, NVLabs, Fossasia, Netrack, Keras etc. These contributions include bug fixes, feature requests and formulating proper documentation for project.",
          color: "#181717",
        },
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "Selected projects from my resume.",
  avatar_image_path: "projects_image.svg",
};

const publicationsHeader = {
  title: "Publications",
  description: "Some of my published Articles, Blogs and Research.",
  avatar_image_path: "projects_image.svg",
};

const publications = {
  data: [
    {
      id: 1,
      name: "DocDash",
      createdAt: "2024-10-01T00:00:00Z",
      description:
        "Scalable healthcare backend API with admin, doctor, and patient roles.",
      url: "https://github.com/Sidd2004Shukla/DocDash",
      languages: ["Java", "Spring Boot", "MySQL", "Redis"],
    },
    {
      id: 2,
      name: "SparkSmart IIITBH",
      createdAt: "2025-03-01T00:00:00Z",
      description:
        "Campus generator management app for real-time scheduling, reporting, and alerts.",
      url: "https://github.com/Sidd2004Shukla/SparkSmartIIITBH",
      languages: ["Kotlin", "Jetpack Compose", "Firebase", "FCM"],
    },
  ],
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "siddharth_shukla.jpeg",
    description:
      "I am available on almost every social media. You can message me, I will reply within 24 hours. I can help with Spring Boot, Android, and backend development.",
  },
  addressSection: {
    title: "Address",
    subtitle: "Your location here",
    locality: "Your City",
    country: "India",
    region: "Your State",
    postalCode: "000000",
    streetAddress: "Your Street",
    avatar_image_path: "address_image.svg",
    location_map_link: "https://maps.google.com/",
  },
  phoneSection: {
    title: "",
    subtitle: "",
  },
};

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  competitiveSites,
  degrees,
  certifications,
  experience,
  projectsHeader,
  publicationsHeader,
  publications,
  contactPageData,
};
