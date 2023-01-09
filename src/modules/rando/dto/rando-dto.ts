export class RandoBase {
  name?: string;
  location?: string;
  adress?: string;
  photo?: string;
  
}
export class CreateRandoDto extends RandoBase {
}
export class UpdateRandoDto extends RandoBase {
  _id?: string;
}