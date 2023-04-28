import ListGroup from "./components/ListGroup";


function App() {

  const items = [
    'New York',
    'San Francisco',
    'Tokio',
    'London',
    'Paris',
  ];

  return <div><ListGroup items={items} heading={"Cities"} /></div>
}

export default App;