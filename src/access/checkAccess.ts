import ACCESS_ENUM from "@/access/accessEnum";

/**
 * 检查权限（判断当前登录用户有无权限）
 * @param loginUser 当前登录用户
 * @param needAccess 需要有的权限
 * @return boolean 是否有权限
 */
const checkAccess = (loginUser: any, needAccess = ACCESS_ENUM.NOT_LOGIN) => {
  //获取当前登录用户具有的权限（如果没有loginUser,则表示未登录）
  const userLoginAccess = loginUser.userRole ?? ACCESS_ENUM.NOT_LOGIN;
  if (needAccess === ACCESS_ENUM.NOT_LOGIN) {
    return true;
  }
  //如果需要用户登录才能访问
  if (needAccess === ACCESS_ENUM.USER) {
    //如果未登录，则无权限
    if (userLoginAccess === ACCESS_ENUM.NOT_LOGIN) {
      return false;
    }
  }
  //如果需要管理员权限
  if (needAccess === ACCESS_ENUM.ADMIN) {
    //如果不是管理员，则无权限
    if (userLoginAccess !== ACCESS_ENUM.ADMIN) {
      return false;
    }
  }
  return true;
};
export default checkAccess;
