import { PrimaryHeader } from "./styledComponents/common";
import { 
  ChevronDownIcon 
} from "@heroicons/react/24/outline";
import colors from "../styling/colors";

export default function SprintSelector({ selectedSprintName }) {
  return (
    <div style={{ display: "flex", alignItems: "center", marginBottom: 24 }}>
      <PrimaryHeader style={{ marginRight: 8 }}>Sprint { selectedSprintName }</PrimaryHeader>
      <div style={{ width: 24, marginTop: 8, color: colors.brandPurple }}>
        <ChevronDownIcon />
      </div>
    </div>
  )
}