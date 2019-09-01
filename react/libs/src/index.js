import React from 'react'
import { render } from 'react-dom'
import fetch from 'isomorphic-fetch'
import { extent, select, timeYears } from 'd3'



// Приклад з завантаженням даних за допомогою Fetch
class CountryList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            countryNames: [],
            loading: false
        }
    }

    componentDidMount() {
        this.setState({ loading: true });
        fetch('https://restcountries.eu/rest/v1/all')
            .then(response => response.json())
            .then(json => json.map(country => country.name))
            .then(countryNames => this.setState({ countryNames, loading: false }));
    }

    render() {
        const { countryNames, loading } = this.state;
        return loading ?
            <div>Loading Country Names...</div> :
            !countryNames.length ?
                <div>No Country Names</div> :
                <ul>{countryNames.map((x, i) => <li key={i}>{x}</li>)}</ul>
    }
}



// Інший приклад з завантаженням ліби "D3"
const historicDatesForSkiing = [
    { year: 1879, event: 'Ski Manufacturing Begins' },
    { year: 1882, event: 'US Ski Club Founded'},
    { year: 1924, event: 'First Winter Olympics Held' },
    { year: 1926, event: 'First US Ski Shop Opens' },
    { year: 1932, event: 'North America\'s First Rope Tow Spins' },
    { year: 1936, event: 'First Chairlift Spins' },
    { year: 1949, event: 'Squaw Valley, Mad River Glen Open' },
    { year: 1958, event: 'First Gondola Spins' },
    { year: 1964, event: 'Plastic Buckle Boots Available' }
];

class Timeline extends React.Component {
    constructor(props) {
        const { data=[] } = props;
        const times = extent(data.map(d => d.year));
        const range = [50, 450];
        super(props);
        this.state = { data, times, range };
    }

    componentDidMount() {
        let group;
        const { data, times, range } = this.state;
        const { target } = this.refs;
        const scale = timeYears.scale().domain(times).range(range);
        select(target).append('svg').attr('height', 200).attr('width', 500);
        group = select(target.children[0]).selectAll('g').data(data).enter()
            .append('g').attr('transform', (d, i) => `translate(${scale(d.year)}, 0)`);
        group.append('circle').attr('cy', 160).attr('r', 5).style('fill', 'blue');
        group.append('text').text(d => `${d.year} - ${d.event}`)
            .style('font-size', 10).attr('y', 115).attr('x', -95)
            .attr('transform', 'rotate(-45)');
    }

    render() {
        return <div className="timeline">
            <h1>{this.props.name}</h1>
            <div ref="target"></div>
        </div>
    }
}



// Допоміжний компонент для зручного відображення
class ParentComponent extends React.Component {
    render() {
        return <div>
            <Timeline name="History of Skiing" data={historicDatesForSkiing}/>
            <hr /><hr /><hr />
            <CountryList />
        </div>
    }
}

render(
    <ParentComponent />,
    document.getElementById('react-container')
)
