import { Meta, StoryFn } from "@storybook/react";
import Map from "./../components/Map";

export default {
  title: "Map",
  component: Map,
} as Meta<typeof Map>;

const Template: StoryFn = (args) => <Map {...args} />;

export const Default = Template.bind({});
Default.args = {};
