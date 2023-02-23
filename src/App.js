import Expenses from './components/Expenses/Expenses';
import React from 'react';
import NewExpense from './components/NewExpense/NewExpense';

function App() {
  const expenses = [
    {
      title: 'Oven',
      amount: 345.66,
      date: new Date(2022, 1, 1)
    },
    {
      title: 'Car insurance',
      amount: 234.44,
      date: new Date(2022, 5, 12)
    },
    {
      title: 'Cosmetics',
      amount: 77.50,
      date: new Date(2022, 6, 12)
    },
    {
      title: 'gift for husband',
      amount: 100,
      date: new Date(2022, 7, 28)
    }
  ];

  // return React.createElement(
  //   'div',
  //   {},
  //   React.createElement('h2', {}, "Let's get started!"),
  //   React.createElement(Expenses, {item: expenses})
  // );
  return (
    <div className="App">
      <NewExpense/>
      <Expenses item={expenses}/>

    </div>
  );
}

export default App;
