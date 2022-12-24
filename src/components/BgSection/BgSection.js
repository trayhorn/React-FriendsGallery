import { useState } from 'react';
import './BgSection.css';
import initialColors from '../../backgroundColors.json';

const BgSection = () => {
  const [activeOptionIdx, setActiveOptionIdx] = useState()

  const makeActiveOption = (index) => {
    const classArray = ['bgItem'];
    if (activeOptionIdx === index) {
      classArray.push('activeItem');
    }

    return classArray;
  }

  return (
    <section className="bgSection">
      {initialColors.map(({ color, label }, index) => (
          <div key={label}>
            <div
              className={`${makeActiveOption(index).join(' ')}`}
              style={{ backgroundColor: color }}
              onClick={() => setActiveOptionIdx(index)}
            ></div>
            <p className="bgItemName">{label}</p>
          </div>
        )
      )}
    </section>
  );
};

export default BgSection;

