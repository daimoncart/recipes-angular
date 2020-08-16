export class Recipe {
    id: number;
    instructions: string;
    link: string;
    name: string;
    pictureLink: string;
    recipeIngredients: [{
            id: number,
            ingredient: {
                id: number,
                name: string
            },
            measurementUnit: {
                id: number,
                name: string
            },
            quantity: number,
            recipeId: number
    }];
    user: {
        accountNonExpired: boolean,
        accountNonLocked: boolean,
        credentialsNonExpired: boolean,
        email: string,
        enabled: boolean,
        id: number,
        role: {
            id: number,
            role: string
        },
        username: string
    };
}
