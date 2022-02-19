import React from 'react';

import  Rating  from '../Rating/Rating';

export default {
    title: 'Example/Rating',
    component: Rating,
    parameters: {
        layout: 'fullscreen',
    },
};

const Template = (args) => <Rating {...args} />;

export const input = Template.bind({});
input.args = {
    note: 9
};

