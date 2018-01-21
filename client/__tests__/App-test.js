import React from 'react';
import ReactDOM from 'react-dom';

import App from '../containers/App';
import Nav from '../components/ui/Nav';

describe('App', () => {
  it('should render snapshot', () => {
      const wrapper = shallow(
          <App />
      );
      expect(wrapper).toMatchSnapshot();
  });

});
