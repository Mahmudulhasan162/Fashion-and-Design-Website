

const Hero = () => {
    return (
        <div>
            <div className="hero my-16 min-h-screen" style={{backgroundImage: 'url(https://i.ibb.co/HprdHgB/shoes.webp)'}}>
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="max-w-md">
      <h1 className="mb-5 text-4xl font-bold uppercase text-white">New Collections In</h1>
      <p className="mb-5 text-xl font-semibold">Everything you'll need for every step. <br /> Styles made for you.</p>
      <button className="mt-10 px-8 py-2 rounded-full bg-black text-white text-lg font-medium">Explore</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default Hero;