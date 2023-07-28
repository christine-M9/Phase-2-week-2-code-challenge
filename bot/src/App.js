import React, { useState } from 'react';
import './App.css'
import BotCollection from './BotCollection';
import BotArmy from './BotArmy';

function App() {
  const [onlistedBots, setOnlistedBots] = useState([]);

  const onlistBot = (bot) => {
    if (!onlistedBots.some((onlistedBot) => onlistedBot.id === bot.id)) {
      setOnlistedBots([...onlistedBots, bot]);
    }
  };
  

  return (
    <div className="App">
      <h1>BOT PROFILES</h1>
      <BotArmy onlistedBots={onlistedBots} />
      <BotCollection onlistBot={onlistBot} />
    </div>
  );
}

export default App;
