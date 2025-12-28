const employees = [
  {
    id: 1,
    name: "Rahul Sharma",
    email: "employee1@example.com",
    password: "123",
    tasks: [
      {
        id: "task-101",
        title: "Prepare weekly report",
        description:
          "Collect performance data from sales, support, and development teams, analyze weekly trends, summarize KPIs, and submit a structured report to management before the deadline.",
        date: "2025-01-05",
        category: "Reporting",
        status: "active",
      },
      {
        id: "task-102",
        title: "Client meeting",
        description:
          "Attend the scheduled client meeting to discuss project progress, clarify requirements, note feedback, and document actionable points for the next sprint.",
        date: "2025-01-06",
        category: "Meeting",
        status: "completed",
      },
      {
        id: "task-103",
        title: "Update dashboard UI",
        description:
          "Revise dashboard layout, improve component alignment, enhance responsiveness, and fix visual inconsistencies reported by users.",
        date: "2025-01-07",
        category: "Development",
        status: "failed",
      },
    ],
  },

  {
    id: 2,
    name: "Amit Verma",
    email: "employee2@example.com",
    password: "123",
    tasks: [
      {
        id: "task-201",
        title: "Fix login bug",
        description:
          "Identify the root cause of authentication failure during login, fix token validation logic, and verify the fix across all supported browsers.",
        date: "2025-01-04",
        category: "Bug Fix",
        status: "new",
      },
      {
        id: "task-202",
        title: "Write unit tests",
        description:
          "Create comprehensive unit tests for user registration, login, and logout modules to ensure code reliability and future safety.",
        date: "2025-01-06",
        category: "Testing",
        status: "completed",
      },
      {
        id: "task-203",
        title: "Refactor codebase",
        description:
          "Refactor legacy components, remove unused code, improve readability, and optimize file structure for long-term maintainability.",
        date: "2025-01-08",
        category: "Maintenance",
        status: "failed",
      },
      {
        id: "task-204",
        title: "API integration",
        description:
          "Integrate a third-party API, handle authentication securely, map API responses correctly, and ensure error handling is robust.",
        date: "2027-01-09",
        category: "Development",
        status: "active",
      },
    ],
  },

  {
    id: 3,
    name: "Snehasis Patel",
    email: "employee3@example.com",
    password: "123",
    tasks: [
      {
        id: "task-301",
        title: "Design landing page",
        description:
          "Create a low-fidelity wireframe for the landing page focusing on layout, content placement, and conversion-focused design.",
        date: "2025-01-03",
        category: "Design",
        status: "completed",
      },
      {
        id: "task-302",
        title: "Optimize images",
        description:
          "Compress large images, convert them to modern formats, and ensure faster page load without reducing visual quality.",
        date: "2025-01-05",
        category: "Optimization",
        status: "new",
      },
      {
        id: "task-303",
        title: "Fix CSS issues",
        description:
          "Resolve layout breaking issues on smaller screens, fix alignment problems, and ensure consistent UI across devices.",
        date: "2025-01-06",
        category: "UI",
        status: "active",
      },
    ],
  },

  {
    id: 4,
    name: "Rohit Kumar",
    email: "employee4@example.com",
    password: "123",
    tasks: [
      {
        id: "task-401",
        title: "Database backup",
        description:
          "Perform a full database backup, verify backup integrity, and securely store backup files for disaster recovery.",
        date: "2025-01-02",
        category: "Database",
        status: "completed",
      },
      {
        id: "task-402",
        title: "Migration script",
        description:
          "Write and test a migration script to move existing data to the new database schema without data loss.",
        date: "2025-01-04",
        category: "Database",
        status: "new",
      },
      {
        id: "task-403",
        title: "Fix server error",
        description:
          "Investigate the cause of 500 internal server errors, apply fixes, and monitor server logs to ensure stability.",
        date: "2025-01-06",
        category: "Backend",
        status: "failed",
      },
    ],
  },

  {
    id: 5,
    name: "Priya Singh",
    email: "employee5@example.com",
    password: "123",
    tasks: [
      {
        id: "task-501",
        title: "Create documentation",
        description:
          "Write clear and detailed project documentation including setup steps, features, API usage, and deployment guidelines.",
        date: "2025-01-03",
        category: "Documentation",
        status: "completed",
      },
      {
        id: "task-502",
        title: "Code review",
        description:
          "Review team pull requests, check for code quality, suggest improvements, and ensure coding standards are followed.",
        date: "2025-01-05",
        category: "Review",
        status: "active",
      },
      {
        id: "task-503",
        title: "Deploy to staging",
        description:
          "Deploy the latest stable build to the staging environment, verify deployment success, and run smoke tests.",
        date: "2025-01-07",
        category: "Deployment",
        status: "new",
      },
    ],
  },
];

const admins = [
  {
    id: 101,
    name: "Dharmendra Singh",
    email: "admin@example.com",
    password: "123",
  },
];

export const setLocalStorage = () => {
  localStorage.setItem("employees", JSON.stringify(employees))
  localStorage.setItem("admins", JSON.stringify(admins))
}

export const getLocalStorage = () => {
  const employees = JSON.parse(localStorage.getItem("employees"))
  const admins = JSON.parse(localStorage.getItem("admins"))
  return {employees, admins}
  // console.log(employees,admins);
}