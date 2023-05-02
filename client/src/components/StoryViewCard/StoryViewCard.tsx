import { useState } from "react";
import { Flex, SecondaryHeader, SubText } from '../styledComponents/common';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/24/outline";
import StatusBadge from "../common/StatusBadge";

const StatusColorRow = styled.div`
  margin-bottom: 6px;
  background: ${({ color }) => color ? color : "#fff"};
`

const Section = styled.div`
  margin-left: 8px;
  padding: 12px;
  display: flex;
  justify-content: space-between;
`

const BasicSection = styled(Section)`
  background: rgba(255, 255, 255, 0.8);
`

const DetailSection = styled(Section)`
  background: rgba(255, 255, 255, 0.9);
`

const ActionSection = styled(Section)`
  background: rgba(255, 255, 255, 0.95);
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
              <Flex>
                <StatusBadge 
                  color={story.status.color}
                  name={story.status.name}
                />
                <div>{story.status.lastUpdated}</div>
              </Flex>
              <Link>View on Github</Link>
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