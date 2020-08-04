import React from "react";
import CakeIcon from "@material-ui/icons/Cake";
import NotificationsIcon from "@material-ui/icons/Notifications";
import HighlightIcon from "@material-ui/icons/Highlight";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import VideoCallIcon from "@material-ui/icons/VideoCall";
import SearchIcon from "@material-ui/icons/Search";

import "./right.css";

export default function Right() {
  return (
    <div className="app__right">
      <div className="right__pages">
        <div className="pages__header">
          <h3>Your Pages</h3>
          <MoreHorizIcon />
        </div>
        <div className="page__detials">
          <img
            alt="page"
            src="https://scontent.xx.fbcdn.net/v/t31.0-1/cp0/c0.0.50.50a/p50x50/13116251_1754319114813768_6887414025656978902_o.png?_nc_cat=103&_nc_sid=dbb9e7&_nc_ohc=ycW-WyYbkVAAX_Ha2nW&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=5f9018a3457d3b14b475731ae80f1e77&oe=5F4D8EBD"
          />{" "}
          Page Name
        </div>
        <ul>
          <li>
            <NotificationsIcon /> 5 Notifications
          </li>
          <li>
            <HighlightIcon /> Create Promotion
          </li>
        </ul>
      </div>
      <div className="right__birthdays">
        <h3>Birthdays</h3>
        <div className="birthday__content">
          <CakeIcon style={{ fontSize: "2rem", color: "lightblue" }} />
          <p>
            <strong>Reynolds senior</strong> and <strong>5</strong> others have
            birthdays today
          </p>
        </div>
      </div>
      {/* ur contacts */}
      <div className="right__contacts">
        <div className="contacts__header">
          <h3>Contacts</h3>
          <div className="contacts__icons">
            <VideoCallIcon />
            <SearchIcon />
            <MoreHorizIcon />
          </div>
        </div>
        <ul>
          <li>
            <img
              alt=""
              src="https://scontent-lga3-1.xx.fbcdn.net/v/t1.0-1/cp0/p40x40/54257974_247338726173295_2302494717134241792_n.jpg?_nc_cat=110&_nc_sid=7206a8&_nc_ohc=yQVioAcSaloAX_J1mZx&_nc_ht=scontent-lga3-1.xx&oh=e34aba4b3838058ad4bbaac14e59356b&oe=5F4EA795"
            />{" "}
            Micheal Smith
            <div />
          </li>
          <li>
            <img
              alt=""
              src="https://scontent-lga3-1.xx.fbcdn.net/v/t1.0-1/cp0/p40x40/69233331_1319092991583532_6019435135366070272_o.jpg?_nc_cat=105&_nc_sid=7206a8&_nc_ohc=3b6Cz916G9EAX_4Ev4k&_nc_ht=scontent-lga3-1.xx&oh=5f4639acc6082a761358b2b9812a5fe2&oe=5F4EAE62"
            />{" "}
            Khan Racheal Raven
            <div className="lastSeen">2h</div>
          </li>
        </ul>
      </div>
    </div>
  );
}
