// let visibility = false;

// const toggleButt = () => {
//    visibility = !visibility;
//    render();

// };

// const render = () => {
//     const template = (
//         <div>
//             <h1>Visbility Toggle</h1>
//         <button onClick={toggleButt}>
//             {visibility ? 'Hide details' : 'Show details'}
//         </button>
//         {visibility && (
//                 <p>Hey. There are some details you can now see!</p>
//         )}
//         </div>
//     );
//     ReactDOM.render(template, document.getElementById('app'));
// };

// render();

class VisibilityToggle extends React.Component {
    constructor(props) {
        super(props);
        this.handleToggleVisibility = this.handleToggleVisibility.bind(this);
        this.state = {
            visibility: false
        }
    }
    handleToggleVisibility() {
        // this.setState(el => {
        //     return {
        //         visibility: !el.visibility
        //     };
        // })

        this.setState({ visibility: !this.state.visibility});
    }
    render() {
        return (
            <div>
                <h1>Visibility Toggle</h1>
                <button onClick={this.handleToggleVisibility}>
                     {this.state.visibility? 'Hide details' : 'Show details'}
                 </button>
                 {this.state.visibility && (
                    <p>Hey. There are some details you can now see!</p>
                )}
            </div>
        );
    }
}

ReactDOM.render(<VisibilityToggle />, document.getElementById('app'));
