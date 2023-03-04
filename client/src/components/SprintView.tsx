import SprintSelector from "./SprintSelector";
import StoryList from "./StoryList";
import ExampleData from "../api/api";
import AddNewStory from "./AddNewStory";

export default function SprintView() {
  return (
    <>
      <SprintSelector selectedSprintName={ExampleData.name} />
      <StoryList stories={ExampleData.userStories} />
      <AddNewStory />
    </>
  )
}