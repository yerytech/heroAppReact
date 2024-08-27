import { types } from "../../../auth/types/types";

describe('Pruebas en "Types.js"', () => {
  test("debe de regresar estos types", () => {
    expect(types).toEqual({
      login: "[Auth] login",
      logout: "[Auth] logout",
      register: "[Auth] register",
    });
  });
});
