import { Component } from 'react'
//import { v4 } from 'uuid'
//import AddColorForm from './components/AddColorForm'
//import ColorList from './components/ColorList'

export default class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            colors: []
        }
    }
    render() {
        const { colors } = this.state;
        return (
            <div className="app">
                /*<AddColorForm />
                <ColorList colors={colors} />*/
            </div>
        )
    }
}
