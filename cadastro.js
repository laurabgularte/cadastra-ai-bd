document.getElementById('employeeForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const nome = document.getElementById('fullName').value;
    const cargo = document.getElementById('role').value;

    console.log("Enviando dados:", {
        nome: nome,
        cpf: document.getElementById('cpf').value,
        cargo: cargo,
        email: document.getElementById('email').value
    });
alert('Cadastro realizado com sucesso!');
window.location.href = 'dashboard.html';

});