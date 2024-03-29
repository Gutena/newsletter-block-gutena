/**
 * WordPress dependencies
 */
import { registerBlockType } from '@wordpress/blocks';
import { useBlockProps } from '@wordpress/block-editor';

/**
 * Internal dependencies
 */
import metadata from './data.json';
import edit from './edit';
import save from './save';

/**
 * External dependencies
 */
import { omit } from 'lodash';

/**
 * Import custom
 */
import DynamicStyles from './styles';

/**
 * Register Block
 */
registerBlockType( metadata, {
	edit,
	save,
	icon: (
		<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
			<g clipPath="url(#clip0_3268_156)">
				<path d="M3.11111 2H20.8889C21.1836 2 21.4662 2.11706 21.6746 2.32544C21.8829 2.53381 22 2.81643 22 3.11111V20.8889C22 21.1836 21.8829 21.4662 21.6746 21.6746C21.4662 21.8829 21.1836 22 20.8889 22H3.11111C2.81643 22 2.53381 21.8829 2.32544 21.6746C2.11706 21.4662 2 21.1836 2 20.8889V3.11111C2 2.81643 2.11706 2.53381 2.32544 2.32544C2.53381 2.11706 2.81643 2 3.11111 2ZM4.22222 4.22222V19.7778H19.7778V4.22222H4.22222ZM6.44444 10.8889H17.5556V13.1111H6.44444V10.8889Z" fill="#0EA489"/>
			</g>
		<defs>
			<clipPath id="clip0_3268_156">
				<rect width="24" height="24" fill="white"/>
			</clipPath>
		</defs>
		</svg>
	),
	deprecated: [
		{
			attributes: omit( metadata?.attributes, [ 'inputPlaceholder' ] ),
			save: ( { attributes } ) => {
				const { inputAlign } = attributes;

				const blockProps = useBlockProps.save( {
					className: 'gutena-newsletter-form-input-block',
					style: DynamicStyles( attributes )
				} );

				return (
					<div { ...blockProps }>
						<input type="email" id="gutena-newsletter-field" className={ `gutena-newsletter-field ${ inputAlign }` } placeholder="name@email.com" aria-label="Input Field" />
					</div>
				);
			},
		}
	]
} );