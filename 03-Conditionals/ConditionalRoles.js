// admin: full access
// sub-admin: create/delete courses
// test-prep: access to create/delete tests
// user: consume content
var user = "test-prep"
switch (user) {
    case "admin":
        console.log("I am an admin");
        break;
    case "sub-admin":
        console.log("I am sub-admin");
        break;
    case "test-prep":
        console.log("I am test-prep role")
        break;
    default:
        console.log("I am a user with no roles");
        break;

}