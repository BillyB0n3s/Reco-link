function getOS() 
{
  var userAgent = window.navigator.userAgent, platform = window.navigator?.userAgentData?.platform || window.navigator.platform,
      macosPlatforms = ['Macintosh', 'MacIntel', 'MacPPC', 'Mac68K'], windowsPlatforms = ['Win32', 'Win64', 'Windows', 'WinCE'],
      iosPlatforms = ['iPhone', 'iPad', 'iPod'];

  if (macosPlatforms.indexOf(platform) !== -1) { return 'Mac OS'; }
  else if (iosPlatforms.indexOf(platform) !== -1) { return 'iOS'; }
  else if (windowsPlatforms.indexOf(platform) !== -1) { return 'Windows'; }
  else if (/Android/.test(userAgent)) { return 'Android'; }
  else if (/Linux/.test(platform)) { return 'Linux'; }
  return null;
}

//alert(getOS());

function copyToClipboard(text) {
  navigator.clipboard.writeText(text)
.then(() => {
  console.log(`Copied text to clipboard: ${text}`);
  alert(`Copied text to clipboard: ${text}`);
})
.catch((error) => {
  console.error(`Could not copy text: ${error}`);
});
}

function redirect()
{
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);

  const nbParams = urlParams.size;
  const referrer = urlParams.get("referrer");
  //const param2 = urlParams.get("param2");

  //alert("nbParams: " + nbParams +  ", param1: " + param1 + ", param2: " + param2);

//  if(param1 != null){ alert(param1) };
//  if(param2 != null){ alert(param2) };

  const os = getOS();
  if (os == "Android"){ 
   location.replace('https://play.google.com/store/apps/details?id=com.gboutin.reco&referrer=' + referrer);
  }else if (os == "iOS") {
   copyToClipboard(referrer);
   //location.replace('https://www.apple.com/store');  // https://apps.apple.com/us/app/app_name/app_id ???
  }
  /*else {
    const message = document.querySelector('.message');
    message.innerText = 'Your OS is not supported';
  }*/
}

redirect();


