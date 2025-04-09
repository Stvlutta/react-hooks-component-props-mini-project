import React from "react";

function Article({ title, date = "January 1, 1970", preview, minutes }) {
  const getReadingIndicator = () => {
    if (!minutes) return null;
    
    let emoji = "";
    
    if (minutes < 30) {
      // For every 5 minutes, display a coffee cup emoji
      const coffeeCount = Math.ceil(minutes / 5);
      emoji = "☕️".repeat(coffeeCount);
    } else {
      // For every 10 minutes, display a bento box emoji
      const bentoCount = Math.ceil(minutes / 10);
      emoji = "🍱".repeat(bentoCount);
    }
    
    return `${emoji} ${minutes} min read`;
  };

  return (
    <article>
      <h3>{title}</h3>
      <small>{date} {getReadingIndicator()}</small>
      <p>{preview}</p>
    </article>
  );
}

export default Article;