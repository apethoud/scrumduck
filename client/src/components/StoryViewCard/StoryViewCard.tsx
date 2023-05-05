import { useState } from "react";
import { Flex, SecondaryHeader, SectionTitle, SubText, Text } from '../styledComponents/common';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/24/outline";
import StatusBadge from "../common/StatusBadge";
import { formatAsRelativeDate } from "../../utils";

const StatusColorRow = styled.div`
  margin-bottom: 6px;
  background: ${({ color }) => color ? color : "#fff"};
`

const Section = styled.div`
  margin-left: 8px;
  padding: 12px;
`

const BasicSection = styled(Section)`
  background: rgba(255, 255, 255, 0.8);
  display: flex;
  justify-content: space-between;
`

const DetailSection = styled(Section)`
  background: rgba(255, 255, 255, 0.9);
`

const ActionSection = styled(Section)`
  background: rgba(255, 255, 255, 0.95);
`

const StatusDate = styled.div`
  padding: 3px 8px 5px;
`

export default function StoryViewCard({ story }) {
  const [isCardOpen, setIsCardOpen] = useState(false);
  
  return (
    // <Link to={`/app/story/${story.id}`} style={{ textDecoration: "none" }}>
      <StatusColorRow color={story.status.color}>
        <BasicSection onClick={() => setIsCardOpen(!isCardOpen)}>
          <Flex style={{ paddingBottom: 8 }}>
            <SecondaryHeader>{story.title}</SecondaryHeader>
            <SubText style={{ marginTop: 3, marginLeft: 8 }}>#{story.githubIssueNumber}</SubText>
          </Flex>
          <div style={{ width: 16, marginTop: 8 }}>
            {isCardOpen ? (
              <ChevronUpIcon />
            ) : (
              <ChevronDownIcon />
            )}
          </div>
        </BasicSection>
        {isCardOpen && (
          <>
            <DetailSection>
              <Flex style={{ marginBottom: 18 }}>
                <Flex>
                  <StatusBadge 
                    color={story.status.color}
                    name={story.status.name}
                  />
                  <StatusDate>for {formatAsRelativeDate(story.status.lastUpdated)}</StatusDate>
                </Flex>
                <Link>View on Github</Link>
              </Flex>
              <div style={{ marginBottom: 18 }}>
                <SectionTitle>Latest Update</SectionTitle>
                <Text>{story.latestUpdate}</Text>
              </div>
            </DetailSection>
            <ActionSection>
              ActionSection
            </ActionSection>
          </>
        )}
      </StatusColorRow>
    // </Link>
  )
}