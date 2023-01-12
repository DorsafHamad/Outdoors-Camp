export class UserBase {
  firstName?: string;
  lastName?: string;
  email?: string;
  password?: string;
  adress?: string;
  phone?: string;
  photo?: string;
  logo?: string;
}
export class CreateUserDto extends UserBase {
}
export class UpdateUserDto extends UserBase {
  _id?: string;
}