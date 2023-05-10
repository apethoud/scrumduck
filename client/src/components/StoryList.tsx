import StoryViewCard from './StoryViewCard/StoryViewCard';

export default function StoryList({ stories, selectedStoryId, setSelectedStoryId }) {
  return (
    <>
      {stories && stories.map(story => (
        <StoryViewCard 
          key={story.id}
          selectedStoryId={selectedStoryId}
          setSelectedStoryId={setSelectedStoryId}
          story={story}
        />
      ))}
    </>
  )
}