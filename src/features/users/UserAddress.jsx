function UserAddress({
  type,
  firstName,
  lastName,
  address,
  apt,
  city,
  state,
  company,
  zipCode,
  country,
  phoneNumber,
  billingCountry,
  billingFirstName,
  billingLastName,
  billingCompany,
  billingAddress,
  billingApt,
  billingCity,
  billingState,
  billingZipCode,
  billingPhoneNumber,
}) {
  const formattedPhoneNumber = `(${phoneNumber?.slice(
    0,
    3,
  )}) ${phoneNumber?.slice(3, 6)}-${phoneNumber?.slice(6)}`;

  const formattedBillingPhoneNumber = `(${billingPhoneNumber?.slice(
    0,
    3,
  )}) ${billingPhoneNumber?.slice(3, 6)}-${billingPhoneNumber?.slice(6)}`;

  console.log(phoneNumber);
  if (type === "billing")
    return (
      <div className="ml-7 pt-3 text-sm">
        <p>{`${billingFirstName} ${billingLastName}`}</p>
        {billingCompany ? <p>{billingCompany}</p> : null}
        <p>{`${billingAddress}`}</p>
        {billingApt ? <p>{billingApt}</p> : null}
        <p>{`${billingCity}, ${billingState} ${billingZipCode}`}</p>
        <p>{billingCountry}</p>
        {billingPhoneNumber ? (
          <p className="mt-[2px]">{formattedBillingPhoneNumber}</p>
        ) : null}
      </div>
    );

  return (
    <div className="ml-7 pt-3 text-sm">
      <p>{`${firstName} ${lastName}`}</p>
      {company ? <p>{company}</p> : null}
      <p>{`${address}`}</p>
      {apt ? <p>{apt}</p> : null}
      <p>{`${city}, ${state} ${zipCode}`}</p>
      <p>{country}</p>
      {phoneNumber ? <p className="mt-[2px]">{formattedPhoneNumber}</p> : null}
    </div>
  );
}

export default UserAddress;
