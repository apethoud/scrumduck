import styled from 'styled-components';
import colors from '../styling/colors';
import { Flex, SecondaryHeader, SubText } from './styledComponents/common';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEllipsisVertical } from '@fortawesome/free-solid-svg-icons'
import StatusRow from './StatusRow';

const StyledList = styled.div`
  border-top: 1px solid ${colors.gray10};
`

const StyledListItem = styled.div`
  display: flex;
  border-bottom: 1px solid ${colors.gray10};
  padding-top: 12px;
  padding-bottom: 12px;
`

function ListItem({ story }) {
  return (
    <div>
      <StyledListItem>
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center", width: 16, marginRight: 8 }}>
          <FontAwesomeIcon icon={faEllipsisVertical} style={{ fontSize: 24, color: "#bbb" }} />
        </div>
        <div>
          <TitleRow title={story.title} issueNumber={story.githubIssueNumber} />
          <StatusRow status={story.status} statusDate={story.statusLastUpdated} />
        </div>
      </StyledListItem>
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
    <StyledList>
      {stories && stories.map(story => (
        <ListItem key={story.id} story={story} />
      ))}
    </StyledList>
  )
}