//custom hook
import axios from "axios";
import { IUser } from "../ts";

export async function useFetchUsers() {
  //get users from randomuser.me using axios and react-query
  const data = await axios.get("https://randomuser.me/api/?results=500");

  const filteredData: IUser[] = data.data.results
    .filter((user: any) => hasPrimes(user.location.postcode, 2))
    .map((user: any) => getImportantData(user));

  function getImportantData(user: any) {
    return {
      name: user.name.first,
      surname: user.name.last,
      city: user.location.city,
      gender: user.gender,
      picture: user.picture.large,
      age: user.dob.age,
      email: user.email,
      phone: user.phone,
      id: user.login.uuid,
    };
  }

  // check number is prime
  function isPrime(num: number) {
    for (let i = 2, s = Math.sqrt(num); i <= s; i++)
      if (num % i === 0) return false;
    return num > 1;
  }

  // check string contains at least X prime numbers
  function hasPrimes(postcode: string | number, cap: number) {
    const postcodeString = postcode.toString();
    const numberString = postcodeString.match(/\d+/g)?.join("");
    let count = 0;
    if (numberString) {
      numberString.split("").forEach((number: string) => {
        if (isPrime(parseInt(number))) {
          count++;
        }
      });
    }
    return count >= cap;
  }

  return filteredData;
}
