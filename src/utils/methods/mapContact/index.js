export default ({
  id,
  displayName,
  emails = [],
  phoneNumbers = [],
}) => {
  const mappedEmails = emails.map(el => el.email);
  const mappedPhoneNumbers = phoneNumbers.map(el => el.number);

  return ({
    id,
    name: displayName,
    email: mappedEmails.length ? mappedEmails[0] : null,
    phoneNumber: mappedPhoneNumbers.length ? mappedPhoneNumbers[0] : null,
  });
};
