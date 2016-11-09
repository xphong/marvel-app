import React, {Component} from 'react';

export default class MarvelPowerLevelRow extends Component {
  constructor(props){
    super(props);
  }

  render() {
    const {powerlevel} = this.props;

    return (
      <tr>
        <td>{powerlevel.Intelligence}</td>
        <td>{powerlevel.Intelligence}</td>
        <td>{powerlevel.Intelligence}</td>
      </tr>
    );
  }
}
