

const Cover = () => {
  return (
    <div
      className="hero min-h-screen"
      style={{
        backgroundImage:
          "url(https://i.ibb.co/MV9pTBc/3.png)",
      }}
    >
      <div className="hero-overlay"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold">Would you like a Cup of Delicious Coffee?</h1>
          <p className="mb-5">
          It is coffee time - Sip & Savor - Relaxation in every sip! Get the nostalgia back!! Your companion of every moment!!! Enjoy the beautiful moments and make them memorable.
          </p>
          <button className="btn bg-[#E3B577]">Learn More</button>
        </div>
      </div>
    </div>
  );
};

export default Cover;
