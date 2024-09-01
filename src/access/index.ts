import router from "@/router";
import store from "@/store";
import ACCESS_ENUM from "@/access/accessEnum";
import checkAccess from "@/access/checkAccess";

router.beforeEach(async (to, from, next) => {
  console.log("登录状态", store.state.user.loginUser);
  const loginUser = store.state.user.loginUser;
  //如果之前没登陆过，自动登录
  if (!loginUser || !loginUser.userRole) {
    //加await等用户登录之后，再执行后续的代码
    await store.dispatch("user/getLoginUser");
  }
  const needAccess = (to.meta?.access as string) ?? ACCESS_ENUM.NOT_LOGIN;
  //如果跳转的页面必须要登录
  if (needAccess !== ACCESS_ENUM.NOT_LOGIN) {
    if (!loginUser) {
      next(`/user/login?redirect=${to.fullPath}`);
      return;
    }
    //如果已经登陆，但权限不足则跳转无权限页面
    if (!checkAccess(loginUser, needAccess)) {
      next("/noAuth");
      return;
    }
  }
  next();
});
