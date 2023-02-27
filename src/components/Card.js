import React from "react";
import FavoriteOutlinedIcon from "@mui/icons-material/FavoriteOutlined";
import ModalImage from "react-modal-image";
function Card(props) {
  const call=()=>{

  }
  return (
    <>
      <div className="card" style={{ width: "18rem" }} key={props.index}>
     {/* <img
          className="card-img-top"
          src={}
          alt="Card image cap"
        />   */}
        <ModalImage
        small={props.imagelink}
  large={props.imagelink}
  medium={props.imagelink}
  // alt="Hello World!"
  showRotate={true}

/>;
        <div className="card-body">
          <p className="card-text">
            <div className="a15">
              <div className="a17">
                <div>
                  <img
                    src={props.uname}
                    alt="unable to load image"
                    className="a16"
                  />
                </div>
                <div className="a18">
                  <b>
                    <>{props.user}</>
                  </b>
                  <p>@{props.uid}</p>
                </div>
              </div>

              <div>
                <FavoriteOutlinedIcon />
                {props.like < 1000 ? (
                  <>{props.like}</>
                ) : (
                  <>{props.like / 1000}k</>
                )}
              </div>
            </div>


          </p>
        </div>
      </div>








      {/* <div
        className="modal fade"
        id="exampleModal"
        tabindex="-1"
        // role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              
              <img src={props.imagelink}  />

              
            </div>
           
          </div>
        </div>
      </div> */}
      
    </>
  );
}

export default Card;
