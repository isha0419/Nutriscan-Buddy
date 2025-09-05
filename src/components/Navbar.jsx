export default function Navbar({ refs }) {
  const scrollTo = (ref) => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="sticky top-0 z-50 bg-black/70 backdrop-blur-md p-4 flex justify-center space-x-6 text-green-300 shadow-md">
      <button onClick={() => scrollTo(refs.homeRef)}>Home</button>
      <button onClick={() => scrollTo(refs.healthRef)}>Health</button>
      <button onClick={() => scrollTo(refs.cravingsRef)}>Cravings</button>
      <button onClick={() => scrollTo(refs.historyRef)}>History</button>
      <button onClick={() => scrollTo(refs.statsRef)}>Stats</button>
    </nav>
  );
}
