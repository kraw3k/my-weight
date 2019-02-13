import React, { Component } from "react";
// import {
//   LineChart,
//   Line,
//   XAxis,
//   YAxis,
//   Tooltip,
// } from "recharts";
import {
  VictoryChart,
  VictoryAxis,
  VictoryLine,
  VictoryZoomContainer,
  VictoryBrushContainer,
  VictoryTheme,
  VictoryScatter
} from "victory";

export default class WeightGraphs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      width: null,
      height: null,
      zoomDomain: null
    };
  }

  handleZoom(domain) {
    this.setState({ zoomDomain: domain });
  }

  componentWillMount = () => {
    let tempArray = this.props.data.map(elem => {
      return {
        x: new Date(elem.timestamp),
        y: parseFloat(elem.weight)
      };
    });

    // function compare(a, b) {
    //   if (a.y < b.y) return -1;
    //   if (a.y > b.y) return 1;
    //   return 0;
    // }

    // tempArray.sort(compare);

    this.setState({ chartData: tempArray });
  };

  componentDidMount = () => {
    this.setState({
      width: document.getElementsByClassName("graphs")[0].offsetWidth,
      height: document.getElementsByClassName("graphs")[0].offsetHeight
    });
  };

  render() {
    return (
      <section className="graphs">
        {this.state.width ? (
          <div>
            <VictoryChart
              width={this.state.width}
              height={this.state.height * 0.6}
              scale={{ x: "time" }}
              theme={VictoryTheme.material}
              containerComponent={
                <VictoryZoomContainer
                  zoomDimension="x"
                  zoomDomain={this.state.zoomDomain}
                  onZoomDomainChange={this.handleZoom.bind(this)}
                />
              }
            >
              <VictoryLine
                style={{
                  data: { stroke: "#003c8f" }
                }}
                data={this.state.chartData}
                x="x"
                y="y"
              />
              <VictoryScatter
                style={{ data: { fill: "#102027" } }}
                size={4}
                symbol="square"
                // theme={VictoryTheme.material}
                data={this.state.chartData}
              />
            </VictoryChart>
            <VictoryChart
              padding={{ top: 0, left: 50, right: 50, bottom: 30 }}
              width={this.state.width}
              height={this.state.height * 0.2}
              scale={{ x: "time" }}
              theme={VictoryTheme.material}
              containerComponent={
                <VictoryBrushContainer
                  brushDimension="x"
                  brushDomain={this.state.zoomDomain}
                  onBrushDomainChange={this.handleZoom.bind(this)}
                />
              }
            >
              <VictoryAxis />
              <VictoryLine
                style={{
                  data: { stroke: "#003c8f" }
                }}
                data={this.state.chartData}
                x="x"
                y="y"
              />
            </VictoryChart>
          </div>
        ) : null}
      </section>
    );
  }
}
