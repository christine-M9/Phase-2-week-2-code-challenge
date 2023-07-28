

import React, { useEffect, useState } from 'react';

const BotCollection = () => {
  const [bots, setBots] = useState([]);
// fetching data from db.json
  useEffect(() => {
    fetch('/db.json') 
      .then((response) => response.json())
      .then((data) => setBots(data.bots));
  }, []);

  return (
    <div>
      {bots.map((bot) => (
        <div key={bot.id}>
          <h2>{bot.name}</h2>
          <p>Description: {bot.bot_class}</p>
          <p>Health: {bot.health}</p>
          <p>Damage: {bot.damage}</p>
          <p>Armor: {bot.armor}</p>
          <p>Catchphrase: {bot.catchphrase}</p>
          <p>Created At: {new Date(bot.created_at).toLocaleString()}</p>
          <p>Updated At: {new Date(bot.updated_at).toLocaleString()}</p>
          <img src={bot.avatar_url} alt={bot.name} />
          
        </div>
      ))}
    </div>
  );
};

export default BotCollection;
