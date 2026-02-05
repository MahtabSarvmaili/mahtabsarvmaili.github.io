// Site configuration
const siteData = {
    labName: "Machine Learning & AI Systems Research Lab (MLAIS)",
    universityShort: "UNB",
    universitySub: "Faculty of Computer Science"
};

// Main profile data
const profileData = {
    name: "Mahtab Sarvmaili",
    initials: "MS",
    profileImage: "https://avatars.githubusercontent.com/u/13977229?v=4",
    title: "Assistant Professor",
    department: "Faculty of Computer Science",
    university: "University of New Brunswick",
    location: "Fredericton, NB, Canada",
    room: "GE107",
    email: "mahtab.sarvmaili[at]unb.ca",
    website: "https://ca.linkedin.com/in/mahtab-sarvmaili",
    github: "https://github.com/MahtabSarvmaili",
    googleScholar: "https://scholar.google.com/citations?user=U-El3YwAAAAJ&hl=en"
};

// Recent news/updates for home page (limited to joining UNB)
const newsData = [
    {
        title: "Joined UNB as Assistant Professor",
        date: "January 2026",
        description: "Started as Assistant Professor in the Faculty of Computer Science at the University of New Brunswick, focusing on Trustworthy and Controllable AI."
    }
];

// Lab members data (update as your group grows)
const membersData = {
    postdocs: [],
    phdStudents: [],
    mastersStudents: [],
    collaborators: []
};

// Publications data
const publicationsData = [
    {
        year: 2025,
        papers: [
            {
                title: "Data-centric Prediction Explanation via Kernelized Stein Discrepancy",
                authors: "Mahtab Sarvmaili, Hassan Sajjad, Ga Wu",
                venue: "International Conference on Learning Representations (ICLR)",
                location: "Singapore",
                links: {
                    pdf: "https://openreview.net/pdf?id=KlV5CkNQkl",
                    bibtex: null,
                    arxiv: null
                }
            }
        ]
    },
    {
        year: 2024,
        papers: [
            {
                title: "Towards Understanding the Feasibility of Machine Unlearning",
                authors: "Mahtab Sarvmaili, Hassan Sajjad, Ga Wu",
                location: null,
                links: {
                    pdf: "https://arxiv.org/pdf/2410.03043.pdf",
                    bibtex: null,
                    arxiv: "https://arxiv.org/abs/2410.03043"
                }
            }
        ]
    },
    {
        year: 2021,
        papers: [
            {
                title: "A Modularized Framework for Explaining Hierarchical Attention Networks on Text Classifiers",
                authors: "M. Sarvmaili, A. Soares, R. Guidotti, A. Monreale, F. Giannotti, D. Pedreschi, S. Matwin",
                venue: "Canadian Conference on Artificial Intelligence (Canadian AI)",
                location: "Canada",
                links: {
                    pdf: null,
                    bibtex: null,
                    arxiv: null
                }
            },
            {
                title: "A Modularized Framework for Explaining Black Box Classifiers for Text Data",
                authors: "Mahtab Sarvmaili, Riccardo Guidotti, Anna Monreale, Amilcar Soares, Zahra Sadeghi, Fosca Giannotti, Dino Pedreschi, Stan Matwin",
                venue: "Manuscript / Technical report",
                location: null,
                links: {
                    pdf: null,
                    bibtex: null,
                    arxiv: null
                }
            }
        ]
    },
    {
        year: 2020,
        papers: [
            {
                title: "Using Deep Reinforcement Learning Methods for Autonomous Vessels in 2D Environments",
                authors: "M. Etemad, N. Zare, M. Sarvmaili, A. Soares, B. Brandoli Machado, S. Matwin",
                venue: "Canadian AI 2020 (LNCS 12109, Springer)",
                location: null,
                links: {
                    doi: "https://doi.org/10.1007/978-3-030-47358-7_21",
                    pdf: null,
                    bibtex: null
                }
            }
        ]
    },
    {
        year: 2018,
        papers: [
            {
                title: "S3PSO: Students’ Performance Prediction Based on Particle Swarm Optimization",
                authors: "Seyed M.H. Hasheminejad, M. Sarvmaili",
                venue: "Journal of AI and Data Mining",
                location: "2018",
                links: {
                    pdf: null,
                    bibtex: null
                }
            }
        ]
    }
];

// Partners / collaborators data
const partnersData = {
    intro: [
        "I collaborate across academia and industry to build trustworthy, controllable, and domain-grounded AI systems.",
        "I am especially interested in interdisciplinary projects that connect explainability, safety/privacy, and real-world deployment constraints."
    ],
    collaborators: [
        { name: "Layer6 AI (TD Bank Group)", logo: "LAYER6" },
        { name: "Dalhousie University", logo: "DAL" },
        { name: "University of New Brunswick", logo: "UNB" },
    ]
};

// Research data
const researchData = {
    areas: [
        // Trustworthy / controllable AI
        "Trustworthy AI: transparency, robustness, reliability, and evaluation",
        "Interpretability & Explainable AI (text, graph, and image models)",
        "Controlling model behavior after deployment (alignment, correction, and guardrails)",
        "Safety, privacy, and data protection (including machine unlearning and model editing)",

        // RAG / agentic systems
        "Retrieval-Augmented Generation (RAG): faithfulness, accuracy, and automated evaluation",
        "Agentic systems: evaluation, prompt optimization, and safety-aligned control",

        // RL / multi-agent / robotics
        "Robotics and simulation (soccer simulation, multi-agent reinforcement learning)",
        "Reinforcement learning for autonomous systems (e.g., vessel navigation)",

        // Graph learning / scientific AI
        "Graph Neural Networks and Knowledge Graphs",
        "Chemical and molecular compound analysis and classification with GNNs",
        "Applied ML in ocean and aquaculture domains"
    ],
    projects: [
        {
            title: "Machine Unlearning & Model Editing",
            description: "Minimally invasive unlearning, feasibility analysis, and post-hoc control mechanisms for deep neural networks."
        },
        {
            title: "Explainable AI for Unstructured Data",
            description: "Explanation methods for text, graph, and image models, including kernel-based analysis for faithful explanations."
        },
        {
            title: "RAG & Agentic System Evaluation",
            description: "Faithfulness/accuracy evaluation of RAG outputs and systematic evaluation/optimization of agentic workflows."
        },
        {
            title: "Autonomous Vessel Navigation (RL)",
            description: "Deep RL approaches for navigation/control in 2D environments."
        },
        {
            title: "Aquaculture & Ocean Data Analytics",
            description: "Fish school recognition in echograms and real-time environmental risk prediction for aquaculture pens."
        },
        {
            title: "Chemical & Molecular ML with GNNs",
            description: "Graph-based representation learning for compound analysis and classification."
        }
    ],
    sponsors: [
        
    ]
};

// Teaching data (courses taught/assisted; update as you take new teaching assignments)
const teachingData = [
    {
        institution: "University of New Brunswick",
        courses: [
            {
                code: null,
                name: "Foundations of Machine Learning (TA)",
                terms: "Summer 2026 ",
                syllabusLink: null
            },
            {
                code: null,
                name: "Advanced Topics in Software Development (TA)",
                terms: "2022",
                syllabusLink: null
            }
        ]
    },
];

// Contact data
const contactData = {
    name: "Prof. Mahtab Sarvmaili",
    department: "Faculty of Computer Science",
    university: "University of New Brunswick",
    city: "Fredericton, NB",
    country: "Canada",
    email: "mahtab.sarvmaili[at]unb.ca",
    office: "Room GE107"
};
