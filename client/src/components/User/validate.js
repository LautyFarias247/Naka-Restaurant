export const validate = (inputs)=>{
    let errors={}

    const regexName = /^([^0-9]*)$/;
    const regexNumber = /^\d*$/;   ///^([0-9]{2})?-?[0-9]{8}$/;
    const regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    const regexPassword = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;

    if (!inputs.name) errors.name = " Se requiere un nombre ";
    if (!regexName.test(inputs.name)) errors.name = " el nombre no puede contener numeros ";
    if (!inputs.phone) errors.phone = " Se Requiere un numero telefonico";
    //if (!regexNumber.test(inputs.phone)) errors.phone = " El Numero debe contener 8 0 10 digitos";
    if (!regexNumber.test(inputs.phone)) errors.phone = " El numero no puede contener letras ";
    if (inputs.phone.length > 10) errors.phone = " El numero debe tener 10 digitos ";
    if (!inputs.email) errors.email = " Se requiere un email ";
    if (!regexEmail.test(inputs.email)) errors.email = " El email no es valido ";
    if (!inputs.password) errors.password = " Se requiere un password ";
    if (!regexPassword.test(inputs.password)) errors.password = " El password debe contener mínimo ocho caracteres, al menos una letra y un número";

    return errors;
}