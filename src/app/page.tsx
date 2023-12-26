import {
  Container,
  Heading1,
  Heading2,
  Input,
  ListItem,
  Paragraph,
  Section,
  Stack,
  UnorderedList,
} from "@natsuneko-laboratory/ui";

import type { Metadata } from "next";

import { ChangesetSection } from "@/components/ChangesetSection";

export const metadata: Metadata = {
  title: "Unity Changesets | Natsuneko Laboratory",
};

const Home = () => {
  return (
    <Container className="my-4">
      <Heading1>Unity Changesets</Heading1>

      <Section>
        <Heading2 bordered>Whats is changeset in Unity?</Heading2>
        <Paragraph>
          A Changeset in Unity is a string that fully identifies the version of
          the Unity Editor. <br />
          Although you don&apos;t see it during normal use, it is used in
          situations where you need the complete version, such as when
          installing Unity from the Unity Hub via the command line.
        </Paragraph>
      </Section>

      <ChangesetSection />
    </Container>
  );
};

export default Home;
