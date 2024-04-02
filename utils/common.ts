/** 이메일 유효성 검사 */
export function emailValidChk(email: string) {
    const emailPattern = /^[A-Za-z0-9_.-]+@[A-Za-z0-9-]+\.[A-Za-z0-9-]+/;
    return emailPattern.test(email);
}

/** getDay()에서 요일 반환 */
export function dayIntoWeekday(day: number) {
    if (day === 0) return "일";
    else if (day === 1) return "월";
    else if (day === 2) return "화";
    else if (day === 3) return "수";
    else if (day === 4) return "목";
    else if (day === 5) return "금";
    else if (day === 6) return "토";
}

/** 시간 배열에 저장(1시간 단위) */
export function handleTimeArr (startTime: number, endTime: number) {
    let arr: number[] = [];
    let diff = endTime - startTime;
    let time = startTime;
    for (let i = 0; i < diff; i++) {
        arr.push(time + i);
    }
    return arr;
}

/** 시간 배열에 저장(30분 단위) */
export function handleTimeBlockArr (startTime: number, endTime: number) {
    let arr: number[] = [];
    let diff = endTime - startTime;
    let time = startTime;
    for (let i = 0; i < diff; i++) {
        arr.push(time + i);
        arr.push(time + i + 0.5);
    }
    return arr;
}