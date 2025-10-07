export const skills = [
  // SDE Skills - Blue cluster (left side) - Better spacing
  { name: "C++", category: "SDE", level: "Advanced", projects: ["Algorithm Visualizer", "Data Structures Library"], x: -4.5, y: 1.5, z: 0 },
  { name: "React", category: "SDE", level: "Advanced", projects: ["Portfolio", "E-commerce Dashboard"], x: -4, y: 0, z: 0.8 },
  { name: "Node.js", category: "SDE", level: "Intermediate", projects: ["REST API Server", "Microservices"], x: -5, y: -0.8, z: -0.5 },
  { name: "JavaScript", category: "SDE", level: "Expert", projects: ["Multiple Web Apps"], x: -3.5, y: 2.5, z: -0.8 },
  { name: "Java", category: "SDE", level: "Advanced", projects: ["Enterprise Applications"], x: -3.8, y: -1.5, z: 0.7 },
  { name: "SQL", category: "SDE", level: "Advanced", projects: ["Database Design", "Query Optimization"], x: -5.3, y: 2, z: -0.9 },
  { name: "Express.js", category: "SDE", level: "Intermediate", projects: ["REST APIs", "Backend Services"], x: -4.8, y: -2, z: 0.5 },
  { name: "Git", category: "SDE", level: "Advanced", projects: ["All Projects"], x: -5.5, y: 0.5, z: 0 },
  { name: "VS Code", category: "SDE", level: "Expert", projects: ["Development Environment"], x: -3.2, y: 0.8, z: -1 },
  { name: "MongoDB", category: "SDE", level: "Intermediate", projects: ["NoSQL Databases"], x: -4.2, y: -0.5, z: -1.2 },
  { name: "MySQL", category: "SDE", level: "Advanced", projects: ["Relational Databases"], x: -5.8, y: -1.2, z: -0.3 },
  
  // AI/ML Skills - Green cluster (center) - Better spacing
  { name: "Python", category: "AI/ML", level: "Expert", projects: ["ML Pipeline", "Data Analysis"], x: 0, y: 1.8, z: 0 },
  { name: "PyTorch", category: "AI/ML", level: "Advanced", projects: ["Neural Network Models", "Image Classification"], x: 1, y: 0.5, z: 0.9 },
  { name: "TensorFlow", category: "AI/ML", level: "Advanced", projects: ["Deep Learning Projects"], x: -1, y: 0, z: -0.9 },
  { name: "Scikit-learn", category: "AI/ML", level: "Advanced", projects: ["ML Algorithms", "Feature Engineering"], x: 0.5, y: 2.8, z: -0.6 },
  { name: "Machine Learning", category: "AI/ML", level: "Advanced", projects: ["Predictive Models", "Classification"], x: 1.5, y: 1.8, z: -0.7 },
  { name: "NLP", category: "AI/ML", level: "Advanced", projects: ["Text Analysis", "Sentiment Analysis"], x: -1.3, y: 1.5, z: 0.8 },
  { name: "Deep Learning", category: "AI/ML", level: "Advanced", projects: ["Neural Networks", "CNN"], x: 1.2, y: -1.8, z: 0.6 },
  { name: "Pandas", category: "AI/ML", level: "Expert", projects: ["Data Processing"], x: -0.8, y: -1.2, z: 0.8 },
  { name: "NumPy", category: "AI/ML", level: "Advanced", projects: ["Scientific Computing"], x: 1, y: -1, z: -0.5 },
  { name: "FAISS", category: "AI/ML", level: "Intermediate", projects: ["Vector Search", "Similarity Search"], x: -1.5, y: -2, z: -0.4 },
  { name: "Azure ML", category: "AI/ML", level: "Intermediate", projects: ["Cloud ML Services"], x: 0.8, y: 2.2, z: 0.9 },
  
  // GenAI Skills - Pink cluster (right side) - Better spacing
  { name: "Transformers", category: "GenAI", level: "Advanced", projects: ["LLM Fine-tuning", "RAG System"], x: 4.2, y: 1.5, z: 0 },
  { name: "LangChain", category: "GenAI", level: "Intermediate", projects: ["RAG Applications", "Agent Systems"], x: 3.8, y: 0, z: 0.9 },
  { name: "OpenAI API", category: "GenAI", level: "Advanced", projects: ["ChatBot", "AI Assistant"], x: 5, y: -0.8, z: -0.6 },
  { name: "RAG Systems", category: "GenAI", level: "Advanced", projects: ["Document Q&A", "Knowledge Base"], x: 4.5, y: 2.5, z: 0.7 },
  { name: "GenAI", category: "GenAI", level: "Advanced", projects: ["Generative Models", "Content Generation"], x: 5.5, y: 1.2, z: 0.8 },
  { name: "Multimodal AI", category: "GenAI", level: "Intermediate", projects: ["Vision-Language Models"], x: 3.5, y: 2.2, z: -0.8 },
  { name: "Vector DBs", category: "GenAI", level: "Intermediate", projects: ["Embeddings Store", "Similarity Search"], x: 3.2, y: -1.5, z: 0 },
  { name: "Pinecone", category: "GenAI", level: "Intermediate", projects: ["Vector Storage"], x: 4.8, y: -1.8, z: 0.9 },
  { name: "Qdrant", category: "GenAI", level: "Intermediate", projects: ["Vector Database"], x: 3, y: -2.2, z: -0.7 },
  { name: "FastAPI", category: "GenAI", level: "Advanced", projects: ["API Development", "ML Serving"], x: 5.2, y: 0.5, z: -0.9 },
  { name: "Prompt Eng", category: "GenAI", level: "Advanced", projects: ["LLM Optimization"], x: 4, y: -2, z: -0.8 },
];

