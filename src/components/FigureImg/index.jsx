const FigureImg = ({ className, src, alt }) => {
	return (
		<figure className={className}>
			<img src={src} alt={alt} />
		</figure>
	);
};
export default FigureImg;
