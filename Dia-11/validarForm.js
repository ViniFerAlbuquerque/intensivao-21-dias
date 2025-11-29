function validarFormulario(email) {
    return email.includes('@')&& email.includes('.')
}
console.log(validarFormulario('teste@dominio.com'))