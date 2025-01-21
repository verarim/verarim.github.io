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
          section: "News",},{id: "news-i-returned-to-secappdev-after-7-years-to-give-a-talk-on-vulnerabilities-of-large-language-model-applications-to-practitioners",
          title: 'I returned to SecAppDev after 7 years to give a talk on “Vulnerabilities...',
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
