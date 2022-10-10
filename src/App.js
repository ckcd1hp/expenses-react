import Expenses from './components/Expenses'
function App() {
  const expenses = [
    {
      title: "Car Insurance",
      amount: 294.54,
      date: new Date(2, 22, 22)
    },
    {
      title: "Test",
      amount: 23.21,
      date: new Date(24, 5, 24)
    }
  ]
  return (
    <div>
      <h2>Let's get started!</h2>
      <Expenses expenses={expenses}></Expenses>
    </div>
  );
}

export default App;
