import { useParams } from "react-router-dom";
import ExampleData from "../api/api";
import { useEffect, useState } from "react";
import PageSection from "../components/common/PageSection";
import { Link, SecondaryHeader, Text } from "../components/styledComponents/common";
import StatusRow from "../components/StatusRow";
import StoryTimeline from "../components/StoryTimeline";

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
          <Link to="..">Back</Link>
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