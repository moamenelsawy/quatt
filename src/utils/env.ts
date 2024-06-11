import dotenv from 'dotenv';
dotenv.config();

export default class ENV {
  public static BASE_URL = process.env.BASE_URL;
  public static ACCESS_TOKEN = process.env.ACCESS_TOKEN;
}
