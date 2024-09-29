function changeTab(tab) {
    // Hide both contents
    document.getElementById('pendaftaran_content').classList.add('hidden');
    document.getElementById('registrasi_content').classList.add('hidden');

    // Remove active styles from both tabs
    document.getElementById('registrasi_tab').classList.remove('bg-gray-100', 'text-blue-500');
    document.getElementById('pendaftar_tab').classList.remove('bg-gray-100', 'text-blue-500');

    // Show the selected tab content
    if (tab === 'registrasi') {
        document.getElementById('registrasi_content').classList.remove('hidden');
        document.getElementById('registrasi_tab').classList.add('bg-gray-100', 'text-blue-500');
    } else if (tab === 'pendaftar') {
        document.getElementById('pendaftaran_content').classList.remove('hidden');
        document.getElementById('pendaftar_tab').classList.add('bg-gray-100', 'text-blue-500');
    }
}

class Pendaftar {
    constructor(nama, umur, uangSangu){
        this.nama = nama;
        this.umur = umur;
        this.uangSangu = uangSangu;
    }
}

function formatRupiah(amount) {
    return new Intl.NumberFormat('id-ID', {
        style: 'currency',
        currency: 'IDR',
        minimumFractionDigits: 0,
        maximumFractionDigits: 0,
    }).format(amount);
}

async function submitForm(nama, umur, uangSangu) {
    return new Promise((resolve) => {
        setTimeout(() => {
            const pendaftarBaru = new Pendaftar(nama, umur, uangSangu)
            resolve(pendaftarBaru)
        }, 1000);
    })
}


let listPendaftar = []

console.log(listPendaftar)

function renderPendaftar() {
    const tableBody = document.querySelector("table tbody");
    tableBody.innerHTML = "";

    listPendaftar.forEach((item, index) => {
        const row = document.createElement("tr");
        row.classList.add('text-xs')
        row.innerHTML = `
            <td class="p-2 border text-center">${index + 1}</td>
            <td class="p-2 border text-center">${item.nama}</td>
            <td class="p-2 border text-center">${item.umur}</td>
            <td class="p-2 border text-center">${ formatRupiah(item.uangSangu)}</td>
        `;

        tableBody.appendChild(row);
    })

}


function hitungRataRata() {
    if (listPendaftar.length === 0) {
        document.getElementById('uang_sangu_avg').innerText = 0;
        document.getElementById('umur_avg').innerText = 0;
        return;
    }

    let totalUangSangu = 0;
    let totalUmur = 0;

    listPendaftar.forEach(pendaftar => {
        totalUangSangu += parseInt(pendaftar.uangSangu);
        totalUmur += parseInt(pendaftar.umur);
    });

    const rataRataUangSangu = totalUangSangu / listPendaftar.length;
    const rataRataUmur = totalUmur / listPendaftar.length;

    document.getElementById('uang_sangu_avg').innerText = formatRupiah(rataRataUangSangu);
    document.getElementById('umur_avg').innerText = rataRataUmur.toFixed(0);
}



document.querySelector('form').addEventListener('submit', async function(e) {
    e.preventDefault()

    const nama = document.getElementById("nama").value;
    const umur = document.getElementById("umur").value;
    const uangSangu = document.getElementById("uangSangu").value;

    console.log(uangSangu)
    const pendaftarBaru = await submitForm(nama, umur, uangSangu)

    
    listPendaftar.push(pendaftarBaru)
    console.log(listPendaftar)

    renderPendaftar();

    hitungRataRata();

    e.target.reset()

    changeTab("pendaftar")
})








