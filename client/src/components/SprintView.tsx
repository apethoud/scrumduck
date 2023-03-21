import SprintSelector from "./SprintSelector";
import StoryList from "./StoryList";
import ExampleData from "../api/api";
import AddNewStory from "./AddNewStory";
import { useGetMovieQuery } from "../features/api/apiSlice";

export default function SprintView() {
  const { 
    data: movie,
    isLoading,
    isSuccess,
    isError,
    error
  } = useGetMovieQuery("avengers")

  let content

  if (isLoading) {
    content = <div>Loading...</div>
  } else if (isSuccess) {
    console.log("movie is: ", movie);
    content = <div>Title is {movie.Title} and year is {movie.Year}</div>
  } else if (isError) {
    content = <div>{error.toString()}</div>
  }

  return (
    <>
      <SprintSelector selectedSprintName={ExampleData.name} />
      <StoryList stories={ExampleData.userStories} />
      <AddNewStory />
      {content}
    </>
  )
}