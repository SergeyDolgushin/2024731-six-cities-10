const MULTIPLIER = 20;

const convertRatingtoStar = (rating: number) => Math.floor(rating * MULTIPLIER);

export { convertRatingtoStar };
