const logotext = "Lasse";
const meta = {
    title: "Lasse Hastrup",
    description: "I’m Lasse Hastrup, Platform Engineer _ Azure Cloud Consultant, currently working in Aarhus",
};

const introdata = {
    title: "I’m Lasse Hastrup ",
    animated: {
        first: "❯ Technology enthusiast! 👨‍💻",
        third: "❯ Bouldering addict! 🧗 ",
        second: "❯ Natural Wine lover! 🍷"
    },
    description: "",
    your_img_url: "https://i.imgur.com/lwxm4N7.jpeg",
};

const dataabout = {
    title: "Who am I?",
    aboutme: "I’m Lasse Hastrup, Platform Engineer & Azure Cloud Consultant, currently working in Aarhus, Denmark. I have a passion for technology and love to learn new things. "
};
const worktimeline = [
    {
        jobtitle: "Cloud Consultant",
        where: "Fellowmind",
        date: "2022-present",
    },
    {
        jobtitle: "DevOps Engineer/Systems Consultant",
        where: "Jysk A/S",
        date: "2020-2022",
    },
    {
        jobtitle: "Support & Operations Engineer - Apprentice",
        where: "Sentia A/S",
        date: "2018-2020",
    },
    {
        jobtitle: "Support & Operations Engineer - Apprentice",
        where: "Hosters A/S",
        date: "2016-2018",
    },
    {
        jobtitle: "IT Consultant - Apprentice",
        where: "Klestrup Partners",
        date: "2015-2016",
    },
];

const skills = [
    {
        name: "PowerShell",
        value: 100,
    },
    {
        name: "Azure Infrastructure",
        value: 85,
    },
    {
        name: "Azure DevOps",
        value: 85,
    },
    {
        name: "Microsoft Windows Server",
        value: 85,
    },
    {
        name: "Microsoft 365",
        value: 80,
    },
    {
        name: "Active Directory",
        value: 80,
    },
    {
        name: "Microsoft Exchange/Exchange Online",
        value: 75,
    },

    {
        name: "Microsoft Power Platform",
        value: 70,
    },
    {
        name: "Microsoft Teams",
        value: 65,
    },
    {
        name: "Hyper-V",
        value: 65,
    },
    {
        name: "Microsoft SQL server",
        value: 60,
    },
    {
        name: "VMware",
        value: 50,
    },
];

const services = [{
    title: "Infrastructure as Code",
    description: "Coding infrastructure using ARM templates, Terraform, Bicep, etc.",
},
{
    title: "Complex troubleshooting",
    description: "Working multiple years as 3rd line support engineer, I have gained a lot of experience in troubleshooting complex issues on Windows Server using Sysinternals tools and other tools.",
},
{
    title: "Automating tasks",
    description: "Automating tasks using PowerShell, Azure Automation, Azure Functions, Azure Logic Apps, Azure DevOps, etc.",
},
];

const dataportfolio = [{
    img: "https://techcommunity.microsoft.com/t5/image/serverpage/image-id/212187i9A179776A9938109/image-size/large?v=v2&px=999",
    description: "Azure Landing Zones",
    link: "/src/pages/portfolio/azure-landing-zones/azure-landing-zones.md",
}
];

const contactConfig = {
    YOUR_EMAIL: "l@hastrup.m,",
    YOUR_FONE: "+45 5372 9852",
};

const socialprofils = {
    github: "https://github.com/lassehastrup",
    linkedin: "https://www.linkedin.com/in/lassehastrup/",
};
export {
    meta,
    dataabout,
    dataportfolio,
    worktimeline,
    skills,
    services,
    introdata,
    contactConfig,
    socialprofils,
    logotext,
};