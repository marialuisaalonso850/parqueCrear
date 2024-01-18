export interface AuthResponse{
    body: {
        user: User;
        parqueadero: parqueadero;
        accessToken: string;
        refreshToken: string;
    };
}

export interface AuthResponseError{
    body:{
        error: string;
    }
}

export interface ExtendedAuthContext {
    esAutentico: boolean;
    getAccessToken: () => string;
    saveUser: (userData: AuthResponse) => void;
    getRefreshToken: () => string | null;
    getUser: () => User | undefined;
    signOut: () => void;
    getParqueadero: () => parqueadero | undefined;
    createParqueadero: (newParqueadero: parqueadero) => void;
    rol: string[]; // Add this line
  }

export interface User{
    _id: string;
    username: string;
    gmail: string;
    rol: string[];
}
export interface parqueadero{
    _id: string;
    nombre: string;
    longitud: string;
    altura:string ;
}

export interface AccessTokenResponse {
    statusCode: number;
    body: {
      accessToken: string; // Corrected typo here
    };
    error?: string;
  }
  