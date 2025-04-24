/**
 * Developer Portfolio Configuration
 */

let portfolioConfig = {
    // Personal Information
    personalInfo: {
        name: "Mg Dhia",
        title: "Data Scientist | AI Engineer | Mobile Developer",
        tagline: "Building intelligent, scalable, AI-powered systems.",
        email: "mgdhia49@gmail.com",
        phone: "+964 7727327752",
        location: "IQ, Baghdad",
        resumeLink: "resume.pdf",
        welcomeText: "👋 Welcome to my portfolio",
        profileImage: "https://avatars.githubusercontent.com/u/95950048?v=4"
    },

    // Social Media Links
    socialMedia: {
        github: "https://github.com/49mg",
        linkedin: "https://www.linkedin.com/in/mg-dhia/",
        twitter: "#",
        instagram: "https://instagram.com/49mg"
    },

    // Theme Colors
    colors: {
        primary: {DEFAULT: '#111111', light: '#333333'},
        secondary: {DEFAULT: '#FF6B00', light: '#FF8A3D', dark: '#E95800'}
    },

    // Light/Dark Mode Colors
    lightMode: {
        bgPrimary: '#ffffff',
        bgSecondary: '#f5f5f5',
        bgAccent: '#FF6B00',
        textPrimary: '#111111',
        textSecondary: '#333333',
        textAccent: '#FF6B00',
        bgCard: '#ffffff',
        bgGradientFrom: '#111111',
        bgGradientTo: '#FF6B00',
        border: '#e5e7eb',
        button: '#FF6B00',
        buttonHover: '#FF8A3D'
    },
    darkMode: {
        bgPrimary: '#111111',
        bgSecondary: '#1e1e1e',
        bgAccent: '#FF6B00',
        textPrimary: '#f9fafb',
        textSecondary: '#e5e7eb',
        textAccent: '#FF8A3D',
        bgCard: '#1a1a1a',
        bgGradientFrom: '#000000',
        bgGradientTo: '#FF6B00',
        border: '#2e2e2e',
        button: '#FF6B00',
        buttonHover: '#E95800'
    },

    // About Section
    about: {
        description: [
            "I am a skilled Data Scientist, AI Engineer, and Mobile Developer with experience in machine learning, deep learning, and mobile app development. I focus on real-time systems powered by computer vision, NLP, and predictive analytics. I’m also passionate about building scalable AI-powered apps using Flutter and Jetpack Compose."
        ],
        experienceYears: "5+",
        education: {
            degree: "BSc in Computer Science",
            university: "University of Technology"
        },
        coreTechnologies: ["Python", "Kotlin", "Dart", "C++", "TensorFlow", "Flutter"]
    },

    // Projects
    projects: [
        {
            title: "Encrypted File Transfer with Blockchain",
            description: "Built a secure system for encrypted file sharing using ChaCha20 and blockchain.",
            image: "https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?auto=format&fit=crop&w=1000&q=80",
            tags: ["Blockchain", "Encryption", "Python"],
            links: {
                code: "https://github.com/49mg",
                demo: "#"
            },
            featured: true
        },
        {
            title: "Violence Detection in Videos",
            description: "Developed a video frame classifier using CNN & ResNet50.",
            image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1000&q=80",
            tags: ["Python", "Deep Learning", "TensorFlow"],
            links: {
                code: "https://github.com/49mg",
                demo: "#"
            },
            featured: true
        },
        {
            title: "Gem Fitness App",
            description: "Flutter-based fitness tracking app with AI-driven insights.",
            image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&w=1000&q=80",
            tags: ["Flutter", "Firebase", "Mobile"],
            links: {
                code: "https://github.com/49mg",
                demo: "#"
            },
            featured: false
        },
        {
            title: "Speech-to-Text AI",
            description: "Transformer-based speech recognition model.",
            image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1000&q=80",
            tags: ["NLP", "Speech Recognition", "Python"],
            links: {
                code: "https://github.com/49mg",
                demo: "#"
            },
            featured: false
        },
        {
            title: "SDN Traffic Anomaly Detection",
            description: "AI model for detecting Miss & Elephant traffic anomalies in SDN networks.",
            image: "https://images.unsplash.com/photo-1581090700227-1e8e1f1d1f1d?auto=format&fit=crop&w=1000&q=80",
            tags: ["AI", "SDN", "Anomaly Detection"],
            links: {
                code: "https://github.com/49mg",
                demo: "#"
            },
            featured: false
        },
        {
            title: "Face Recognition & Detection",
            description: "Implemented a real-time CNN-based facial recognition system.",
            image: "https://images.unsplash.com/photo-1607746882042-944635dfe10e?auto=format&fit=crop&w=1000&q=80",
            tags: ["Computer Vision", "CNN", "Python"],
            links: {
                code: "https://github.com/49mg",
                demo: "#"
            },
            featured: false
        },
        {
            title: "Medical Image Classification",
            description: "Built a deep learning model for diagnosing diseases from X-ray and MRI scans.",
            image: "https://images.unsplash.com/photo-1588776814546-ec7e5e1f1f1f?auto=format&fit=crop&w=1000&q=80",
            tags: ["Deep Learning", "Medical Imaging", "Python"],
            links: {
                code: "https://github.com/49mg",
                demo: "#"
            },
            featured: false
        },
        {
            title: "Object Detection System",
            description: "Developed a YOLO-based object detection model for real-time applications.",
            image: "https://images.unsplash.com/photo-1593642634367-d91a135587b5?auto=format&fit=crop&w=1000&q=80",
            tags: ["YOLO", "Object Detection", "Python"],
            links: {
                code: "https://github.com/49mg",
                demo: "#"
            },
            featured: false
        },
        {
            title: "Stock Price Prediction",
            description: "Created an LSTM-based neural network for forecasting stock market trends.",
            image: "https://images.unsplash.com/photo-1565372910297-1f1f1f1f1f1f?auto=format&fit=crop&w=1000&q=80",
            tags: ["LSTM", "Time Series", "Finance"],
            links: {
                code: "https://github.com/49mg",
                demo: "#"
            },
            featured: false
        },
        {
            title: "Text Summarization AI",
            description: "Implemented an AI-powered NLP model to summarize long articles and reports.",
            image: "https://images.unsplash.com/photo-1517430816045-df4b7de1f1f1?auto=format&fit=crop&w=1000&q=80",
            tags: ["NLP", "Text Summarization", "Python"],
            links: {
                code: "https://github.com/49mg",
                demo: "#"
            },
            featured: false
        },
        {
            title: "Fake News Detection",
            description: "Developed an AI model to detect misinformation using NLP techniques.",
            image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1000&q=80",
            tags: ["NLP", "Fake News", "Python"],
            links: {
                code: "https://github.com/49mg",
                demo: "#"
            },
            featured: false
        },
        {
            title: "Fraud Detection System",
            description: "Trained a machine learning model to identify fraudulent transactions.",
            image: "https://images.unsplash.com/photo-1605902711622-cfb43c4437d5?auto=format&fit=crop&w=1000&q=80",
            tags: ["Machine Learning", "Fraud Detection", "Python"],
            links: {
                code: "https://github.com/49mg",
                demo: "#"
            },
            featured: false
        }
    ],


    // Skills
    skills: {
        categories: [
            {
                name: "Programming",
                icon: "fas fa-code",
                iconColor: "blue",
                skills: [
                    {name: "Python", level: 95},
                    {name: "Kotlin", level: 90},
                    {name: "Dart", level: 90},
                    {name: "Java", level: 85},
                    {name: "C++", level: 80},
                    {name: "C#", level: 75},
                    {name: "R", level: 70},
                    {name: "C", level: 70},
                    {name: "Ruby", level: 60}
                ]
            },
            {
                name: "Data Science & AI",
                icon: "fas fa-brain",
                iconColor: "orange",
                skills: [
                    {name: "Machine Learning", level: 95},
                    {name: "Deep Learning", level: 90},
                    {name: "NLP", level: 90},
                    {name: "Computer Vision", level: 90},
                    {name: "Reinforcement Learning", level: 80},
                    {name: "Time Series Analysis", level: 80}
                ]
            },
            {
                name: "Mobile Development",
                icon: "fas fa-mobile-alt",
                iconColor: "teal",
                skills: [
                    {name: "Flutter", level: 95},
                    {name: "Jetpack Compose", level: 90},
                    {name: "Android", level: 85}
                ]
            }
        ],
        technologies: [
            {name: "TensorFlow", icon: "fas fa-brain", color: "text-yellow-500"},
            {name: "Keras", icon: "fas fa-cogs", color: "text-pink-500"},
            {name: "PyTorch", icon: "fas fa-fire", color: "text-orange-400"},
            {name: "Scikit-Learn", icon: "fas fa-project-diagram", color: "text-blue-500"},
            {name: "FastAPI", icon: "fas fa-rocket", color: "text-purple-600"},
            {name: "Django", icon: "fab fa-python", color: "text-green-600"},
            {name: "Hugging Face Transformers", icon: "fas fa-robot", color: "text-yellow-600"},
            {name: "OpenCV", icon: "fas fa-camera", color: "text-gray-600"},
            {name: "EasyOCR", icon: "fas fa-eye", color: "text-gray-700"},
            {name: "XGBoost", icon: "fas fa-chart-line", color: "text-indigo-500"},
            {name: "LightGBM", icon: "fas fa-lightbulb", color: "text-green-400"},
            {name: "Git", icon: "fab fa-git-alt", color: "text-red-500"},
            {name: "Firebase", icon: "fas fa-fire", color: "text-orange-500"},
            {name: "MongoDB", icon: "fas fa-database", color: "text-green-500"},
            {name: "PostgreSQL", icon: "fas fa-server", color: "text-blue-800"},
            {name: "MySQL", icon: "fas fa-database", color: "text-blue-400"},
            {name: "SQLite", icon: "fas fa-database", color: "text-gray-400"},
            {name: "Solidity", icon: "fab fa-ethereum", color: "text-purple-500"},
            {name: "ChaCha20 Encryption", icon: "fas fa-lock", color: "text-slate-600"}
        ]
    }
};

// Export the configuration
window.portfolioConfig = portfolioConfig;