import { useState } from "react";
import { Button, Flex, SecondaryHeader, SectionTitle, SubText, Text } from '../styledComponents/common';
import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/24/outline";
import StatusBadge from "../common/StatusBadge";
import { formatAsRelativeDateForXUnits, formatAsRelativeDateXUnitsAgo } from "../../utils";
import StatusOverTime from "../StatusOverTime/StatusOverTime";
import {
  StatusColorRow,
  BasicSection,
  DetailSection,
  ActionSection,
  StatusDate
} from './styled';

export default function StoryViewCard({ setSelectedStoryId, story }) {
  const [isCardOpen, setIsCardOpen] = useState(false);
  
  return (
    <StatusColorRow color={story.status.color}>
      <BasicSection onClick={() => setIsCardOpen(!isCardOpen)}>
        <Flex style={{ paddingBottom: 8 }}>
          <SecondaryHeader>{story.title}</SecondaryHeader>
          <SubText style={{ marginTop: 3, marginLeft: 8 }}>#{story.githubIssueNumber}</SubText>
        </Flex>
        <div style={{ width: 24, marginTop: 8 }}>
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
            <Flex style={{ marginBottom: 18, justifyContent: "space-between" }}>
              <Flex>
                <StatusBadge 
                  status={story.status}
                />
                <StatusDate>{formatAsRelativeDateForXUnits(story.status.lastUpdated)}</StatusDate>
              </Flex>
              <Button onClick={() => setSelectedStoryId(story.id)}>Show Full Story</Button>
            </Flex>
            <div style={{ marginBottom: 18 }}>
              <Flex>
                <SectionTitle>Latest Update</SectionTitle>
                <Text style={{ fontSize: 14, marginLeft: 8, fontStyle: "italic" }}>
                  {formatAsRelativeDateXUnitsAgo(story.latestUpdate.updatedAt)}
                </Text>
              </Flex>
              <Text>{story.latestUpdate.text}</Text>
            </div>
            <div style={{ marginBottom: 18 }}>
              <SectionTitle>Status Over Time</SectionTitle>
              <div style={{ 
                display: "inline-block",
                marginTop: 4,
                borderColor: story.status.color, 
                borderWidth: 1, 
                borderStyle: "solid", 
                background: "#fff",
                padding: 6 
              }}>
                <StatusOverTime
                  days={story.statusOverTime}
                />
              </div>
            </div>
          </DetailSection>
          <ActionSection>
            <Button primary series>Update Status</Button>
            <Button primary series>Add Comment</Button>
            <Button primary series>Mark as Blocked</Button>
          </ActionSection>
        </>
      )}
    </StatusColorRow>
  )
}