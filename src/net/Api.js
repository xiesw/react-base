/**
 * Created by pain on 2018/3/24.
 */
import Http from "./Http";

export default class Api {

  static getData() {
    return Http.get('https://www.easy-mock.com/mock/5ab85a06ea890f6260e86e55/welab/api/v4/installments');
  }
}