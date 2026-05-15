const user = {
    id: 123,
    name: {
        firstName: "Md",
        middleName: "Kamruzzaman",
        lastName: "Zaman",
    },
    gender: "male",
    favouriteColor: "balck",
};

const {favouriteColor : myFavouriteColor, name : {middleName : myMiddleName}} = user;
console.log(myFavouriteColor, myMiddleName);