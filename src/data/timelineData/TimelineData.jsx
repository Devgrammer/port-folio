import { LuSchool } from "react-icons/lu";
import { FaSchool } from "react-icons/fa";
import { MdSchool } from "react-icons/md";
import { AiFillHtml5, AiFillCode } from "react-icons/ai";
import { LiaReact } from "react-icons/lia";
import { TbCode } from "react-icons/tb";

export const TimelineData = [
  {
    id: 1,
    role: "High School",
    startAt: "01-04-2012",
    endAt: "30-03-2013",
    organization: "DRSF",
    location: "Uttar Pradesh, India",
    desc: `--`,
    icon: <LuSchool color="white" className="animate-pulse" />,
  },
  {
    id: 2,
    role: "Intermediate",
    startAt: "01-04-2013",
    endAt: "30-03-2014",
    organization: "DRSF",
    location: "Uttar Pradesh, India",
    desc: `---`,
    icon: <FaSchool color="white" className="animate-pulse" />,
  },
  {
    id: 3,
    role: "Graduation, B.Tech",
    startAt: "01-07-2017",
    endAt: "21-08-2021",
    organization: "BVUCOEP",
    location: "Pune, India",
    desc: `---`,
    icon: <MdSchool color="white" className="animate-pulse" />,
  },
  {
    id: 4,
    role: "Web Development Intern",
    startAt: "01-05-2020",
    endAt: "24-07-2020",
    organization: "Mkt Digital",
    location: "Remote, Mexico",
    desc: `•Created a QR-based Contactless Menu web app & product website using React, incorporating design elements.
•Contributed to the development of PWAs app`,
    icon: <AiFillHtml5 color="white" className="animate-pulse" />,
  },
  {
    id: 5,
    role: "React Developer Intern",
    startAt: "01-05-2021",
    endAt: "30-12-2021",
    organization: "CoreData",
    location: "Noida, India",
    desc: `•Collaborated on 3 major projects within a 2-member team.
•Constructed the organization's responsive website entirely from scratch using React JS.
•Developed a real-time geo tracker display for the Emergency Response Support System project, focusing on public safety.`,

    icon: <LiaReact color="white" className="animate-pulse" />,
  },
  {
    id: 6,
    role: "SDE-I | Frontend",
    startAt: "05-01-2022",
    endAt: "30-01-2023",
    organization: "LineupX",
    location: "Remote, Mumbai, India",
    desc: `•Constructed a responsive web app from scratch, employing React JS, Redux Toolkit, Bootstrap, and NextJS.
•Created essential features such as the Database Portal, Dashboard, Advanced Search, Share Profile, Dynamic Charts & Tables.
•Enhanced candidate loading time in the candidate database portal by implementing dynamic pagination.
•Collaborated with backend team to develop reusable UI components, enhancing code effectiveness and maintainability.`,

    icon: <AiFillCode color="white" className="animate-pulse" />,
  },
  {
    id: 7,
    role: "Frontend Engineer",
    startAt: "01-02-2023",
    endAt: "28-04-2023",
    organization: "Scienox Pvt. Ltd.",
    location: "Part-Time, India",
    desc: `•Build and update a responsive landing website for the product using React JS and Tailwind CSS.
•Partner with designers, and founder to meet website expectations.`,

    icon: <TbCode color="white" className="animate-pulse" />,
  },
];
