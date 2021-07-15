export interface User {
  dni: string;
  name: string;
  lastname: string;
  username: string;
  password: string;
  mail: string;
  address: string;
  phone: number;
  birth: string;
  id_role: number;
}

export interface Role {
  role_id: number;
  title: string;
  description: string;
}
