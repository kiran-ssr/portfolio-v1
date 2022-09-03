import React, { useState } from "react";
import "./qualification.css";
import { BiCodeAlt } from "react-icons/bi";
import { AiOutlineCalendar } from "react-icons/ai";
import { FaGraduationCap } from "react-icons/fa";

const Qualification = () => {
  const [toggle, setToggle] = useState(1);

  const toggleTab = (index) => {
    setToggle(index);
  };

  return (
    <section className="qualification section">
      <h2 className="section_title">Qualification</h2>
      <span className="section_subtitle">My Personal Journey</span>

      <div className="qualification_container container">
        <div className="qualification_tabs">
          <div
            onClick={() => toggleTab(1)}
            className={
              toggle === 1
                ? "qualification_button qualification_active button--flex"
                : "qualification_button button--flex"
            }
          >
            <FaGraduationCap className="qualification_icon" />
            Education
          </div>

          <div
            onClick={() => toggleTab(2)}
            className={
              toggle === 2
                ? "qualification_button qualification_active button--flex"
                : "qualification_button button--flex"
            }
          >
            <BiCodeAlt className="qualification_icon" />
            Experience
          </div>
        </div>

        <div className="qualification_sections">
          <div
            className={
              toggle === 1
                ? "qualification_content qualification_content-active"
                : "qualification_content"
            }
          >
            <div className="qualification_data">
              <div>
                <h3 className="qualification_title">Web Design</h3>
                <span className="qualification_subtitle">Centennial</span>
                <div className="qualification_calender">
                  <AiOutlineCalendar /> 2021 - Present
                </div>
              </div>
              <div>
                <span className="qualification_rounder"></span>
                <span className="qualification_line"></span>
              </div>
            </div>

            <div className="qualification_data">
              <div></div>
              <div>
                <span className="qualification_rounder"></span>
                <span className="qualification_line"></span>
              </div>

              <div>
                <h3 className="qualification_title">Art Director</h3>
                <span className="qualification_subtitle">Centennial</span>
                <div className="qualification_calender">
                  <AiOutlineCalendar /> 2021 - Present
                </div>
              </div>
            </div>

            <div className="qualification_data">
              <div>
                <h3 className="qualification_title">Web Development</h3>
                <span className="qualification_subtitle">Centennial</span>
                <div className="qualification_calender">
                  <AiOutlineCalendar /> 2021 - Present
                </div>
              </div>
              <div>
                <span className="qualification_rounder"></span>
                <span className="qualification_line"></span>
              </div>
            </div>

            <div className="qualification_data">
              <div></div>
              <div>
                <span className="qualification_rounder"></span>
                <span className="qualification_line"></span>
              </div>

              <div>
                <h3 className="qualification_title">UX Expert</h3>
                <span className="qualification_subtitle">Centennial</span>
                <div className="qualification_calender">
                  <AiOutlineCalendar /> 2021 - Present
                </div>
              </div>
            </div>
          </div>

          <div
            className={
              toggle === 2
                ? "qualification_content qualification_content-active"
                : "qualification_content"
            }
          >
            <div className="qualification_data">
              <div>
                <h3 className="qualification_title">Product Designer</h3>
                <span className="qualification_subtitle">Centennial</span>
                <div className="qualification_calender">
                  <AiOutlineCalendar /> 2021 - Present
                </div>
              </div>
              <div>
                <span className="qualification_rounder"></span>
                <span className="qualification_line"></span>
              </div>
            </div>

            <div className="qualification_data">
              <div></div>
              <div>
                <span className="qualification_rounder"></span>
                <span className="qualification_line"></span>
              </div>

              <div>
                <h3 className="qualification_title">UX Designer</h3>
                <span className="qualification_subtitle">Centennial</span>
                <div className="qualification_calender">
                  <AiOutlineCalendar /> 2021 - Present
                </div>
              </div>
            </div>

            <div className="qualification_data">
              <div>
                <h3 className="qualification_title">web Designer</h3>
                <span className="qualification_subtitle">Centennial</span>
                <div className="qualification_calender">
                  <AiOutlineCalendar /> 2021 - Present
                </div>
              </div>
              <div>
                <span className="qualification_rounder"></span>
                <span className="qualification_line"></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Qualification;
