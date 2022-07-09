import React from "react";
import { AiOutlineDown } from "react-icons/ai";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Colors from "../../../utils/Colors";

const Faq = ({ closed, title, description }) => {
  return (
    <div className="w-2/3 lg:w-1/2">
      <Accordion style={{ backgroundColor: Colors.faqGrey }}>
        <AccordionSummary
          expandIcon={
            <AiOutlineDown
              color={Colors.dark_blue}
              size={24}
              className="-mt-1"
            />
          }
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <h2 className="font-primayfont text-dark-blue text-base font-semibold">
            {title}
          </h2>
        </AccordionSummary>
        <AccordionDetails>
          <p className="mt-1 font-primayfont text-dark-blue text-sm font-medium">
            {description}
          </p>
        </AccordionDetails>
      </Accordion>
    </div>
  );
};

export default Faq;
