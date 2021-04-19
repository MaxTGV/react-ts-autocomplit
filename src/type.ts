export type UsersType = {
    id: string,
    name: string
  }
  
 export type PhotosType = {
    id: string,
    url: string
  }
  
 export type DataType = {
    users: UsersType[] | undefined,
    photos: PhotosType[] | undefined
  }