import { renderHook } from "@testing-library/react";
import { act } from "react-test-renderer";
import useForm from "./hook";

//Mejores Practicas
const setup = (params) => renderHook(() => useForm(params));

test('should change keyword', () => {
    const { result } = setup()

    act(() => { //Simula como se comporta realmente el componente y evita un falso negativo
        result.current.updateKeyword('asta')
    })

    expect(result.current.keyword).toBe('asta')
})

test('should use initial value', () => {
    const { result } = setup({ initialKeyword: 'gojo' })

    expect(result.current.keyword).toBe('gojo')
})

test('should update correctly times when used twice', () => {
    const { result } = setup({ initialKeyword: 'jujutsu kaisen' })

    act(() => { //Simula como se comporta realmente el componente y evita un falso negativo
        result.current.updateKeyword('jujutsu')
        result.current.updateKeyword('kaisen')
    })

    expect(result.current.keyword).toBe('kaisen')
    expect(result.current.times).toBe(2)
})