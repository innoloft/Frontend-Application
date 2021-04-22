import { Trl } from "./Trl";

export interface Product {
    id?: number;
    name: string;
    description: string;
    picture: string;
    type: CategoriesEntityOrBusinessModelsEntityOrTypeOrTrl;
    categories?: (CategoriesEntityOrBusinessModelsEntityOrTypeOrTrl)[];
    implementationEffortText?: null;
    investmentEffort: string;
    trl: Trl;
    user: User;
    company: Company;
    businessModels?: (CategoriesEntityOrBusinessModelsEntityOrTypeOrTrl)[];
}
export interface CategoriesEntityOrBusinessModelsEntityOrTypeOrTrl {
    id: number;
    name: string;
}
export interface User {
    id: number;
    email: string;
    firstName: string;
    lastName: string;
    sex: number;
    profilePicture: string;
    position: string;
}
export interface Company {
    name: string;
    logo: string;
    address: Address;
}
export interface Address {
    id?: null;
    country: Country;
    state?: null;
    city: City;
    street: string;
    house: string;
    zipCode: string;
    longitude: string;
    latitude: string;
    fallbackString?: null;
    cityRegion?: null;
}
export interface Country {
    name: string;
    region?: null;
}
export interface City {
    name: string;
    countryId?: null;
    stateId?: null;
}
