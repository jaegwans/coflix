function isNumber(value: any): value is number {
    // func: a is b{return boolean}}
    // 함수의 리턴값이 참이라면 a is b : a가 b타입이다.

    //약한 비교로 null undefined NaN을 걸러낸다.
    return value != null && typeof value === 'number';
}

export { isNumber };
