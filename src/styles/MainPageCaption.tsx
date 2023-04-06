import MuiTopography, { TypographyProps } from "@mui/material/Typography";
import { styled } from "@mui/material/styles";

export const MainPageCaption = styled((props: TypographyProps) => 
(
  <MuiTopography {...props} />
))(() => ({
  marginTop: 1,
	cursor: 'default',
}))