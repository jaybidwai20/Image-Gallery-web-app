import React from "react";
import Card from "./Card";
import { useState, useEffect } from "react";
import Masonry from "react-masonry-css";

function Header() {
  const [image, setimage] = useState([]);
  const [require, setrequire] = useState("");
  const [all, setall] = useState([]);

  const change = (e) => {
    setrequire(e.target.value);
  };

  useEffect(() => {
    fetch(
      "https://api.unsplash.com/photos/?client_id=DetTenbQknZBa1ZuqnLK3vmbSDV7jkryemAjwmFG2AY"
    )
      .then((res) => res.json())
      .then((res) => setall(res));
  }, []);

  useEffect(() => {
    fetch(
      `https://api.unsplash.com/search/photos?page=1&query=${require}&client_id=DetTenbQknZBa1ZuqnLK3vmbSDV7jkryemAjwmFG2AY`
    )
      .then((res) => res.json())
      .then((res) => {
        setimage(res.results);
      });
  }, [require]);
  return (
    <>
      <div className="a8 a10">
        <div className="a9">
          <div>
            <p>Download High Quality Images By Creators</p>
            <h6 className="a11">
              Over 2.4 million + stock images by our talented community
            </h6>

            <div className="a13">
              <input
                type="text"
                className="a13"
                placeholder="Search High Resolution Images ,categories,wallpapers"
                onChange={change}
              />
            </div>
          </div>
        </div>
      </div>

      {require ? (
        <Masonry
          breakpointCols={5}
          className="my-masonry-grid"
          columnClassName="my-masonry-grid_column"
        >
          {image.map((item, index) => {
            return (
              <>
                <Card
                  index={index}
                  imagelink={item.urls.regular}
                  like={item.likes}
                  uname={item.user.profile_image.medium}
                  user={item.user.name}
                  uid={item.user.username}
                />
              </>
            );
          })}
        </Masonry>
      ) : (
        <Masonry
          breakpointCols={5}
          className="my-masonry-grid"
          columnClassName="my-masonry-grid_column"
        >
          {all.map((item, index) => {
            return (
              <>
                <Card
                  index={index}
                  imagelink={item.urls.regular}
                  like={item.likes}
                  uname={item.user.profile_image.medium}
                  user={item.user.name}
                  uid={item.user.username}
                />
              </>
            );
          })}
        </Masonry>
      )}
    </>
  );
}

export default Header;
