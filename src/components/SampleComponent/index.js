import React, { Component } from 'react';
import styles from './styles.css';

class SampleComponent extends Component {
  render() {
    return (
      <div>
        <h1 className={styles.h1}>Sample Component</h1>
      </div>
    );
  }
}

export default SampleComponent;