interface IFilter {
  male: boolean;
  female: boolean;
  page: number;
}

interface IUser {
  name: string;
  surname: string;
  age: number;
  city: string;
  picture: string;
  email: string;
  phone: string;
  gender: string;
  id: string;
}

export type { IFilter, IUser };
