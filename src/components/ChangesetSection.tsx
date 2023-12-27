"use client";

import { useState } from "react";

import d from "../app/changesets.json" assert { type: "json" };
import {
  Cluster,
  Heading2,
  Hyperlink,
  Input,
  Section,
  Stack,
} from "@natsuneko-laboratory/ui";

const chunk = <T,>(items: T[], len: number): T[][] => {
  const size = Math.ceil(items.length / len);
  const chunks = new Array(size).fill(0);

  return chunks.map((_, i) => {
    const s = i * len;
    const e = (i + 1) * len;
    return items.slice(s, e);
  });
};

const toVersion = (v: string): [number, number, number, number] => {
  const m =
    /(?<major>[0-9]+)\.(?<minor>[0-9]+)\.(?<patch>[0-9]+)[abf](?<revision>[0-9]+)/i.exec(
      v
    );
  return [
    +m!.groups!.major,
    +m!.groups!.minor,
    +m!.groups!.patch,
    +m!.groups!.revision,
  ];
};

const release = (v: string) => {
  const [major, minor, patch, revision] = toVersion(v);
  return `${major}.${minor}.${patch}`;
};

const ChangesetSection: React.FC = () => {
  const [state, setState] = useState("");
  const items = d
    .sort((a, b) => {
      return b.versionNumber - a.versionNumber;
      // return version(b.version) - version(a.version);
    })
    .filter((w) => (state === "" ? true : w.version.includes(state)));

  return (
    <Section>
      <Heading2 bordered>Changesets</Heading2>
      <Stack gap={4}>
        <Input
          initialValue={state}
          className="w-96 max-w-full"
          placeholder="type version such as 2023.2.3"
          onValueChanged={setState}
        />

        <Cluster wrap className="gap-x-0">
          {items.map((w) => {
            return (
              <div
                key={w.changeset}
                className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 px-2 py-3 my-2 hover:bg-neutral-700"
              >
                <div className="text-lg font-medium mb-2">
                  Unity {w.version} {w.lts ? <>(LTS)</> : null}
                </div>
                <Stack gap={1}>
                  <div>
                    <code>{w.changeset}</code>
                  </div>

                  <div>
                    <Hyperlink
                      href={`https://unity.com/releases/editor/whats-new/${release(
                        w.version
                      )}`}
                    >
                      Release Note
                    </Hyperlink>
                  </div>
                  <div>
                    <Hyperlink href={`unityhub://${w.version}/${w.changeset}`}>
                      Install via Unity Hub
                    </Hyperlink>
                  </div>
                </Stack>
              </div>
            );
          })}
        </Cluster>
      </Stack>
    </Section>
  );
};

export { ChangesetSection };
