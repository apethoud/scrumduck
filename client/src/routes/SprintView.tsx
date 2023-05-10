import SprintSelector from "../components/SprintSelector";
import StoryList from "../components/StoryList";
import ExampleSprintData from "../api/exampleSprintData";
import AddNewStory from "../components/AddNewStory";

export default function SprintView() {
  return (
    <>
      <SprintSelector selectedSprintName={ExampleSprintData.name} />
      <StoryList stories={ExampleSprintData.userStories} />
      <AddNewStory />
    </>
  )
}