export const projects = [
  // GenAI Projects
  {
    id: 1,
    title: "GenAI Powered Multimodal Anomaly Detection System",
    context: "GenAI",
    description: "Samsung PRISM GenAI Hackathon 2025 - Revolutionary multimodal AI platform for anomaly detection built on novel architecture",
    techStack: ["Python", "Multimodal AI", "LLM", "Real-time Processing"],
    details: "Advanced family safety monitoring solution with real-time video analysis, audio processing, pose detection, and LLM reasoning. Features Two-Tier AI architecture with <100ms response time and production-ready deployment.",
    link: "https://github.com/Samrudhp/anomaly-detection-TriFusion"
  },
  {
    id: 2,
    title: "OnDevice-Multimodal-Agent",
    context: "GenAI",
    description: "Samsung EnnovateX 2025 AI Challenge - Multimodal AI agents running on-device for anomaly detection and context-aware interactions",
    techStack: ["Python", "TypeScript", "Multimodal AI", "On-Device AI"],
    details: "Intelligent agents that process multiple types of input data locally, focusing on privacy and performance with on-device processing capabilities.",
    link: "https://github.com/Samrudhp/OnDevice-Multimodal-Agent"
  },
  {
    id: 3,
    title: "LegalCase-Retrieval-System",
    context: "GenAI",
    description: "Comprehensive RAG system for legal case retrieval with advanced GenAI features",
    techStack: ["FastAPI", "React", "LegalBERT", "FAISS", "MongoDB"],
    details: "Advanced legal RAG system with LegalBERT embeddings, FAISS vector search, chat system with intent classification, summarization, and question generation.",
    link: "https://github.com/Samrudhp/LegalCase-Retrieval-System"
  },
  {
    id: 4,
    title: "RAG Powered EduSummary - Context Aware-Study Notes Generator",
    context: "GenAI",
    description: "Context-aware AI application generating study materials from textbook content using RAG techniques",
    techStack: ["LangChain", "LocalInference", "LLMs", "React", "RAG"],
    details: "Generates concise study notes, Q&A flashcards, mnemonics, and concept maps using all-mpnet-base-v2 model with local inference for Embedding , GPT-4All for LLM reasoning and modern UI.",
    link: "https://github.com/Samrudhp/EduSummaryV2"
  },
  {
    id: 5,
    title: "SpeakScribe - AI Audio Summarizer",
    context: "GenAI",
    description: "Meeting summarizer with transcription and AI-powered summarization",
    techStack: ["React", "FastAPI", "AssemblyAI", "T5/BART", "WaveSurfer.js"],
    details: "Transcribes and summarizes audio recordings with drag-and-drop upload, waveform visualization, AssemblyAI transcription, and T5/BART summarization models.",
    link: "https://github.com/Samrudhp/SpeakScribe"
  },


  // AI/ML Projects
  {
    id: 6,
    title: "AQI Prediction using Random Forest",
    context: "AI/ML",
    description: "Air Quality Prediction model for PM2.5 levels with MLOps practices",
    techStack: ["Python", "Random Forest", "Optuna", "MLflow"],
    details: "Predicts Delhi PM2.5 levels with time series analysis, lag features, rolling means, hyperparameter optimization, achieving 86.8% R² score.",
    link: "https://github.com/Samrudhp/AQI-Prediction-RandomForest"
  },
  {
    id: 7,
    title: "Heart Disease Prediction",
    context: "AI/ML",
    description: "Logistic regression model predicting heart disease with 87% accuracy",
    techStack: ["Python", "Scikit-learn", "GridSearchCV", "ROC-AUC"],
    details: "Advanced preprocessing pipeline with StandardScaler, OneHotEncoder, GridSearchCV optimization, and comprehensive performance metrics.",
    link: "https://github.com/Samrudhp/Heart-Disease-Prediction-LogisticRegression"
  },
  {
    id: 8,
    title: "Medical Cost Prediction",
    context: "AI/ML",
    description: "Insurance cost prediction using linear regression with regularization",
    techStack: ["Python", "Linear Regression", "Ridge", "Lasso"],
    details: "Achieves 78.4% variance explanation with comprehensive feature preprocessing and comparison of Ridge and Lasso regression approaches.",
    link: "https://github.com/Samrudhp/Medical-Cost-Prediction--LinearRegression"
  },
  {
    id: 9,
    title: "Customer Churn Prediction",
    context: "AI/ML",
    description: "Telecom customer churn prediction with Decision Tree Classifier",
    techStack: ["Python", "Decision Tree", "Cross-validation"],
    details: "Advanced ML pipeline with automated preprocessing, hyperparameter optimization, cross-validation, achieving 79.49% accuracy.",
    link: "https://github.com/Samrudhp/Predicting-Customer-Churn-DecisionTree"
  },
  {
    id: 10,
    title: "Poverty Analysis - MPI",
    context: "AI/ML",
    description: "Multidimensional Poverty Index analysis with extensive data visualization",
    techStack: ["Python", "Pandas", "Data Visualization"],
    details: "Explores poverty dimensions beyond income across demographics, urban/rural areas, religious groups, castes, and gender categories.",
    link: "https://github.com/Samrudhp/poverty-analysis"
  },
  {
    id: 11,
    title: "Neural Networks Collection",
    context: "AI/ML",
    description: "Complete neural network implementations and architectures",
    techStack: ["Python", "TensorFlow", "PyTorch", "CNN", "RNN"],
    details: "Includes CNN architectures, hyperparameter tuning, early stopping, deep networks, RNN, subclassing API, wide and deep models, normalization techniques.",
    link: "https://github.com/Samrudhp/Neural-networks"
  },
  {
    id: 12,
    title: "Natural Language Processing",
    context: "AI/ML",
    description: "Comprehensive NLP projects collection",
    techStack: ["Python", "Transformers", "RNN", "MarianMT"],
    details: "Includes attention mechanisms, transformers, feature extraction, text classification, preprocessing, RNN implementations, and English-French translation.",
    link: "https://github.com/Samrudhp/Natural-language-Processing-NLP"
  },
  {
    id: 13,
    title: "Diwali Sales Analysis",
    context: "AI/ML",
    description: "Customer behavior analysis from Diwali sales data",
    techStack: ["Python", "Pandas", "Data Visualization"],
    details: "Reveals patterns: married women aged 26-35 from UP, Maharashtra, Karnataka in IT/Healthcare prefer Food, Clothing, and Electronics.",
    link: "https://github.com/Samrudhp/Diwali-Sales-analysis"
  },

  // Full-Stack SDE Projects
  {
    id: 14,
    title: "EV Range Prediction Website",
    context: "SDE",
    description: "Full-stack EV journey optimization with range prediction",
    techStack: ["React", "Node.js", "Express", "MongoDB", "Leaflet"],
    details: "Predicts EV range based on routes, battery status, and trip data with OpenRouteService API integration, ML model, and interactive mapping.",
    link: "https://github.com/Samrudhp/EV-Range-Prediction-website"
  },
  {
    id: 15,
    title: "SwaGhar - Housing Platform",
    context: "SDE",
    description: "Comprehensive housing management platform connecting stakeholders",
    techStack: ["React", "Node.js", "MongoDB", "Authentication"],
    details: "Multi-role user system for citizens, government officials, and NGO workers with document management, application tracking, and real-time notifications.",
    link: "https://github.com/Samrudhp/SwaGhar-"
  },
  {
    id: 16,
    title: "ACM-RIT Student Chapter Website",
    context: "SDE",
    description: "Official ACM-RIT website with modern web technologies",
    techStack: ["Next.js", "TypeScript", "MongoDB"],
    details: "Features event listings, responsive design, sticky navbar, dynamic content management, and MongoDB integration for event data.",
    link: "https://github.com/Samrudhp/acm-main"
  }
];

