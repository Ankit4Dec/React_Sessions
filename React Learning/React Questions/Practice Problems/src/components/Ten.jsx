// Create a component that displays a random quote each time it is rendered.

export const Ten = () => {
  const quote = [
    "It was reassuring to know exactly where one stood. That one stood at the end of the line was not pertinent. At least there was a line in which to subsist.",
    "Illegal aliens have always been a problem in the United States. Ask any Indian.",
    "The ability to simplify means to eliminate the unnecessary so that the necessary may speak.",
    "If people never did silly things, nothing intelligent would ever get done.",
    "People want economy and they will pay any price to get it.",
  ];

  const randomIndex = Math.floor(Math.random() * quote.length);
  const quotes = quote[randomIndex];

  return (
    <>
      <div>{quotes}</div>
    </>
  );
};
