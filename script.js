const projects = [
  {
    title: "Personal Finance Tracker",
    description: "Track expenses and income with Flask, SQL, and JS.",
    github: "https://github.com/yourname/finance-tracker",
  },
  {
    title: "Smart Device Dashboard",
    description: "Simulate IoT controls with React and Flask REST API.",
    github: "https://github.com/yourname/smart-device-dashboard",
  },
  {
    title: "Code Snippet Compiler",
    description: "C++ compiler web UI using Flask and subprocess sandboxing.",
    github: "https://github.com/yourname/code-compiler",
  },
  {
    title: "Movie Database Explorer",
    description: "Filter/search movie records using React, Flask, and SQL.",
    github: "https://github.com/yourname/movie-explorer",
  }
];

const projectList = document.getElementById("project-list");

projects.forEach(project => {
  const card = document.createElement("div");
  card.className = "project";

  card.innerHTML = `
    <h3>${project.title}</h3>
    <p>${project.description}</p>
    <a href="${project.github}" target="_blank">GitHub</a>
  `;

  projectList.appendChild(card);
});
