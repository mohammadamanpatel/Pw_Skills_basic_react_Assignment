import logo from './logo.svg';
import './App.css';
import Header from './components/Header'
import Person from './components/Person'
import Button from './components/Button'
import List from './components/List'
const App = () => {
  const persons = [
    { name: 'John', age: 25 },
    { name: 'Jane', age: 30 },
  ];

  const handleClick = () => {
    console.log('Button clicked!');
  };

  const listItems = ['Item 1', 'Item 2', 'Item 3'];

  return (
    <div>
      <Header title="My React App" />
      <Person name="Alice" age={28} />
      <Person name="Bob" age={32} />
      <Button text="Click Me" onClick={handleClick} />
      <List items={listItems} />
    </div>
  );
};

export default App;
