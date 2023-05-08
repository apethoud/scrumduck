const exampleSprintData = {
  id: 1,
  endDate: "2023-03-20",
  name: "1",
  projectId: 1,
  startDate: "2023-03-06",
  userStories: [
    {
      id: 1,
      latestUpdate: {
        text: "Feature is complete. Moving to QA.",
        updatedAt: "2023-03-14T15:55:20",
      },
      githubIssueNumber: 24,
      githubLinkUrl: "http://github.com",
      status: {
        id: 4,
        name: "Done",
        color: "#E3C800",
        lastUpdated: "2023-04-29T11:55:20",
      },
      statusOverTime: [
        {
          date: "2023-03-06",
          statuses: [
            {
              status: {
                id: 1,
                name: "Not Progressing",
                color: "#767676"
              },
              percentage: 100
            },
          ]
        },
        {
          date: "2023-03-07",
          statuses: [
            {
              status: {
                id: 1,
                name: "Not Progressing",
                color: "#767676"
              },
              percentage: 100
            },
          ]
        },
        {
          date: "2023-03-08",
          statuses: [
            {
              status: {
                id: 1,
                name: "Not Progressing",
                color: "#767676"
              },
              percentage: 100
            },
          ]
        },
        {
          date: "2023-03-09",
          statuses: [
            {
              status: {
                id: 1,
                name: "Not Progressing",
                color: "#767676"
              },
              percentage: 100
            },
          ]
        },
        {
          date: "2023-03-10",
          statuses: [
            {
              status: {
                id: 2,
                name: "Progressing",
                color: "#509010"
              },
              percentage: 100
            },
          ]
        },
        {
          date: "2023-03-11",
          statuses: [
            {
              status: {
                id: 2,
                name: "Progressing",
                color: "#509010"
              },
              percentage: 30
            },
            {
              status: {
                id: 6,
                name: "Blocked",
                color: "#AF2023"
              },
              percentage: 70
            },
          ]
        },
        {
          date: "2023-03-12",
          statuses: [
            {
              status: {
                id: 6,
                name: "Blocked",
                color: "#AF2023"
              },
              percentage: 10
            },
            {
              status: {
                id: 2,
                name: "Progressing",
                color: "#509010"
              },
              percentage: 50
            },
            {
              status: {
                id: 3,
                name: "Needs Review",
                color: "#1766A9"
              },
              percentage: 40
            },
          ]
        },
        {
          date: "2023-03-13",
          statuses: [
            {
              status: {
                id: 3,
                name: "Needs Review",
                color: "#1766A9"
              },
              percentage: 25
            },
            {
              status: null,
              percentage: 75
            },
          ]
        },
        {
          date: "2023-03-14",
          statuses: [
            {
              status: null,
              percentage: 100
            },
          ]
        },
        {
          date: "2023-03-15",
          statuses: [
            {
              status: null,
              percentage: 100
            },
          ]
        },
        {
          date: "2023-03-16",
          statuses: [
            {
              status: null,
              percentage: 100
            },
          ]
        },
        {
          date: "2023-03-17",
          statuses: [
            {
              status: null,
              percentage: 100
            },
          ]
        },
        {
          date: "2023-03-18",
          statuses: [
            {
              status: null,
              percentage: 100
            },
          ]
        },
        {
          date: "2023-03-19",
          statuses: [
            {
              status: null,
              percentage: 100
            },
          ]
        },
        {
          date: "2023-03-20",
          statuses: [
            {
              status: null,
              percentage: 100
            },
          ]
        },
      ],
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
      latestUpdate: {
        text: "Client is reconsidering this feature.",
        updatedAt: "2023-03-09T11:55:20",
      },
      githubIssueNumber: 27,
      githubLinkUrl: "http://github.com",
      status: {
        id: 5,
        name: "Paused",
        color: "#E38021",
        lastUpdated: "2023-04-22T11:55:20",
      },
      statusOverTime: [
        {
          date: "2023-03-06",
          statuses: [
            {
              status: null,
              percentage: 100
            },
          ]
        },
        {
          date: "2023-03-07",
          statuses: [
            {
              status: null,
              percentage: 100
            },
          ]
        },
        {
          date: "2023-03-08",
          statuses: [
            {
              status: null,
              percentage: 100
            },
          ]
        },
        {
          date: "2023-03-09",
          statuses: [
            {
              status: null,
              percentage: 100
            },
          ]
        },
        {
          date: "2023-03-10",
          statuses: [
            {
              status: null,
              percentage: 100
            },
          ]
        },
        {
          date: "2023-03-11",
          statuses: [
            {
              status: null,
              percentage: 100
            },
          ]
        },
        {
          date: "2023-03-12",
          statuses: [
            {
              status: null,
              percentage: 100
            },
          ]
        },
        {
          date: "2023-03-13",
          statuses: [
            {
              status: null,
              percentage: 100
            },
          ]
        },
        {
          date: "2023-03-14",
          statuses: [
            {
              status: null,
              percentage: 100
            },
          ]
        },
        {
          date: "2023-03-15",
          statuses: [
            {
              status: null,
              percentage: 100
            },
          ]
        },
        {
          date: "2023-03-16",
          statuses: [
            {
              status: null,
              percentage: 100
            },
          ]
        },
        {
          date: "2023-03-17",
          statuses: [
            {
              status: null,
              percentage: 100
            },
          ]
        },
        {
          date: "2023-03-18",
          statuses: [
            {
              status: null,
              percentage: 100
            },
          ]
        },
        {
          date: "2023-03-19",
          statuses: [
            {
              status: null,
              percentage: 100
            },
          ]
        },
        {
          date: "2023-03-20",
          statuses: [
            {
              status: null,
              percentage: 100
            },
          ]
        },
      ],
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
      latestUpdate: {
        text: "2FA is nearly complete.",
        updatedAt: "2023-03-12T15:55:20",
      },
      githubIssueNumber: 5,
      githubLinkUrl: "http://github.com",
      status: {
        id: 2,
        name: "Progressing",
        color: "#509010",
        lastUpdated: "2023-03-20T11:55:20",
      },
      statusOverTime: [
        {
          date: "2023-03-06",
          statuses: [
            {
              status: null,
              percentage: 100
            },
          ]
        },
        {
          date: "2023-03-07",
          statuses: [
            {
              status: null,
              percentage: 100
            },
          ]
        },
        {
          date: "2023-03-08",
          statuses: [
            {
              status: null,
              percentage: 100
            },
          ]
        },
        {
          date: "2023-03-09",
          statuses: [
            {
              status: null,
              percentage: 100
            },
          ]
        },
        {
          date: "2023-03-10",
          statuses: [
            {
              status: null,
              percentage: 100
            },
          ]
        },
        {
          date: "2023-03-11",
          statuses: [
            {
              status: null,
              percentage: 100
            },
          ]
        },
        {
          date: "2023-03-12",
          statuses: [
            {
              status: null,
              percentage: 100
            },
          ]
        },
        {
          date: "2023-03-13",
          statuses: [
            {
              status: null,
              percentage: 100
            },
          ]
        },
        {
          date: "2023-03-14",
          statuses: [
            {
              status: null,
              percentage: 100
            },
          ]
        },
        {
          date: "2023-03-15",
          statuses: [
            {
              status: null,
              percentage: 100
            },
          ]
        },
        {
          date: "2023-03-16",
          statuses: [
            {
              status: null,
              percentage: 100
            },
          ]
        },
        {
          date: "2023-03-17",
          statuses: [
            {
              status: null,
              percentage: 100
            },
          ]
        },
        {
          date: "2023-03-18",
          statuses: [
            {
              status: null,
              percentage: 100
            },
          ]
        },
        {
          date: "2023-03-19",
          statuses: [
            {
              status: null,
              percentage: 100
            },
          ]
        },
        {
          date: "2023-03-20",
          statuses: [
            {
              status: null,
              percentage: 100
            },
          ]
        },
      ],
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