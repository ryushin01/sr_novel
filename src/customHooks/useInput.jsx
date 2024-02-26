import { useCallback, useState } from 'react';

export function useInput(initialValue) {
  const [input, setInput] = useState(initialValue);

  /**
   * @description input의 value가 변경될 때마다 input을 변경한다.
   * useCallback을 사용하여 불필요한 렌더링을 방지한다.
   */
  const handleChangeValue = useCallback(
    e => {
      if (e.target) {
        // e.target이 있으면 구조분해 할당으로 name과 value를 추출한다.
        const { name, value } = e.target;
        setInput({ ...input, [name]: value });
      } else {
        // e.target이 없으면 객체로 전달되는 것이므로 객체를 병합한다.
        setInput({ ...input, ...e });
      }
    },
    [input],
  );

  return [input, handleChangeValue];
}
