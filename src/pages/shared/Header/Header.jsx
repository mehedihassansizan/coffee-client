const Header = () => {
  return (
    <div
      className="h-[100px]"
      style={{
        backgroundImage: "url(https://i.ibb.co/0GSpPJb/15.jpg)",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="pt-2 text-2xl flex justify-center items-center text-white">
      <img
        className="w-[75px] h-[90px]"
        src="https://i.ibb.co/nCv7m80/logo1.png"
        alt=""
      />
      <h1>Espresso Emporium</h1>
      </div>
    </div>
    
  );
};

export default Header;
