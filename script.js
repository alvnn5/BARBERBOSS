function beli(produk, harga) {
    localStorage.removeItem('selectedProduk');
    localStorage.setItem('selectedProduk', JSON.stringify({ produk, harga }));
    window.location.href = 'transaksi.html';
}

function buatPesanan() {
    const nama = document.getElementById('nama').value.trim();
    const phone= document.getElementById('phone').value.trim();
    const date = document.getElementById('date').value;

    if (!nama || !phone || !date) {
        alert('Silakan lengkapi semua data.');
        return;
    }

    let hairmann = '';
    let price = 0;
    
    if (document.getElementById('jhon').checked) {
        hairmann = 'jhon';
        price = document.getElementById('jhon').getAttribute('data-price');
    } else if (document.getElementById('michael').checked) {
        hairmann = 'michael';
        price = document.getElementById('michael').getAttribute('data-price');
    } else {
        alert('Silakan pilih HAIRDRESER.');
        return;
    }

    
    const params = new URLSearchParams({
        nama,
        phone,
        hairmann,
        price,
        date,
    });

    window.location.href = `invoice.html?${params.toString()}`;
}
