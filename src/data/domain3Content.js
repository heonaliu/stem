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
      `Initially I struggled with working with managing CSS (a language to style websites) efficiently. In earlier projects, I relied on a separate .css file for each page.  While this approach was convenient, it was tedious, and quickly became difficult to navigate as my web application grew more complex.`,
      `In order to build a cleaner work environment, I independently researched Tailwind CSS which uses a utility first method that allows for more efficient and scalable styling. Slowly, I was able to understand how to use these utility classes (for example, “mb” is shorthand for margin-bottom, and “py” is padding-y). Building on this, I was able to quickly tweak styling if something didn’t look quite right and I found this method to be much significantly more efficient during my development process.`,
      `Another challenge I encountered was keeping my API keys secure. API keys are critical for communication between the frontend and backend databases. Recognizing the risks if they are exposed, I learned that anyone with the keys would be able to go in and read, modify, and delete information stored. I researched best practices and learned to create a .env file (short for environment file) and exclude this file from GitHub’s version control with a .gitignore file. The .env stores private information including API keys, and files listed in .gitignore do not get committed to the GitHub repository. Therefore, I could be sure the API keys for my database don’t get exposed. `,
      `While learning this, I had to regenerate my API keys several times in order to make sure the current one was exposed (this is especially evident in the image below under my commits). I had to regenerate the key not once, but twice. This moment reinforced the importance of security in development and taught me to carefully manage sensitive data (keys, IDs) before pushing code to GitHub.`,
    ],
  },

  tako: {

    title: "Project: TakoFocus",
    desc: [`..`],
    section1Title: "What I Built",
    section1: [`...`],
    section2Title: "What I Learnt",
    section2: [`....`],
    section3Title: "Use of AI as a Learning Tool",
    section3: [`...`],
    explainTitle: "Connecting To The Domain",
    explain: [`.....`],

  }
};
