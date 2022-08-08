type Card = {
  price: number,
  rating: number,
  images: string[],
  title: string,
  id: number,
  isFavorite: boolean
  isPremium: boolean,
  type: string,
  previewImage: string,
  location: Location,
  city: City,
  goods: string[],
  maxAdults: number,
  host: Host,
  description: string,
  bedrooms: number,
};

type CardProps = {
  card: Card
};

type CardsProps = {
  cards: Card[]
};

type CardsSectionMainPageProps = {
  cardsView: JSX.Element[]
};

type Location = {
  latitude: number
  longitude: number
  zoom: number
};

type City = {
  location: Location,
  name: string
};

type Host = {
  id: number,
  name: string,
  isPro: boolean,
  avatarUrl: string
};


type Point = {
  title: string;
  lat: number;
  lng: number;
};

type Points = Point[];

type Comment = {
  comment: string;
  date: string;
  id: number;
  rating: number;
  user: Host;
};

type AuthData = {
  email: string;
  password: string;
};

type UserData = {
  id: number;
  email: string;
  token: string;
  avatarUrl: string;
};

type UserComment = {
  comment: string;
  rating: number;
  selectedCard: string | undefined;
}

type UserBookmark = {
  isFavorite: boolean;
  id: number;
}

export type { CardProps, CardsProps, CardsSectionMainPageProps, Card, Point, Points, City, Comment, AuthData, UserData, UserComment, UserBookmark };
