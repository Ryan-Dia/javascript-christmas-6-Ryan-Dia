import Date from './Date.js';

class ChristmasModel {
  validateDate(input) {
    const date = Date.of(input);

    return date;
  }
}

export default ChristmasModel;

/**
 * date를 객체로 만들필요가 있을까? 지금 구현하면서 기능 목록을 보는데 객체로 만들어서 무언가를 계산을 해야지 아맞다
 * 이벤트기간을 계산해야겠는데? 그래서 해당 날짜가 크리스마스 디에이 할인기간인지, 펼인 할인인지 주말 할인인지, 특별 할인인지
 * 그리고 크리스마스 디데이 할인은 하루가 지날수록 100원씩 증가하니까 data가지고 계산해야할게 많다 그래서 객체로 하는게 좋을 것 같다.
 *
 */
