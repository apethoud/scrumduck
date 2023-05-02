import StatusColorRow from "./StatusColorRow";
import { Flex, SecondaryHeader, SubText } from './styledComponents/common';
import { Link } from 'react-router-dom';

export default function StoryViewCard({ story }) {
  return (
    <Link to={`/app/story/${story.id}`} style={{ textDecoration: "none" }}>
      <StatusColorRow>
        <Flex style={{ justifyContent: "space-between" }}>
          <Flex style={{ paddingBottom: 8 }}>
            <SecondaryHeader>{story.title}</SecondaryHeader>
            <SubText style={{ marginTop: 3, marginLeft: 8 }}>#{story.githubIssueNumber}</SubText>
          </Flex>
          <div>^</div>
        </Flex>
      </StatusColorRow>
    </Link>
  )
}