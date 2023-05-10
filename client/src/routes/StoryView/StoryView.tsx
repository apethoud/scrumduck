import ExampleSprintData from "../../api/exampleSprintData";
import { useEffect, useState } from "react";
import PageSection from "../../components/common/PageSection";
import { Link, SecondaryHeader, Text } from "../../components/styledComponents/common";
import StatusRow from "../../components/StatusRow";
import StoryTimeline from "../../components/StoryTimeline";
import { SidePane } from "./styled";
import { XMarkIcon } from "@heroicons/react/24/outline";

export default function StoryView({ setSelectedStoryId, storyId }) {
  const [ story, setStory ] = useState(null);

  useEffect(() => {
    const selectedStory = ExampleSprintData.userStories.find(userStory => userStory.id === Number(storyId));
    if (selectedStory) {
      setStory(selectedStory);
    }
  }, [storyId])

  return (
    <>
      {story ? (
        <SidePane>
          <XMarkIcon 
            onClick={() => setSelectedStoryId(null)}
            style={{ width: 24, alignSelf: "end" }} 
          />
          <PageSection title="Basic Info">
            <SecondaryHeader style={{ marginBottom: 4 }}>{story.title}</SecondaryHeader>
            <Text style={{ marginBottom: 4 }}>{story.storyText}</Text>
            <Link>View on Github</Link>
          </PageSection>
          <PageSection title="Current Status">
            <StatusRow status={story.status} />
          </PageSection>
          <PageSection title="Timeline">
            <StoryTimeline story={story} />
          </PageSection>
        </SidePane>
      ) : (
        <div>Loading...</div>
      )}
    </>
  )
}