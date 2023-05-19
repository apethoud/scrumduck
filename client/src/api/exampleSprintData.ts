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
        darkColor: "#E3C800",
        lightColor: "#F6E146",
        lastUpdated: "2023-04-29T11:55:20",
      },
      statusOverTime: [
        {
          id: 1,
          date: "2023-03-06",
          statuses: [
            {
              id: 1,
              status: {
                id: 1,
                name: "Not Progressing",
                darkColor: "#767676",
                lightColor: "#C0BFBF",
              },
              percentage: 100
            },
          ]
        },
        {
          id: 2,
          date: "2023-03-07",
          statuses: [
            {
              id: 1,
              status: {
                id: 1,
                name: "Not Progressing",
                darkColor: "#767676",
                lightColor: "#C0BFBF",
              },
              percentage: 100
            },
          ]
        },
        {
          id: 3,
          date: "2023-03-08",
          statuses: [
            {
              id: 1,
              status: {
                id: 1,
                name: "Not Progressing",
                darkColor: "#767676",
                lightColor: "#C0BFBF",
              },
              percentage: 100
            },
          ]
        },
        {
          id: 4,
          date: "2023-03-09",
          statuses: [
            {
              id: 1,
              status: {
                id: 1,
                name: "Not Progressing",
                darkColor: "#767676",
                lightColor: "#C0BFBF",
              },
              percentage: 100
            },
          ]
        },
        {
          id: 5,
          date: "2023-03-10",
          statuses: [
            {
              id: 1,
              status: {
                id: 2,
                name: "Progressing",
                darkColor: "#509010",
                lightColor: "#9BCA6D",
              },
              percentage: 100
            },
          ]
        },
        {
          id: 6,
          date: "2023-03-11",
          statuses: [
            {
              id: 1,
              status: {
                id: 2,
                name: "Progressing",
                darkColor: "#509010",
                lightColor: "#9BCA6D",
              },
              percentage: 30
            },
            {
              id: 2,
              status: {
                id: 6,
                name: "Blocked",
                darkColor: "#AF2023",
                lightColor: "#F0A5A7",
              },
              percentage: 70
            },
          ]
        },
        {
          id: 7,
          date: "2023-03-12",
          statuses: [
            {
              id: 1,
              status: {
                id: 6,
                name: "Blocked",
                darkColor: "#AF2023",
                lightColor: "#F0A5A7",
              },
              percentage: 10
            },
            {
              id: 2,
              status: {
                id: 2,
                name: "Progressing",
                darkColor: "#509010",
                lightColor: "#9BCA6D",
              },
              percentage: 50
            },
            {
              id: 3,
              status: {
                id: 3,
                name: "Needs Review",
                darkColor: "#1766A9",
                lightColor: "#9EC7E9",
              },
              percentage: 40
            },
          ]
        },
        {
          id: 8,
          date: "2023-03-13",
          statuses: [
            {
              id: 1,
              status: {
                id: 3,
                name: "Needs Review",
                darkColor: "#1766A9",
                lightColor: "#9EC7E9",
              },
              percentage: 25
            },
            {
              id: 2,
              status: null,
              percentage: 75
            },
          ]
        },
        {
          id: 9,
          date: "2023-03-14",
          statuses: [
            {
              id: 1,
              status: null,
              percentage: 100
            },
          ]
        },
        {
          id: 10,
          date: "2023-03-15",
          statuses: [
            {
              id: 1,
              status: null,
              percentage: 100
            },
          ]
        },
        {
          id: 11,
          date: "2023-03-16",
          statuses: [
            {
              id: 1,
              status: null,
              percentage: 100
            },
          ]
        },
        {
          id: 12,
          date: "2023-03-17",
          statuses: [
            {
              id: 1,
              status: null,
              percentage: 100
            },
          ]
        },
        {
          id: 13,
          date: "2023-03-18",
          statuses: [
            {
              id: 1,
              status: null,
              percentage: 100
            },
          ]
        },
        {
          id: 14,
          date: "2023-03-19",
          statuses: [
            {
              id: 1,
              status: null,
              percentage: 100
            },
          ]
        },
        {
          id: 15,
          date: "2023-03-20",
          statuses: [
            {
              id: 1,
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
        darkColor: "#E38021",
        lightColor: "#F4B579",
        lastUpdated: "2023-04-22T11:55:20",
      },
      statusOverTime: [
        {
          id: 1,
          date: "2023-03-06",
          statuses: [
            {
              id: 1,
              status: null,
              percentage: 100
            },
          ]
        },
        {
          id: 2,
          date: "2023-03-07",
          statuses: [
            {
              id: 1,
              status: null,
              percentage: 100
            },
          ]
        },
        {
          id: 3,
          date: "2023-03-08",
          statuses: [
            {
              id: 1,
              status: null,
              percentage: 100
            },
          ]
        },
        {
          id: 4,
          date: "2023-03-09",
          statuses: [
            {
              id: 1,
              status: null,
              percentage: 100
            },
          ]
        },
        {
          id: 5,
          date: "2023-03-10",
          statuses: [
            {
              id: 1,
              status: null,
              percentage: 100
            },
          ]
        },
        {
          id: 6,
          date: "2023-03-11",
          statuses: [
            {
              id: 1,
              status: null,
              percentage: 100
            },
          ]
        },
        {
          id: 7,
          date: "2023-03-12",
          statuses: [
            {
              id: 1,
              status: null,
              percentage: 100
            },
          ]
        },
        {
          id: 8,
          date: "2023-03-13",
          statuses: [
            {
              id: 1,
              status: null,
              percentage: 100
            },
          ]
        },
        {
          id: 9,
          date: "2023-03-14",
          statuses: [
            {
              id: 1,
              status: null,
              percentage: 100
            },
          ]
        },
        {
          id: 10,
          date: "2023-03-15",
          statuses: [
            {
              id: 1,
              status: null,
              percentage: 100
            },
          ]
        },
        {
          id: 11,
          date: "2023-03-16",
          statuses: [
            {
              id: 1,
              status: null,
              percentage: 100
            },
          ]
        },
        {
          id: 12,
          date: "2023-03-17",
          statuses: [
            {
              id: 1,
              status: null,
              percentage: 100
            },
          ]
        },
        {
          id: 13,
          date: "2023-03-18",
          statuses: [
            {
              id: 1,
              status: null,
              percentage: 100
            },
          ]
        },
        {
          id: 14,
          date: "2023-03-19",
          statuses: [
            {
              id: 1,
              status: null,
              percentage: 100
            },
          ]
        },
        {
          id: 15,
          date: "2023-03-20",
          statuses: [
            {
              id: 1,
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
        darkColor: "#509010",
        lightColor: "#9BCA6D",
        lastUpdated: "2023-03-20T11:55:20",
      },
      statusOverTime: [
        {
          id: 1,
          date: "2023-03-06",
          statuses: [
            {
              id: 1,
              status: null,
              percentage: 100
            },
          ]
        },
        {
          id: 2,
          date: "2023-03-07",
          statuses: [
            {
              id: 1,
              status: null,
              percentage: 100
            },
          ]
        },
        {
          id: 3,
          date: "2023-03-08",
          statuses: [
            {
              id: 1,
              status: null,
              percentage: 100
            },
          ]
        },
        {
          id: 4,
          date: "2023-03-09",
          statuses: [
            {
              id: 1,
              status: null,
              percentage: 100
            },
          ]
        },
        {
          id: 5,
          date: "2023-03-10",
          statuses: [
            {
              id: 1,
              status: null,
              percentage: 100
            },
          ]
        },
        {
          id: 6,
          date: "2023-03-11",
          statuses: [
            {
              id: 1,
              status: null,
              percentage: 100
            },
          ]
        },
        {
          id: 7,
          date: "2023-03-12",
          statuses: [
            {
              id: 1,
              status: null,
              percentage: 100
            },
          ]
        },
        {
          id: 8,
          date: "2023-03-13",
          statuses: [
            {
              id: 1,
              status: null,
              percentage: 100
            },
          ]
        },
        {
          id: 9,
          date: "2023-03-14",
          statuses: [
            {
              id: 1,
              status: null,
              percentage: 100
            },
          ]
        },
        {
          id: 10,
          date: "2023-03-15",
          statuses: [
            {
              id: 1,
              status: null,
              percentage: 100
            },
          ]
        },
        {
          id: 11,
          date: "2023-03-16",
          statuses: [
            {
              id: 1,
              status: null,
              percentage: 100
            },
          ]
        },
        {
          id: 12,
          date: "2023-03-17",
          statuses: [
            {
              id: 1,
              status: null,
              percentage: 100
            },
          ]
        },
        {
          id: 13,
          date: "2023-03-18",
          statuses: [
            {
              id: 1,
              status: null,
              percentage: 100
            },
          ]
        },
        {
          id: 14,
          date: "2023-03-19",
          statuses: [
            {
              id: 1,
              status: null,
              percentage: 100
            },
          ]
        },
        {
          id: 15,
          date: "2023-03-20",
          statuses: [
            {
              id: 1,
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