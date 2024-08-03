import { Meta, StoryFn } from "@storybook/react";
import Map from "./../components/Map";

export default {
  title: "Map",
  component: Map,
} as Meta<typeof Map>;

const Template: StoryFn = (args) => <Map {...args} />;

export const Default = Template.bind({});
Default.args = {};

export const DrawingANewPolygon = Template.bind({});
DrawingANewPolygon.args = {
  defaultPolygon: [
    [
      [51.51, -0.1],
      [51.52, -0.12],
      [51.52, -0.08],
      [51.51, -0.06],
      [51.5, -0.1],
    ]
  ],
};

export const WhenPolygonsIntersect = Template.bind({});
WhenPolygonsIntersect.args = {
  defaultPolygon: [
    [
      [51.51, -0.1],
      [51.52, -0.12],
      [51.52, -0.08],
      [51.51, -0.06],
      [51.5, -0.1],
    ],
    [
      [51.51, -0.11], // Vertex 1
      [51.52, -0.13], // Vertex 2
      [51.54, -0.11], // Vertex 3
      [51.55, -0.08], // Vertex 4
      [51.53, -0.06], // Vertex 5
      [51.51, -0.08], // Vertex 6
    ],
  ],
};
