import {  ref, set } from "firebase/database";
import { db } from './firebase';

export const toDB = (name, email, hostel, year, message, urls, userId) => {
    set(ref(db, 'Alumni/' + userId), {
      name: name,
      email: email,
      hostel: hostel,
      year: year,
      message: message,
      files : urls
    });
}


