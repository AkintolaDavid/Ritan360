import React from "react";
import "./Blog.css";
import pic from "../asset/INTOUCH.jpg";
import { Navbar } from "../Navbar/Navbar";
import { Contactme } from "../Contactme/Contactme";
export const Blog = () => {
  return (
    <>
      <Navbar />{" "}
      <div className="blogmaincontainer">
        <div className="blogcontainer">
          <div className="blog">
            <img src={pic} />
            <span className="blogcategory">Business, News, Technology</span>
            <span className="blogheader">
              WhatsApp Business App for small businesses
            </span>
            <span className="blogsubheader">
              Posted on January 28, 2018 By adebowalepro
            </span>
            <span className="blogtext">
              WhatsApp Business App for small businesses is finally launched.
              The New Year is filled with so much expectation and excitement.
              For us, at Ritan360 Technologies
            </span>
            <button className="blogBTN">READ MORE</button>
          </div>
          <div className="blog">
            <img src={pic} />
            <span className="blogcategory">Business, News, Technology</span>
            <span className="blogheader">Why your website needs HTTPS </span>
            <span className="blogsubheader">
              Posted on December 15, 2017 By adebowalepro{" "}
            </span>
            <span className="blogtext">
              The year 2017 is finally wrapping up and for us, at Ritan360
              Technologies we want to say thank you to all our esteemed clients,
              prospects,{" "}
            </span>
            <button className="blogBTN">READ MORE</button>
          </div>
          <div className="blog">
            <img src={pic} />
            <span className="blogcategory">Business, News, Technology</span>
            <span className="blogheader">
              Why SEO is important to your Business{" "}
            </span>
            <span className="blogsubheader">
              Posted on October 18, 2017 - By adebowalepro{" "}
            </span>
            <span className="blogtext">
              WHAT IS SEO? SEO is short for search engine optimization or search
              engine optimizer. SEO is a set of rules that can be followed by{" "}
            </span>
            <button className="blogBTN">READ MORE</button>
          </div>
          <div className="blog">
            <img src={pic} />
            <span className="blogcategory">Business, News, Technology</span>
            <span className="blogheader">
              Importance of A Having A Strong Password.{" "}
            </span>
            <span className="blogsubheader">
              Posted on October 15, 2017 - By adebowalepro
            </span>
            <span className="blogtext">
              A password is a string of characters that allows access to a
              computer, interface, or system. Believe it or not, most people’s
              passwords aren’t very{" "}
            </span>
            <button className="blogBTN">READ MORE</button>
          </div>
          <div className="blog">
            <img src={pic} />
            <span className="blogcategory">Business, News, Technology</span>
            <span className="blogheader">
              What Kind Of Website Would You Want; STATIC OR DYNAMIC?{" "}
            </span>
            <span className="blogsubheader">
              Posted on October 13, 2017 - By adebowalepro
            </span>
            <span className="blogtext">
              In simple terms, a static website is one whose content cannot be
              change without a developer editing its source code, while a
              dynamic website can{" "}
            </span>
            <button className="blogBTN">READ MORE</button>
          </div>
          <div className="blog">
            <img src={pic} />
            <span className="blogcategory">Business, News, Technology</span>
            <span className="blogheader">
              Why your business needs a professional website{" "}
            </span>
            <span className="blogsubheader">
              Posted on October 11, 2017 - By adebowalepro
            </span>
            <span className="blogtext">
              In a fast-paced world where everything is instant, people no
              longer have the luxury of time for looking in a phone book or
              asking friends
            </span>
            <button className="blogBTN">READ MORE</button>
          </div>{" "}
          <div className="blog">
            <img src={pic} />
            <span className="blogcategory">Business, News, Technology</span>
            <span className="blogheader">
              Website Speed – Why is it Important to your business?{" "}
            </span>
            <span className="blogsubheader">
              Posted on October 3, 2017 - By adebowalepro
            </span>
            <span className="blogtext">
              Introduction Most times website speed can easily be overlooked by
              some website owners, but it’s the first thing your visitors
              notice. It is official: Google
            </span>
            <button className="blogBTN">READ MORE</button>
          </div>
          <div className="blog">
            <img src={pic} />
            <span className="blogcategory">Business, News, Technology</span>
            <span className="blogheader">
              Why you must Market your Business{" "}
            </span>
            <span className="blogsubheader">
              Posted on September 25, 2017 - By adebowalepro
            </span>
            <span className="blogtext">
              The importance of marketing cannot be overemphasized for any
              business that wants to be seen or heard of in our world today and
              most importantly
            </span>
            <button className="blogBTN">READ MORE</button>
          </div>
          <div className="blog">
            <img src={pic} />
            <span className="blogcategory">Business, News, Technology</span>
            <span className="blogheader">Doctor please help my computer </span>
            <span className="blogsubheader">
              Posted on September 15, 2017 - By adebowalepro
            </span>
            <span className="blogtext">
              A lot of time I often hear people say, “I need to format my
              computer; it’s too SLOW and HANGING! The sincere truth is that
            </span>
            <button className="blogBTN">READ MORE</button>
          </div>
        </div>
      </div>
      <Contactme />
    </>
  );
};
