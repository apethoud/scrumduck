import SprintViewCard from './SprintViewCard/SprintViewCard';

export default function StoryList({ stories, selectedStoryId, setSelectedStoryId }) {
  return (
    <>
      {stories && stories.map(story => (
        <SprintViewCard 
          key={story.id}
          selectedStoryId={selectedStoryId}
          setSelectedStoryId={setSelectedStoryId}
          story={story}
        />
      ))}
    </>
  )
}