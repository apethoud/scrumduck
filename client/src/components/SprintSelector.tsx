import { SecondaryHeader } from "./styledComponents/common";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown } from '@fortawesome/free-solid-svg-icons'

export default function SprintSelector({ selectedSprintName }) {
  return (
    <div style={{ display: "flex", alignItems: "center", marginBottom: 24 }}>
      <SecondaryHeader style={{ marginRight: 8 }}>Sprint { selectedSprintName }</SecondaryHeader>
      <FontAwesomeIcon icon={faAngleDown} />
    </div>
  )
}