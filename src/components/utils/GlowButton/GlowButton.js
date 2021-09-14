import './GlowButton.scss';

const GlowButton = ({ children, handler, title = 'GlowButton' }) => {
	return (
		<button className='button_styles' onClick={handler} title={title}>
			<span>{title}</span>
			{children}
		</button>
	);
};

export default GlowButton;
