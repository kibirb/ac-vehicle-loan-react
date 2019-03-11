import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import { AddVehicleView } from './AddVehicleView';

describe('addVehicleView', () => {

  configure({adapter: new Adapter()});
  it('renders view correctly', () => {
    const wrapper = shallow(<AddVehicleView />);
    const form = <strong>Vehicle application form</strong>;

    expect(wrapper.contains(form)).toEqual(true);
  });

});
