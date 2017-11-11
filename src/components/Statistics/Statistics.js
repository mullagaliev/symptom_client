import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, ReferenceLine, Bar, Legend, Brush, BarChart} from 'recharts';
import { Label, Menu, Tab, Icon, Rating } from 'semantic-ui-react';

const pulses = [
  {name: '05/11/2017', pulse: 120, pv: 2400, amt: 2400},
  {name: '06/11/2017', pulse: 100, pv: 1398, amt: 2210},
  {name: '07/11/2017', pulse: 90, pv: 9800, amt: 2290},
  {name: '08/11/2017', pulse: 180, pv: 3908, amt: 2000},
  {name: '09/11/2017', pulse: 124, pv: 4800, amt: 2181},
  {name: '10/11/2017', pulse: 135, pv: 3800, amt: 2500},
  {name: '11/11/2017', pulse: 150, pv: 4300, amt: 2100},
];

const fatigue = [
  {name: '1', uv: 300, pv: 456},
  {name: '2', uv: -145, pv: 230},
  {name: '3', uv: -100, pv: 345},
  {name: '4', uv: -8, pv: 450},
  {name: '5', uv: 100, pv: 321},
  {name: '6', uv: 9, pv: 235},
  {name: '7', uv: 53, pv: 267},
  {name: '8', uv: 252, pv: -378},
  {name: '9', uv: 79, pv: -210},
  {name: '10', uv: 294, pv: -23},
  {name: '12', uv: 43, pv: 45},
  {name: '13', uv: -74, pv: 90},
  {name: '14', uv: -71, pv: 130},
  {name: '15', uv: -117, pv: 11},
];

const panes = [
  {
    menuItem: <Menu.Item key='pulse'><Icon name={'heart'} color={'red'}/>Пульс  <Icon name={'warning sign'} color={'red'} className={'ml5'}/></Menu.Item>,
    render: () => <Tab.Pane>
      <LineChart width={320} height={300} data={pulses} >
        <Line type="monotone" dataKey="pulse" stroke="#e03997" strokeWidth={5}/>
        <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
        <XAxis dataKey="name" stroke="#000"/>
        <YAxis stroke="#000"/>
        <Tooltip />
      </LineChart>
    </Tab.Pane>,
  },
  {
    menuItem: <Menu.Item key='messages'><Icon name={'angle double down'}/>Утомлённость<Label color={'green'}>+3</Label></Menu.Item>,
    render: () => <Tab.Pane>
      <BarChart width={320} height={300} data={fatigue}>
        <XAxis dataKey="name"/>
        <YAxis/>
        <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
        <Tooltip/>
        <Legend verticalAlign="top" wrapperStyle={{lineHeight: '40px'}}/>
        <ReferenceLine y={0} stroke='#000'/>
        <Bar dataKey="pv" fill="#8884d8" />
        <Bar dataKey="uv" fill="#82ca9d" />
      </BarChart>
    </Tab.Pane>,
  }
];

class Statistics extends Component {
  render() {
    return (
      <div className='alignCenter'>
        <Rating maxRating={5} defaultRating={3} icon='heart' size='large' />
        <Tab panes={panes} />
      </div>
    );
  }
}

Statistics.propTypes = {};
Statistics.defaultProps = {};

export default Statistics;
