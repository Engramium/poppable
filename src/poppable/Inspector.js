import { __ } from '@wordpress/i18n';
import { InspectorControls } from '@wordpress/block-editor';
import {
	PanelBody,
	TextControl,
	ToggleControl,
	__experimentalUnitControl as UnitControl,
} from '@wordpress/components';

const Inspector = ({ attributes, setAttributes }) => {
	const {
		contentWidth,
		triggerId,
		videoUrl,
		autoplay,
		showCloseButton,
		closeOnClickOutside,
		escOnClose,
	} = attributes;

	return (
		<InspectorControls>
			<PanelBody title={__('Settings', 'poppable')}>
				<UnitControl
					__nextHasNoMarginBottom
					label={__('Content Width', 'poppable')}
					placeholder={__('e.g., 800px', 'poppable')}
					help={__(
						'Set the width of the modal content area. Use px, %, vw, etc.',
						'poppable'
					)}
					value={contentWidth}
					onChange={(value) => setAttributes({ contentWidth: value })}
				/>
				<TextControl
					__nextHasNoMarginBottom
					label={__('Trigger ID', 'poppable')}
					placeholder={__('modal-trigger-1', 'poppable')}
					help={__(
						'Element ID that will trigger this modal when clicked. Must match the ID of your trigger element.',
						'poppable'
					)}
					value={triggerId}
					onChange={(value) => setAttributes({ triggerId: value })}
				/>
				<TextControl
					__nextHasNoMarginBottom
					label={__('YouTube Video URL', 'poppable')}
					placeholder={__(
						'https://www.youtube.com/watch?v=EXAMPLE',
						'poppable'
					)}
					help={__(
						'Enter a full YouTube video URL. The video will be embedded in the modal.',
						'poppable'
					)}
					value={videoUrl}
					onChange={(value) => setAttributes({ videoUrl: value })}
				/>
				<ToggleControl
					__nextHasNoMarginBottom
					label={__('Autoplay Video', 'poppable')}
					help={__(
						'When enabled, the video will play automatically when the modal opens.',
						'poppable'
					)}
					checked={autoplay}
					onChange={() => setAttributes({ autoplay: !autoplay })}
				/>
				<ToggleControl
					__nextHasNoMarginBottom
					label={__('Show Close Button', 'poppable')}
					help={__(
						'Display an X button in the corner of the modal to allow users to close it.',
						'poppable'
					)}
					checked={showCloseButton}
					onChange={() =>
						setAttributes({ showCloseButton: !showCloseButton })
					}
				/>
				<ToggleControl
					__nextHasNoMarginBottom
					label={__('Close On Click Outside', 'poppable')}
					help={__(
						'Allow users to close the modal by clicking outside of the content area.',
						'poppable'
					)}
					checked={closeOnClickOutside}
					onChange={() =>
						setAttributes({
							closeOnClickOutside: !closeOnClickOutside,
						})
					}
				/>
				<ToggleControl
					__nextHasNoMarginBottom
					label={__('Close On Press Esc Key', 'poppable')}
					help={__(
						'Allow users to close the modal by pressing the Escape key.',
						'poppable'
					)}
					checked={escOnClose}
					onChange={() => setAttributes({ escOnClose: !escOnClose })}
				/>
			</PanelBody>
		</InspectorControls>
	);
};

export default Inspector;
