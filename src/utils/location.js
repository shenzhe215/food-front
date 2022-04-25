export function locationToString(locationInfo) {
  const { area, location, username, mobile, isDefault } = locationInfo;
  var defaultLoc = "";
  if (isDefault == 1) {
    defaultLoc = "（默认地址）";
  }

  return (
    area + " " + location + " (" + username + " 收)" + " " + mobile + defaultLoc
  );
}
