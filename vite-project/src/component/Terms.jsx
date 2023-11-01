import './login.css'
const Terms = () => {
  const terms = [
    "Rental Agreement: By renting a vehicle from us, you agree to the terms and conditions outlined in the rental agreement provided at the time of rental.",
    "Eligibility: You must be at least 18 years old and possess a valid driver's license to rent a vehicle.",
    "Reservation and Payment: Reservations are subject to availability. Payment is required at the time of reservation or upon vehicle pick-up.",
    "Rental Period: The rental period is calculated based on 24-hour increments. Late returns may result in additional charges.",
    "Cancellation Policy: Cancellations must be made at least 48 hours before the scheduled pick-up time to receive a full refund.",
    "Vehicle Pickup and Return: Please arrive on time for vehicle pick-up and return. Vehicles must be returned in the same condition as when rented. Additional cleaning fees may apply for excessive dirt or odors.",
    "Fuel Policy: Vehicles must be returned with the same fuel level as at the time of rental. You may choose to pre-purchase fuel at a set rate per gallon.",
    "Insurance: We offer optional insurance coverage. You may use your own insurance, but you are responsible for any damages.",
    "Maintenance and Repairs: We maintain our vehicles to high standards. Report any mechanical issues immediately.",
    "Governing Law: These terms and policies are governed by the laws of [Location] and any disputes will be resolved in the appropriate jurisdiction.",
    "Changes to Terms and Policies: We may update these terms and policies at our discretion. Check our website for the most current version.",
    "Damage and Repairs:In the event of any damage to the rented vehicle during the rental period, the renter is responsible for reporting the damage immediately.the renter must pay for the cost of repairs or the assessed damage, as per our requirements and the terms of the rental agreement",
    "Failure to address and cover the repair costs may result in legal action taken against the renter to recover the expenses incurred. We take vehicle damage seriously and expect our renters to fulfill their responsibilities in this regard."
  ];

  return (
    <div className='custom1-background'>
      <h1 className="TERM">Terms and Policies</h1>
      <ol className='SBOX1'>
        {terms.map((term, index) => (
          <li key={index}>{term}</li>
        ))}
      </ol>
    </div>
  );
};

export default Terms;
