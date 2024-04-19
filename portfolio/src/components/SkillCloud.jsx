import React, { useEffect } from "react";

import "../components/SkillCloud.css";

// Importing TagCloud package
import TagCloud from "TagCloud";

const SkillCloud = () => {
  // Animation settings for Text Cloud
  useEffect(() => {

    const container = '.tagcloud';
    let radii;
    const texts = [
      'HTML',
      'CSS',
      'SASS',
      'JavaScript',
      'Angular',
      'React',
      'Java',
      'AI/ML',
      'Python'
    
    ];
    const options = {
      radius:100,
      maxSpeed: 'normal',
      initSpeed: 'normal',
      keep: true,
    };

    TagCloud(container, texts, options);
  }, []);

  return (
    <>
      <div className="text-shpere">
        {/* span tag className must be "tagcloud"  */}
        <span className="tagcloud"></span>
      </div>
    </>
  );
};

export default SkillCloud;
