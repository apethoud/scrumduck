import { PrimaryHeader } from "./styledComponents/common";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown } from '@fortawesome/free-solid-svg-icons'

export default function SprintSelector({ selectedSprintName }) {
  return (
    <div style={{ display: "flex", alignItems: "center", marginBottom: 24 }}>
      <PrimaryHeader style={{ marginRight: 8 }}>Sprint { selectedSprintName }</PrimaryHeader>
      <FontAwesomeIcon icon={faAngleDown} style={{ color: "#6D429B" }} />
    </div>
  )
}