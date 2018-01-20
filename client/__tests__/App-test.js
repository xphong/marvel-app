import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';

import App from '../containers/App';
import Nav from '../components/ui/Nav';

describe('App', () => {
  it('should render App', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
  });

  it('should render Nav', () => {
      const app = shallow(<App/>);
      const nav = <Nav />;

      expect(app.contains(nav)).toEqual(true);
  });
});
