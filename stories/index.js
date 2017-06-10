import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { storiesOf, action, linkTo } from '@kadira/storybook';
import RegistrationForm from '../src/components/RegistrationForm';
import LoginForm from '../src/components/LoginForm';
import PetItem from '../src/components/PetItem';
import PetView from '../src/components/Pet';
import TopNav from '../src/components/TopNav';

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

storiesOf("PetItem", module)
    .addDecorator(story => (
        <MemoryRouter initialEntries={['/']}>{story()}</MemoryRouter>
    ))
    .add('default', () => (
        <PetItem pet={{
          "_links": {
            "pet": {
              "href": "http://localhost:8080/pets/4"
            },
            "self": {
              "href": "http://localhost:8080/pets/4"
            }
          },
          "description": "吉娃娃属小型犬种里最小的 ,优雅，警惕，动作迅速，以匀称的体格和娇小的体型广受人们的喜爱。吉娃娃犬不仅是可爱的小型玩具犬，同时也具备大型犬的狩猎与防范本能，具有类似梗类犬的气质。此犬分为长毛种和短毛种。这种狗体型娇小,对其它狗不胆怯,对主人极有独占心。短毛种和长毛种不同之处在于富有光泽,贴身,柔顺的短被毛。长毛种的吉娃娃除了背毛丰厚外,像短毛种一样具有发抖的倾向,不要认为是感冒。 整体外观：这种犬身体紧凑。很重要的一点是其头骨为苹果形，尾巴长度适当且高高举起，不卷曲也不成半圆形，尾尖指向腰部。 重要比例：体长各大于从地面到马肩隆的高度。体形最好几近方形，雄性更是如此。雌性由于其生育特点，其体长可以更长一些。",
          "id": 4,
          "name": "吉娃娃",
          "price": "CNY 4000.00",
          "quantity": 30
        }} />
    ));

storiesOf("PetView", module)
    .addDecorator(story => (
        <MemoryRouter initialEntries={['/']}>{story()}</MemoryRouter>
    ))
    .add('default', () => (
        <PetView addToCard={action('add to cart')} pet={{
          "_links": {
            "pet": {
              "href": "http://localhost:8080/pets/4"
            },
            "self": {
              "href": "http://localhost:8080/pets/4"
            }
          },
          "description": "吉娃娃属小型犬种里最小的 ,优雅，警惕，动作迅速，以匀称的体格和娇小的体型广受人们的喜爱。吉娃娃犬不仅是可爱的小型玩具犬，同时也具备大型犬的狩猎与防范本能，具有类似梗类犬的气质。此犬分为长毛种和短毛种。这种狗体型娇小,对其它狗不胆怯,对主人极有独占心。短毛种和长毛种不同之处在于富有光泽,贴身,柔顺的短被毛。长毛种的吉娃娃除了背毛丰厚外,像短毛种一样具有发抖的倾向,不要认为是感冒。 整体外观：这种犬身体紧凑。很重要的一点是其头骨为苹果形，尾巴长度适当且高高举起，不卷曲也不成半圆形，尾尖指向腰部。 重要比例：体长各大于从地面到马肩隆的高度。体形最好几近方形，雄性更是如此。雌性由于其生育特点，其体长可以更长一些。",
          "id": 4,
          "name": "吉娃娃",
          "price": "CNY 4000.00",
          "quantity": 30
        }} />
    ));

storiesOf("Top Navi Bar", module)
    .addDecorator(story => (
        <MemoryRouter initialEntries={['/']}>{story()}</MemoryRouter>
    ))
    .add('with login user', () => (
        <TopNav user={{username: 'aisensiy'}} logout={action('logout')}/>
    ))
    .add('without login', () => (
        <TopNav logout={action('logout')} />
    ));