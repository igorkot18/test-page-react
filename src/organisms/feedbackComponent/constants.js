import meetingLogo from "../../images/meeting_logo.svg";
import questionLogo from "../../images/question_logo.svg";

export const TITLE = "Feedback";

export const FEEDBACK_DATA = [
    {
        id: 0,
        title: "Setup a Meeting",
        logo: meetingLogo,
        description: "Fill out our contact form and have someone get back to you within 24 hours.",
        buttonsLabels: [
            {
                id: 0,
                label: "Schedule a Meeting",
            }
        ]
    },
    {
        id: 1,
        title: "Ask a Question",
        logo: questionLogo,
        description: "Have a question? Just fill out our contact us form and we will get back to you.",
        buttonsLabels: [
            {
                id: 0,
                label: "Ask a Question",
            },
        ]
    }
]