const UserRoles = {
    Admin: "ADMIN",
    Editor: "Editor",
    Viewer: "Viewer",
} as const;


/*
Admin: ADMIN
Editor: Editor
Viewer: Viewer
*/

type User = {
    id: number,
    name: {
        firstName: string;
        lastName: string;
    }
    gender: 'male' | 'female';
    contactNo: string;
    address: {
        division: string;
        city: string;
    }
}

const canEdit = (role: typeof UserRoles[keyof typeof UserRoles]) => {
    if(role == UserRoles.Admin || role == UserRoles.Editor) {
        return true;
    }
    else return false;
}

