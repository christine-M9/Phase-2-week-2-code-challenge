import React, { useState } from 'react';
import BotCollection from './BotCollection';
import BotArmy from './BotArmy';

function App() {
  const [onlistedBots, setOnlistedBots] = useState([]);

  const onlistBot = (bot) => {
    if (!onlistedBots.some((onlistedBot) => onlistedBot.id === bot.id)) {
      setOnlistedBots([...onlistedBots, bot]);
    }
  };

  const releaseBot = (botId) => {
    setOnlistedBots(onlistedBots.filter((bot) => bot.id !== botId));
  };

  return (
    <div style={{ textAlign: 'center', padding: '20px' }}>
      <h1>BOTS PROFILE</h1>
      <BotArmy onlistedBots={onlistedBots} releaseBot={releaseBot} />
      <BotCollection onlistBot={onlistBot} />
    </div>
  );
}

export default App;
