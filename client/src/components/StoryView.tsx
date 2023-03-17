import { useParams } from "react-router-dom";
import ExampleData from "../api/api";
import { useEffect, useState } from "react";
import PageSection from "./common/PageSection";
import { Link, SecondaryHeader, Text } from "./styledComponents/common";
import StatusRow from "./StatusRow";
import StoryTimeline from "./StoryTimeline";

export default function StoryView() {
  const [ story, setStory ] = useState(null);
  const { storyId } = useParams();

  useEffect(() => {
    const selectedStory = ExampleData.userStories.find(userStory => userStory.id === Number(storyId));
    if (selectedStory) {
      setStory(selectedStory);
    }
  }, [storyId])

  return (
    <div>
      {story ? (
        <>
          <PageSection title="Basic Info">
            <SecondaryHeader style={{ marginBottom: 4 }}>{story.title}</SecondaryHeader>
            <Text style={{ marginBottom: 4 }}>{story.storyText}</Text>
            <Link>View on Github</Link>
          </PageSection>
          <PageSection title="Current Status">
            <StatusRow status={story.status} statusDate={story.statusLastUpdated} />
          </PageSection>
          <PageSection title="Timeline">
            <StoryTimeline story={story} />
          </PageSection>
        </>
      ) : (
        <div>Loading...</div>
      )}
    </div>
  )
}