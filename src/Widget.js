import React from 'react';
import './Widget.css';
import InfoIcon from '@material-ui/icons/Info';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';

function Widget() {
    const newsArticle = (heading, subtitle) => (
        <div className="widget__article">
          <div className="widgets__articleleft">
            <FiberManualRecordIcon />
          </div>
    
          <div className="widgets__articleright">
            <h4>{heading}</h4>
            <p>{subtitle}</p>
          </div>
        </div>
      );
    
      return (
        <div className="widgets">
          <div className="widget__header">
            <h2> Global News</h2>
            <InfoIcon />
          </div>
    
          {newsArticle("The Earth is definitely NOT FLAT !!! ", "Tops news - 324 readers")}
          {newsArticle("Vaccinations don't cause cancer", "Tops news - 2,324 readers")}
        </div>
      )
    }

export default Widget
