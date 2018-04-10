/**
 * Created by pain.xie on 2018/4/10.
 */

import React, {Component} from 'react';
import Api from "../net/Api";

export default class HomePage extends Component {

  componentDidMount() {
    this.getData();
  }

  async getData() {
    try {
      let response = await Api.getData();
      console.log('pain.xie:', response);
      return response;
    } catch (error) {
      console.log('pain.xie:', error);
    }
  }

  render() {
    return (
      <div
        className="am"
        onClick={() => {
          window.location.href = 'https://www.baidu.com';
        }}
      >
        <img src={require('../image/test.png')}/>
        xsw
      </div>
    );
  }
}

