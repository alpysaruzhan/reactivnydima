import startImg from "./img/Frame 8.png";
import halfStartImg from "./img/Frame 9.png";

const renderStars = (rating) => {
    const fullStars = Math.floor(rating);
    const halfStar = rating % 1 >= 0.5 ? 1 : 0;
    const emptyStars = 5 - fullStars - halfStar;
    const stars = [];


    const empty_star = {
        width: '24px',
        height: '24px',
        filter: ' saturate(0%) ' 
    };

    const full_star = {
        width: '24px',
        height: '24px',
        filter: 'brightness(90%)  saturate(100%) hue-rotate(-15deg)' 
    };

    for (let i = 0; i < fullStars; i++) {
        stars.push(
            <span key={`full-${i}`} className="star full-star">
                <img style={full_star} src={startImg} alt="" />

            </span>
        );
    }
    if (halfStar) {
        stars.push(
            <span key="half" className="star half-star">
                <img style={full_star} src={halfStartImg} alt="" />

            </span>
        );
    }
    for (let i = 0; i < emptyStars; i++) {
        stars.push(
            <span key={`empty-${i}`} className="star empty-star">
                <img style={empty_star} src={startImg} alt="" />

            </span>
        );
    }
    return stars;
};

export default renderStars; // список экспортируемых переменных