export const contexts = ["All", "SDE", "AI/ML", "GenAI"];

export const socialLinks = [
  { name: "GitHub", url: "https://github.com/Samrudhp", icon: "GH", color: "#00FFA3" },
  { name: "LinkedIn", url: "https://www.linkedin.com/in/samrudh-p-7402b7294/", icon: "IN", color: "#00B0FF" },
  { name: "LeetCode", url: "https://leetcode.com/u/samrudhp/", icon: "LC", color: "#FF9900" },
  { name: "Email", url: "mailto:samrudhprakash3084@gmail.com", icon: "@", color: "#FF3C78" }
];

export const achievements = [
  { label: "Projects Completed", value: 50, suffix: "+", icon: "P", color: "#00B0FF" },
  { label: "Years Experience", value: 4, suffix: "+", icon: "Y", color: "#00FFA3" },
  { label: "Technologies Mastered", value: 25, suffix: "+", icon: "T", color: "#FF3C78" },
  { label: "Client Satisfaction", value: 98, suffix: "%", icon: "★", color: "#00B0FF" },
];

export const testimonials = [
  {
    name: "Sarah Johnson",
    role: "CTO, TechCorp",
    image: "SJ",
    rating: 5,
    text: "Samrudh's expertise in AI/ML and RAG systems helped us build a cutting-edge document retrieval system. Outstanding work!",
    project: "Document Q&A System"
  },
  {
    name: "Michael Chen",
    role: "Product Manager, InnovateAI",
    image: "MC",
    rating: 5,
    text: "Incredible attention to detail and deep understanding of GenAI technologies. The LLM fine-tuning pipeline exceeded our expectations.",
    project: "LLM Fine-tuning Pipeline"
  },
  {
    name: "Emily Rodriguez",
    role: "Lead Developer, CloudSync",
    image: "ER",
    rating: 5,
    text: "Professional, responsive, and technically brilliant. The microservices architecture was exactly what we needed.",
    project: "Microservices Architecture"
  },
  {
    name: "David Kumar",
    role: "Founder, DataViz Pro",
    image: "DK",
    rating: 5,
    text: "Samrudh's React and Three.js skills brought our data visualization platform to life. Highly recommended!",
    project: "RAG Portfolio"
  }
];

export const certifications = [
  {
    name: "AWS Certified Solutions Architect",
    issuer: "Amazon Web Services",
    date: "2024",
    icon: "AWS",
    color: "#FF9900",
    verified: true
  },
  {
    name: "TensorFlow Developer Certificate",
    issuer: "Google",
    date: "2023",
    icon: "TF",
    color: "#FF6F00",
    verified: true
  },
  {
    name: "Deep Learning Specialization",
    issuer: "DeepLearning.AI",
    date: "2023",
    icon: "DL",
    color: "#00B0FF",
    verified: true
  },
  {
    name: "LangChain & Vector Databases",
    issuer: "Activeloop",
    date: "2024",
    icon: "LC",
    color: "#00FFA3",
    verified: true
  },
  {
    name: "React Advanced Patterns",
    issuer: "Frontend Masters",
    date: "2023",
    icon: "RX",
    color: "#61DAFB",
    verified: true
  },
  {
    name: "Generative AI with LLMs",
    issuer: "DeepLearning.AI",
    date: "2024",
    icon: "AI",
    color: "#FF3C78",
    verified: true
  }
];

