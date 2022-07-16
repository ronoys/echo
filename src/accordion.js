import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export default function SimpleAccordion() {
  return (
    <div>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography><b>About us</b></Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            We are Team ECHO (Extrasensory Cochlear Hearing Optimization), a four-year undergraduate research team that is part of the Gemstone Honors Program within the University of Maryland
            Honors college. We are working under the mentorship of Dr. Sahil Shah.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography><b>Research Problem</b></Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          Hearing is an important sense in order to figure out what is going on in the surrounding environment. Although background noise reduces the ability to understand speech, even in the presence of background noise, those with normal hearing are able to distinguish and comprehend speech, as speech is a redundant signal, meaning that it transfers enough information for others to understand it. However, for those with hearing loss, the signal is often not effective enough when background noise is present, as the signal is covered by the background noise.
Those with hearing loss can have a difficult time detecting a range of sounds, as some frequencies may be audible, but others, especially higher frequencies, are not. Furthermore, those with hearing loss have trouble with analyzing a sound that has a particular frequency when there are multiple frequencies present, as well as segregating sounds. Those with hearing impairments also have a decreased ability distinguishing between different sounds based on their locations. Many inventions have been attempted in order to address the problems the hearing-impaired face, most notably being hearing aids, which try to compensate for the loss in hearing. Modern-day hearing aids work by relying on the properties of the wavelength, period, and frequency of sounds, and many hearing aids increase the signals of weaker noises more than more intense noise. Hearing aids also aim to reduce the consequences of background noise.
<br></br><br></br>Although a useful approach to the problem of impaired hearing, hearing aids have many limitations that we aim to address. For one, people using hearing aids are not accurately able to pinpoint the direction of sounds in the environment. In addition, although modern hearing aids are working to address this, users can still find it hard to focus on one audio source in a noisy environment. Thus, two important research questions to guide further studies are: How can we combine a computational and neurological approach to improve the locational detection of sounds, especially when multiple sounds occur simultaneously? In the presence of multiple sounds, how can we determine which ones to enhance, and how would we accomplish this?

          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography><b>Research Question</b></Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          How can a computational approach utilizing machine learning, along with a neurological approach involving the biology of the brain, yield a tangible improvement in sound processing for the hearing-impaired?

          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography><b>Contact</b></Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          rmukhopa@umd.edu

          </Typography>
        </AccordionDetails>
      </Accordion>
      
    </div>
  );
}
