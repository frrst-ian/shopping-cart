import "./HomePage.css";

export const HomePage = () => {
  return (
    <div className="homepage-wrapper">
      <div className="content-wrapper">
        <div>
          <h1>Welcome to Turing Tech</h1>
          <p>Your One-Stop Shop for Digital Innovation</p>
        </div>
        <div>
          <img src="/hero.jpg" alt="tech gadgets" />
        </div>
      </div>
    </div>
  );
};
