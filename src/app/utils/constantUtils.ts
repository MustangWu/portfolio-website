const constants = {
  title: "MustangWu",
  description: "My portfolio website",

  navigation: [
    { name: "Home", href: "/", blank: false },
    { name: "About", href: "/about", blank: false },
  ],
  companyName: "Mustang Wu",
  companyLogo: "/images/profile.jpg",
  github: "https://github.com/MustangWu",
  email: "jx010405@gmail.com",

  authorBanner: {
    "bannerTitle": "Hi, 👋 I'm Mustang",
    "bannerSubtitle": "Where humanity meets technology, I create my own path.",
    "bannerBrief": "Master of IT @ Monash University",
    "bannerDesc": "Full-stack engineer balancing technical excellence with human-centered design. Building applications that are powerful in code and intuitive for people."
  },

  // introduce: [
  //   {
  //     prefix: "A",
  //     keywords: "big data development",
  //     suffix: "engineer",
  //   },
  //   {
  //     prefix: "With",
  //     keywords: "6 years",
  //     suffix: "of work experience",
  //   },
  //   {
  //     prefix: "Studing",
  //     keywords: "MIT",
  //     suffix: "at Monash University, Australia",
  //   },
  // ],

  about: [
    {
      prefix: "I am a",
      keywords: "full-stack developer",
      suffix: "with 2 years of professional experience"
    },
    {
      prefix: "Specialized in",
      keywords: "JavaScript, React, Node.js",
      suffix: "and cloud technologies (AWS)"
    },
    {
      prefix: "Familiar with",
      keywords: "Java, Python, SQL, DevOps",
      suffix: "to deliver complete solutions"
    },
    {
      prefix: "Beyond work",
      keywords: "I lead hackathon teams",
      suffix: "developing innovative solutions under pressure"
    }
  ],

  timelineItems: [
    {
      date: "2024 - Present",
      title: "Monash University",
      content: "Pursuing master of IT while working as a full-stack developer",
      type: "ongoing",
    },
    {
      date: "2022 - 2023",
      title: "5i5j Real Estate",
      content: "Data Engineer",
      type: "success",
    },
    {
      date: "2021 - 2022",
      title: "iQIYI.com",
      content: "Software Engineer Intern",
      type: "success",
    },
    {
      date: "2018 - 2022",
      title: "Zhejiang University of Finance and Economics",
      content: "Pursuing bachelor of Arts",
      type: "success",
    },
  ],
  // https://lf3-starry.byteimg.com/obj/starry/image/xeujaamdeoq_数据资产沉淀.png
  // https://lf3-starry.byteimg.com/obj/starry/image/oygh3wjpcs_精细化运营.png
  // https://lf3-starry.byteimg.com/obj/starry/image/437plo29nnn_广告精准投放.png
  // https://lf3-starry.byteimg.com/obj/starry/image/8sbe6t1o1ua_流失用户挽回.png
  // https://lf3-starry.byteimg.com/obj/starry/image/98q9cavm01u_销售赋能场景.png
  projectList: [
    {
      id: 1,
      title: "FinalNinja",
      mdFilePath: "/vault/Project1.md",
      description: "Final Ninja is a desktop AI study buddy that turns finals prep into a fun, gamified experience with smart planning, quizzes, playlists, and progress tracking.",
      coverAlt: "FinalNinja screenshot",
      coverUrl: "/images/finalninja.png",
      picUrl: "/images/finalninja.png",
      link: "https://github.com/mxxct4git/Final-Ninja",
      cardContent: "Final Ninja is a desktop AI study buddy that turns finals prep into a fun, gamified experience with smart planning, quizzes, playlists, and progress tracking."
    },
    {
      id: 2,
      title: "BloomBank",
      mdFilePath: "/vault/Project2.md",
      description: "BloomBank is an AI-driven platform that simplifies budgeting, boosts financial literacy, and encourages charitable giving through real-time tracking, family collaboration, and personalized insights.",
      coverAlt: "BloomBank screenshot",
      coverUrl: "/images/bloombank.png",
      picUrl: "/images/bloombank.png",
      link: "https://github.com/Joan-gao/BloomBank",
      cardContent: "BloomBank is an AI-driven platform that simplifies budgeting, boosts financial literacy, and encourages charitable giving through real-time tracking, family collaboration, and personalized insights."
    },
    {
      id: 3,
      title: "FlowSync",
      mdFilePath: "/vault/Project3.md",
      description: "Built a forge app for Confluence and Jira to create project plan documents and manage jira tickets automatically with the help of generative AI and rovo agent.",
      coverAlt: "FlowSync screenshot",
      coverUrl: "/images/flowsync.png",
      picUrl: "/images/flowsync.png",
      link: "https://drive.google.com/file/d/1WP-27xQy_4YOBZI7C1rQkSK_MzB2FbNk/view?resourcekey",
      cardContent: "Built a forge app for Confluence and Jira to create project plan documents and manage jira tickets automatically with the help of generative AI and rovo agent."
    },
    {
      id: 4,
      title: "Playful Surfing",
      mdFilePath: "/vault/Project4.md",
      description: "An ongoing project in which aim to develop a playful surfing experience by introducing interactive technology to amplify the connection with water while surfing.",
      coverAlt: "Playful Surfing screenshot",
      coverUrl: "/images/playfulsurf.jpg",
      picUrl: "/images/playfulsurf.jpg",
      link: "https://sites.google.com/utp.edu.co/mariamontoyavr/projects/playful-water-activities/playful-surfing?authuser=0",
      cardContent: "An ongoing project in which aim to develop a playful surfing experience by introducing interactive technology to amplify the connection with water while surfing."
    }
  ],

  logoList: [
    {
      id: 1,
      alt: "React",
      src: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg",
    },
    {
      id: 2,
      alt: "Next.js",
      src: "https://upload.wikimedia.org/wikipedia/commons/8/8e/Nextjs-logo.svg",
    },
    {
      id: 3,
      alt: "TypeScript",
      src: "https://upload.wikimedia.org/wikipedia/commons/4/4c/Typescript_logo_2020.svg",
    },
    {
      id: 4,
      alt: "Node.js",
      src: "https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg",
    },
    {
      id: 5,
      alt: "Python",
      src: "https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg",
    },
    {
      id: 6,
      alt: "Java",
      src: "https://upload.wikimedia.org/wikipedia/en/3/30/Java_programming_language_logo.svg",
    },
    {
      id: 7,
      alt: "C#",
      src: "https://upload.wikimedia.org/wikipedia/commons/0/0d/C_Sharp_wordmark.svg",
    },
    {
      id: 8,
      alt: "TailwindCSS",
      src: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg",
    },
    {
      id: 9,
      alt: "MongoDB",
      src: "https://upload.wikimedia.org/wikipedia/commons/9/93/MongoDB_Logo.svg",
    },
    {
      id: 10,
      alt: "MySQL",
      src: "https://upload.wikimedia.org/wikipedia/commons/0/0a/MySQL_textlogo.svg",
    },
    {
      id: 11,
      alt: "PostgreSQL",
      src: "https://upload.wikimedia.org/wikipedia/commons/2/29/Postgresql_elephant.svg",
    },
    {
      id: 12,
      alt: "Snowflake",
      src: "https://upload.wikimedia.org/wikipedia/commons/f/ff/Snowflake_Logo.svg",
    },
    {
      id: 13,
      alt: "Docker",
      src: "https://upload.wikimedia.org/wikipedia/commons/4/4e/Docker_%28container_engine%29_logo.svg",
    },
    {
      id: 14,
      alt: "AWS",
      src: "https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg",
    },
    {
      id: 15,
      alt: "Azure",
      src: "https://upload.wikimedia.org/wikipedia/commons/a/a8/Microsoft_Azure_Logo.svg",
    },
    {
      id: 16,
      alt: "Spring Boot",
      src: "https://upload.wikimedia.org/wikipedia/commons/7/79/Spring_Boot.svg",
    },
    {
      id: 17,
      alt: "Flask",
      src: "https://upload.wikimedia.org/wikipedia/commons/3/3c/Flask_logo.svg",
    },
    {
      id: 18,
      alt: "Git",
      src: "https://upload.wikimedia.org/wikipedia/commons/e/e0/Git-logo.svg",
    }
  ],

  author: "Mustang Wu",
  headerTitle: "Mustang Wu",
  language: "en-US",
  siteUrl: "https://your-website.com",
  siteRepo: "https://github.com/your-username/your-repo",
  siteLogo: "/images/your-logo.jpg",
  image: "/images/profile.jpg",
  socialBanner: "/images/your-logo.jpg",

  twitter: "https://x.com/W89506",
  linkedin: "https://www.linkedin.com/in/mustangwu05042001/",
  locale: "en-US",
};

export default constants;
