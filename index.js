const main = document.querySelector('#main');
const totalUnread = document.querySelector('.total-unread');
const unreadArr = [];

const notifications = [
  {
    unread: true,
    id: 'notif-1',
    userImage: './assets/images/avatar-mark-webber.webp',
    friendName: 'Mark Webber',
    activityDone: 'reacted to your recent post',
    eventActivity: 'My first tournament today!',
    time: '1m ago',
  },
  {
    unread: true,
    id: 'notif-2',
    userImage: './assets/images/avatar-angela-gray.webp',
    friendName: 'Angela Gray',
    activityDone: 'followed you',
    eventActivity: ' ',
    time: '5m ago',
  },
  {
    unread: true,
    id: 'notif-3',
    userImage: './assets/images/avatar-jacob-thompson.webp',
    friendName: 'Jacob Thompson',
    activityDone: 'has joined your group',
    eventActivity: 'Chess Club',
    time: '1 day ago',
  },
  {
    unread: false,
    id: 'notif-4',
    userImage: './assets/images/avatar-rizky-hasanuddin.webp',
    friendName: 'Rizky Hasanuddin',
    activityDone: 'sent you a private message',
    eventActivity: `<p class="sender-msg-container">Hello, thanks for setting up the Chess Club. I've been a member for a few weeks now and 
        I'm already having lots of fun and improving my game.</p>`,
    time: '5 days ago',
  },
  {
    unread: false,
    id: 'notif-5',
    userImage: './assets/images/avatar-kimberly-smith.webp',
    friendName: 'Kimberly Smith',
    activityDone: 'commented on your picture',
    eventActivity: '<img class="kimberly-chess-img" src="./assets/images/image-chess.webp" alt="Kimberly Playing Chess"/>',
    time: '1 week ago',
  },
  {
    unread: false,
    id: 'notif-6',
    userImage: './assets/images/avatar-nathan-peterson.webp',
    friendName: 'Nathan Peterson',
    activityDone: 'reacted to your recent post',
    eventActivity: '5 end-game strategies to increase your win rate',
    time: '2 weeks ago',
  },
  {
    unread: false,
    id: 'notif-7',
    userImage: './assets/images/avatar-anna-kim.webp',
    friendName: 'Anna Kim',
    activityDone: 'left the group',
    eventActivity: 'Chess Club',
    time: '2 weeks ago',
  },
];

// create ul for notifications
const notificationsDisplay = document.createElement('ul');
notificationsDisplay.className = 'notifications-ul';
main.appendChild(notificationsDisplay);

// Create function to render notifications
const renderNotifications = (el) => {
  const displayLi = document.createElement('li');
  displayLi.className = 'update-li';

  const userDp = document.createElement('section');
  userDp.className = 'user-dp';
  userDp.innerHTML = `<img class="user-image" src=${el.userImage} alt="User Dp">`;
  displayLi.appendChild(userDp);

  const notifs = document.createElement('section');
  notifs.className = 'notifs';
  notifs.innerHTML = `
  <p class="notifs-par">
     <span>
        <b>${el.friendName} </b> 
        ${el.activityDone}
        <b class="sender-msg">${el.eventActivity}</b>
      </span>
  </p>
  `;
  displayLi.appendChild(notifs);

  const redDot = document.createElement('div');
  redDot.className = 'red-dot';
  notifs.appendChild(redDot);

  const timeDiv = document.createElement('h4');
  timeDiv.innerText = `${el.time}`;
  notifs.appendChild(timeDiv);

  if (el.unread) {
    // display red dot
    redDot.style.display = 'flex';

    // Check for the unread messages and push to an unreadArr
    unreadArr.push(Object.values(el));
  } else {
    redDot.style.display = 'none';
    displayLi.classList.replace('update-li', 'update-li-read');
  }

  notificationsDisplay.appendChild(displayLi);
};

// run render notifications on all notifications
notifications.forEach((notifications) => renderNotifications(notifications));

// Attach the length of unreadArr to the header in html
totalUnread.innerText = unreadArr.length;
