import React from "react";

function Article(props) {
  const { title, date, preview, minutes } = props;

  // Calculate coffee and bento emojis based on minutes to read
  let emojiCount = Math.ceil(minutes / 5);
  let emoji;
  if (minutes < 30) {
    emoji = "☕️";
  } else {
    emoji = "🍱";
    emojiCount = Math.ceil(minutes / 10);
  }
  const emojis = emoji.repeat(emojiCount);


  const displayDate = date || "January 1, 1970";

  return (
    <article>
      <h3>{title}</h3>
      <small>{displayDate}</small>
      <p>{preview}</p>
      <p>{emojis} {minutes} min read</p>
    </article>
  );
}

export default Article;
