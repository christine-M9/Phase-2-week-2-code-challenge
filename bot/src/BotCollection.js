import React, { useEffect, useState } from 'react';

const BotCollection = ({ onlistBot }) => {
  const [bots, setBots] = useState([]);

  // fetching data from db.json
  useEffect(() => {
    fetch('/db.json')
      .then((response) => response.json())
      .then((data) => setBots(data.bots));
  }, []);

  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gridGap: '20px', marginBottom: '30px' }}>
      {bots.map((bot) => (
        <div key={bot.id} onClick={() => onlistBot(bot)} style={{ border: '1px solid #ddd', padding: '10px', cursor: 'pointer' }}>
          
          <p>ID: {bot.id}</p>
          <h2>{bot.name}</h2>
          <p>Health: {bot.health}</p>
          <p>Damage: {bot.damage}</p>
          <p>Armor: {bot.armor}</p>
          <p>Bot_class: {bot.bot_class}</p>
          <p>Catchphrase: {bot.catchphrase}</p>
          <img src={bot.avatar_url} alt={bot.name} style={{ maxWidth: '40%', height: 'auto' }} />
          <p>Created At: {new Date(bot.created_at).toLocaleString()}</p>
          <p>Updated At: {new Date(bot.updated_at).toLocaleString()}</p>
         
        </div>
      ))}
    </div>
  );
};

export default BotCollection;
