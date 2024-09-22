import CV from "./assets/cv.svg?react";
import Mail from "./assets/mail.svg?react";
import Location from "./assets/location.svg?react";
import pdf from "./assets/pdf.svg";
import { Paper, papers } from "./data";
import { FC, useState } from "react";
import clsx from "clsx";

const PaperCard: FC<{ paper: Paper }> = ({ paper }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="section-content">
      <a className="section-content-start" href={paper.url} target="_blank">
        <img src={paper.image} className="image" />
      </a>
      <article className="section-content-main academic">
        <h1 className="academic-title">
          <a href={paper.url} target="_blank">
            {paper.title}
          </a>
        </h1>
        <p className="academic-journal">{paper.journal}</p>
        <p className="academic-authors">{paper.authors}</p>
        <div className="academic-abstract">
          <div className="academic-abstract-summary">
            <span
              className={clsx("cursor-pointer", {
                "font-medium underline": isOpen,
              })}
              onClick={() => setIsOpen((value) => !value)}
            >
              Abstract
            </span>
            <div>|</div>
            <img src={pdf} className="cursor-pointer" />
          </div>
          <p className={clsx("overflow-hidden", isOpen ? "h-fit" : "h-0")}>
            {paper.abstract}
          </p>
        </div>
      </article>
    </div>
  );
};

export const About = () => {
  return (
    <div className="flex flex-col">
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
              <a
                href="http://www.cst.zju.edu.cn/"
                target="_blank"
                className="article-highlight"
              >
                the school of Software Technology
              </a>{" "}
              at{" "}
              <a
                href="https://www.zju.edu.cn/"
                target="_blank"
                className="article-highlight"
              >
                Zhejiang University
              </a>
              . I’m working with Prof. Jinghua Huang at the{" "}
              <a
                href="http://www.idi.zju.edu.cn/"
                target="_blank"
                className="article-highlight"
              >
                International Design Institute (IDI)
              </a>{" "}
              of Zhejiang University.
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
              <a href="/WANGMINGYAN.pdf" target="_blank">
                <CV className="icon" />
              </a>
              <a href="mailto:wangmingyan@zju.edu.cn">
                <Mail className="icon" />
              </a>
              <div>|</div>
              <a>
                <div className="flex flex-1 flex-row items-center gap-1">
                  <Location />
                  <div className="text-[#888888]">Hangzhou, China</div>
                </div>
              </a>
            </footer>
          </article>
        </div>
      </section>
      <section id="research" className="section">
        <header className="section-header">Research</header>
        {papers.map((paper, index) => (
          <PaperCard key={index} paper={paper} />
        ))}
      </section>
    </div>
  );
};
