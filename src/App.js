import React, { useState } from 'react';
import StarRating from './components/StarRating';
import Dialog from './components/Dialog';

function App() {
  const [isDialogOpen, setDialogOpen] = useState(false);
  const [selectedRating, setSelectedRating] = useState(0);

  const handleOpenDialog = (event) => {
    event.preventDefault(); // Prevent button from navigating to a new page
    setSelectedRating(0);
    setDialogOpen(true);
  };

  const handleCloseDialog = () => {
    setDialogOpen(false);
  };

  const handleRatingChange = (rating) => {
    setSelectedRating(rating);
  };

  return (
    <div className="App">
      {!isDialogOpen && (
        <div>
          <StarRating selectedRating={selectedRating} onRatingChange={handleRatingChange} />
          <button onClick={handleOpenDialog}>Open Dialog</button>
        </div>
      )}
      {isDialogOpen && (
        <Dialog onClose={handleCloseDialog} />
      )}
    </div>
  );
}

export default App;


