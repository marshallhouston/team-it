const validateInputs = (name, phone, email) => {
  return {
    name: name.length > 0,
    phone: phone.replace(/\D/g,'').length === 10,
    email: email.length > 0,
  }
}

export default validateInputs
