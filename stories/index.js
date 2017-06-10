import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { storiesOf, action, linkTo } from '@kadira/storybook';
import RegistrationForm from '../src/components/RegistrationForm';
import LoginForm from '../src/components/LoginForm';

import '../node_modules/antd/dist/antd.css';

storiesOf('RegisterForm', module)
    .addDecorator(story => (
        <MemoryRouter initialEntries={['/']}>{story()}</MemoryRouter>
    ))
    .add('default', () => (
        <RegistrationForm onSubmit={action('register')} />
    ));


storiesOf("LoginForm", module)
    .addDecorator(story => (
        <MemoryRouter initialEntries={['/']}>{story()}</MemoryRouter>
    ))
    .add('default', () => (
        <LoginForm onSubmit={action('login')} />
    ));