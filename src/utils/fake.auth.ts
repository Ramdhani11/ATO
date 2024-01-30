interface AuthProvider {
  isAuthenticated: boolean;
  username?: null | string;
  signin(): Promise<void>;
  signout(): Promise<void>;
}

/**
 * This represents some generic auth provider API, like Firebase.
 */
export const fakeAuthProvider: AuthProvider = {
  isAuthenticated: false,
  async signin() {
    // await new Promise((r) => setTimeout(r, 500)); // fake delay
    fakeAuthProvider.isAuthenticated = true;
    // fakeAuthProvider.username = username;
  },
  async signout() {
    // await new Promise((r) => setTimeout(r, 500)); // fake delay
    fakeAuthProvider.isAuthenticated = false;
    // fakeAuthProvider.username = "";
  },
};
