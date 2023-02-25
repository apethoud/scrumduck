import SprintSelector from "./SprintSelector";
import StoryList from "./StoryList";
import ExampleData from "../api/api";

export default function SprintView() {
  return (
    <>
      <SprintSelector selectedSprintName={ExampleData.name} />
      <StoryList />
    </>
  )
}