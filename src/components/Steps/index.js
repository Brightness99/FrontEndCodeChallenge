import React, { useState, useEffect } from 'react';
import './index.css';

const apiUrl = 'https://uqnzta2geb.execute-api.us-east-1.amazonaws.com/default/FrontEndCodeChallenge';

function Steps() {
  const [stepsData, setStepsData] = useState([]);
  const [loading, setLoading] = useState();

  useEffect(() => {
    setLoading(true);
    fetch(apiUrl)
      .then(response => response.json())
      .then(data => {
        const sortedData = data.sort((a, b) => parseInt(a.stepNumber) - parseInt(b.stepNumber));
        const stepsObj = sortedData.map(item => {
          const sortedVersionContent = item.versionContent.sort((a, b) => {
            const aTime = (new Date(a.effectiveDate)).getTime();
            const bTime = (new Date(b.effectiveDate)).getTime();
            
            return bTime - aTime;
          });

          return {
            id: item.id,
            stepNumber: parseInt(item.stepNumber) < 10 ? `0${item.stepNumber}` : item.stepNumber,
            title: sortedVersionContent[0].title,
            body: sortedVersionContent[0].body,
          }
        });

        setStepsData(stepsObj);
        setLoading(false);
      })
      .catch(() => {
        setLoading(false);
        alert('Fetch Error!')
      });
  }, []);

  return (
    <div className="steps">
      <div className="container">
        <p className="h3">How It Works</p>
        <div className="steps__content">
          {loading
           ? <p className="h6 loading">Loading...</p>
           : stepsData.map(item => (
              <div key={item.id} className="steps__item">
                <p className="h1">{item.stepNumber}</p>
                <div className="seperate" />
                <p className="h6-sm t-bold title">{item.title}</p>
                <p className="h6-sm body">{item.body}</p>
              </div>
            ))
        }
        </div>
      </div>
    </div>
  );
}

export default Steps;
