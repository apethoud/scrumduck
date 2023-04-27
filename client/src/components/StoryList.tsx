import styled from 'styled-components';
import colors from '../styling/colors';
import { Flex, SecondaryHeader, SubText } from './styledComponents/common';
import StatusRow from './StatusRow';
import { EllipsisVerticalIcon } from "@heroicons/react/24/outline";
import { Link } from 'react-router-dom';

const StyledList = styled.div`
  border-top: 1px solid ${colors.gray10};
`

function ListItem({ story }) {
  return (
    <div>
      <Link to={`/app/story/${story.id}`} style={{ textDecoration: "none" }}>
        <Flex>
          <div>
            <TitleRow title={story.title} issueNumber={story.githubIssueNumber} />
          </div>
        </Flex>
      </Link>
    </div>
  )
}

function TitleRow({ title, issueNumber }) {
  return (
    <Flex style={{ paddingBottom: 8 }}>
      <SecondaryHeader>{title}</SecondaryHeader>
      <SubText style={{ marginTop: 3, marginLeft: 8 }}>#{issueNumber}</SubText>
    </Flex>
  )
}

export default function StoryList({ stories }) {
  return (
    <>
      {stories && stories.map(story => (
        <ListItem key={story.id} story={story} />
      ))}
    </>
  )
}