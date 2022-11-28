const main = document.querySelector('#main');

const notifications = [
   {
        status: true,
        id: 'notif-1',
        userImage: './images/1.jpg',
        friendName: 'Mark Webber',
        activityDone: 'reacted to your recent post',
        eventActivity: 'My first tournament today!',
        time: '1m ago'
    },
    {
        status: true,
        id: 'notif-2',
        userImage: './assets/images/avatar-angela-gray.webp',
        friendName: 'Angela Gray',
        activityDone: 'followed you',
        eventActivity: ' ',
        time: '5m ago'
    }
]

// create ul for notifications
let notificationsDisplay = document.createElement('ul');
notificationsDisplay.className = 'notifications-ul';
main.appendChild(notificationsDisplay);


const renderNotifications = () => {
    let displayLi = document.createElement('li');
    displayLi.className = 'update-li';
    displayLi.innerHTML =
    notifications.map((notifications) => (
    `
    <section class="user-dp">
        <img class="user-image" src=${notifications.userImage} alt="User Dp">
    </section>
    <section class="notifs">
        <p class="notifs-par">
           <span>
              <b>${notifications.friendName} </b> 
              ${notifications.activityDone}
              <b>${notifications.eventActivity}</b>
            </span>
        </p>
        <h4>${notifications.time}</h4>
    </section>
    `
   ))
    notificationsDisplay.appendChild(displayLi);
};

notifications.forEach(renderNotifications)

// Tried the loop another way

// for(let i=0; i<notifications.length; i++){
//     renderNotifications([i])
// }