/**
 * Created by pain.xie on 2018/4/10.
 */

import React, {Component} from 'react';

export default class HomePage extends Component {

  render() {
    return (
      <div
        onClick={() => {
          window.location.href = 'https://www.baidu.com';
        }}
      >
        xsw
      </div>
    );
  }
}

