//For Postal Code validation

function isValidPostalCode(postalCode) {
    // test zip code for example 27611
    //12345-6789, but not 1234, 123456, 123456789, or 1234-56789.
  var pcodeRegExp  = / ^[0-9]{5}(?:-[0-9]{4})?$ /i;   //matching starts with sign ^ ends with sign $.
//https://www.oreilly.com/library/view/regular-expressions-cookbook/9781449327453/ch04s14.html
  return pcodeRegExp.test(postalCode);
}  //isValidPostalCode

/*
^           # Assert position at the beginning of the string.
[0-9]{5}    # Match a digit, exactly five times.
(?:         # Group but don't capture:
  -         #   Match a literal "-".
  [0-9]{4}  #   Match a digit, exactly four times.
)           # End the noncapturing group.
  ?         #   Make the group optional.
$           # Assert position at the end of the string.
*/



//For EMAIL validation

function isValidEmail(email) {

  var emailRegExp  = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/i;   //matching starts with sign ^ ends with sign $.

  return emailRegExp.test(email);
}  //isValidPostalCode



//For PHONE NUMBER validation

function isValidPhone(phone) {

  var phoneRegExp  = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;    //matching starts with sign ^ ends with sign $.
  //https://www.w3resource.com/javascript/form/phone-no-validation.php

  return phoneRegExp.test(phone);
}  //isValidPostalCode



//For SSN validation
function isValidSSN(ssn) {

  var ssnRegExp  =  /^[0-9]{3}\-?[0-9]{2}\-?[0-9]{4}$/;   //matching starts with sign ^ ends with sign $.
  //https://www.w3resource.com/javascript/form/phone-no-validation.php

  return ssnRegExp.test(ssn);
}  //isValidPostalCode
