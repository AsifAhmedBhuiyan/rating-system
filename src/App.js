import React, { useState } from 'react';
import StarRating from './components/StarRating';
import Dialog from './components/Dialog';

function App() {
  const [isDialogOpen, setDialogOpen] = useState(false);
  const [selectedRating, setSelectedRating] = useState(0);

  const handleOpenDialog = () => {
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
      <StarRating selectedRating={selectedRating} onRatingChange={handleRatingChange} />
      {isDialogOpen && <Dialog onClose={handleCloseDialog} />} {/* Render Dialog conditionally */}
      <button onClick={handleOpenDialog}>Open Dialog</button> {/* Button to open the dialog */}
    </div>
  );
}

export default App;
