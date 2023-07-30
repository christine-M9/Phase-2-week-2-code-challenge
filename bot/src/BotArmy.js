import React from 'react';

const BotArmy = ({ onlistedBots, releaseBot }) => {
  const handleRelease = (botId) => {
    releaseBot(botId);
  };

  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gridGap: '20px' }}>
      <h2>BOT ARMY</h2>
      {onlistedBots.map((bot) => (
        <div key={bot.id} onClick={() => handleRelease(bot.id)} style={{ border: '1px solid #ddd', padding: '10px', cursor: 'pointer', backgroundColor: '#f9f9f9' }}>
          <p>ID: {bot.id}</p>
          <h3>{bot.name}</h3>
          <p>Health: {bot.health}</p>
          <p>Damage: {bot.damage}</p>
          <p>Armor: {bot.armor}</p>
          <p>Bot_class: {bot.bot_class}</p>
          <p>Catchphrase: {bot.catchphrase}</p>
          <img src={bot.avatar_url} alt={bot.name} style={{ maxWidth: '50%', height: 'auto' }} />
          <p>Created At: {new Date(bot.created_at).toLocaleString()}</p>
          <p>Updated At: {new Date(bot.updated_at).toLocaleString()}</p>
          
        </div>
      ))}
    </div>
  );
};

export default BotArmy;
