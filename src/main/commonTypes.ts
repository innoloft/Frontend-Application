export type ForAxiosDefs =
    | "get"
    | "GET"
    | "delete"
    | "DELETE"
    | "head"
    | "HEAD"
    | "options"
    | "OPTIONS"
    | "post"
    | "POST"
    | "put"
    | "PUT"
    | "patch"
    | "PATCH"
    | "link"
    | "LINK"
    | "unlink"
    | "UNLINK"
    | undefined;

export interface ConfigDef {
    id: number | string;
    logo: string;
    mainColor: string;
    hasUserSection: boolean;
}

export interface ProductDef {
    id: string | number;
    name: string;
    description: string;
    picture: string;
    type: {
        id: number;
        name: string;
    };
    categories: Array<{ id: number; name: string }>;
    implementationEffortText: string | null;
    investmentEffort: string;
    trl: { id: number; name: string };
    user: {
        id: number;
        email: string;
        firstName: string;
        lastName: string;
        sex: number;
        profilePicture: string;
        position: string;
    };
    company: {
        name: string;
        logo: string;
        address: {
            id: number | null;
            country: { name: string; region: string | null };
            state: { name: string | null };
            city: { name: string | null; stateId: number | null };
            street: string;
            house: string;
            zipCode: string;
            longitude: string;
            latitude: string;
        };
    };
    businessModels: Array<{ id: number; name: string }>;
}

export interface TrlDef {
    trl: Array<{
        id: string | number;
        name: string;
        description: string | null;
    }>;
}
