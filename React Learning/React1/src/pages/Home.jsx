import Counter from "../components/Counter/Counter";
import Header from "../components/Header/Header";
import InputDisplayText from "../components/InputDisplayText/InputDisplayText";

const Home = () => {
  return (
    <>
      <Header />
      <h1>Home Page</h1>
      <InputDisplayText />
      <Counter />
    </>
  );
};

export default Home;
