export const ERROR_MESSAGE = {
  emptyString: '값을 입력해주세요',
  invalidOrder: '유효하지 않은 주문입니다. 다시 입력해 주세요.',
  invalidDate: '유효하지 않은 날짜입니다. 다시 입력해 주세요.',
};

export const INPUT_MESSAGE = {
  menu: '주문하실 메뉴를 메뉴와 개수를 알려 주세요. (e.g. 해산물파스타-2,레드와인-1,초코케이크-1)\n',
};

export const INPUT_MESSAGE_FUNCTION = {
  date(month) {
    return `${month}월 중 식당 예상 방문 날짜는 언제인가요? (숫자만 입력해 주세요!)\n`;
  },
};
