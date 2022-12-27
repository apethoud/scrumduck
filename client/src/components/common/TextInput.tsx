import { Input, Label } from "../styledComponents/common";

export default function TextInput({ name, value, setValue, inputType}) {
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <Label htmlFor={name}>{name}</Label>
      <Input 
        name={name}
        type={inputType || "text"}
        value={value}
        onChange={(event) => {setValue(event.target.value)}}
      />
    </div>
  )
}