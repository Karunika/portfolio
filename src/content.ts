
export interface IDate {
  month: number,
  year: number
}

export interface IExperience {
  time: {
    start: IDate,
    end: IDate
  },
  logo?: string,
  company: string,
  title: string,
  mode: string,
  location: string,
  description: string[],
  tools: string[],
  media?: IMedia[]
}

export interface ILinkMedia {
  type: 'link'
  payload: string
}

export type IMedia = ILinkMedia

export interface ITime {
  start: number,
  end: number
}

export interface IEducation {
  institute: string,
  location: string,
  time: ITime
  degree?: string
}

export interface IHomepage {
  about: {
    description: string
  },
  experience: IExperience[],
  education: IEducation[]
}

export interface IContent {
  homepage: IHomepage
}

const Content: IContent = {
  homepage: {
    about: {
      description: "Hi! I am an experienced Full Stack Engineer, with a strong history of building, delivering, and maintaining robust industrial applications. I thrive in collaborative environments, where I excel at empowering team members to perform at their best. With a keen eye for detail, I’m dedicated to ensuring every product I work on is meticulously crafted and of the highest quality. My passion for precision and teamwork drives me to create solutions that not only meet, but exceed expectations."
    },
    experience: [{
      time: {
        start: {
          month: 3,
          year: 2022
        },
        end: {
          month: 12,
          year: 2022
        }
      },
      logo: "samsung.png",
      company: "Samsung R&D",
      title: "Javascript Developer",
      mode: "hybrid",
      location: "Warsaw Spire, Warsaw",
      description: [
        "Revamped 10-year-old Content Creation tool 'WebAuthor', used on over 100K+ Commercial LFD panels globally, for the MagicINFO 9 project.",
        "Developed, tested and deployed features ensuring  cross-platform compatibility and conformance to the design specifications.",
        "Led development of the 'Supernova' monorepo widget library, focused on Social Media Cards using 3rd party APIs.",
      ],
      tools: ["Angular 2+", "ReactJs", "Jest", "Cypress", "StoryBook", "fp-ts", "RxJs", "Git", "Jira"],
      media: [{
        type: 'link',
        payload: 'https://www.samsung.com/pl/business/display-solutions/magicinfo/'
      }]
    }, {
      time: {
        start: {
          month: 1,
          year: 2022
        },
        end: {
          month: 3,
          year: 2022
        }
      },
      logo: "montrose.png",
      company: "Montrose",
      title: "React Developer",
      mode: "office",
      location: "Kraków, Poland",
      description: [
        "Developed Internal Web Applications that boosted the efficiency of the workflow in the company many manifolds.",
        "Sole frontend developer besides an intern, delivered features in a timely manner with quality and adherence to wireframes.",
        "Provided mentorship to interns."
      ],
      tools: ["ReactJs", "Django", "TailwindCSS", "GraphQL"]
    }, {
      time: {
        start: {
          month: 6,
          year: 2021
        },
        end: {
          month: 12,
          year: 2021
        }
      },

      logo: "comitium.png",
      company: "Comitium",
      title: "Volunteer Frontend Developer",
      mode: "remote",
      location: "Birmingham, U.K.",
      description: [

        "Enhanced front-end in Vue.js, reducing development time by 15%.",
        "Praised for communication, coding practices, and Git proficiency."
      ],
      tools: ["VueJs", "CSS", "Jira"]
    }],
    education: [{
      institute: 'Warsaw University of Technology',
      location: 'Warsaw',
      degree: 'BSc. CS (spec. Computer Systems & Networks)',
      time: {
        start: 2020,
        end: 2024
      }
    }, {
      institute: 'J.K.G International School',
      location: 'India',
      degree: 'Higher Secondary Education (Science Stream - PCM)',
      time: {
        start: 2018,
        end: 2020
      }
    }, {
      institute: 'T.I.S.',
      location: 'Bahrain',
      time: {
        start: 2012,
        end: 2015
      }
    }, {
      institute: 'Sherbourne',
      location: 'Qatar',
      time: {
        start: 2009,
        end: 2012
      }
    }, {
      institute: 'Sherwood Academy',
      location: 'U.A.E',
      time: {
        start: 2004,
        end: 2009
      }
    }]
  },
}

export default Content
