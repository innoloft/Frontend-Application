export interface ProductProps{
        "id": number
        "name": string
        "description": string
        "picture": string
        "type": IDName
        "categories": IDName[]
        "implementationEffortText": null | any,
        "investmentEffort": string,
        "trl": IDName
        "user": {
            "id": number,
            "email": string,
            "firstName": string,
            "lastName": string,
            "sex": number,
            "profilePicture": string,
            "position": string
        },
        "company": {
            "name": string,
            "logo": string,
            "address": {
                "id": null | any,
                "country": {
                    "name": string,
                    "region": null | any
                },
                "state": null | any,
                "city": {
                    "name": string,
                    "countryId": null | any,
                    "stateId": null | any
                },
                "street": string,
                "house": string,
                "zipCode": string,
                "longitude": string,
                "latitude": string,
                "fallbackString": null | any,
                "cityRegion": null | any
            }
        },
        "businessModels": IDName[]
}

export interface IDName{
    "id": string | number,
    "name": string
}

export interface TRLProps{
        "id": string | number
        "name": string
        "description"?: null | string
}
