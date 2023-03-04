import styled from 'styled-components';
import colors from '../styling/colors';
import { SecondaryHeader, StatusBadge, StatusDate, SubText } from './styledComponents/common';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEllipsisVertical } from '@fortawesome/free-solid-svg-icons'

dayjs.extend(relativeTime);

const Flex = styled.div`
  display: flex;
`

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

function StatusRow({ status, statusDate }) {
  return (
    <Flex>
      <StatusBadge>{status}</StatusBadge>
      <StatusDate>for {dayjs(statusDate).fromNow(true)}</StatusDate>
    </Flex>
  )
}

function TitleRow({ title, issueNumber }) {
  return (
    <Flex style={{ paddingBottom: 8 }}>
      <SecondaryHeader>{title}</SecondaryHeader>
      <SubText style={{ marginTop: 2, marginLeft: 8 }}>#{issueNumber}</SubText>
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