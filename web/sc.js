async function updateServerStatus() {
    try {
        const response = await fetch('/api/server-status');
        const status = await response.json();
        
        // Mengambil elemen HTML
        const playerCountElement = document.getElementById('player-count');
        const wotdNameElement = document.getElementById('wotd-name');
        const wotdImageElement = document.getElementById('wotd-image');

        // Memperbarui konten HTML
        playerCountElement.textContent = `Player Count: ${status.playerCount}`;
        wotdNameElement.textContent = `World of the Day: ${status.wotdName}`;
        wotdImageElement.src = status.wotdURL;
    } catch (error) {
        console.error('Failed to fetch server status:', error);
    }
}

// Memanggil fungsi untuk memperbarui status server saat halaman dimuat
document.addEventListener('DOMContentLoaded', updateServerStatus);
