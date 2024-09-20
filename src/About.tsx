import cv from "./assets/cv.svg";
import mail from "./assets/mail.svg";
import location from "./assets/location.svg";
import pdf from "./assets/pdf.svg";
import { papers } from "./papers";

export const About = () => {
  return (
    <>
      <section id="about" className="section">
        <header className="section-header">About Me</header>
        <div className="section-content">
          <div className="section-content-start">
            <img src="/WANGMINGYAN.jpg" className="image" />
          </div>
          <article className="section-content-main article">
            <p className="font-bold">Hi, I am Mingyan Wang! 👋</p>
            <p>
              I am a second year Master student in{" "}
              <span className="article-highlight">
                the school of Software Technology
              </span>{" "}
              at <span className="article-highlight">Zhejiang University</span>.
              I’m working with Prof. Jinghua Huang at the International Design
              Institute (IDI) of Zhejiang University.
            </p>
            <p>
              My research investigates human behaviour in human-computer
              interaction (HCI) using measures such as eye tracking and
              electromyography. I am interested in human factors and ergonomics
              within HCI, focusing on designing and evaluating innovative
              interaction modalities, including natural user interfaces (NUIs)
              like gesture interactions, to enhance user experiences.
            </p>
            <footer className="section-footer">
              <a href="/WANGMINGYAN.pdf" target="__blank" className="contents">
                <img src={cv} />
              </a>
              <a href="mailto:wangmingyan@zju.edu.cn" className="contents">
                <img src={mail} />
              </a>
              <div>|</div>
              <div className="flex flex-1 flex-row gap-1">
                <img src={location} />
                <div>Hangzhou, China</div>
              </div>
            </footer>
          </article>
        </div>
      </section>
      <section id="research" className="section">
        <header className="section-header">Research</header>
        {papers.map((paper, index) => (
          <div key={index} className="section-content">
            <div className="image-placeholder section-content-start">Image</div>
            <article className="section-content-main academic">
              <h1 className="academic-title">{paper.title}</h1>
              <p className="academic-journal">{paper.journal}</p>
              <p className="academic-authors">{paper.authors}</p>
              <details className="group academic-abstract">
                <summary className="academic-abstract-summary">
                  Abstract
                  <div>|</div>
                  <img src={pdf} />
                </summary>
                <p>{paper.abstract}</p>
              </details>
            </article>
          </div>
        ))}
      </section>
    </>
  );
};
