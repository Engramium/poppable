import domReady from '@wordpress/dom-ready';

domReady(() => {
	const poppableModals = document.querySelectorAll(
		'.wp-block-poppable-poppable'
	);
	if (!poppableModals.length) {
		return;
	}

	poppableModals.forEach((modal) => {
		const modalConfig = {
			videoUrl: modal.getAttribute('data-poppable-video-url'),
			triggerId: modal.getAttribute('data-poppable-video-trigger-id'),
			autoPlay: modal.getAttribute('data-poppable-video-autoplay'),
			showCloseButton: modal.getAttribute('data-show-close-button'),
			closeOnClickOutside: modal.getAttribute(
				'data-close-on-click-outside'
			),
			escOnClose: modal.getAttribute('data-esc-on-close'),
		};

		const elements = {
			triggers: document.querySelectorAll(`.${modalConfig.triggerId}`),
			closeButton: modal.querySelector('#poppable-close-modal'),
			iframe: modal.querySelector('#poppable-video-iframe'),
		};

		// Validate required elements and attributes
		if (!modalConfig.videoUrl && !elements.triggers.length) {
			return;
		}

		const getVideoUrl = () => {
			// Convert regular YouTube URL to embed URL
			const videoId = extractVideoId(modalConfig.videoUrl);
			if (!videoId) {
				return '';
			}
			const params = modalConfig.autoPlay
				? '?iv_load_policy=3&rel=0&modestbranding=1playsinline=1&autoplay=1&mute=1'
				: '';
			return `https://www.youtube.com/embed/${videoId}${params}`;
		};

		const extractVideoId = (url) => {
			try {
				const urlObj = new URL(url);
				// Handle youtube.com/watch?v= format
				if (urlObj.searchParams.has('v')) {
					return urlObj.searchParams.get('v');
				}
				// Handle youtu.be/ format
				if (urlObj.hostname === 'youtu.be') {
					return urlObj.pathname.slice(1);
				}
				// Handle youtube.com/embed/ format
				if (urlObj.pathname.includes('/embed/')) {
					return urlObj.pathname.split('/embed/')[1];
				}
				return null;
			} catch (e) {
				return null;
			}
		};

		const openModal = () => {
			elements.iframe.src = getVideoUrl();
			modal.classList.add('has-poppable-video-modal-open');
		};

		const closeModal = () => {
			modal.classList.remove('has-poppable-video-modal-open');
			elements.iframe.src = '';
		};

		// Handle clicks outside the modal content
		const handleClickOutside = (event) => {
			// Check if click is outside the modal content
			if (event.target === modal) {
				closeModal();
			}
		};

		// Handle ESC key press
		const handleEscKey = (event) => {
			if (
				event.key === 'Escape' &&
				modal.classList.contains('has-poppable-video-modal-open')
			) {
				closeModal();
			}
		};

		// Add event listeners
		elements.triggers.forEach((trigger) => {
			trigger.style.cursor = 'pointer';
			trigger.addEventListener('click', openModal);
		});

		if (modalConfig.showCloseButton) {
			elements.closeButton.addEventListener('click', closeModal);
		}

		if (modalConfig.closeOnClickOutside) {
			modal.addEventListener('click', handleClickOutside);
		}

		if (modalConfig.escOnClose) {
			document.addEventListener('keydown', handleEscKey);
		}
	});
});
