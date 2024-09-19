const App = () => {
  return (
    <div className="flex flex-row justify-center">
      <div className="w-4xl py-8">
        <div className="flex flex-row items-center justify-between">
          <h1 className="font-bold text-size-2xl">MINGYAN WANG | 汪铭彦</h1>
          <div className="flex flex-row gap-4">
            <a href="#about" className="font-bold">
              ABOUT
            </a>
            <a href="#portfolio">PORTFOLIO</a>
          </div>
        </div>
        <div className="w-full h-[1px] bg-blueGray mb-8 mt-4" />
        <section id="about" className="w-full h-md">
          <div className="section-title">About</div>
          <div className="flex flex-row gap-8">
            <div className="flex place-items-center place-content-center bg-blue rounded-xl h-[15rem] min-w-[15rem]">
              Image
            </div>
            <article className="article">
              <p className="font-bold">Hi, I am Mingyan Wang! 👋</p>
              <br />
              <p>
                I am a second year Master student in{" "}
                <span className="article-highlight">
                  the school of Software Technology
                </span>{" "}
                at{" "}
                <span className="article-highlight">Zhejiang University</span>.
                I’m working with Prof. Jinghua Huang at the International Design
                Institude (IDI) of Zhejiang University.
              </p>
              <br />
              <p>
                My research investigates human behaviour in human-computer
                interaction (HCI) using measures such as eye tracking and
                electromyography. I am interested in human factors and
                ergonomics within HCI, focusing on designing and evaluating
                innovative interaction modalities, including natural user
                interfaces (NUIs) like gesture interactions, to enhance user
                experiences.
              </p>
            </article>
          </div>
        </section>
        <section id="portfolio" className="w-full h-md">
          <div className="section-title">Research</div>
        </section>
      </div>
    </div>
  );
};

export default App;
