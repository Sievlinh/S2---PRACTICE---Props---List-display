import {CARDS} from './data';
import Card from './components/Card';
function App() {
  return <>
  <div className='container'>
    <h1>Charactors</h1>
    <div className='card_list'>
        {CARDS.map((card) => (
          <Card key={card.id} card={card} />
        ))}
    </div>
  </div>
  </>;
}

export default App;
