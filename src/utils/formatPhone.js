import { format } from "react-phone-input-auto-format"

const formatPhone = (phoneNumber) => {
  if (phoneNumber.length === 12 && phoneNumber[0] === '+' && phoneNumber[1] === '1') {
    let commonNumber = phoneNumber.substr(2)
    return format(commonNumber)
  } else {
    return format(phoneNumber)
  }
}

export default formatPhone
