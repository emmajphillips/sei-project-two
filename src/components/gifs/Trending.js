import React from "react";

import { getTrendingGifs } from "../../lib/api";
import TrendingCard from "./TrendingCard";
import Spinner from "../common/Spinner";

class Trending extends React.Component {
  state = {
    trending: [],
  };
  async componentDidMount() {
    try {
      const res = await getTrendingGifs();
      this.setState({ trending: res.data.data });
    } catch (err) {
      console.log(err);
    }
  }
  render() {
    return (
      <section className="section trending">
        <div className="container">
          <div className="columns is-multiline">
            {this.state.trending.map((gif) => (
              <TrendingCard key={gif.id} {...gif} />
            ))}
          </div>
        </div>
      </section>
    );
  }
}
export default Trending;
