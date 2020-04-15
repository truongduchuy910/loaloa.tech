let helper = require("./app/helper/index");
var assert = require("assert");
describe("Tinhs", async function() {
    let login = await helper.login({
        user: "ngochuy2k",
        password: "loaloa.me"
    });
    let {
        data: { authenticateUserWithPassword }
    } = login;
    let token;
    if (authenticateUserWithPassword)
        token = authenticateUserWithPassword.token;

    let searchCung = await helper.searchCung({ token, keyword: "Ph" });
    console.log(searchCung.data);

    let searchCungVi = await helper.searchCungVi({ token, keyword: "T" });
    console.log(searchCungVi.data);

    let searchTinh = await helper.searchTinh({ token, keyword: "THIÊN CƠ" });
    console.log(searchTinh.data);

    let searchPhuTinh = await helper.searchPhuTinh({
        token,
        keyword: "Thiên Khôi"
    });
    console.log(searchPhuTinh.data);

    let ketQua = await helper.ketQua({
        token,
        cung: searchCung.data.allCungs[0],
        cungVi: searchCungVi.data.allCungVis[0],
        tinhs: searchTinh.data.allTinhs,
        phuTinhs: searchPhuTinh.data.allPhuTinhs
    });
    console.log(ketQua.data.createKetQua.ketQua);

    let logout = await helper.logout();
    console.log(logout);
});
