function validarEmail(email) {
    return email.includes('@')&& email.includes('.')
}
console.log(validarEmail('teste@exemplo.com'))