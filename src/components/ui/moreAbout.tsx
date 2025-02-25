import React from 'react';

const MoreAbout = () => {
  return (
    <section id="moreAbout" className="moreAboutSection p-4">
      <div className="outerSectionDiv">
        <h2 className="title z-2 relative mb-36 md:text-5xl text-center lg:text-center mt-28 mb-12! text-balance text-3xl">
          More <span className="projectTitle projectTitleGradient font-bold">about me</span>
        </h2>
        <p className="text-lg text-gray-500 text-center">
          Here you can add more information about yourself, your journey, your skills, and anything else you want to share.
        </p>
      </div>
    </section>
  );
};

export default MoreAbout;