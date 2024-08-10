document.addEventListener('DOMContentLoaded', () => {
   

    const novelContainer = document.getElementById('novelContainer');
    const searchInput = document.querySelector('.search-bar input');
    const clearSearch = document.getElementById('clear-search');

    function renderNovels(novels) {
        novelContainer.innerHTML = '';
        novels.forEach(novel => {
            const novelCard = document.createElement('div');
            novelCard.className = 'novel-card';

            const coverDiv = document.createElement('div');
            coverDiv.className = 'novel-cover';
            coverDiv.style.backgroundImage = `url(${novel.cover})`;

            const infoDiv = document.createElement('div');
            infoDiv.className = 'novel-info';

            const headerDiv = document.createElement('div');
            headerDiv.className = 'novel-header';

            const smallCoverDiv = document.createElement('div');
            smallCoverDiv.className = 'small-cover';
            smallCoverDiv.style.backgroundImage = `url(${novel.smallCover})`;

            const title = document.createElement('h2');
            title.className = 'novel-title';
            title.textContent = novel.title;

            const author = document.createElement('p');
            author.className = 'novel-author';
            author.textContent = novel.author;

            const description = document.createElement('p');
            description.className = 'novel-description';
            description.textContent = novel.description;

            const downloadLink = document.createElement('a');
            downloadLink.className = 'download-btn';
            downloadLink.href = novel.file;
            downloadLink.download = novel.title;
            downloadLink.textContent = 'Download Novel';

            const viewLink = document.createElement('a');
            viewLink.className = 'view-btn';
            viewLink.href = novel.file;
            viewLink.target = '_blank';
            viewLink.textContent = 'Read Online';

            headerDiv.appendChild(smallCoverDiv);
            headerDiv.appendChild(title);

            infoDiv.appendChild(headerDiv);
            infoDiv.appendChild(author);
            infoDiv.appendChild(description);
            infoDiv.appendChild(downloadLink);
            infoDiv.appendChild(viewLink); // Add the view link

            novelCard.appendChild(coverDiv);
            novelCard.appendChild(infoDiv);

            novelContainer.appendChild(novelCard);
        });
    }

    renderNovels(novels);

    searchInput.addEventListener('input', (event) => {
        const searchTerm = event.target.value.trim().toLowerCase();
        const filteredNovels = novels.filter(novel => novel.title.toLowerCase().includes(searchTerm));
        renderNovels(filteredNovels);
    });

    clearSearch.addEventListener('click', () => {
        searchInput.value = '';
        searchInput.dispatchEvent(new Event('input'));
    });
});

    // Fetch JSON file and render novels
    fetch('path/to/novels.json')
        .then(response => response.json())
        .then(novels => {
            renderNovels(novels);

            searchInput.addEventListener('input', (event) => {
                const searchTerm = event.target.value.trim().toLowerCase();
                const filteredNovels = novels.filter(novel => novel.title.toLowerCase().includes(searchTerm));
                renderNovels(filteredNovels);
            });

            clearSearch.addEventListener('click', () => {
                searchInput.value = '';
                searchInput.dispatchEvent(new Event('input'));
            });
        })
        .catch(error => console.error('Error loading novels:', error));
});
