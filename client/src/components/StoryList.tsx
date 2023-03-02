import styled from 'styled-components';
import colors from '../styling/colors';
import { BoldText, StatusBadge, StatusDate, SubText } from './styledComponents/common';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';

dayjs.extend(relativeTime);

const Flex = styled.div`
  display: flex;
`

const StyledList = styled.div`
  border-top: 1px solid ${colors.gray10};
`

const StyledListItem = styled.div`
  border-bottom: 1px solid ${colors.gray10};
  padding-top: 12px;
  padding-bottom: 12px;
`

function ListItem({ story }) {
  return (
    <div>
      <StyledListItem>
        <TitleRow title={story.title} issueNumber={story.githubIssueNumber} />
        <StatusRow status={story.status} statusDate={story.statusLastUpdated} />
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
      <BoldText>{title}</BoldText>
      <SubText style={{ marginLeft: 8 }}>#{issueNumber}</SubText>
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