console.log('App.js is running!');

// JSX - JavaScript XML

const app = {
    title: "No decision",
    subtitle: 'No one sux!',
    options: []
};

const onFormSubmit = el => {
    el.preventDefault();

    const option = el.target.elements.option.value;

    if (option) {
        app.options.push(option);
        el.target.elements.option.value = '';
        render();
    }
};

const removeAll = () => {
    if (app.options.length > 0) {
        app.options = [];
        render();
    }
};

const onMakeDecision = () => {
    const randomNum = Math.floor(Math.random() * app.options.length);
    const option = app.options[randomNum];
    alert(option);
};

const appRoot = document.getElementById('app');

const numbers = [55, 101, 1000];

const render = () => {
    const template = (
        <div>
            <h1>{app.title}</h1>
            {app.subtitle && <p>{app.subtitle}</p>}
            <p>{(app.options && app.options.length > 0) ? 'Here are your Options' : 'No Options!!'}</p>
            <button disabled={app.options.length === 0} onClick={onMakeDecision}>What should I do?</button>
            <button onClick={removeAll}>Remove All</button>
            <ol>
                {
                    app.options.map((el, ind) => <li key={ind}>{el}</li>)
                }
            </ol>
            <form onSubmit={onFormSubmit}>
                <input type='text' name='option' />
                <button>Add Option</button>
            </form>
        </div>
    );
    ReactDOM.render(template, appRoot);
};

render();



// const user = {
//     name: 'MikY',
//     age: '37',
//     location: 'Lala ZOnE'
// }
// function getLocation(location) {
//     if (location) {
//         return <p>Location: {location}</p>;
//     } 
// }




// const templateTwo = (
//     <div>
//         <h1>{user.name ? user.name.toUpperCase() : 'Anonymous'}</h1>
//         {(user.age && user.age >= 18) && <p>Age: {user.age}</p>}
//         {getLocation(user.location)}
//     </div>
// );

