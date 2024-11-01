const chapter = document.getElementById('chapter');
const popup = document.getElementById('popup');
const totalPages = 10; // Ajuste este número para o total de páginas do seu capítulo

// Carrega as páginas SVG
for (let i = 1; i <= totalPages; i++) {
		const page = document.createElement('div');
		page.className = 'page';
		page.innerHTML = `<object type="image/svg+xml" data="assets/img/book/cp1/${i}.svg" class="img-fluid"></object>`;
		chapter.appendChild(page);
}

// Dicionário de termos e vídeos (exemplo)
const dictionary = {
		'vestibular': {
				meaning: 'Exame de admissão para universidades no Brasil',
				video: 'https://exemplo.com/video-vestibular.mp4'
		},
		'filología hispánica': {
				meaning: 'Estudo da língua e literatura espanhola',
				video: 'https://exemplo.com/video-filologia.mp4'
		}
		// Adicione mais termos conforme necessário
};

// Adiciona interatividade aos textos
document.body.addEventListener('click', function(e) {
		const clickedText = e.target.textContent.trim().toLowerCase();
		if (dictionary[clickedText]) {
				const rect = e.target.getBoundingClientRect();
				popup.style.left = `${rect.left}px`;
				popup.style.top = `${rect.bottom + window.scrollY}px`;
				popup.innerHTML = `
						<h3>${clickedText}</h3>
						<p>${dictionary[clickedText].meaning}</p>
						<div class="ratio ratio-16x9">
								<iframe src="${dictionary[clickedText].video}" allowfullscreen></iframe>
						</div>
				`;
				popup.style.display = 'block';
		} else {
				popup.style.display = 'none';
		}
});
