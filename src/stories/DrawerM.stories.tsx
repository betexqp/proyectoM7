import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import  DrawerM  from '../components/DrawerM';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Example/Drawer',
  component: DrawerM,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof DrawerM>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof DrawerM> = (args) => <DrawerM {...args} />;

export const Menu = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Menu.args = {
  labels: ['Pruebas','log','mejoras'],
};
