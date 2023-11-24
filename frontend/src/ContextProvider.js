import { createContext } from "react";

// 관리할 state 종류별로 타입 정의
// 초기값 설정할 필요 없음 -> 독립적으로 테스트하려면 활용 : defaultValue
const Context = createContext({
    loggedUser: {
        username: '',
        password: '',
    },
    loggedIn: false,
    setLoggedUser: () => {},
    setLoggedIn: () => {}
});

export default Context;

