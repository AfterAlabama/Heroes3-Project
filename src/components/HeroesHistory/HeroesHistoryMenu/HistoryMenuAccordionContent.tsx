import Typography from "@mui/material/Typography";
import { MenuAccordionDetails } from "../../../styles/Accordion";
import { FC } from "react";

interface HistoryMenuAccordionContentProps {
	heroDescription: string
} 

const HistoryMenuAccordionContent: FC<HistoryMenuAccordionContentProps> = ({ heroDescription }) => {
  return (
    <MenuAccordionDetails>
				<Typography>
					{heroDescription.substring(0, 80)}...
				</Typography>
			</MenuAccordionDetails>
  )
}

export default HistoryMenuAccordionContent
