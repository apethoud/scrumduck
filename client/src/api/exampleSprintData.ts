const exampleSprintData = {
  id: 1,
  name: "1",
  projectId: 1,
  userStories: [
    {
      id: 1,
      githubIssueNumber: 24,
      githubLinkUrl: "http://github.com",
      status: {
        id: 4,
        name: "Done",
        color: "#E3C800",
        lastUpdated: "2023-04-29T11:55:20",
      },
      storyText: "As a user, I want to select a date for my event so I can keep track of scheduling.",
      timeline: [
        {
          id: 1,
          date: "2023-03-06T11:55:20",
          event: {
            type: "status_change",
            data: {
              new_status: "Not Progressing",
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
              new_status: "Progressing",
              old_status: "Not Progressing"
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
              old_status: "Progressing"
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
      status: {
        id: 5,
        name: "Paused",
        color: "#E38021",
        lastUpdated: "2023-04-22T11:55:20",
      },
      storyText: "As a user, I want to add personal details about myself so other users can identify me.",
      timeline: [
        {
          id: 1,
          date: "2023-03-06T11:55:20",
          event: {
            type: "status_change",
            data: {
              new_status: "Not Progressing",
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
      status: {
        id: 2,
        name: "Progressing",
        color: "#509010",
        lastUpdated: "2023-03-20T11:55:20",
      },
      storyText: "As a user, I want to access my account securely to avoid data security issues.",
      timeline: [
        {
          id: 1,
          date: "2023-03-06T11:55:20",
          event: {
            type: "status_change",
            data: {
              new_status: "Not Progressing",
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
              new_status: "Progressing",
              old_status: "Not Progressing"
            }
          }
        },
      ],
      title: "Login Feature",
    },
  ]
};

export default exampleSprintData;