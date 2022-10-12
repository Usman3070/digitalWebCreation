import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import AddIcon from "@mui/icons-material/Add";
import Divider from "@mui/material/Divider";
import { Container } from "@mui/material";
export default function SimpleAccordion() {
  return (
    <Container>
      <Accordion>
        <AccordionSummary
          expandIcon={<AddIcon sx={{ color: "#fff" }} />}
          aria-controls="panel1a-content"
          id="panel1a-header"
          sx={{ backgroundColor: "#070517" }}
        >
          <Typography sx={{ color: "#fff", fontSize: "26px" }}>
            What is Digital Web Creation Club "DWCC"?
          </Typography>
        </AccordionSummary>
        <AccordionDetails sx={{ backgroundColor: "#070517" }}>
          <Typography sx={{ color: "#fff", fontSize: "22px" }}>
            Web Creation Club “DWCC” is the premium hub where their leads
            artists, designers & creators are generating unique, never stopping
            digital collectibles characters, non-fungible token & content on the
            blockchain.
          </Typography>
          <Typography sx={{ color: "#fff", fontSize: "22px" }}>
            Beyond books , our aim is to provide compounding values and
            multimedia possibilities for our readers using decentralized
            technology.
          </Typography>
          <Typography sx={{ color: "#fff", fontSize: "22px" }}>
            Paradoxically, decentralized technology can help people to
            experience poetry and literature in ancient fashion: As a shared,
            direct experience, with barriers removed between poet and audience,
            Web3 encourages peer-to-peer interactions between writers and
            readers — now reincarnated as reader-collectors.
          </Typography>
          <Typography sx={{ color: "#fff", fontSize: "22px" }}>
            The DWCC Ecosystem provides unending possibilities. Our digital
            collections inspired by books we write are original and
            state-of-the-art.
          </Typography>
          <Typography sx={{ color: "#fff", fontSize: "22px" }}>
            These products start with an NFT series, but project forward a
            roadmap under which holders of the NFT gain access to an expanding
            array of products, activities, and experiences. Revenue from initial
            and subsequent NFT sales is fed back into the brand, supporting
            increasingly ambitious projects — which in turn drive up the value
            of the NFTs themselves.
          </Typography>
          <Typography sx={{ color: "#fff", fontSize: "22px" }}>
            Thus owning an NFT effectively makes you an investor, a member of a
            club, a brand shareholder, and a participant in all the top perks
            for holders.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Divider sx={{ bgcolor: "#4efd93" }} />
      <Accordion>
        <AccordionSummary
          expandIcon={<AddIcon sx={{ color: "#fff" }} />}
          aria-controls="panel2a-content"
          id="panel2a-header"
          sx={{ backgroundColor: "#070517" }}
        >
          <Typography sx={{ color: "#fff", fontSize: "26px" }}>
            Who is behind Digital Web Creation Club "DWCC"?
          </Typography>
        </AccordionSummary>
        <AccordionDetails sx={{ backgroundColor: "#070517" }}>
          <Typography sx={{ color: "#fff", fontSize: "22px" }}>
            Mono, Co-founder, Artist & Business Manager.
          </Typography>
          <Typography sx={{ color: "#fff", fontSize: "22px" }}>
            Luke, Co-founder, Business Development.
          </Typography>
          <Typography sx={{ color: "#fff", fontSize: "22px" }}>
            Chase, Co-founder, Artist & Project Manager.
          </Typography>
          <Typography sx={{ color: "#fff", fontSize: "22px" }}>
            Mohammad, Co-founder, Artist & Marketing Manager.
          </Typography>
          <Typography sx={{ color: "#fff", fontSize: "22px" }}>
            Yullia, Illustration & Pixels.
          </Typography>
          <Typography sx={{ color: "#fff", fontSize: "22px" }}>
            Omotosho, Technology Development.
          </Typography>
          <Typography sx={{ color: "#fff", fontSize: "22px" }}>
            Hamid, Marketing & Community Engagement.
          </Typography>
          <Typography sx={{ color: "#fff", fontSize: "22px" }}>
            Rahul, Graphic Designer.
          </Typography>
          <Typography sx={{ color: "#fff", fontSize: "22px" }}>
            Mbot, Writer & Content Creation.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Divider sx={{ bgcolor: "#4efd93" }} />
      <Accordion>
        <AccordionSummary
          expandIcon={<AddIcon sx={{ color: "#fff" }} />}
          aria-controls="panel2a-content"
          id="panel2a-header"
          sx={{ backgroundColor: "#070517" }}
        >
          <Typography sx={{ color: "#fff", fontSize: "26px" }}>
            How many NFT collections will be created by Digital Web Creation
            Club "DWCC" ?
          </Typography>
        </AccordionSummary>
        <AccordionDetails sx={{ backgroundColor: "#070517" }}>
          <Typography sx={{ color: "#fff", fontSize: "22px" }}>
            Total of 5 collections will be created by Digital Web Creation Club
            “DWCC”.
          </Typography>
          <Typography sx={{ color: "#fff", fontSize: "22px" }}>
            1. SlothRoob ( Genesis Edition Boss Sloth Roob & Sloth Roob Official
            Collection ).
          </Typography>
          <Typography sx={{ color: "#fff", fontSize: "22px" }}>
            2. MammothBoof
          </Typography>
          <Typography sx={{ color: "#fff", fontSize: "22px" }}>
            3. SquirrelToot
          </Typography>
          <Typography sx={{ color: "#fff", fontSize: "22px" }}>
            4. TigerHooch
          </Typography>
          <Typography sx={{ color: "#fff", fontSize: "22px" }}>
            5. WeaselWooz
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Divider sx={{ bgcolor: "#4efd93" }} />
      <Accordion>
        <AccordionSummary
          expandIcon={<AddIcon sx={{ color: "#fff" }} />}
          aria-controls="panel2a-content"
          id="panel2a-header"
          sx={{ backgroundColor: "#070517" }}
        >
          <Typography sx={{ color: "#fff", fontSize: "26px" }}>
            WHow many NFTs in each collection will be there?
          </Typography>
        </AccordionSummary>
        <AccordionDetails sx={{ backgroundColor: "#070517" }}>
          <Typography sx={{ color: "#fff", fontSize: "22px" }}>
            Each collection varies from 5353 – 100 uniquely generated digital
            collectibles living on the Ethereum blockchain Created by Digital
            Web Creation Club “DWCC”.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Divider sx={{ bgcolor: "#4efd93" }} />
      <Accordion>
        <AccordionSummary
          expandIcon={<AddIcon sx={{ color: "#fff" }} />}
          aria-controls="panel2a-content"
          id="panel2a-header"
          sx={{ backgroundColor: "#070517" }}
        >
          <Typography sx={{ color: "#fff", fontSize: "26px" }}>
            What blockchain is being used?
          </Typography>
        </AccordionSummary>
        <AccordionDetails sx={{ backgroundColor: "#070517" }}>
          <Typography sx={{ color: "#fff", fontSize: "22px" }}>
            We use ERC-721 tokens on the Ethereum blockchain for our NFTs.
            Alternative ERC standards plus other Layer 1 & 2 solutions are being
            explored and appraised for future use either in airdrops or mints.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Divider sx={{ bgcolor: "#4efd93" }} />
      <Accordion>
        <AccordionSummary
          expandIcon={<AddIcon sx={{ color: "#fff" }} />}
          aria-controls="panel2a-content"
          id="panel2a-header"
          sx={{ backgroundColor: "#070517" }}
        >
          <Typography sx={{ color: "#fff", fontSize: "26px" }}>
            Who can I contact if I have more questions?
          </Typography>
        </AccordionSummary>
        <AccordionDetails sx={{ backgroundColor: "#070517" }}>
          <Typography sx={{ color: "#fff", fontSize: "22px" }}>
            ✔ Linktree{" "}
            <a
              style={{ color: "#fff" }}
              href="https://linktr.ee/DigitalWebCreationClub"
            >
              https://linktr.ee/DigitalWebCreationClub
            </a>
          </Typography>
          <Typography sx={{ color: "#fff", fontSize: "22px" }}>
            ✔ Website{" "}
            <a style={{ color: "#fff" }} href="https://digitalwebcreation.com/">
              https://digitalwebcreation.com/
            </a>
          </Typography>
          <Typography sx={{ color: "#fff", fontSize: "22px" }}>
            ✔ Discord{" "}
            <a style={{ color: "#fff" }} href="https://discord.gg/dwcc">
              https://discord.gg/dwcc/
            </a>
          </Typography>
          <Typography sx={{ color: "#fff", fontSize: "22px" }}>
            ✔ Twitter{" "}
            <a style={{ color: "#fff" }} href="https://twitter.com/SlothRoob">
              https://twitter.com/SlothRoob
            </a>
          </Typography>
          <Typography sx={{ color: "#fff", fontSize: "22px" }}>
            ✔ Facebook{" "}
            <a
              style={{ color: "#fff" }}
              href="https://www.facebook.com/TheChroniclesofRoob"
            >
              https://www.facebook.com/TheChroniclesofRoob
            </a>
          </Typography>
          <Typography sx={{ color: "#fff", fontSize: "22px" }}>
            ✔ Instagram{" "}
            <a
              style={{ color: "#fff" }}
              href="https://www.instagram.com/sloth_roob"
            >
              https://www.instagram.com/sloth_roob
            </a>
          </Typography>
          <Typography sx={{ color: "#fff", fontSize: "22px" }}>
            ✔ Youtube{" "}
            <a
              style={{ color: "#fff" }}
              href="https://www.youtube.com/channel/UCNroE867f5ixB-3Lf2wkZIg"
            >
              https://www.youtube.com/channel/UCNroE867f5ixB-3Lf2wkZIg
            </a>
          </Typography>
          <Typography sx={{ color: "#fff", fontSize: "22px" }}>
            ✔ TikTok{" "}
            <a
              style={{ color: "#fff" }}
              href="https://www.tiktok.com/@slothroobnft"
            >
              https://www.tiktok.com/@slothroobnft
            </a>
          </Typography>
          <Typography sx={{ color: "#fff", fontSize: "22px" }}>
            ✔ Medium{" "}
            <a
              style={{ color: "#fff" }}
              href="https://digitalwebcreation.medium.com/"
            >
              https://digitalwebcreation.medium.com/
            </a>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Divider sx={{ bgcolor: "#4efd93" }} />
      <Accordion>
        <AccordionSummary
          expandIcon={<AddIcon sx={{ color: "#fff" }} />}
          aria-controls="panel2a-content"
          id="panel2a-header"
          sx={{ backgroundColor: "#070517" }}
        >
          <Typography sx={{ color: "#fff", fontSize: "26px" }}>
            How do I invite Friends to Digital Web Creation Club "DWCC"
            Community?
          </Typography>
        </AccordionSummary>
        <AccordionDetails sx={{ backgroundColor: "#070517" }}>
          <Typography sx={{ color: "#fff", fontSize: "22px" }}>
            Through Discord. By clicking on the Digital Creation Club Discord
            channel, then click on the invite friends button. You can copy and
            share the link generated.
          </Typography>
          <Typography sx={{ color: "#fff", fontSize: "22px" }}>
            To avoid the default 7 days expiration ultimatum, click on ‘Edit
            invite lin’ and set the expiration to never.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Divider sx={{ bgcolor: "#4efd93" }} />
    </Container>
  );
}
