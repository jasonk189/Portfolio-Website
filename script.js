const projects = [
  {
    title: "Personal Finance Tracker",
    description: "A financial management application that helps users track income and expenses, visualize spending trends with interactive charts, and export financial data as CSV files. Built with a Flask backend and modern web technologies.",
    github: "https://github.com/jasonk189/Personal-Finance-Tracker.git",
    icon: "💰",
    tech: ["Flask", "SQLite", "Chart.js", "Python", "HTML", "CSS"]
  },
  {
    title: "Smart Device Dashboard",
    description: "An IoT simulation platform that provides a centralized interface for controlling virtual smart devices. Features real-time status updates, device management, and a responsive design built with React and Flask REST API.",
    github: "https://github.com/jasonk189/Smart-Device-Dashboard-Simulator.git",
    icon: "🏠",
    tech: ["React", "Flask", "REST API", "JavaScript", "Python"]
  },
  {
    title: "Code Snippet Compiler",
    description: "A secure web-based C++ compiler with an intuitive interface for writing, compiling, and executing code snippets. Implements sandboxing for safe code execution and provides detailed compilation feedback.",
    github: "https://github.com/jasonk189/Code-Snippet-Compiler.git",
    icon: "⚡",
    tech: ["C++", "Flask", "Web Security", "Python", "Docker"]
  },
  {
    title: "Pong Deep Q Learner",
    description: "Developed an AI agent that learned to play Pong using a Deep Q Network. Built with Python, PyTorch, and NumPy, utilizing a convolutional neural network that improves through training episodes.",
    github: "https://github.com/jasonk189/Pong_AI.git",
    icon: "🎮",
    tech: ["Python", "PyTorch", "NumPy", "AI"]
  },
  {
    title: "Connect 4 AI Player",
    description: "A Connect-4 AI agent built using the minimax algorithm with alpha-beta pruning for optimal move selection. Includes a custom evaluation function to assess board states and significantly reduces computation time through pruning techniques.",
    github: "https://github.com/jasonk189/Connect4_AI.git",
    icon: "🧠",
    tech: ["Python", "AI", "Minimax", "Alpha-Beta Pruning"]
  },
  {
    title: "Mountain Pathfinding AI",
    description: "Implemented an A* search algorithm in Python to find the most cost-effective path across mountain terrains. Utilized admissible heuristics to ensure optimality, enabling intelligent navigation both uphill and downhill with terrain-aware cost functions.",
    github: "https://github.com/jasonk189/Cheapest-Path-AI.git",
    icon: "⛰️",
    tech: ["Python", "AI", "Dijkstra's Algorithm", "A*", "Pathfinding"]
  },

];

// Theme Toggle Functionality
const themeToggle = document.getElementById('theme-toggle');
const themeIcon = document.querySelector('.theme-icon');
const body = document.body;

// Check for saved theme preference or default to 'dark'
const currentTheme = localStorage.getItem('theme') || 'dark';
body.setAttribute('data-theme', currentTheme);

// Update theme icon based on current theme
function updateThemeIcon(theme) {
  themeIcon.textContent = theme === 'dark' ? '🌙' : '☀️';
}

// Initialize theme icon
updateThemeIcon(currentTheme);

// Theme toggle event listener
themeToggle.addEventListener('click', () => {
  const currentTheme = body.getAttribute('data-theme');
  const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
  
  body.setAttribute('data-theme', newTheme);
  localStorage.setItem('theme', newTheme);
  updateThemeIcon(newTheme);
});

// Project rendering
const projectList = document.getElementById("project-list");

projects.forEach((project, index) => {
  const card = document.createElement("div");
  card.className = "project";

  const techTags = project.tech.map(tech => 
    `<span class="tech-tag">${tech}</span>`
  ).join('');

  card.innerHTML = `
    <div class="project-header">
      <div class="project-icon">${project.icon}</div>
      <h3>${project.title}</h3>
    </div>
    <p>${project.description}</p>
    <div class="project-tech">
      ${techTags}
    </div>
    <div class="project-links">
      <a href="${project.github}" target="_blank" class="project-link">
        <span>GitHub</span>
        <span>→</span>
      </a>
    </div>
  `;

  projectList.appendChild(card);
});

// Add smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});