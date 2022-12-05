import React, { Component } from "react";
import store from '../redux/reducers/store';
import "../styles.css";

import GoodsItem from './GoodsItem';

class Goods extends Component {
  state = {
    goods: []
  }

  componentDidMount() {
    const globalStore = store.getState();
    this.setState({ goods: globalStore.goods });
  }
  render() {
    return (
      <div className="goods">
        <h2 className="goods__title">Video Games</h2>
        {this.state.goods.map(item => (
          <ul className="goods__list">
            <li className="goods__list-item" key={item.id}>
              <GoodsItem {...item} />
            </li>
          </ul>
        ))}
      </div>
    );
  }
}

export default Goods;