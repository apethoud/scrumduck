import SprintSelector from "../components/SprintSelector";
import StoryList from "../components/StoryList";
import ExampleSprintData from "../api/exampleSprintData";
import AddNewStory from "../components/AddNewStory";
import { Flex } from "../components/styledComponents/common";
import { useState } from "react";
import StoryView from "../components/StoryView/StoryView";

export default function SprintView() {
  const [selectedStoryId, setSelectedStoryId] = useState(null);
  return (
    <Flex>
      <div style={{ flexGrow: 1, padding: 32 }}>
        <SprintSelector selectedSprintName={ExampleSprintData.name} />
        <StoryList 
          selectedStoryId={selectedStoryId}
          setSelectedStoryId={setSelectedStoryId}
          stories={ExampleSprintData.userStories} 
        />
        <AddNewStory />
      </div>
      {selectedStoryId && (
        <StoryView 
          setSelectedStoryId={setSelectedStoryId}
          storyId={selectedStoryId} 
        />
      )}
    </Flex>
  )
}