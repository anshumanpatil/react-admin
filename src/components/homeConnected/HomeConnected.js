import React, { PureComponent, Fragment } from 'react';
import FormCard from '../formCard/FormCard';

class HomeConnected extends PureComponent {
  constructor(props) {
    super(props);
    this.clickListener = this.clickListener.bind(this);
  }
  
  clickListener() {
    this.props.history.push('/dashboard/buttons')
  }

  render() {
    return (
      <div class="row">
        <FormCard title="One" clickListener={() => this.clickListener()} />
        <FormCard title="Two" />
        <FormCard title="Three" />
      </div>
    );

  }
}

export default HomeConnected;
