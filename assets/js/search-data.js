// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-publications",
          title: "publications",
          description: "Academic publications.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-academic-service",
          title: "academic service",
          description: "I actively contribute to the scientific community through peer review and event organization.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/service/";
          },
        },{id: "nav-teaching",
          title: "teaching",
          description: "Supported courses and Master thesis projects.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/teaching/";
          },
        },{id: "news-presented-our-trace-oddity-paper-on-traffic-correlation-attacks-on-tor-at-pets-in-sydney-pre-recorded-presentation",
          title: 'Presented our Trace Oddity paper on traffic correlation attacks on Tor at PETS...',
          description: "",
          section: "News",},{id: "news-i-had-the-pleasure-to-give-a-lecture-on-vulnerabilities-of-large-language-models-to-master-s-students-at-the-university-of-edinburgh",
          title: 'I had the pleasure to give a lecture on “Vulnerabilities of Large Language...',
          description: "",
          section: "News",},{id: "news-after-7-years-i-returned-to-secappdev-this-time-as-a-speaker-to-give-a-talk-on-vulnerabilities-of-large-language-model-applications-to-practitioners",
          title: 'After 7 years, I returned to SecAppDev this time as a speaker to...',
          description: "",
          section: "News",},{id: "news-i-will-co-organize-the-dagstuhl-seminar-on-security-and-privacy-of-large-language-models-in-november-2025-together-with-pavel-laskov-emil-lupu-stephan-günnemann-and-nicholas-carlini",
          title: 'I will co-organize the Dagstuhl Seminar on Security and Privacy of Large Language...',
          description: "",
          section: "News",},{id: "news-together-with-lieven-desmet-i-presented-an-overview-on-cybersecurity-amp-amp-ai-at-the-cosic-course-in-leuven",
          title: 'Together with Lieven Desmet, I presented an overview on “Cybersecurity &amp;amp;amp; AI” at...',
          description: "",
          section: "News",},{id: "news-fabio-pierazzi-savino-dambra-and-i-organized-the-3rd-workshop-on-rethinking-malware-analysis-worma-co-located-with-ieee-euros-amp-amp-p-2024-in-vienna",
          title: 'Fabio Pierazzi, Savino Dambra, and I organized the 3rd Workshop on Rethinking Malware...',
          description: "",
          section: "News",},{id: "news-we-at-ku-leuven-organized-a-successful-3rd-edition-of-the-summer-school-on-security-amp-amp-privacy-in-the-age-of-ai",
          title: 'We at KU Leuven organized a successful 3rd edition of the Summer School...',
          description: "",
          section: "News",},{id: "news-i-gave-a-keynote-at-the-security-and-trustworthiness-of-ai-workshop-in-the-netherlands-on-the-ambivalence-of-deep-learning-in-cybersecurity-balancing-promises-and-pitfalls",
          title: 'I gave a keynote at The Security and Trustworthiness of AI workshop in...',
          description: "",
          section: "News",},{id: "news-our-4th-workshop-on-rethinking-malware-analysis-worma-is-accepted-to-appear-at-ieee-euros-amp-amp-p-2025-in-vienna-austria-co-chaired-with-fabio-pierazzi-and-simone-aonzo",
          title: 'Our 4th Workshop on Rethinking Malware Analysis (WoRMA) is accepted to appear at...',
          description: "",
          section: "News",},{id: "news-i-participated-in-the-ndc-security-2025-conference-in-oslo-where-i-gave-a-talk-on-nagivating-the-security-and-privacy-landscape-of-modern-ai",
          title: 'I participated in the NDC Security 2025 conference in Oslo, where I gave...',
          description: "",
          section: "News",},{id: "news-i-had-a-pleasure-to-give-a-guest-lecture-on-privacy-engineering-technologies-for-the-data-application-and-security-course-at-the-university-of-liechtenstein",
          title: 'I had a pleasure to give a guest lecture on “Privacy Engineering Technologies”...',
          description: "",
          section: "News",},{id: "news-our-team-published-a-pre-print-of-flowpure-our-novel-method-for-adversarial-purification-based-on-continuous-normalizing-flows",
          title: 'Our team published a pre-print of FlowPure, our novel method for adversarial purification...',
          description: "",
          section: "News",},{id: "news-i-returned-to-secappdev-2025-with-two-talks-for-practitioners-on-navigating-the-security-landscape-of-modern-ai-and-on-the-engineer-s-guide-to-data-privacy-the-first-talk-was-also-repeated-for-cyber-security-coalition-application-security-experience-sharing-day",
          title: 'I returned to SecAppDev 2025 with two talks for practitioners: on “Navigating the...',
          description: "",
          section: "News",},{id: "news-i-will-co-organize-the-poster-session-at-usenix-security-2025-submissions-due-on-july-14-co-chaired-with-sarah-scheffler",
          title: 'I will co-organize the poster session at USENIX Security 2025, submissions due on...',
          description: "",
          section: "News",},{id: "news-our-paper-the-adaptive-arms-race-redefining-robustness-in-ai-security-on-a-reinforcement-learning-approach-for-evaluating-adversarial-ai-attacks-and-defenses-has-been-accepted-to-raid",
          title: 'Our paper “The Adaptive Arms Race: Redefining Robustness in AI Security”—on a reinforcement...',
          description: "",
          section: "News",},{id: "news-i-was-recognized-as-a-usenix-security-2025-notable-reviewer",
          title: 'I was recognized as a USENIX Security 2025 Notable Reviewer.',
          description: "",
          section: "News",},{id: "news-concluded-an-amazing-4th-edition-of-our-summer-school-on-security-amp-amp-privacy-in-the-age-of-ai-in-ku-leuven-check-out-the-program-and-stay-tuned-by-joining-the-mailing-list",
          title: 'Concluded an amazing, 4th edition of our Summer School on Security &amp;amp;amp; Privacy...',
          description: "",
          section: "News",},{id: "news-we-opened-the-ieee-euros-amp-amp-p-2026-call-for-workshops-workshop-proposals-are-due-on-october-24-aoe-co-chaired-with-christian-wressnegger",
          title: 'We opened the IEEE EuroS&amp;amp;amp;P 2026 Call for Workshops! Workshop proposals are due...',
          description: "",
          section: "News",},{id: "news-our-paper-on-the-potential-of-llms-for-offensive-security-benchmarks-vs-operational-reality-has-been-accepted-to-waiti-2025-co-located-with-acsac-2025",
          title: 'Our paper “On the Potential of LLMs for Offensive Security: Benchmarks vs. Operational...',
          description: "",
          section: "News",},{id: "news-our-5th-workshop-on-rethinking-malware-analysis-worma-is-accepted-to-appear-at-ieee-euros-amp-amp-p-2026-in-lisbon-portugal-co-chaired-with-luca-demetrio-and-daniel-arp",
          title: 'Our 5th Workshop on Rethinking Malware Analysis (WoRMA) is accepted to appear at...',
          description: "",
          section: "News",},{id: "news-i-will-give-a-keynote-talk-at-demessai-co-located-with-ieee-euros-amp-amp-p-in-lisbon-portugal",
          title: 'I will give a keynote talk at DeMeSSAI co-located with IEEE EuroS&amp;amp;amp;P in...',
          description: "",
          section: "News",},{id: "news-i-was-recognized-as-a-ieee-satml-2026-distinguished-reviewer",
          title: 'I was recognized as a IEEE SaTML 2026 Distinguished Reviewer.',
          description: "",
          section: "News",},{id: "news-applications-to-the-5th-edition-of-our-summer-school-on-security-amp-amp-privacy-in-the-age-of-ai-in-ku-leuven-are-open",
          title: 'Applications to the 5th edition of our Summer School on Security &amp;amp;amp; Privacy...',
          description: "",
          section: "News",},{id: "news-our-paper-with-inesc-tec-it-works-on-my-machine-a-sok-on-reproducibility-and-replicability-in-ml-based-ransomware-detection-has-been-accepted-to-worma-2026-co-located-with-ieee-euros-amp-amp-p-2026",
          title: 'Our paper with INESC TEC “It Works on My Machine: A SoK on...',
          description: "",
          section: "News",},{id: "projects-project-1",
          title: 'project 1',
          description: "with background image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/1_project/";
            },},{id: "projects-project-2",
          title: 'project 2',
          description: "a project with a background image and giscus comments",
          section: "Projects",handler: () => {
              window.location.href = "/projects/2_project/";
            },},{id: "projects-project-3-with-very-long-name",
          title: 'project 3 with very long name',
          description: "a project that redirects to another website",
          section: "Projects",handler: () => {
              window.location.href = "/projects/3_project/";
            },},{id: "projects-project-4",
          title: 'project 4',
          description: "another without an image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/4_project/";
            },},{id: "projects-project-5",
          title: 'project 5',
          description: "a project with a background image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/5_project/";
            },},{id: "projects-project-6",
          title: 'project 6',
          description: "a project with no image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/6_project/";
            },},{id: "projects-project-7",
          title: 'project 7',
          description: "with background image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/7_project/";
            },},{id: "projects-project-8",
          title: 'project 8',
          description: "an other project with a background image and giscus comments",
          section: "Projects",handler: () => {
              window.location.href = "/projects/8_project/";
            },},{id: "projects-project-9",
          title: 'project 9',
          description: "another project with an image 🎉",
          section: "Projects",handler: () => {
              window.location.href = "/projects/9_project/";
            },},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%76%65%72%61.%72%69%6D%6D%65%72@%6B%75%6C%65%75%76%65%6E.%62%65", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=rpFf8joAAAAJ", "_blank");
        },
      },{
        id: 'social-work',
        title: 'Work',
        section: 'Socials',
        handler: () => {
          window.open("https://distrinet.cs.kuleuven.be/people/VeraRimmer", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
