import { FormControl, FormHelperText, Input, InputLabel } from "@mui/material";

const InputForm = ({ label, type, value, handler, children }) => {
  return (
    <FormControl sx={{ margin: '10px 0' }}>
      <InputLabel htmlFor={label} sx={{ marginLeft: '-16px' }}>{children}</InputLabel>
      <Input
        id={label}
        type={type}
        value={value}
        onChange={handler}
        aria-describedby={`${label}-helper-text`}
        sx={{ width: '500px' }}
      />
      <FormHelperText id={`${label}-helper-text`} sx={{ marginLeft: 0 }}>
        your {label} here
      </FormHelperText>
    </FormControl>
  )
}

export default InputForm