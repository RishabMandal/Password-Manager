import React from "react";

export default function Practice() {
  return (
    <section className="qualification section justify-center text-center">
      <h2 className="text-4xl font-bold mb-3">Qualification</h2>
      <span className="subtitle">My personal journey</span>

      <div className="containeer containeer">
        <div className="mx-auto my-4 text-red-600">
          <button>Education</button>
        </div>

        <div className="qualification sections">
          <div className="qualification content">
            <div className="qualification data">
              <div>
                <h3 className="qualification_title">Computer Engineer</h3>
                <span className="qualification_sub-title">Peru - University</span>
                <div className="qualification_calendar">
                  <i></i>
                  2009 - 2014
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
