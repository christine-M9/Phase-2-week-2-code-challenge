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
          <h3>{bot.name}</h3>
          <p>Description: {bot.bot_class}</p>
          <p>Health: {bot.health}</p>
          <p>Damage: {bot.damage}</p>
          <p>Armor: {bot.armor}</p>
          <p>Catchphrase: {bot.catchphrase}</p>
          <p>Created At: {new Date(bot.created_at).toLocaleString()}</p>
          <p>Updated At: {new Date(bot.updated_at).toLocaleString()}</p>
          <img src={bot.avatar_url} alt={bot.name} style={{ maxWidth: '50%', height: 'auto' }} />
        </div>
      ))}
    </div>
  );
};

export default BotArmy;
