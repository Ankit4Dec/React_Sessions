export const backgroundColorHoC = (Component) => {
  return () => {
    return (
      <div>
        <h4>HoC</h4>
        <Component />
      </div>
    );
  };
};
