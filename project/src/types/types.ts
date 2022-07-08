type CardProps = {
  cardProps: {
    price: number,
    paymentPeriod: string,
    rating: number,
    urlImg: string,
    name: string,
    cardId: number,
    isFavorite: boolean
    isPremium: boolean,
    type: string,
    urlPreview: string
  }
};

type CardsProps = {
  roomInfos: {
    price: number,
    paymentPeriod: string,
    rating: number,
    urlImg: string,
    name: string,
    cardId: number,
    isFavorite: boolean
    isPremium: boolean,
    type: string,
    urlPreview: string
  }[]
};

type CardsSectionMainPageProps = {
  cards: JSX.Element[]
}

export type { CardProps, CardsProps, CardsSectionMainPageProps };
