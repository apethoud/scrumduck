import SprintSelector from "../components/SprintSelector";
import StoryList from "../components/StoryList";
import ExampleData from "../api/api";
import AddNewStory from "../components/AddNewStory";

export default function SprintView() {
  return (
    <>
      <SprintSelector selectedSprintName={ExampleData.name} />
      <StoryList stories={ExampleData.userStories} />
      <AddNewStory />
    </>
  )
}