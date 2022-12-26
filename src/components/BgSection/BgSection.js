import './BgSection.css';
import IconButton from '@mui/material/IconButton';
import ArrowCircleDownIcon from '@mui/icons-material/ArrowCircleDown';
import ArrowCircleUpIcon from '@mui/icons-material/ArrowCircleUp';
import { useState } from 'react';
import initialColors from '../../backgroundColors.json';

const BgSection = ({ setBackgroundColor }) => {
  const [activeOptionIdx, setActiveOptionIdx] = useState();
  const [isSectionOpen, setIsSectionOpen] = useState(false);

  const makeOptionActive = index => {
    const classArray = ['bgItem'];
    if (activeOptionIdx === index) {
      classArray.push('activeItem');
    }

    console.log();

    return classArray.join(' ');
  };

  const makeOptionUnactive = e => {
    if (e.target.className !== 'bgItem') {
      setActiveOptionIdx();
    }
  };

  const onButtonClick = () => {
    if (!isSectionOpen) {
      setIsSectionOpen(true);
    } else {
      setIsSectionOpen(false);
    }
  };

  return (
    <section className="bgBox" onClick={makeOptionUnactive}>
      <h1>
        Choose the background
        <IconButton aria-label="delete" onClick={onButtonClick}>
          {isSectionOpen ? (
            <ArrowCircleUpIcon color="secondary" fontSize="large" />
          ) : (
            <ArrowCircleDownIcon color="secondary" fontSize="large" />
          )}
        </IconButton>
      </h1>
      {isSectionOpen && (
        <div className="bgSection">
          {initialColors.map(({ color, label }, index) => (
            <div key={label}>
              <div
                className={`${makeOptionActive(index)}`}
                style={{ backgroundColor: color }}
                onClick={() => {
                  setActiveOptionIdx(index);
                  setBackgroundColor(color);
                }}
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
