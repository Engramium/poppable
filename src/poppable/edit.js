import { useBlockProps } from '@wordpress/block-editor';
import { __ } from '@wordpress/i18n';
import Inspector from './Inspector';

export default function Edit({ attributes, setAttributes }) {
	return (
		<>
			<Inspector attributes={attributes} setAttributes={setAttributes} />
			<div {...useBlockProps()}>
				{__('Poppable Video Modal', 'poppable')}
			</div>
		</>
	);
}
