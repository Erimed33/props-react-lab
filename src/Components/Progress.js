import React from "react";

export default function Progress({ targetAmount, donations }) {
  const totalRaised = donations.reduce((acc, donation) => acc + donation.amount, 0);
  const percentage = (totalRaised / targetAmount) * 100;

  return (
    <div className="progress" data-testid="progress-bar">
      <div
        className="progress-bar"
        role="progressbar"
        aria-valuenow={percentage}
        aria-valuemin="0"
        aria-valuemax="100"
        style={{ width: `${percentage}%` }}
      >
        Raised ${totalRaised} of ${targetAmount}
      </div>
    </div>
  );
}
