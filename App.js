import React from "react";
import ReactDOM from "react-dom/client";

// React Element creation using REact.createElement
// const header = React.createElement("div",{},
// [
//     React.createElement("div",{id:"child1"},
//     [
//         React.createElement("h1",{},"Hello World from React"),
//         React.createElement('h1',{},"I am a Manvitha")
//     ]),
//     React.createElement("div",{id:"child2"},
//     [
//         React.createElement("h1",{},"Hello I am a H1 tag"),
//         React.createElement("h2",{},"I am a H2 tag")
//     ])
// ])

// React element creation using single line JSX
const header = <h1>Hello I am a H1 tag</h1>
// React element creation using multi line JSX - () is the difference
const header2 = (
    <h2>Hello I am a h2 tag</h2>
)

//React functional component declaration method 1
const Title = () => {
    return(
        <div>
            <h1>I am a title component</h1>
        </div>
    );
}

//React functional component declaration method 2
const HeadingComponent = () => (
    <div>
        {/* ways to access title component inside HeadingComponent */}
        <Title />
        <Title></Title>
        {Title()}
        {/* Anything inside the {} inside JSX will be considered as a plain JS that the browser can understand */}
        {console.log('inside JSX')}
        { 100+200 }
        {/* Way to access React Element in React Component */}
        {header2}
        <h1>
            Hello I am a heading component
        </h1>
    </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"))

//Ways to render a React element
//root.render(header)
//root.render(header2)

//Ways to render a React component 
root.render(<HeadingComponent />)