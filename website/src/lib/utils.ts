export function setCookie(cname: string, cvalue: string, exdays: number) {
  if (typeof document === "undefined") {
    return;
  }
  const d = new Date();
  d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);
  const expires = "expires=" + d.toUTCString();
  document.cookie =
    cname + "=" + cvalue + ";" + expires + ";path=/" + ";SameSite=Strict";
}

export function getCookie(cname: string) {
  if (typeof document === "undefined") {
    return;
  }
  const name = cname + "=";
  const ca = document.cookie.split(";");
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == " ") {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

export function replaceAll(
  str: string,
  find: string | RegExp,
  replace: string
) {
  return str.replace(new RegExp(find, "g"), replace);
}

export function addStyle(styleString: string) {
  const style = document.createElement("style");
  style.textContent = styleString;
  document.head.append(style);
  return () => {
    document.head.removeChild(style);
  };
}

export function addStyleSheet(cssURL: string) {
  const link = document.createElement("link");
  link.rel = "stylesheet";
  link.href = cssURL;
  document.head.append(link);
  return () => {
    document.head.removeChild(link);
  };
}

export function formatNumber(x: number, separator: string) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, separator);
}

export function convertNumberToPersian(x: number | string) {
  const nums: Record<string, string> = {
    0: "۰",
    1: "۱",
    2: "۲",
    3: "۳",
    4: "۴",
    5: "۵",
    6: "۶",
    7: "۷",
    8: "۸",
    9: "۹",
  };
  return x.toString().replace(/[0-9]/gi, function (m) {
    return nums[m];
  });
}
