// Máscaras simples de exemplo
document.getElementById('cpf').addEventListener('input', (e) => {
  e.target.value = e.target.value
    .replace(/\D/g, '')
    .replace(/(\d{3})(\d)/, '$1.$2')
    .replace(/(\d{3})(\d)/, '$1.$2')
    .replace(/(\d{3})(\d{1,2})$/, '$1-$2');
});

document.getElementById('telefone').addEventListener('input', (e) => {
  e.target.value = e.target.value
    .replace(/\D/g, '')
    .replace(/(\d{2})(\d)/, '($1) $2')
    .replace(/(\d{5})(\d{4})$/, '$1-$2');
});

document.getElementById('cep').addEventListener('input', (e) => {
  e.target.value = e.target.value
    .replace(/\D/g, '')
    .replace(/(\d{5})(\d{3})$/, '$1-$2');
});
