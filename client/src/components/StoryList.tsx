import StoryViewCard from './StoryViewCard';

export default function StoryList({ stories }) {
  return (
    <>
      {stories && stories.map(story => (
        <StoryViewCard 
          key={story.id}
          story={story}
        />
      ))}
    </>
  )
}