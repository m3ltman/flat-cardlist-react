import React, { Component } from 'react';
import Card from './Card';
import getData from '../api/get-data';
import Preloader from './preloader';

export default class CardList extends Component {
  constructor(props) {
    super(props);
    this.state = { isLoading: true };
  }

  componentDidMount() {
    getData()
      .then((res) => {
        if (!res.ok) {
          return Promise.reject(res.status);
        }
        return res.json();
      })
      .then((flatsData) => {
        this.setState({ flatsData: flatsData, isLoading: false });
      })
      .catch(err => console.log(err));
  }

  render() {
    return(
      <section className="cards">
        {this.state.isLoading ? <Preloader /> : <Card flatsData={this.state.flatsData} />}
      </section>
    );
  }
}