import StoryViewCard from './StoryViewCard/StoryViewCard';

export default function StoryList({ stories, setSelectedStoryId }) {
  return (
    <>
      {stories && stories.map(story => (
        <StoryViewCard 
          key={story.id}
          setSelectedStoryId={setSelectedStoryId}
          story={story}
        />
      ))}
    </>
  )
}