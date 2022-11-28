const main = document.querySelector('#main');

const notifications = [
  {
    status: true,
    id: 'notif-1',
    userImage: './assets/images/avatar-mark-webber.webp',
    friendName: 'Mark Webber',
    activityDone: 'reacted to your recent post',
    eventActivity: 'My first tournament today!',
    time: '1m ago',
  },
  {
    status: true,
    id: 'notif-2',
    userImage: './assets/images/avatar-angela-gray.webp',
    friendName: 'Angela Gray',
    activityDone: 'followed you',
    eventActivity: ' ',
    time: '5m ago',
  },
  {
    status: true,
    id: 'notif-3',
    userImage: './assets/images/avatar-jacob-thompson.webp',
    friendName: 'Jacob Thompson',
    activityDone: 'has joined your group',
    eventActivity: 'Chess Club',
    time: '1 day ago',
  },
  {
    status: false,
    id: 'notif-4',
    userImage: './assets/images/avatar-rizky-hasanuddin.webp',
    friendName: 'Rizky Hasanuddin',
    activityDone: 'sent you a private message',
    eventActivity: `<p class="sender-msg-container">Hello, thanks for setting up the Chess Club. I've been a member for a few weeks now and 
        I'm already having lots of fun and improving my game.</p>`,
    time: '5 days ago',
  },
  {
    status: false,
    id: 'notif-5',
    userImage: './assets/images/avatar-kimberly-smith.webp',
    friendName: 'Kimberly Smith',
    activityDone: 'commented on your picture',
    eventActivity: ' ',
    time: '1 week ago',
  },
  {
    status: false,
    id: 'notif-6',
    userImage: './assets/images/avatar-nathan-peterson.webp',
    friendName: 'Nathan Peterson',
    activityDone: 'reacted to your recent post',
    eventActivity: '5 end-game strategies to increase your win rate',
    time: '2 weeks ago',
  },
  {
    status: false,
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

const renderNotifications = (el) => {
  const displayLi = document.createElement('li');
  displayLi.className = 'update-li';
  displayLi.innerHTML = `
    <section class="user-dp">
        <img class="user-image" src=${el.userImage} alt="User Dp">
    </section>
    <section class="notifs">
        <p class="notifs-par">
           <span>
              <b>${el.friendName} </b> 
              ${el.activityDone}
              <span class="red-dot-span">
              <b class="sender-msg">${el.eventActivity}</b>
              <div class="red-dot"></div>
              </span>
            </span>
        </p>
        <h4>${el.time}</h4>
    </section>
    `;
  notificationsDisplay.appendChild(displayLi);
};

notifications.forEach((notifications) => renderNotifications(notifications));
