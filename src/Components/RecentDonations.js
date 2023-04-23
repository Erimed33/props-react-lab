import React from "react";

export default function RecentDonations(props) {
  const { donations } = props;

  return (
    <div className="donations">
      <h2>Recent Donations</h2>
      {donations.map((donation) => (
        <div className="donation" key={donation.id}>
          <p>
            <strong>{donation.name}</strong> donated ${donation.amount}
          </p>
          <p>{donation.caption}</p>
        </div>
      ))}
    </div>
  );
}

