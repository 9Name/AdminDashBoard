import * as React from 'react';
import Paper from '@material-ui/core/Paper';
import {
  Chart,
  BarSeries,
  Title,
  ArgumentAxis,
  ValueAxis,
} from '@devexpress/dx-react-chart-material-ui';

import { Animation } from '@devexpress/dx-react-chart';

const data = [
  { year: '1950', net: 2.525 },
  { year: '1960', net: 3.018 },
  { year: '1970', net: 3.682 },
  { year: '1980', net: 4.440 },
  { year: '1990', net: 5.310 },
  { year: '2000', net: 6.127 },
  { year: '2020', net: 6.930 },
];

export default class Graph extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      data,
    };
  }

  render() {
    const { data: chartData } = this.state;

    return (
      <Paper>
        <Chart
          data={chartData}
        >
          <ArgumentAxis />
          <ValueAxis max={7} />

          <BarSeries
            valueField="net"
            argumentField="year"
          />
          <Title text="Company Net Growth" />
          <Animation />
        </Chart>
      </Paper>
    );
  }
}