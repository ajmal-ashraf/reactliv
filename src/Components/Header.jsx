import React, { useContext } from "react";
import Wrapper from "./Wrapper";
import { Link } from "react-router-dom";
import SearchBox from "./SearchBox";
import { AppContext } from "../Context/AppContext";
function Header() {
  const { state } = useContext(AppContext);
  return (
    <header>
      <Wrapper>
        <div className="appHeader">
          <div className="headerLeft">
            <Link to="/">
              <h1>ReactLIV</h1>
            </Link>
            <Link to="/favourites">
              <div className="favCount">
                <span className="count">{state?.favourites?.length}</span>
                Favourites
              </div>
            </Link>
          </div>

          <SearchBox />
        </div>
      </Wrapper>
    </header>
  );
}

export default Header;
