import React from "react";
import MenuItem from "../menu-item/menu-item.component";

import "./directory.styles.scss";

class Directory extends React.Component {
  constructor(props) {
    super();

    this.state = {
      sections: [
        {
          title: "art",
          imageUrl:
            "https://cdn.pixabay.com/photo/2017/07/03/20/17/abstract-2468874_960_720.jpg",
          id: 1,
          linkUrl: "shop/hats",
        },
        {
          title: "jewelry",
          imageUrl:
            "https://cdn.pixabay.com/photo/2015/03/09/13/56/colorful-665704__480.jpg",
          id: 2,
          linkUrl: "shop/jackets",
        },
        {
          title: "sports memorabilia",
          imageUrl:
            "https://cdn.pixabay.com/photo/2015/05/14/09/43/backyard-baseball-766521__480.jpg",
          id: 3,
          linkUrl: "shop/sneakers",
        },
        {
          title: "comics",
          imageUrl:
            "https://cdn.pixabay.com/photo/2017/06/11/23/48/thewalkingdead-2393903__480.jpg",
          size: "large",
          id: 4,
          linkUrl: "shop/womens",
        },
        {
          title: "stamps",
          imageUrl:
            "https://cdn.pixabay.com/photo/2019/01/24/12/02/wallpaper-3952376__480.jpg",
          size: "large",
          id: 5,
          linkUrl: "shop/mens",
        },
      ],
    };
  }

  render() {
    return (
      <div className="directory-menu">
        {this.state.sections.map(({ title, imageUrl, id, size }) => (
          <MenuItem key={id} title={title} imageUrl={imageUrl} size={size} />
        ))}
      </div>
    );
  }
}

export default Directory;
