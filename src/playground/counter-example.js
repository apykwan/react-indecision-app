// let count = 0;
// const addOne = () => {
//     count += 1;
//     renderCounterApp ();
//     console.log('addOne', count);
// };
// const minusOne = () => {
//     count--;
//     count >= 0 ? renderCounterApp() : count = 0;
//     console.log('minusOne');
// }
// const reset = () => {
//     count = 0;
//     renderCounterApp();
//     console.log('reset');
// }

// const appRoot = document.getElementById('app');


// const renderCounterApp = () => {
//     const templateTwo = (
//         <div>
//             <h1>Count: {count}</h1>
//             <button onClick={addOne}>+1</button>
//             <button onClick={minusOne}>-1</button>
//             <button onClick={reset}>reset</button>
//         </div>
//     );
//     ReactDOM.render(templateTwo, appRoot);
// }

// renderCounterApp();


class Counter extends React.Component {
    constructor(props) {
        super(props);
        this.handleAddOne = this.handleAddOne.bind(this);
        this.handleMinusOne = this.handleMinusOne.bind(this);
        this.handleReset = this.handleReset.bind(this);
        this.state = {
            count: 0
        };
    }
    componentDidMount() {
        try {
            const integer = localStorage.getItem('count');
            const count = parseInt(integer, 10);

            if (!isNaN(count)) {
                this.setState(() => ({ count }));
            }   
        } catch (e) {
            console.log(e);
        }
    }
    componentDidUpdate(prevProps, prevState) {
        if ((prevState.count !== this.state.count)) {
            localStorage.setItem('count', this.state.count);
        }
        console.log("localStorage update!");
    }
    handleAddOne() {
        this.setState(prevState => ({ count: prevState.count + 1 }));
    }
    handleMinusOne() {
        if (this.state.count > 0) {
            this.setState(prevState => ({ count: prevState.count - 1 }));
        };
    } 
    handleReset() {
       this.setState(() => ({ count:0 })); 
    }
    render() {
        return (
            <div>
                <h1>Counter: {this.state.count} </h1>
                <button onClick={this.handleAddOne}>+1</button>
                <button onClick={this.handleMinusOne}>-1</button>
                <button onClick={this.handleReset}>Reset</button>
            </div>
        )
    }
}


ReactDOM.render(<Counter />, document.getElementById('app'));