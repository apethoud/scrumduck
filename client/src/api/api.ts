const exampleSprintData = {
  id: 1,
  name: "12",
  projectId: 1,
  userStories: [
    {
      id: 1,
      githubIssueNumber: 24,
      githubLinkUrl: "http://github.com",
      status: "Sprint Ready",
      statusLastUpdated: "Feb 19 2023",
      storyText: "As a user, I want to select a date for my event so I can keep track of scheduling.",
      title: "Calendar Feature",
    },
    {
      id: 2,
      githubIssueNumber: 27,
      githubLinkUrl: "http://github.com",
      status: "In Development",
      statusLastUpdated: "Feb 21 2023",
      storyText: "As a user, I want to add personal details about myself so other users can identify me.",
      title: "Profile Feature",
    },
    {
      id: 3,
      githubIssueNumber: 5,
      githubLinkUrl: "http://github.com",
      status: "Done",
      statusLastUpdated: "Feb 4 2023",
      storyText: "As a user, I want to access my account securely to avoid data security issues.",
      title: "Login Feature",
    },
  ]
}

export default exampleSprintData;