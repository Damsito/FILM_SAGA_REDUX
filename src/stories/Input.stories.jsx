import React from 'react';

import  Input  from '../Input/Input';

export default {
    title: 'Example/Input',
    component: Input,
    parameters: {
        layout: 'fullscreen',
    },
};

const Template = (args) => <Input {...args} />;

export const input = Template.bind({});
input.args = {
    value: "dezaadezez"
};

