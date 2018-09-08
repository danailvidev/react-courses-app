import React from 'react';

const FooterPage = ({authors, courses}) => {
  return (
    <div className="mastfoot">
      <span>
        Total Authors: {authors.length}
        </span>
      <span>
        Total Courses: {courses.length}
      </span>
    </div>
  );
};

export default FooterPage;
