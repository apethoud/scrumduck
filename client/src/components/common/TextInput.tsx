import { Input, Label } from "../styledComponents/common";

export default function TextInput({ name, value, onChange, type}) {
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <Label htmlFor={name}>{name}</Label>
      <Input 
        id={name}
        name={name}
        type={type || "text"}
        value={value}
        onChange={onChange}
      />
    </div>
  )
}