 const renderStars = (rating) => {
    const fullStars = Math.floor(rating);
    const halfStar = rating % 1 >= 0.5 ? 1 : 0;
    const emptyStars = 5 - fullStars - halfStar;
    const stars = [];
    for (let i = 0; i < fullStars; i++) {
        stars.push(
            <span key={`full-${i}`} className="star full-star">
                ★
            </span>
        );
    }
    if (halfStar) {
        stars.push(
            <span key="half" className="star half-star">
                &#11240;
            </span>
        );
    }
    for (let i = 0; i < emptyStars; i++) {
        stars.push(
            <span key={`empty-${i}`} className="star empty-star">
                ☆
            </span>
        );
    }
    return stars;
};

export default renderStars; // список экспортируемых переменных


