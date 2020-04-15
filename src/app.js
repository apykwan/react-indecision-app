import React from 'react';
import ReactDOM from 'react-dom';
import IndecisionApp from './components/IndecisionApp';
import 'normalize.css/normalize.css';
import './styles/styles.scss';

// const Layout = (props) => {
//     return (
//         <div>
//             <p>header</p>
//             {props.children}
//             <p>footer</p>
//         </div>
//     );
// };

// const template = (
//     <div>
//         <h1>Page Title</h1>
//         <p>This is my page</p>
//     </div>
// )

ReactDOM.render(<IndecisionApp />, document.getElementById('app'));

// class OldSyntax {
//     constructor() {
//         this.name = "Mike";
//         this.getGreeting = this.getGreeting.bind(this);
//     }
//     getGreeting() {
//         return `Hi, My name is ${this.name}.`
//     }
// }

// const oldSyntax = new OldSyntax();
// const getGreeting = oldSyntax.getGreeting()
// console.log(getGreeting);


// class NewSyntax {
//     name = 'Jen';
//     getGreeting = () => {
//         return `Hi, My name is ${this.name}.`
//     }
// }

// const newSyntax = new NewSyntax();
// const newGetGreeting = newSyntax.getGreeting();
// console.log(newGetGreeting);