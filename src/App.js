import logo from './logo.svg';
import './App.css';
import Header from './Componant/Header/Header';
import Content from './Componant/Content/Content';
import Total from './Componant/Total/Total';

const App = () => {
    const course = 'Half Stack application development';
    const part1 = 'Fundamentals of React';
    const exercises1 = 10;
    const part2 = 'Using props to pass data';
    const exercises2 = 7;
    const part3 = 'State of a component';
    const exercises3 = 14;

    return (
        <div className="App">
            <Header course={course} />
            <Content part1={part1} part2={part2} part3={part3} />
            <Total toatal={exercises1 + exercises2 + exercises3} />
        </div>
    );
};

export default App;
