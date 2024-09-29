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