const unbias = () => {
  // removing pfps
  var pfps = document.querySelectorAll('[data-testid="Tweet-User-Avatar"]');
  if (pfps.length > 0) {
    for (let i = 0; i < pfps.length; i++) {
      pfps[i].remove();
    }
  }

  // removing usernames
  var usernames = document.querySelectorAll('[data-testid="User-Names"]');
  if (usernames.length > 0) {
    for (let i = 0; i < usernames.length; i++) {
      usernames[i].remove();
    }
  }

  // removing liked by, reply lines, show thread
  var tweets = document.querySelectorAll('[data-testid="tweet"]');
  for (let i = 0; i < tweets.length; i++) {
    try {
      // liked by
      if (tweets[i].children[0].children[0].children[0].children.length == 2) {
        tweets[i].children[0].children[0].children[0].children[0].remove();
      }
      // weird lines
      if (
        tweets[i].children[0].children[0].children[0].children[0].children.length == 2
      ) {
        tweets[i].children[0].children[0].children[0].children[0].children[0].remove();
      }
      // show thread
      if (tweets[i].children[0].children.length == 2) {
        tweets[i].children[0].children[1].remove();
      }
      // stats
      if (
        tweets[i].children[0].children[0].children[0].children[0].children[0].children[1].children.length == 3
      ) {
        tweets[i].children[0].children[0].children[0].children[0].children[0].children[1].children[2].remove();
      } else {
        tweets[i].children[0].children[0].children[0].children[0].children[0].children[1].children[1].remove();
      }
    } catch (err) {
      console.log(err.msg);
    }
  }
};

const filterpage = () => {
  if (window.location.href == "https://twitter.com/home") {   
    try {
      unbias();
    } catch (error) {
      console.log(error)
    }
  }
};

// listen to scroll and load event
window.addEventListener("scroll", filterpage);