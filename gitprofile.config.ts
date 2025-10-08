// gitprofile.config.ts

const CONFIG = {
  github: {
    username: 'ck130500', 
  },
  // Custom profile image (optional - if not set, GitHub avatar will be used)
  customAvatar: '/Passfoto alt.jpg',
  // Custom description text under the avatar
  customDescription: 'Multilingual Master\'s student in Digital Business Management with expertise in process optimization, digital business model development, and intercultural competence. Experienced with the Microsoft Power Platform and particularly interested in IT management and low-code technologies.',
  base: '/',
  projects: {
    github: {
      display: true, 
      header: 'Github Project',
      mode: 'manual', // Mode can be: 'automatic' or 'manual'
      automatic: {
        sortBy: 'stars', // Sort projects by 'stars' or 'updated'
        limit: 2, // How many projects to display.
        exclude: {
          forks: false, // Forked projects will not be displayed if set to true.
          projects: [], // These projects will not be displayed. example: ['arifszn/my-project1', 'arifszn/my-project2']
        },
      },
      manual: {
        // Properties for manually specifying projects
        projects: ['ck130500/ck130500.github.io'], // List of repository names to display. example: ['arifszn/my-project1', 'arifszn/my-project2']
      },
    },
    external: {
      header: 'University Projects',
      // To hide the `External Projects` section, keep it empty.
      projects: [
        {
          title: 'Shopware Website - FitFuel',
          description:
            'FitFuel is a mockup website for a personalized health and nutrition supplement platform. The prototype allows users to complete a health quiz about their lifestyle, wellness goals, and preferences. Based on the results, the platform suggests a tailored supplement plan and offers subscription options for regular deliveries.\n\nKey Features:\n\n• Quiz-based supplement recommendations\n\n• Personalized subscription model\n\n• Broad product range (vitamins, proteins, immune support)\n\n• Focus on user experience and digital health personalization\n\n💻 Feel free to visit our project website: marketmakers.hofstars.de',
          imageUrl:
            '/FitFuel Logo.png',
          link: 'https://marketmakers.hofstars.de/',
        },
        {
          title: 'Event App',
          description: 'The Event App project was developed as part of the Master\'s program in Digital Business Management in collaboration with the German Armed Forces (Bundeswehr). Its goal was to create a digital solution for the "Day of the Bundeswehr 2025" event in Greding, Germany. The app served as an interactive information and navigation tool, providing visitors with event details, real-time updates, and a digital scavenger hunt to enhance engagement and improve the overall visitor experience.',
          imageUrls: [
            '/IMG_20251009_040745.jpg',
            '/Screenshot_2025-06-28-15-33-03-622_com.touchart.eventee.jpg',
            '/pic1.png',
            '/Screenshot_2025-07-18-16-18-44-521_com.android.chrome.jpg'
          ],
        },
      ],
    },
  },
  seo: { title: 'Portfolio of Carolin Kroh', description: '', imageURL: '' },
  social: {
    linkedin: 'carolin-kroh',
    x: '',
    mastodon: '',
    researchGate: '',
    facebook: '',
    instagram: 'carolin.kroh',
    reddit: '',
    threads: '',
    youtube: '', // example: 'pewdiepie'
    udemy: '',
    dribbble: '',
    behance: '',
    medium: 'ck130500',
    dev: 'ck130500',
    stackoverflow: '', // example: '1/jeff-atwood'
    discord: '',
    telegram: '',
    website: '',
    phone: '+8210-8295-1857',
    email: 'carolin.kroh@googlemail.com',
  },
  resume: {
    fileUrl:
      '/Lebenslauf_Carolin Kroh.pdf', // Path to your resume PDF in the public folder
  },
  skills: [
    // Office & Design Tools
    'MS Office (PowerPoint, Word, Excel, Outlook)',
    'Canva',

    // Power Platform & Automation
    'MS Power Apps',
    'MS Power Automate',
    'Power Platform Agents',
    'UiPath',
    'Make',
    'Celonis',

    // BI & Data Analysis Tools
    'MS Power BI',
    'Tableau',
    'Signavio',

    // Process & Project Management
    'Business Process Management',
    'Process Optimization',
    'Agile Project Management',
    'Low-Code / No-Code Development',
    'Data Analysis',
  ],
  experiences: [
    {
      company: 'GEALAN Fenster-Systeme GmbH',
      position: 'Working Student in IT Demand Management',
      from: 'January 2025',
      to: 'Present',
      companyLink: 'https://www.gealan.de/',
      description: 'Process digitalization using MS Power Apps & Power Automate.',
    },
    {
      company: 'Mercedes-Benz Vans',
      position: 'Intern in HR Business Partner Marketing & Sales',
      from: 'March 2022',
      to: 'August 2022',
      companyLink: 'https://www.mercedes-benz-vans.com/',
    },
    {
      company: 'REMONDIS Mitteldeutschland GmbH',
      position: 'Accounting Assistant',
      from: 'April 2016',
      to: 'September 2021',
      companyLink: 'https://www.remondis.de/',
    },
  ],
  certifications: [
    {
      name: 'Chinese Language Proficiency HSK 4',
      body: 'Completed intensive and standard Chinese language program at East China Normal University during au-pair in Shanghai.',
      year: '2018-2019',
      link: '',
    },
  ],
  educations: [
    {
      institution: 'Hochschule Hof – University of Applied Sciences',
      degree: 'M.Sc. Digital Business Management',
      from: 'October 2024',
      to: 'Present',
    },
    {
      institution: 'Hochschule für Technik, Wirtschaft und Gestaltung Konstanz',
      degree: 'B.A. Business Languages Asia & Management China',
      from: 'September 2019',
      to: 'April 2024',
    },
    {
      institution: 'Goethegymnasium Weißenfels',
      degree: 'General Higher Education Entrance Qualification (Abitur)',
      from: 'August 2010',
      to: 'July 2018',
      description: 'Final grade: 1.8',
    },
  ],
  publications: [
    {
      title: 'A case study of mobile payment platforms in China and Germany',
      conferenceName: '',
      journalName: '',
      authors: 'Carolin Kroh',
        description:
          'Objective: Comparative analysis of the role of mobile payment systems in China and Germany, focusing on the platforms Alipay and PayPal.\n\nAnalysis: Examination of digital infrastructure, market behavior, app functionalities, and global reach of both systems; includes critical discussion and forward-looking perspective with an emphasis on artificial intelligence.\n\nResults: Mobile payments are significantly more widespread in China due to superior infrastructure and greater digital openness; Alipay offers a broader range of additional functionalities compared to PayPal; AI is expected to play a central role in the future of mobile payment systems.',
    },
  ],
  // Display articles from your medium or dev account. (Optional)
  blog: {
    source: 'dev', // medium | dev
    username: '', // to hide blog section, keep it empty
    limit: 2, // How many articles to display. Max is 10.
  },
  googleAnalytics: {
    id: '', // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
  },
  // Track visitor interaction and behavior. https://www.hotjar.com
  hotjar: { id: '', snippetVersion: 6 },
  themeConfig: {
    defaultTheme: 'corporate',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: false,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: false,

    // Display the ring in Profile picture
    displayAvatarRing: true,

    // Available themes. To remove any theme, exclude from here.
    themes: [
      'light',
      'dark',
      'cupcake',
      'bumblebee',
      'emerald',
      'corporate',
      'synthwave',
      'retro',
      'cyberpunk',
      'valentine',
      'halloween',
      'garden',
      'forest',
      'aqua',
      'lofi',
      'pastel',
      'fantasy',
      'wireframe',
      'black',
      'luxury',
      'dracula',
      'cmyk',
      'autumn',
      'business',
      'acid',
      'lemonade',
      'night',
      'coffee',
      'winter',
      'dim',
      'nord',
      'sunset',
      'caramellatte',
      'abyss',
      'silk',
      'procyon',
    ],
  },

  // Optional Footer. Supports plain text or HTML.
  footer: `Made with <a 
      class="text-primary" href="https://github.com/arifszn/gitprofile"
      target="_blank"
      rel="noreferrer"
    >GitProfile</a> and ❤️`,

  enablePWA: true,
};

export default CONFIG;
