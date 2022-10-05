document.getElementById("btn").addEventListener('click', ()=> {
    let div = document.getElementById('tableContent');
    let name = document.getElementById('inpName').value;
    let nombre = "Juan";
    let edad = "21";
    let prog = "I45"

    div.innerHTML += `
    <tr>
        <td>${name}</td>
        <td>${edad}</td>
        <td>${prog}</td>
    </tr>`;
});