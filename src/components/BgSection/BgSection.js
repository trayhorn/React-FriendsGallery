import './BgSection.css';
import { useState } from 'react';
import initialColors from '../../backgroundColors.json';

const BgSection = () => {
  const [activeOptionIdx, setActiveOptionIdx] = useState();
  const [isSectionOpen, setIsSectionOpen] = useState(false);

  const makeOptionActive = index => {
    const classArray = ['bgItem'];
    if (activeOptionIdx === index) {
      classArray.push('activeItem');
    }

    return classArray.join(' ');
  };

  const makeOptionUnactive = (e) => {
    if (e.target.className !== 'bgItem') {
      setActiveOptionIdx()
    }
  };

  const onButtonClick = () => {
    if (!isSectionOpen) {
      setIsSectionOpen(true);
    } else {
      setIsSectionOpen(false);
    }
  }


  return (
    <section className="bgBox" onClick={makeOptionUnactive}>
      <h1>
        Choose the background
        <button onClick={onButtonClick}>Click</button>
      </h1>
      {isSectionOpen && (
        <div className="bgSection">
          {initialColors.map(({ color, label }, index) => (
            <div key={label}>
              <div
                className={`${makeOptionActive(index)}`}
                style={{ backgroundColor: color }}
                onClick={() => setActiveOptionIdx(index)}
              ></div>
              <p className="bgItemName">{label}</p>
            </div>
          ))}
        </div>
      )}
    </section>
  );
};

export default BgSection;
