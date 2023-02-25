import { SecondaryHeader } from "./styledComponents/common";

export default function SprintSelector({ selectedSprintName }) {
  return (
    <SecondaryHeader>Sprint { selectedSprintName }</SecondaryHeader>
  )
}