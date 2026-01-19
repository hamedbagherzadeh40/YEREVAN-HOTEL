
export interface Message {
  role: 'user' | 'model';
  text: string;
}

export interface HotelRoom {
  id: string;
  name: string;
  description: string;
  imageUrl: string;
  price: number;
}
