import { Theme } from "@mui/material";
import { SxProps } from "@mui/system";

//returns a prepared sx prop
export const GetSxProp = (sx: SxProps<Theme>) => {
  if(Array.isArray(sx)) return [...sx]
  return [...[sx]]
}