export const domain3Content = {
  hack: {
    title: "Programming Club: Hackathon",
    desc: [
      `As part of NNHS Programming Club’s initiative to organize a hackathon later this spring in collaboration with NSHS, I contributed by developing a website to support the event and engage high school students in computer science. `,
      `Through this project, I independently applied and expanded my knowledge of web development, in particular React JS.  I documented my learning process along the way, especially through the detailed GitHub commits that tracked each step, revision, and improvement.
`,
    ],
    section1Title: "What I Learned",
    section1: [
      `Though my site was for fun and didn't end up being used, I still learned a lot along the way!`,
      `Initially I struggled with working with managing CSS (a language to style websites) efficiently. In earlier projects, I relied on a separate .css file for each page.  While this approach was convenient, it was tedious, and quickly became difficult to navigate as my web application grew more complex.`,
      `In order to build a cleaner work environment, I independently researched Tailwind CSS which uses a utility first method that allows for more efficient and scalable styling. Slowly, I was able to understand how to use these utility classes (for example, “mb” is shorthand for margin-bottom, and “py” is padding-y). Building on this, I was able to quickly tweak styling if something didn’t look quite right and I found this method to be much significantly more efficient during my development process.`,
      `Another challenge I encountered was keeping my API keys secure. API keys are critical for communication between the frontend and backend databases. Recognizing the risks if they are exposed, I learned that anyone with the keys would be able to go in and read, modify, and delete information stored. I researched best practices and learned to create a .env file (short for environment file) and exclude this file from GitHub’s version control with a .gitignore file. The .env stores private information including API keys, and files listed in .gitignore do not get committed to the GitHub repository. Therefore, I could be sure the API keys for my database don’t get exposed. `,
      `While learning this, I had to regenerate my API keys several times in order to make sure the current one was exposed (this is especially evident in the image below under my commits). I had to regenerate the key not once, but twice. This moment reinforced the importance of security in development and taught me to carefully manage sensitive data (keys, IDs) before pushing code to GitHub.`,
    ],
  },

  tako: {
    title: "Project: TakoFocus",
    desc: [
      `TakoFocus was developed as a part of an AI Agent Hackathon I found on YouTube. Building TakoFocus, I challenged myself to build a functional productivity-focused web application within a limited timeframe. While the hackathon centered around AI Agents, I made use of this opportunity to further strengthen my web development and explore how AI tools can support my process.`,
    ],
    section1Title: "What I Built",
    section1: [
      `TakoFocus was built as a productivity-based web application designed to help its users stay focused and manage tasks effectively. I worked on structuring a ReactJS-based application, implementing features that provided a smooth user experience. More can be read under "TakoFocus Summary"`,
    ],
    section2Title: "What I Learnt",
    section2: [
      `Through the building of TakoFocus, I reinforced my knowledge of React JS and worked with separate components to create a cohesive web application. This project strengthened my critical and analytical problem solving skills, absolutely necessary when my approaches didn’t work.`,
    ],
    section3Title: "Use of AI as a Learning Tool",
    section3: [
      `During TakoFocus, I used tools like ChatGPT as a support resource to explore new and unfamiliar concepts such as implementing a Pomodoro Timer and linking frontend with Supabase (a backend system for my databases). Rather than simply prompting it to create a full web app, I used it to understand the logic behind why its answers. Understanding why AI prompted me specific solutions and not others further allowed me to actively stay engaged and learn throughout the development process.`,
    ],
    explainTitle: "Connecting To This Domain",
    explain: [
      `This project is a clear commitment to personal study because it was self-driven and required me to independently learn new tools and skills on the go. By actively looking for opportunities and engaging with the learning process, I believe I go beyond expectations within classroom learning as I continue to develop my skills in hands-on experiences.`,
    ],
  },

  webDev: {
    title: "Summer Web Development Study",
    desc: [`...`],
  },

  csa: {
    title: "Self Studying AP Computer Science A",
    desc: [`...`],
    section1Title: "Connecting To This Domain",
    section1: [`...`]
  },

  thisApp: {
    title: "This Website",
    desc: [`Yes! I worked really hard to build this website not only for the STEM Seal but also so I can look back and document my experiences and learning journey in a way that builds on my Computer Science and STEM disciplines.`],
    section1Title: "Connecting To This Domain",
    section1: [`Using an IDE tracker that tracks the amount of time I spend coding. Through coding alone and balancing rigorous school work, I spent over 15 hours alone in one week building this. This website not only builds on my learning of web development, it also strongly supports my pursuit of STEM and commitment independent study.`,
        `My favorite part about this journey is that I learned how to break down reusable parts in this site like the cards, orbit layout, and headings into components. Breaking them down into components allows me to write efficient clean code that is organized and flexible to adjust.`,
        `Some challenges I faced were working with styles. Building on Tailwind CSS styling I learned in the building of the Hackathon Website, I decided to practice again using it here.`,
        `I made use of some parts (orbitals, glow cards) from websites like reactbits.dev and 21st.dev and researched how to integrate these. I’m proud of being able to create an application that allows me to use practical skills in the process, creating an engaging application.`
    ]
  }
};
