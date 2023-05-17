import SprintSelector from "../../components/SprintSelector";
import StoryList from "../../components/StoryList";
import ExampleSprintData from "../../api/exampleSprintData";
import AddNewStory from "../../components/AddNewStory";
import { Flex } from "../../components/styledComponents/common";
import { useState } from "react";
import { MainPane, SidePane } from "./styled";
import StoryView from "../../components/StoryView/StoryView";

export default function SprintView() {
  const [selectedStoryId, setSelectedStoryId] = useState(null);
  return (
    <Flex>
      <MainPane>
        <SprintSelector selectedSprintName={ExampleSprintData.name} />
        <StoryList 
          selectedStoryId={selectedStoryId}
          setSelectedStoryId={setSelectedStoryId}
          stories={ExampleSprintData.userStories} 
        />
        <AddNewStory />
      </MainPane>
      {selectedStoryId && (
        <SidePane>
          <StoryView 
            setSelectedStoryId={setSelectedStoryId}
            storyId={selectedStoryId} 
          />
        </SidePane>
      )}
    </Flex>
  )
}