import internBuddyImage from '../../public/projects/intern_buddy.png';

export const LAND_CONTENT = `I am an undergraduate computer science engineering student and a freelance software engineer. My passion for software lies with dreaming up ideas and making them come true with elegant interfaces. I take great care in the experience, architecture, and code quality of the things I build. I am also an open-source enthusiast and maintainer. I love how collaboration and knowledge sharing happens through open-source and I am happy to see what I do could eventually feedback to the community and industry.`;

export const EXPERIENCES = [
  {
    duration: 'January 2025 - Present',
    role: 'AI Engineer Intern',
    company: 'White Paper IT Alliance',
    description: `Designed and implemented an avatar-based chatbot using large language models (LLMs) to enhance user engagement through real-time conversational interfaces. Developed a WhatsApp chatbot agent that automated and streamlined customer support workflows, significantly improving response times and reducing manual workload for support teams.`,
    technologies: ['Python', 'LangChain', 'Text-to-Speech', 'Vector Database'],
  },
  {
    duration: 'June 2023 - August 2023',
    role: 'IT Support Intern',
    company: 'Missan IT Solutions',
    description: `Developed and implemented an automated audit reporting system that significantly enhanced the efficiency of the audit process. This system streamlined the reporting workflow, resulting in faster turnaround times and more accurate reports. By automating key tasks, it reduced the risk of human error in audit reporting by 70%, ensuring higher reliability and consistency in audit results.`,
    technologies: ['Microsoft Power Automate'],
  }
]

export const PROJECTS = [
  {
    title: 'PreTrade Analysis Agent',
    image: null,
    description: `A sequential multi-agent system that automates pre-market research by coordinating specialized agents for data scraping, sentiment analysis, technical evaluation, and strategy recommendations.`,
    technologies: ['Python', 'LangChain', 'LangGraph', 'Selenium', 'BeautifulSoup', 'Playwright', ],
    // demoUrl: 'https://example.com/pretrade-demo',
    // githubUrl: 'https://github.com/ysh1th/pretrade_analysis', 
  },
  {
    title: 'Sales Analytics Data Pipeline',
    image: null,
    description: `An end-to-end ETL pipeline simulating e-commerce analytics with Kafka producers, Spark streaming jobs, PostgreSQL storage, and interactive dashboards via Superset.`,
    technologies: ['Apache Kafka', 'Apache Spark', 'PostgreSQL', 'Apache Superset'],
    // demoUrl: 'https://example.com/data-pipeline-demo',
    githubUrl: 'https://github.com/ysh1th/sales-analytics-etl',
  },
  {
    title: 'Intern_buddy',
    image: internBuddyImage,
    description: `A proximal internship recommender with integrated chatbot for behavioral interview prep.`,
    technologies: ['Python', 'Llama-3.1-sonar', 'Google Maps API', 'SQLite'],
    // demoUrl: 'https://example.com/demo', // Add demo URL if available
    githubUrl: 'https://github.com/ysh1th/intern_buddy',
  },
  {
    title: 'Energy Demand Prediction with Explainable ML Models',
    image: null, // Add an image URL here if available
    description: `Implemented explainable AI model for energy demand forecasting using meteorological data and achieved high prediction accuracy through advanced feature engineering. Accepted for publication in the Proceedings of IEEE, Oct. 2024.`,
    technologies: ['Python', 'Numpy', 'Pandas', 'Sklearn'],
    // demoUrl: 'https://example.com/demo', // Add demo URL if available
    githubUrl: 'https://github.com/yourusername/energy-demand-prediction',
  },
  {
    title: 'Solar Irradiance Forecasting using Hybrid Deep Learning Models',
    image: null,
    description: `Developed Hybrid deep learning models combining BiLSTM with GBDT, XGBoost, CatBoost, and LightGBM for accurate solar irradiance forecasting on multi-variate time-series data.`,
    technologies: ['Python', 'Keras', 'Sklearn'],
    // demoUrl: 'https://example.com/demo', // Add demo URL if available
    githubUrl: 'https://github.com/yourusername/energy-demand-prediction',
  }
];