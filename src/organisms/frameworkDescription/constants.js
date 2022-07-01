import vueLogo from "../../images/vue_logo.svg";
import reactLogo from "../../images/react_logo.svg";
import angularLogo from "../../images/angular_logo.svg";

export const TITLE = "Frameworks";

export const FRAMEWORKS_DATA = [
    {
        id: 0,
        framework: "vue",
        isLeftLocation: true,
        logo: vueLogo,
        title: "Vue js",
        description: "Vue.js is an open source JavaScript framework for creating user interfaces. It is easily integrated into projects using other JavaScript libraries. It can function as a web framework for developing single-page applications in a reactive style.",
        buttonsLabels: [
            {
                id: 0,
                label: "Read more"
            },
            {
                id: 1,
                label: "Webinar"
            }
        ]
    },
    {
        id: 1,
        framework: "react",
        isLeftLocation: false,
        logo: reactLogo,
        title: "React js",
        description: "React is an open source JavaScript library for developing user interfaces. Instagram Facebook, React is developed and supported by a community of individual developers and corporations. React can be used to develop single-page and mobile applications.",
        buttonsLabels: [
            {
                id: 0,
                label: "Read more"
            },
            {
                id: 1,
                label: "Webinar"
            }
        ]
    },
    {
        id: 2,
        framework: "angular",
        isLeftLocation: true,
        logo: angularLogo,
        title: "Angular js",
        description: "AngularJS is an open source JavaScript framework. Designed for the development of single-page applications. Its goal is to expand browser applications based on the MVC template, as well as simplify testing and development.",
        buttonsLabels: [
            {
                id: 0,
                label: "Read more"
            },
            {
                id: 1,
                label: "Webinar"
            }
        ]
    }
]