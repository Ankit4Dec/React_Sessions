export const backgroundColorHoC = (Component, bgColor = "#f1f1f1") => {
  const containerStyle = {
    margin: "15px",
    padding: "15px",
    border: " solid 2px #ddd",
    backgroundColor: bgColor,
  };

  return (props) => {
    return (
      <div style={containerStyle}>
        <Component {...props} />
      </div>
    );
  };
};
