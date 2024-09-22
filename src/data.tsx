import { ReactNode } from "react";

export type Paper = {
  title: ReactNode;
  journal: ReactNode;
  authors: ReactNode;
  image: string;
  url?: string;
  doc?: string;
  abstract: ReactNode;
};

export const papers: Paper[] = [
  {
    title: (
      <>
        The Effect of User-defined Mid-air Gestures Elicited by On-screen Visual
        Properties on Human Biomechanics, Behaviour, and Perception
      </>
    ),
    journal: (
      <>International Journal of Human-Computer Interaction, Under Review</>
    ),
    authors: (
      <>
        Jinghua Huang, <strong>Mingyan Wang*</strong>, Lujin Mao, Ruobiao Wang,
        Dongliang Zhang, Mengyao Qi & Miaomiao Ke
      </>
    ),
    image: "/images/R1.jpg",
    abstract: (
      <>
        Evidence shows that visual properties of on-screen objects determine
        their function and operation, thus influencing gesture elicitation.
        Therefore, this two-stage experimental study investigated how
        user-defined mid-air gestures elicited by on-screen visual properties
        affect human biomechanics, behaviour, and perception. Results showed
        that, psychologically, for the command ‘next’, swiping with the visual
        flow provided benefits over swiping perpendicular to it; for ‘remove’,
        swiping perpendicular to the visual flow offered advantages compared to
        swiping with it. Behaviourally, for ‘next’, swiping left generated
        shorter response times than swiping up with a stimulus possessing a
        horizontal visual flow. Physiologically, for ‘next’, swiping up induced
        higher forearm muscular load than swiping left under the vertical visual
        flow condition; for ‘view’, tapping twice resulted in less finger
        muscular load under the multiple entities condition than the one entity
        condition. These findings could provide a scientific basis for guiding
        appropriate mid-air gesture design considering on-screen visual
        properties.
      </>
    ),
  },
  {
    title: (
      <>
        Investigating the effect of emoji position on eye movements and
        subjective evaluations on Chinese sarcasm comprehension
      </>
    ),
    journal: <>Ergonomics, Published 06 Mar 2024 </>,
    authors: (
      <>
        Jinghua Huang, <strong>Mingyan Wang*</strong>, Ting Zhang, Dongliang
        Zhang, Yi Zhou, Lujin Mao & Mengyao Qi
      </>
    ),
    image: "/images/R2.jpg",
    doc: "/docs/R2.pdf",
    url: "https://www.tandfonline.com/doi/full/10.1080/00140139.2024.2325534",
    abstract: (
      <>
        Evidence indicated that emojis could influence sarcasm comprehension and
        sentence processing in English. However, the effect of emojis on Chinese
        sarcasm comprehension remains unclear. Therefore, this study
        investigated the impact of the smiley emoji position and semantics on
        eye movements and subjective assessments during Chinese online
        communication. Our results showed that the presence of a smiley emoji
        improved participants’ interpretation and perception of sarcasm. We also
        found shorter dwell times on sarcastic words compared to literal words
        under the comment-final emoji condition. Additionally, we clarified the
        time course of emojified sentence processing during Chinese reading: the
        presence of emoji initially decreased first fixation durations compared
        to the absence of emoji and then the comment-final emoji shortened dwell
        times on sarcastic words compared to literal words in the critical area
        of interest. Our findings suggested that the comment-final emoji was the
        preferable choice for avoiding semantic comprehension bias in China.
      </>
    ),
  },
];

export const designs = {
  product: "Product Design",
  service: "Service Design",
  brand: "Brand Design",
} as const;

export const projects = [
  {
    title: "Hi! Air",
    subtitle: "Pneumatic Toy Design for Children",
    lables: ["service", "product"],
  },
  {
    title: "Crafted Seasons",
    subtitle: "",
    lables: ["service", "product"],
  },
  {
    title: "Rebrella",
    subtitle: "",
    lables: ["service", "brand"],
  },
] as const;
