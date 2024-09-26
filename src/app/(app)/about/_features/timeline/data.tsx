export const timelineData = [
  {
    id: 1,
    title: "設立",
    date: "2023-10",
    description: "",
  },
  {
    id: 2,
    title: "忘年会",
    date: "2023-12",
    description: "",
  },
  {
    id: 3,
    title: "公認認定",
    date: "2022-04",
    description: "",
  },
];

export type TimelineData = (typeof timelineData)[number];

export interface TimelineElement {
  id: number;
  title: string;
  date: string;
  description: string;
}
