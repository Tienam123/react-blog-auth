import Navigation from "./Navigation.tsx";

const Header = () => {
  return (
      <>
        <header
            className='py-7 px-3 bg-slate-700 text-white text-center'
        >
            <Navigation />
        </header>
      </>
  );
};
export default Header;