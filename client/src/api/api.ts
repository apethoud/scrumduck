const exampleSprintData = {
  id: 1,
  name: "1",
  projectId: 1,
  userStories: [
    {
      id: 1,
      githubIssueNumber: 24,
      githubLinkUrl: "http://github.com",
      status: "Sprint Ready",
      statusLastUpdated: "Feb 19 2023",
      storyText: "As a user, I want to select a date for my event so I can keep track of scheduling.",
      timeline: [
        {
          id: 1,
          date: "2023-03-06T11:55:20",
          event: {
            type: "status_change",
            data: {
              new_status: "Sprint Ready",
              old_status: null
            }
          }
        },
        {
          id: 2,
          date: "2023-03-09T11:55:20",
          event: {
            type: "comment",
            data: {
              comment: "Considering the updated project deadline, this is now a top priority."
            }
          }
        },
        {
          id: 3,
          date: "2023-03-10T14:55:20",
          event: {
            type: "blocking_comment",
            data: {
              comment: "Need design updates. Need design updates. Need design updates. Need design updates. Need design updates."
            }
          }
        },
        {
          id: 4,
          date: "2023-03-12T11:55:20",
          event: {
            type: "unblocking_comment",
            data: {
              comment: "Designs are ready. Designs are ready. Designs are ready. Designs are ready. Designs are ready."
            }
          }
        },
        {
          id: 5,
          date: "2023-03-12T15:55:20",
          event: {
            type: "status_change",
            data: {
              new_status: "In Development",
              old_status: "Sprint Ready"
            }
          }
        },
        {
          id: 6,
          date: "2023-03-14T15:55:20",
          event: {
            type: "status_change",
            data: {
              new_status: "Done",
              old_status: "In Development"
            }
          }
        },
      ],
      title: "Calendar Feature",
    },
    {
      id: 2,
      githubIssueNumber: 27,
      githubLinkUrl: "http://github.com",
      status: "In Development",
      statusLastUpdated: "Feb 21 2023",
      storyText: "As a user, I want to add personal details about myself so other users can identify me.",
      timeline: [
        {
          id: 1,
          date: "2023-03-06T11:55:20",
          event: {
            type: "status_change",
            data: {
              new_status: "Sprint Ready",
              old_status: null
            }
          }
        },
        {
          id: 2,
          date: "2023-03-09T11:55:20",
          event: {
            type: "blocking_comment",
            data: {
              comment: "We may need to significantly modify this user story. Putting on hold for now."
            }
          }
        },
      ],
      title: "Profile Feature",
    },
    {
      id: 3,
      githubIssueNumber: 5,
      githubLinkUrl: "http://github.com",
      status: "Done",
      statusLastUpdated: "Feb 4 2023",
      storyText: "As a user, I want to access my account securely to avoid data security issues.",
      timeline: [
        {
          id: 1,
          date: "2023-03-06T11:55:20",
          event: {
            type: "status_change",
            data: {
              new_status: "Sprint Ready",
              old_status: null
            }
          }
        },
        {
          id: 2,
          date: "2023-03-09T11:55:20",
          event: {
            type: "comment",
            data: {
              comment: "Considering the updated project deadline, this is now a top priority."
            }
          }
        },
        {
          id: 3,
          date: "2023-03-12T15:55:20",
          event: {
            type: "status_change",
            data: {
              new_status: "In Development",
              old_status: "Sprint Ready"
            }
          }
        },
      ],
      title: "Login Feature",
    },
  ]
}

export default exampleSprintData;