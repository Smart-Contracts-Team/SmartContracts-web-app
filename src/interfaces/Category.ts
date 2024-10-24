export interface ICategory {
  id: string
  name: string
  address: string
  imageUrl?: string
  user_id: string
}

export interface IRegisteredCategory {
  id: number
  registeredAt: string
  property: ICategory
  //areaId: string;
}

export interface IRegisterCategoryRequestDto {
  name: string
  imageUrl: string
  address: string
}
